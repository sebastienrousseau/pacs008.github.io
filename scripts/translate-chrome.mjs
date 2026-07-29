/**
 * Site chrome translation.
 *
 * The layouts hardcode English navigation labels, so every locale shipped an
 * English nav, breadcrumb and "Last reviewed" label regardless of the page
 * language. ssg has no per-locale template, so the labels are rewritten after
 * the build.
 *
 * Deliberately scoped to the navigation, breadcrumb, language menu and article
 * meta. Rewriting the whole document would replace matching words inside body
 * prose and inside message identifiers — which is how a find-and-replace
 * quietly corrupts a page rather than translating it.
 */
import fs from "fs";
import path from "path";

const CHROME = JSON.parse(
  fs.readFileSync(path.resolve("data", "chrome-copy.json"), "utf8")
);

/** Regions where a label is chrome rather than content. */
const REGIONS = [
  /<nav[^>]*aria-label="Primary navigation"[\s\S]*?<\/nav>/i,
  /<nav[^>]*class="?breadcrumb"?[\s\S]*?<\/nav>/i,
  /<nav[^>]*aria-label="?Breadcrumb"?[\s\S]*?<\/nav>/i,
  /<div class="article-meta">[\s\S]*?<\/div>/i,
];

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Replace a label only when it is the entire text between two tags, so a
 * partial word or an attribute value can never be rewritten.
 */
function rewriteRegion(region, dict, keys) {
  let out = region;
  for (const key of keys) {
    const re = new RegExp(">(\\s*)" + escapeRe(key) + "(\\s*)<", "g");
    out = out.replace(re, (_m, before, after) => ">" + before + dict[key] + after + "<");
  }
  return out;
}

export function translateChrome(html, locale) {
  const dict = CHROME[locale];
  if (!dict || Object.keys(dict).length === 0) return html;

  // Longest first, so "See It Live (Workbench)" is not half-replaced by the
  // shorter "See It Live".
  const keys = Object.keys(dict).sort((a, b) => b.length - a.length);

  let out = html;
  for (const pattern of REGIONS) {
    out = out.replace(pattern, (region) => rewriteRegion(region, dict, keys));
  }
  return out;
}

export function chromeLocales() {
  return Object.keys(CHROME).filter((k) => !k.startsWith("_"));
}
