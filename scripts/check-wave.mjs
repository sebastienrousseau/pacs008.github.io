/**
 * WAVE audit — opt-in, post-deploy, never part of the build.
 *
 * WAVE is not automatable the way Lighthouse is, and the reason is structural:
 *
 *   - The browser extension is the only free full-featured WAVE. It is manual.
 *   - The WAVE API is paid, keyed, and *fetches the page itself*, so the URL has
 *     to be publicly reachable. It cannot see localhost, which means it cannot
 *     gate a build against the tree that is about to be deployed.
 *   - The npm packages named wave-cli (0.0.3-alpha, 2019) and webaim-wave (2019)
 *     are unofficial wrappers around that same paid API. Neither runs offline.
 *
 * So this script exists as a deliberate second opinion on the *deployed* site,
 * run by hand. It is not in `npm run verify` and it is not in build.sh, because
 * a gate that needs a public URL cannot check what you are about to publish.
 *
 * It sends URLs to WebAIM, a third party. That is why it requires an explicit
 * --confirm rather than running on a key alone.
 *
 * What actually covers this ground in CI:
 *
 *   scripts/check-lighthouse.mjs   axe-core in a real Chrome — colour contrast,
 *                                  focus appearance, tap targets, ARIA
 *   tests/axe.test.ts              axe-core over every locale's built HTML
 *   scripts/audit-full-compliance  per-page SEO, alt text, viewport
 *   ssg's own a11y plugin          runs on all 1,119 pages during the build
 *
 * WAVE's engine overlaps heavily with axe. What it adds is a human-facing
 * rendering of the results, and judgement calls axe declines to make — useful to
 * a person, not to a gate.
 *
 * Usage:
 *   WAVE_API_KEY=... node scripts/check-wave.mjs --confirm
 *   WAVE_API_KEY=... node scripts/check-wave.mjs --confirm --origin https://pacs008.com
 */
const args = process.argv.slice(2);
const key = process.env.WAVE_API_KEY;
const confirmed = args.includes("--confirm");
const originArg = args.indexOf("--origin");
const origin = originArg !== -1 ? args[originArg + 1] : "https://pacs008.com";

/** One page per layout, matching the Lighthouse sample. */
const SAMPLE = ["/", "/about/", "/live/", "/fr/essayer/", "/ar/", "/trust/"];

if (!key) {
  console.error(
    "WAVE_API_KEY is not set.\n\n" +
      "WAVE has no offline mode: the API fetches the page itself, so it cannot\n" +
      "test a local build, and there is no free CLI. See the comment at the top\n" +
      "of this file for what covers this ground in CI instead — chiefly\n" +
      "`npm run lighthouse`, which runs axe-core in a real Chrome."
  );
  process.exit(2);
}

if (!confirmed) {
  console.error(
    `This sends ${SAMPLE.length} URLs under ${origin} to webaim.org, a third party,\n` +
      "and consumes paid API credits. Re-run with --confirm to proceed."
  );
  process.exit(2);
}

const failures = [];
const rows = [];

for (const path of SAMPLE) {
  const url = `https://wave.webaim.org/api/request?key=${encodeURIComponent(key)}` +
    `&url=${encodeURIComponent(origin + path)}&reporttype=2`;

  const res = await fetch(url);
  if (!res.ok) {
    failures.push(`${path}: HTTP ${res.status} from the WAVE API`);
    continue;
  }
  const body = await res.json();
  if (body.status?.success === false) {
    failures.push(`${path}: ${body.status.error ?? "WAVE reported failure"}`);
    continue;
  }

  const c = body.categories ?? {};
  const counts = {
    error: c.error?.count ?? 0,
    contrast: c.contrast?.count ?? 0,
    alert: c.alert?.count ?? 0,
  };
  rows.push({ path, counts });

  // Errors and contrast failures are defects. Alerts are judgement calls and
  // are reported but not failed on — treating them as errors would make this
  // unpassable for reasons WAVE itself does not claim are defects.
  if (counts.error > 0 || counts.contrast > 0) {
    const detail = Object.entries({ ...(c.error?.items ?? {}), ...(c.contrast?.items ?? {}) })
      .map(([id, i]) => `${id} x${i.count}`)
      .join(", ");
    failures.push(`${path}: ${counts.error} error(s), ${counts.contrast} contrast — ${detail}`);
  }
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`\nWAVE — ${origin}, ${SAMPLE.length} pages\n`);
console.log(`  ${pad("page", 22)}${pad("errors", 9)}${pad("contrast", 11)}alerts`);
for (const { path, counts } of rows) {
  console.log(`  ${pad(path, 22)}${pad(counts.error, 9)}${pad(counts.contrast, 11)}${counts.alert}`);
}
console.log("\n  Alerts are reported, not failed on: WAVE does not claim they are defects.");

if (failures.length > 0) {
  console.error(`\nWAVE FAILED: ${failures.length} page(s)\n`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log("\nNo WAVE errors or contrast failures on the sampled pages.");
