/**
 * Lighthouse audit over a representative sample of the built site.
 *
 * This closes a gap the existing axe suite states but cannot cover. That suite
 * runs axe-core inside happy-dom, which resolves no stylesheets, so the
 * colour-contrast rule is disabled rather than run against nothing. Lighthouse
 * drives a real Chrome, so contrast, focus appearance, tap-target size and
 * viewport behaviour are all actually evaluated.
 *
 * Scope is a sample, not all 1,119 pages. A full sweep would take hours and
 * would tell us nothing extra: every page is produced by one of three layouts,
 * so a defect on one is a defect on all of them. The sample covers each layout,
 * an RTL locale, a CJK locale, and the workbench, which is the only page with
 * substantial interactive markup. What is skipped is logged, because a coverage
 * claim that hides its own bounds is worse than no claim.
 *
 * Serves over HTTP rather than file:// — service workers, fetch and the CSP all
 * behave differently on a file URL, so a file:// pass would not be evidence
 * about the deployed site.
 */
import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { join, extname, resolve } from "path";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const publicDir = resolve("public");

/**
 * Minimum scores, 0-100. Accessibility, best practices and SEO are held at 100
 * because they are pass/fail checklists — a miss is a defect with a name.
 *
 * Performance is a weighted composite of timings measured on a throttled
 * simulation, so it moves a few points between runs on the same bytes. The floor
 * is set to catch a regression, not to chase a number.
 */
const THRESHOLDS = {
  accessibility: 100,
  "best-practices": 100,
  seo: 100,
  performance: 90,
};

/** One page per layout, plus the scripts and writing systems most likely to break. */
const SAMPLE = [
  { path: "/", why: "home — templates/index.html" },
  { path: "/about/", why: "content page — _layouts/page.html" },
  { path: "/live/", why: "workbench — _layouts/try.html, all interactive markup" },
  { path: "/fr/essayer/", why: "translated workbench at a translated slug" },
  { path: "/ar/", why: "RTL locale" },
  { path: "/ja/about/", why: "CJK locale" },
  { path: "/trust/", why: "longest page, densest tables" },
];

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
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("not found");
  }
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

const chrome = await chromeLauncher.launch({
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
});

const failures = [];
const rows = [];

try {
  for (const { path, why } of SAMPLE) {
    const result = await lighthouse(
      `${origin}${path}`,
      { port: chrome.port, output: "json", logLevel: "error" },
      { extends: "lighthouse:default", settings: { onlyCategories: Object.keys(THRESHOLDS) } }
    );

    const scores = {};
    for (const [id, min] of Object.entries(THRESHOLDS)) {
      const category = result.lhr.categories[id];
      // A null score means the category could not be evaluated. Reporting that
      // as a pass is the failure mode this whole file exists to avoid.
      if (category?.score === null || category?.score === undefined) {
        failures.push(`${path}: ${id} could not be evaluated`);
        scores[id] = null;
        continue;
      }
      const score = Math.round(category.score * 100);
      scores[id] = score;
      if (score < min) {
        const failed = category.auditRefs
          .map((ref) => result.lhr.audits[ref.id])
          .filter((a) => a && a.score !== null && a.score < 1 && a.scoreDisplayMode !== "informative")
          .map((a) => a.id);
        failures.push(
          `${path}: ${id} ${score} < ${min}` +
            (failed.length ? ` — ${failed.slice(0, 6).join(", ")}` : "")
        );
      }
    }
    rows.push({ path, why, scores });
  }
} finally {
  await chrome.kill();
  server.close();
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`\nLighthouse — ${SAMPLE.length} pages sampled from 1,119 built\n`);
console.log(`  ${pad("page", 22)}${["a11y", "best", "seo", "perf"].map((h) => pad(h, 7)).join("")}`);
for (const { path, scores } of rows) {
  console.log(
    `  ${pad(path, 22)}` +
      Object.keys(THRESHOLDS).map((k) => pad(scores[k] ?? "n/a", 7)).join("")
  );
}
console.log(
  `\n  Thresholds: ` +
    Object.entries(THRESHOLDS).map(([k, v]) => `${k} ${v}`).join(", ")
);
console.log(
  `  Not sampled: the other 1,112 pages. Every page comes from one of three\n` +
    `  layouts, all three of which are covered above.`
);

if (failures.length > 0) {
  console.error(`\nLighthouse FAILED: ${failures.length} threshold(s) missed\n`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log("\nAll sampled pages meet every threshold.");
