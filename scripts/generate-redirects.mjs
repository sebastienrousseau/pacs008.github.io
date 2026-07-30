/**
 * Redirect stubs for every URL a slug change moved.
 *
 * The site published /fr/2026-readiness/ and its 260 siblings from March 2026
 * until the localised slugs landed. Those URLs are in search indexes, in the
 * previously published sitemap, and in whatever anyone bookmarked. GitHub
 * Pages serves static files and cannot issue a 301, so the only way an old URL
 * keeps working is a file at the old path that sends the reader on.
 *
 * Each stub carries all four signals, because they do different jobs:
 *
 *   rel=canonical      tells a crawler which URL owns the content
 *   robots noindex     keeps the stub itself out of the index
 *   meta refresh       moves a reader with JavaScript disabled
 *   location.replace   moves everyone else without a history entry, so Back
 *                      returns to where they came from rather than bouncing
 *
 * A visible link is included too: a refresh that silently fails leaves the
 * reader on a blank page with no way forward, which is worse than the 404 this
 * exists to prevent.
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
import { join, resolve } from "path";
import { movedPaths, ENGLISH_ONLY_ROUTES, RETIRED_ROUTES } from "./route-slugs.mjs";

const publicDir = resolve("public");
const SITE_ORIGIN = "https://pacs008.com";

/** Locales the site generates, matching scripts/generate-locales.mjs. */
const LOCALES = [
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja",
  "ko", "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi",
  "yo", "zh", "zh-tw",
];

const LOCALE_LANG = {
  en: "en-GB",
  ar: "ar-SA", bn: "bn-BD", cs: "cs-CZ", de: "de-DE", es: "es-ES",
  fr: "fr-FR", ha: "ha-NG", he: "he-IL", hi: "hi-IN", id: "id-ID",
  it: "it-IT", ja: "ja-JP", ko: "ko-KR", nl: "nl-NL", pl: "pl-PL",
  pt: "pt-BR", ro: "ro-RO", ru: "ru-RU", sv: "sv-SE", th: "th-TH",
  tl: "tl-PH", tr: "tr-TR", uk: "uk-UA", vi: "vi-VN", yo: "yo-NG",
  zh: "zh-CN", "zh-tw": "zh-TW",
};

function stub(lang, to) {
  const target = `${SITE_ORIGIN}${to}`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Moved</title>
<link rel="canonical" href="${target}">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${to}">
</head>
<body>
<p>This page has moved to <a href="${to}">${target}</a>.</p>
<script>location.replace(${JSON.stringify(to)});</script>
</body>
</html>
`;
}

if (!existsSync(publicDir)) {
  throw new Error("public/ does not exist — run the site build first");
}

// English-only routes get a locale stub too: the workbench is the site's main
// call to action, and a reader who reaches for /fr/live/ — or is sent the link
// by a colleague — got a 404. Sending them to the English page is what the
// navigation already does.
const moved = [
  ...movedPaths(LOCALES),
  ...LOCALES.flatMap((locale) =>
    ENGLISH_ONLY_ROUTES.map((route) => ({
      locale,
      route,
      from: `/${locale}/${route}/`,
      to: `/${route}/`,
    }))
  ),
  // Retired English routes. /try/ was a byte-identical duplicate of /live/;
  // it was published and indexed, so it keeps resolving.
  ...Object.entries(RETIRED_ROUTES).map(([route, to]) => ({
    locale: "en",
    route,
    from: `/${route}/`,
    to,
  })),
];

let written = 0;
const clobbered = [];

for (const { locale, from, to } of moved) {
  const dir = join(publicDir, ...from.split("/").filter(Boolean));
  const file = join(dir, "index.html");

  // A stub must never land on top of a real page. That would happen if a
  // locale translated route A to the English name of route B, and it would
  // replace B's content with a redirect — the exact failure the registry's
  // collision check exists to prevent, asserted again here against the built
  // tree in case a page arrives from somewhere other than the registry.
  //
  // An existing *stub* is fine to overwrite. Distinguishing the two keeps this
  // script idempotent: builds remove public/ first (D-004), but running it
  // twice by hand should not report every stub it wrote last time as a page it
  // is about to destroy.
  if (existsSync(file)) {
    const existing = readFileSync(file, "utf8");
    const isStub =
      /<meta http-equiv="refresh"/i.test(existing) &&
      /<meta name="robots" content="noindex/i.test(existing);
    if (!isStub) {
      clobbered.push(from);
      continue;
    }
  }

  mkdirSync(dir, { recursive: true });
  writeFileSync(file, stub(LOCALE_LANG[locale], to));
  written += 1;
}

if (clobbered.length > 0) {
  throw new Error(
    `redirect stubs would overwrite real pages:\n  - ${clobbered.join("\n  - ")}`
  );
}

const retired = movedPaths(LOCALES).length;
console.log(
  `Redirect stubs written: ${written} ` +
    `(${retired} retired URLs, ${written - retired} locale paths for English-only routes).`
);
