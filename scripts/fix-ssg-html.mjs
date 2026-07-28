import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");

/** Scripts that render right-to-left, keyed by primary subtag. */
const RTL_LANGS = new Set(["ar", "he", "fa", "ur", "ps", "sd", "ug", "yi"]);

/**
 * Fallback BCP 47 tags by top-level locale directory.
 *
 * Layouts source the language from front matter via {{lang}}, so this only
 * applies when a page omits it and ssg emits an empty attribute. Keys must
 * stay in step with the `locales` array in scripts/generate-locales.mjs.
 */
const LOCALE_LANG = {
  ar: "ar-SA", bn: "bn-BD", cs: "cs-CZ", de: "de-DE", es: "es-ES",
  fr: "fr-FR", ha: "ha-NG", he: "he-IL", hi: "hi-IN", id: "id-ID",
  it: "it-IT", ja: "ja-JP", ko: "ko-KR", nl: "nl-NL", pl: "pl-PL",
  pt: "pt-BR", ro: "ro-RO", ru: "ru-RU", sv: "sv-SE", th: "th-TH",
  tl: "tl-PH", tr: "tr-TR", uk: "uk-UA", vi: "vi-VN", yo: "yo-NG",
  zh: "zh-CN", "zh-tw": "zh-TW",
};

/** Top-level locale directory for a built file, or "en" for the root site. */
function localeFromPath(filePath) {
  const first = path.relative(publicDir, filePath).split(path.sep)[0];
  return Object.hasOwn(LOCALE_LANG, first) ? first : "en";
}

const SITE_ORIGIN = "https://pacs008.com";

/**
 * BCP 47 tags published in hreflang annotations.
 *
 * Plain language subtags, since the site targets a language rather than a
 * country; Chinese uses script subtags because the two variants differ.
 */
const HREFLANG_CODE = { zh: "zh-Hans", "zh-tw": "zh-Hant" };

/** hreflang tag for a locale directory. */
function hreflangFor(locale) {
  return HREFLANG_CODE[locale] ?? locale;
}

/** Locale directory and remaining route for a built file. */
function splitRoute(filePath) {
  const parts = path.relative(publicDir, filePath).split(path.sep);
  if (parts[parts.length - 1] === "index.html") parts.pop();
  const hasLocale = Object.hasOwn(LOCALE_LANG, parts[0]);
  return {
    locale: hasLocale ? parts[0] : "en",
    route: (hasLocale ? parts.slice(1) : parts).join("/"),
  };
}

