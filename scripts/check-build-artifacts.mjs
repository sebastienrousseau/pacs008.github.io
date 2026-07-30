/**
 * Fail the build when a generated artefact comes out degenerate.
 *
 * The empty-sitemap defect shipped because a file existed, was valid XML, and
 * contained nothing. Existence checks pass on output like that; only a
 * threshold catches it.
 *
 * Every entry below is a floor, not a target. They are set well under the
 * current values so ordinary content changes do not trip them — the point is
 * to catch collapse, not drift.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";

const publicDir = join(process.cwd(), "public");
const failures = [];

/** Every built page. */
function countPages(dir = publicDir) {
  let n = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) n += countPages(join(dir, entry.name));
    else if (entry.name === "index.html") n++;
  }
  return n;
}

function read(rel) {
  const full = join(publicDir, rel);
  return existsSync(full) ? readFileSync(full, "utf8") : null;
}

function check(label, actual, min) {
  if (actual === null) failures.push(`${label}: file missing`);
  else if (actual < min) failures.push(`${label}: ${actual}, expected at least ${min}`);
}

// --- Pages ----------------------------------------------------------------
// Counts content pages and redirect stubs together; the stubs are checked
// separately below, so a build that emitted no stubs at all would still fail.
const pages = countPages();
check("built pages", pages, 900);

// --- Redirect stubs -------------------------------------------------------
// Every URL retired by the localised-slug change has to keep resolving, and
// GitHub Pages has no server-side redirect. A build that skipped this step
// would 404 on 261 previously published URLs while looking otherwise healthy.
const { stubPaths } = await import("./route-slugs.mjs");
const LOCALES = [
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja",
  "ko", "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi",
  "yo", "zh", "zh-tw",
];
const expectedStubs = stubPaths(LOCALES);
const unresolvable = expectedStubs.filter(
  (p) => !existsSync(join(publicDir, ...p.split("/").filter(Boolean), "index.html"))
);
if (unresolvable.length > 0) {
  failures.push(
    `paths with no redirect stub: ${unresolvable.length} (first: ${unresolvable[0]})`
  );
}

// --- Sitemap --------------------------------------------------------------
const sitemap = read("sitemap.xml");
check(
  "sitemap <url> entries",
  sitemap === null ? null : (sitemap.match(/<url>/g) || []).length,
  600
);
check(
  "sitemap hreflang alternates",
  sitemap === null ? null : (sitemap.match(/<xhtml:link/g) || []).length,
  100
);

// --- Feeds ----------------------------------------------------------------
const feed = read("scheme-changes.xml");
check(
  "scheme change feed entries",
  feed === null ? null : (feed.match(/<entry>/g) || []).length,
  1
);

// --- Assets ---------------------------------------------------------------
const cssDir = join(publicDir, "_csp");
check(
  "hashed CSS assets",
  existsSync(cssDir) ? readdirSync(cssDir).filter((f) => f.endsWith(".css")).length : null,
  1
);

// --- Search ---------------------------------------------------------------
const searchIndex = read("search-index.json");
if (searchIndex === null) failures.push("search-index.json: file missing");
else {
  try {
    const parsed = JSON.parse(searchIndex);
    // ssg nests the documents under `entries`; counting top-level keys would
    // report 1 for a fully populated index.
    const list = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed.entries)
        ? parsed.entries
        : null;
    if (list === null) failures.push("search-index.json: no entries array");
    else check("search index entries", list.length, 100);
  } catch {
    failures.push("search-index.json: not valid JSON");
  }
}

// --- Robots ---------------------------------------------------------------
const robots = read("robots.txt");
if (!robots || !robots.includes("Sitemap:")) {
  failures.push("robots.txt: missing or does not reference the sitemap");
}

// --- Report ---------------------------------------------------------------
if (failures.length > 0) {
  console.error("Build artefact check FAILED:");
  for (const f of failures) console.error(`  - ${f}`);
  console.error(
    "\nAn artefact came out empty or near-empty. This is the class of defect " +
      "that shipped an empty sitemap: the file existed and parsed, but listed nothing."
  );
  process.exit(1);
}

console.log(
  `Build artefacts OK: ${pages} pages, ` +
    `${(sitemap.match(/<url>/g) || []).length} sitemap URLs, ` +
    `${(sitemap.match(/<xhtml:link/g) || []).length} alternates.`
);
