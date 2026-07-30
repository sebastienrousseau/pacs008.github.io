/**
 * Measure horizontal overflow at real mobile viewports.
 *
 * This exists because the same class of defect shipped twice and nothing caught
 * it either time:
 *
 *   1. `.content-shell` used the `padding` shorthand on an element that also
 *      carries `.wrap`, resetting the horizontal gutter to zero. Invisible above
 *      1180px, where `.wrap`'s centring margin looks like padding.
 *   2. `_layouts/try.html` ships a five-item navigation with no collapse — no
 *      burger, no toggle, two media queries against page.html's fourteen — so on
 *      a phone the nav forces the document wider than the viewport and the whole
 *      page scrolls sideways.
 *
 * Neither is visible to the existing checks. The CSS assertions in
 * tests/responsive.test.ts reason about the cascade, which caught (1) but cannot
 * see (2) at all. Lighthouse runs mobile emulation but scores neither. And
 * Chrome's window-resize API did not change the viewport in this environment,
 * which is why two rounds of "verified" were verified against the wrong width.
 *
 * So: drive Chrome over CDP directly and set real device metrics. Node 22+ ships
 * a global WebSocket, so this needs no puppeteer and no extra dependency.
 *
 * The metric matters. Comparing scrollWidth against innerWidth is the obvious
 * check and it is wrong: mobile Chrome does not show a horizontal scrollbar for
 * content it cannot fit, it widens the layout viewport and zooms out. innerWidth
 * then reports the inflated width, scrollWidth matches it, and the difference is
 * zero on a page that is visibly broken. The first version of this file scored
 * the workbench 0px overflow while it was rendering at 749px on a 375px phone.
 *
 * So the assertion is: the layout viewport must equal the device width. Element
 * overflow is measured against the device width too, not against innerWidth.
 */
import { createServer } from "http";
import { readFile, stat, writeFile } from "fs/promises";
import { join, extname, resolve } from "path";
import * as chromeLauncher from "chrome-launcher";

const publicDir = resolve("public");
const SAVE_SHOTS = process.argv.includes("--screenshots");

/** Viewports that matter, in CSS pixels. */
const DEVICES = [
  { name: "iPhone SE", width: 375, height: 667, dpr: 2 },
  { name: "iPhone 15 Pro", width: 393, height: 852, dpr: 3 },
  { name: "iPhone 15 Pro Max", width: 430, height: 932, dpr: 3 },
  { name: "Pixel 7", width: 412, height: 915, dpr: 2.6 },
];

/** One page per layout, plus an RTL locale and a translated slug. */
const PAGES = [
  { path: "/", layout: "index" },
  { path: "/about/", layout: "page" },
  { path: "/live/", layout: "try" },
  // Several locales, because two of the faults this catches were
  // locale-dependent: a <select> sizes to its widest <option>, and min-content
  // floors move with word length. English fitted while French did not.
  { path: "/fr/essayer/", layout: "try (fr)" },
  { path: "/de/ausprobieren/", layout: "try (de, long compounds)" },
  { path: "/ja/live/", layout: "try (ja)" },
  { path: "/ar/", layout: "index (rtl)" },
  { path: "/trust/", layout: "page (dense tables)" },
];

/** Below this is sub-pixel rounding, not a layout fault. */
const TOLERANCE_PX = 1;

const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".woff2": "font/woff2", ".xml": "application/xml", ".xsd": "application/xml",
  ".wasm": "application/wasm", ".txt": "text/plain", ".jpg": "image/jpeg",
  ".png": "image/png", ".csv": "text/csv", ".ico": "image/x-icon",
};

const server = createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = join(publicDir, url);
    const info = await stat(file).catch(() => null);
    if (!info || info.isDirectory()) file = join(file, "index.html");
    const body = await readFile(file);
    res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

const chrome = await chromeLauncher.launch({
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
});

/** Minimal CDP client over the global WebSocket. */
async function connect(port) {
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const page = targets.find((t) => t.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });

  let id = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const n = ++id;
      pending.set(n, { resolve, reject });
      ws.send(JSON.stringify({ id: n, method, params }));
    });
  return { send, close: () => ws.close() };
}

const cdp = await connect(chrome.port);
await cdp.send("Page.enable");
await cdp.send("Runtime.enable");