/** Absolute URL for a route in a locale. */
function urlFor(locale, route) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${SITE_ORIGIN}${prefix}${route ? `/${route}` : ""}/`;
}

/**
 * Inject rel="alternate" hreflang annotations.
 *
 * The layouts previously emitted a single alternate whose href and hreflang
 * both resolved to empty strings, so the site shipped invalid markup and no
 * usable language annotations at all. Search engines require these as <link>
 * elements in <head> (or in the sitemap) — hreflang on the switcher anchors
 * does not count — and each page must list itself alongside its siblings.
 */
function injectHreflang(head, filePath) {
  const { locale, route } = splitRoute(filePath);

  const available = ["en", ...Object.keys(LOCALE_LANG)].filter((candidate) => {
    const dir = candidate === "en" ? publicDir : path.join(publicDir, candidate);
    return fs.existsSync(path.join(dir, route, "index.html"));
  });

  // A lone self-reference tells search engines nothing; skip pages with no
  // translated siblings, such as English-only legal pages.
  if (available.length < 2 || !available.includes(locale)) return head;

  // No self-closing slash: html-validate's void-style rule (enabled via
  // html-validate:recommended) requires void elements to omit the end tag.
  const links = available.map(
    (l) =>
      `<link rel="alternate" hreflang="${hreflangFor(l)}" href="${urlFor(l, route)}">`
  );
  links.push(
    `<link rel="alternate" hreflang="x-default" href="${urlFor("en", route)}">`
  );

  return `${head}\n    ${links.join("\n    ")}\n  `;
}

/** Cache of translated top-level route names per locale. */
const routeCache = new Map();

/** Top-level routes that actually exist for a locale, e.g. {about, api, faq}. */
function routesForLocale(locale) {
  if (!routeCache.has(locale)) {
    const dir = path.join(publicDir, locale);
    const routes = fs.existsSync(dir)
      ? fs
          .readdirSync(dir, { withFileTypes: true })
          .filter((e) => e.isDirectory())
          .map((e) => e.name)
      : [];
    routeCache.set(locale, new Set(routes));
  }
  return routeCache.get(locale);
}

/**
 * Point navigation at translated pages.
 *
 * The layouts hardcode English hrefs such as /about/, so every locale page
 * shipped a nav that sent readers back to English. ssg has no locale-prefix
 * placeholder, so rewrite here instead — but only for routes that genuinely
 * exist in that locale, and never inside the language switcher, whose links
 * must keep pointing at other locales.
 */
function localiseLinks(body, filePath) {
  const locale = localeFromPath(filePath);
  if (locale === "en") return body;

  const routes = routesForLocale(locale);
  if (routes.size === 0) return body;

  return body.replace(/<a\b[^>]*>/gi, (tag) => {
    if (tag.includes("ap-lang-item")) return tag;
    return tag.replace(
      /href=(["']?)\/([\w.-]+)\/\1(?=[\s>])/gi,
      (match, quote, route) =>
        routes.has(route) ? `href=${quote}/${locale}/${route}/${quote}` : match
    );
  });
}

/**
 * Normalise <html> so every page declares its real language and RTL locales
 * carry dir="rtl".
 *
 * Handles both quoted and bare attribute values because ssg minifies some
 * pages (dropping quotes) and leaves others as-is.
 */
function normaliseHtmlTag(head, filePath) {
  return head.replace(/<html\b([^>]*)>/i, (match, attrs) => {
    const found = attrs.match(/\blang=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    let lang = (found?.[1] ?? found?.[2] ?? found?.[3] ?? "").trim();

    if (!lang) {
      const locale = localeFromPath(filePath);
      lang = LOCALE_LANG[locale] ?? "en-GB";
    }

    const rest = attrs
      .replace(/\s*\blang=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/\s*\bdir=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .trim();

    const dir = RTL_LANGS.has(lang.split("-")[0].toLowerCase())
      ? ' dir="rtl"'
      : "";

    return `<html lang="${lang}"${dir}${rest ? ` ${rest}` : ""}>`;
  });
}

function flattenNestedIndexes(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "index" && dir !== publicDir) {
        // Move contents of nested 'index' dir up to parent
        for (const file of fs.readdirSync(fullPath)) {
          const src = path.join(fullPath, file);
          const dest = path.join(dir, file);
          fs.copyFileSync(src, dest);
          fs.unlinkSync(src);
        }
        fs.rmdirSync(fullPath);
        count++;
      } else {
        count += flattenNestedIndexes(fullPath);
      }
    }
  }
  return count;
}

/**
 * Fill the "Last reviewed" date from the page's own metadata.
 *
 * ssg resolves template placeholders in <head> but not in <body>, so both
 * {{last_reviewed}} and {{last_build_date}} render empty there. The layout
 * previously worked around this with a hardcoded date that could never
 * update. Read the value ssg did emit into the head and use it.
 */
const REVIEW_DATE = JSON.parse(
  fs.readFileSync(path.resolve("data", "product-manifest.json"), "utf8")
).governance.verification_date;

const REVIEW_DATE_PRETTY = new Date(`${REVIEW_DATE}T00:00:00Z`).toLocaleDateString(
  "en-GB",
  { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
);

function fillReviewDate(html) {
  // Deliberately the governance review date, not the build date. Stamping
  // "last reviewed" with the time of the last rebuild would assert a review
  // that never happened.
  return html
    .replace(
      /<time datetime=["']["']><\/time>/gi,
      `<time datetime="${REVIEW_DATE}">${REVIEW_DATE_PRETTY}</time>`
    )
    .replace(
      /(<meta[^>]*itemprop=["']?date(?:Modified|Published)["']?[^>]*content=)["']["']/gi,
      `$1"${REVIEW_DATE}"`
    );
}

/**
 * Conservative HTML whitespace reduction.
 *
 * ssg minifies the homepage but leaves the other 677 pages as authored, and
 * exposes no flag to change that. This closes the gap without a dependency.
 *
 * Deliberately conservative:
 *   - <pre>, <textarea>, <script> and <style> are lifted out first, because
 *     whitespace is significant inside them.
 *   - Runs of whitespace collapse to a single space rather than being removed.
 *     Removing them would join words across a line break and delete the
 *     meaningful gap between inline elements such as </span> <span>.
 *   - Attribute quoting is untouched. Unquoting is where minifiers break
 *     markup, for a saving that is not worth the risk.
 */
const STASH_MARK = "\u0001";

function minifyHtml(html) {
  const stash = [];
  const guarded = html.replace(
    /<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi,
    (match) => {
      stash.push(match);
      return `${STASH_MARK}${stash.length - 1}${STASH_MARK}`;
    }
  );

  const compact = guarded
    // Drop comments, but leave conditional comments alone.
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, "")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();

  return compact.replace(
    new RegExp(`${STASH_MARK}(\\d+)${STASH_MARK}`, "g"),
    (_, i) => stash[Number(i)]
  );
}

function unescapeHtmlString(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function repairHtml(content, filePath) {
  // 1. Split head and body
  let headEnd = content.indexOf("</head>");
  if (headEnd === -1) headEnd = content.indexOf("</HEAD>");

  let head = content;
  let body = "";

  if (headEnd !== -1) {
    head = content.slice(0, headEnd);
    body = content.slice(headEnd);

    // Unescape &lt;meta ...&gt; and &lt;link ...&gt; in head
    head = head.replace(/&lt;(meta|link)\b[^&]*?&gt;/gi, (match) => {
      return unescapeHtmlString(match);
    });

    head = head.replace(/&lt;(meta|link)\b[^>]*?>/gi, (match) => {
      return unescapeHtmlString(match);
    });

    // Deduplicate author & description metas in head if duplicated
    const seenMetas = new Set();
    head = head.replace(/<meta\s+name=["'](author|description|keywords|viewport)["']\s+content=["'][^"']*["']\s*\/?>/gi, (match, name) => {
      const lowerName = name.toLowerCase();
      if (seenMetas.has(lowerName)) return "";
      seenMetas.add(lowerName);
      return match;
    });
  } else {
    body = content;
  }

  // Ensure <html> declares the page's own language and RTL direction
  head = normaliseHtmlTag(head, filePath);

  // Publish hreflang alternates for pages that exist in more than one locale
  head = injectHreflang(head, filePath);

  // 2. Unescape entity-escaped HTML elements across <body>
  body = unescapeHtmlString(body);

  // 3. Point navigation at translated pages on locale routes
  body = localiseLinks(body, filePath);

  // 4. Fill body placeholders ssg leaves unresolved, then reduce whitespace
  return minifyHtml(fillReviewDate(head + body));
}

function processHtmlFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processHtmlFiles(fullPath);
    } else if (entry.name.endsWith(".html")) {
      const raw = fs.readFileSync(fullPath, "utf8");
      const fixed = repairHtml(raw, fullPath);
      if (fixed !== raw) {
        fs.writeFileSync(fullPath, fixed, "utf8");
        count++;
      }
    }
  }
  return count;
}

if (fs.existsSync(publicDir)) {
  const flattened = flattenNestedIndexes(publicDir);
  console.log(`Flattened ${flattened} nested index directories in public/`);

  const repaired = processHtmlFiles(publicDir);
  console.log(`Repaired HTML in ${repaired} files in public/`);
}
