/**
 * Workbench translation.
 *
 * /live/ is the site's main call to action and was English-only, so a French
 * reader following "Voir en direct" landed on an English page. Unlike the rest
 * of the site it has no Markdown source to translate: the whole page is
 * _layouts/try.html, and ssg has no per-locale template.
 *
 * So each translatable unit carries a `data-i18n` key and this module replaces
 * that element's contents after the build. Marking the *element* rather than
 * the text is what makes the translations usable: the English sentences wrap
 * inline <code>, <strong>, <em> and <a>, and keying each fragment separately
 * would have forced every language into English word order.
 *
 * That also means values are HTML, which is why validateLiveCopy() exists — a
 * translation that quietly drops an <a> loses a link, and one that drops a
 * <code> turns a message identifier into prose.
 */
import { readFileSync } from "fs";

const COPY = JSON.parse(
  readFileSync(new URL("../data/live-copy.json", import.meta.url), "utf8")
);

/**
 * Keys that live in the Markdown source rather than the layout.
 *
 * generate-live-pages.mjs writes these into the front matter and the short
 * security note beneath it, so they carry no data-i18n marker. Declared
 * explicitly rather than inferred from "has no marker", because that would turn
 * a mistyped layout key into a silently accepted one.
 */
export const MARKDOWN_KEYS = new Set([
  "lw_page_title", "lw_page_desc", "lw_sec_h", "lw_sec1", "lw_sec2",
]);

/** Keys the layout is expected to carry, from the English base. */
export const LIVE_KEYS = Object.keys(COPY.en);

/** Keys the layout must mark. */
export const LAYOUT_KEYS = LIVE_KEYS.filter((k) => !MARKDOWN_KEYS.has(k));

/** Per-key English fallback: a missing translation shows English, never blank. */
function copyFor(locale) {
  return { ...COPY.en, ...(COPY[locale] || {}) };
}

/**
 * Replace the contents of every `data-i18n` element.
 *
 * Finds the matching close tag by counting nested same-name tags, rather than
 * matching to the first `</p>`. The workbench nests <span> inside <li> and
 * <code> inside <p>, so a non-counting match would truncate mid-element and
 * leave stray close tags in the output.
 */
export function translateLive(html, locale) {
  if (locale === "en") return html;
  const dict = copyFor(locale);

  let out = "";
  let cursor = 0;
  const marker = /data-i18n="([^"]+)"/g;
  let m;

  while ((m = marker.exec(html)) !== null) {
    const key = m[1];
    const tagStart = html.lastIndexOf("<", m.index);
    const openTag = /^<([a-zA-Z][\w-]*)\b[^>]*>/.exec(html.slice(tagStart));
    if (!openTag) continue;

    const tag = openTag[1];
    const innerStart = tagStart + openTag[0].length;
    const closeAt = findClose(html, tag, innerStart);
    if (closeAt === -1) continue;

    const value = dict[key];
    if (value === undefined) continue;

    out += html.slice(cursor, innerStart) + value;
    cursor = closeAt;
    marker.lastIndex = closeAt;
  }

  return out + html.slice(cursor);
}

/** Index of the close tag matching an already-open `tag`, or -1. */
function findClose(src, tag, from) {
  const open = new RegExp(`<${tag}\\b`, "gi");
  const close = new RegExp(`</${tag}\\s*>`, "gi");
  let depth = 1;
  let i = from;
  while (depth > 0) {
    open.lastIndex = i;
    close.lastIndex = i;
    const no = open.exec(src);
    const nc = close.exec(src);
    if (!nc) return -1;
    if (no && no.index < nc.index) {
      depth += 1;
      i = no.index + no[0].length;
    } else {
      depth -= 1;
      if (depth === 0) return nc.index;
      i = nc.index + nc[0].length;
    }
  }
  return -1;
}

/** Tag names in a value, sorted, so two values can be compared for parity. */
function tagsOf(value) {
  return (value.match(/<\/?([a-zA-Z][\w-]*)/g) || [])
    .map((t) => t.replace(/[<\/]/g, "").toLowerCase())
    .sort();
}

/** Identifiers that must survive translation verbatim wherever they appear. */
const IDENTIFIERS = [
  "pacs.008.001.13", "ChrgBr", "TwnNm", "town_name", "pacs.008", "pain.001",
  "pain.002", "pain.007", "pain.008", "camt.110", "camt.111",
];

/**
 * Fail the build on copy that cannot render correctly.
 *
 * Every check here is something a plausible-looking translation gets wrong
 * silently: the page still renders, so nothing else would notice.
 */
export function validateLiveCopy(locales, layoutHtml) {
  const errors = [];

  const inLayout = new Set(
    [...layoutHtml.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1])
  );
  for (const key of inLayout) {
    if (!(key in COPY.en)) errors.push(`layout marks "${key}" but live-copy.json has no English base`);
  }
  for (const key of LAYOUT_KEYS) {
    if (!inLayout.has(key)) errors.push(`live-copy.json defines "${key}" but the layout has no marker`);
  }
  for (const key of MARKDOWN_KEYS) {
    if (!(key in COPY.en)) errors.push(`MARKDOWN_KEYS names "${key}", which has no English base`);
    if (inLayout.has(key)) errors.push(`"${key}" is declared a Markdown key but the layout marks it too`);
  }

  for (const locale of locales) {
    const dict = COPY[locale];
    if (!dict) continue;
    for (const [key, value] of Object.entries(dict)) {
      if (!(key in COPY.en)) {
        errors.push(`${locale}.${key} is not a key in the English base`);
        continue;
      }
      const want = tagsOf(COPY.en[key]).join(",");
      const got = tagsOf(value).join(",");
      if (want !== got) {
        errors.push(`${locale}.${key} markup differs: expected [${want}] got [${got}]`);
      }
      const enStars = (COPY.en[key].match(/\*\*/g) || []).length;
      const gotStars = (value.match(/\*\*/g) || []).length;
      if (enStars !== gotStars) {
        errors.push(`${locale}.${key} emphasis differs: expected ${enStars} ** markers, got ${gotStars}`);
      }
      for (const id of IDENTIFIERS) {
        const enCount = COPY.en[key].split(id).length - 1;
        if (enCount > 0 && value.split(id).length - 1 !== enCount) {
          errors.push(`${locale}.${key} does not preserve the identifier ${id}`);
        }
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`live-copy.json is invalid:\n  - ${errors.join("\n  - ")}`);
  }

  const translated = locales.filter((l) => COPY[l] && Object.keys(COPY[l]).length > 0);
  const complete = translated.filter(
    (l) => LIVE_KEYS.every((k) => k in COPY[l])
  );
  return { keys: LIVE_KEYS.length, translated: translated.length, complete: complete.length };
}