const failures = [];
const rows = [];

for (const device of DEVICES) {
  for (const page of PAGES) {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: device.width,
      height: device.height,
      deviceScaleFactor: device.dpr,
      mobile: true,
    });
    await cdp.send("Page.navigate", { url: `${origin}${page.path}` });
    // Settle: fonts and the stylesheet affect layout width.
    await new Promise((r) => setTimeout(r, 900));

    const { result } = await cdp.send("Runtime.evaluate", {
      expression: `(() => {
        const DEVICE = ${device.width};
        const de = document.documentElement;
        // Name the widest offenders against the DEVICE width, because innerWidth
        // is itself inflated on a page that triggered shrink-to-fit.
        const culprits = [...document.querySelectorAll('body *')]
          .map(el => ({ el, r: el.getBoundingClientRect() }))
          .filter(({ r }) => r.width > 0 && r.right > DEVICE + 1)
          .sort((a, b) => b.r.right - a.r.right)
          .slice(0, 4)
          .map(({ el, r }) => {
            const id = el.id ? '#' + el.id : '';
            const cls = el.className && typeof el.className === 'string'
              ? '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.') : '';
            return el.tagName.toLowerCase() + id + cls + ' w=' + Math.round(r.width) + ' right=' + Math.round(r.right);
          });
        return JSON.stringify({
          innerWidth: window.innerWidth,
          scrollWidth: de.scrollWidth,
          culprits,
        });
      })()`,
      returnByValue: true,
    });

    const m = JSON.parse(result.value);
    // Two distinct faults, reported distinctly.
    const inflation = m.innerWidth - device.width;   // shrink-to-fit / zoom-out
    const overflow = m.scrollWidth - m.innerWidth;   // sideways scroll
    rows.push({ device: device.name, ...page, ...m, inflation, overflow });

    if (inflation > TOLERANCE_PX) {
      failures.push(
        `${page.path} @ ${device.name}: layout viewport inflated to ${m.innerWidth}px on a ${device.width}px device ` +
          `— mobile Chrome zoomed out to fit unshrinkable content` +
          (m.culprits.length ? `. Widest: ${m.culprits.join("; ")}` : "")
      );
    } else if (overflow > TOLERANCE_PX) {
      failures.push(
        `${page.path} @ ${device.name}: document is ${overflow}px wider than the ${device.width}px viewport` +
          (m.culprits.length ? ` — widest: ${m.culprits.join("; ")}` : "")
      );
    }

    if (SAVE_SHOTS && device.name === "iPhone 15 Pro Max") {
      const shot = await cdp.send("Page.captureScreenshot", { format: "png" });
      const name = `mobile${page.path.replace(/\//g, "_") || "_home"}.png`;
      await writeFile(join("audit", name), Buffer.from(shot.data, "base64"));
    }
  }
}

cdp.close();
await chrome.kill();
server.close();

const pad = (s, n) => String(s).padEnd(n);
console.log(`\nMobile overflow — ${DEVICES.length} viewports x ${PAGES.length} pages\n`);
console.log(`  ${pad("page", 18)}${pad("viewport", 20)}${pad("device", 8)}${pad("inner", 8)}${pad("scroll", 8)}${pad("inflated", 10)}overflow`);
for (const r of rows) {
  const bad = r.inflation > TOLERANCE_PX || r.overflow > TOLERANCE_PX;
  console.log(
    `  ${pad(r.path, 18)}${pad(r.device, 20)}${pad(DEVICES.find(d => d.name === r.device).width, 8)}` +
      `${pad(r.innerWidth, 8)}${pad(r.scrollWidth, 8)}${pad(r.inflation, 10)}${r.overflow}${bad ? "  <-- BROKEN" : ""}`
  );
}

if (failures.length > 0) {
  console.error(`\nFAILED: ${failures.length} page/viewport combination(s) scroll sideways\n`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error(
    "\nEither fault shifts the whole page: text clipped at the leading edge and a\n" +
      "reader panning sideways to finish a line. Inflation is the worse of the two,\n" +
      "because the page also renders at a reduced zoom."
  );
  process.exit(1);
}

console.log("\nNo horizontal overflow at any tested viewport.");
