/**
 * Verify the CDN favicon is still reachable the way a browser fetches it.
 *
 * Not part of the build, deliberately. It needs the network and it asserts
 * something about a third party's configuration rather than about this
 * repository, so a build gate would fail for reasons a commit cannot cause.
 *
 * It exists because this exact thing broke silently once. Cloudflare Hotlink
 * Protection on cloudcdn.pro returned 403 (error 1011) for any request carrying
 * a cross-site Referer. Browsers always send one when fetching a favicon
 * declared on a page, so the icon never rendered — while `curl` without a
 * Referer returned 200, which is what made it look fine and took three attempts
 * to diagnose. The Referer is therefore the whole point of this check: a request
 * without one proves nothing.
 *
 *   npm run check:cdn-icon
 */
import { readFileSync } from "fs";
import { resolve } from "path";

const meta = JSON.parse(readFileSync(resolve("data", "favicon.json"), "utf8"));
const url = meta.declared;
const origin = "https://pacs008.com";

if (!url.startsWith("http")) {
  console.log(`Declared icon is same-origin (${url}); no CDN check applies.`);
  process.exit(0);
}

/** Headers Chrome sends for a favicon referenced by a page. */
const BROWSER = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  Referer: `${origin}/`,
  "Sec-Fetch-Dest": "image",
  "Sec-Fetch-Mode": "no-cors",
  "Sec-Fetch-Site": "cross-site",
};

async function probe(label, headers, target = url) {
  try {
    const res = await fetch(target, { headers, redirect: "follow" });
    const bytes = (await res.arrayBuffer()).byteLength;
    return { label, status: res.status, type: res.headers.get("content-type"), bytes };
  } catch (err) {
    return { label, status: "network error", type: String(err).slice(0, 60), bytes: 0 };
  }
}

const cacheBust = `${url}${url.includes("?") ? "&" : "?"}cb=${process.hrtime.bigint()}`;

const results = [
  // The one that matters: a page-embedded fetch.
  await probe("as a browser (cross-site Referer)", BROWSER),
  // Cache-busted, so a cached 200 cannot mask a rule that has since changed.
  await probe("as a browser, cache-busted", BROWSER, cacheBust),
  // No Referer. Included precisely because it passed while the real case failed.
  await probe("no Referer (proves nothing on its own)", { "User-Agent": BROWSER["User-Agent"] }),
];

const pad = (s, n) => String(s).padEnd(n);
console.log(`\nCDN icon: ${url}\n`);
for (const r of results) {
  console.log(`  ${pad(r.label, 40)} ${pad(r.status, 16)} ${pad(r.type ?? "", 26)} ${r.bytes}B`);
}

const browserProbes = results.slice(0, 2);
const failed = browserProbes.filter((r) => r.status !== 200);

if (failed.length > 0) {
  console.error(
    `\nFAILED: the CDN icon is not reachable as a browser fetches it.\n\n` +
      `  Most likely Cloudflare Hotlink Protection is back on for /pacs008/*.\n` +
      `  ${meta.cdn_hotlink_block?.fix ?? ""}\n\n` +
      `  The site still shows the correct icon meanwhile: /favicon.ico carries\n` +
      `  identical bytes and browsers request it regardless of declarations. So\n` +
      `  this is a degradation to fix, not an outage.\n`
  );
  process.exit(1);
}

console.log("\nReachable as a browser fetches it, cache-busted included.");
