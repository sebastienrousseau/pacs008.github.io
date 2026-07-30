/**
 * Write the workbench page for English and every locale.
 *
 * The workbench is the site's main call to action and was English-only, so a
 * reader who followed "Voir en direct" from a French page landed in English.
 *
 * The page's substance is _layouts/try.html, not Markdown — this generator only
 * writes the front matter and the short security note beneath it. The layout's
 * prose is translated after the build by scripts/translate-live.mjs, because ssg
 * has no per-locale template.
 *
 * /try/ used to exist alongside /live/ with byte-identical content and a
 * canonical pointing at itself: duplicate content splitting its own signals.
 * 785 pages linked /live/ and only the workbench's own navigation linked /try/,
 * so /live/ won and /try/ keeps a redirect stub.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { slugFor, pathFor } from "./route-slugs.mjs";

const COPY = JSON.parse(readFileSync(join(process.cwd(), "data", "live-copy.json"), "utf8"));

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

/** Per-key English fallback, so a gap shows English rather than nothing. */
function copyFor(locale) {
  return { ...COPY.en, ...(COPY[locale] || {}) };
}

/** YAML double-quoted scalar. */
function q(s) {
  return JSON.stringify(String(s));
}

let written = 0;
for (const locale of ["en", ...LOCALES]) {
  const c = copyFor(locale);
  const slug = slugFor(locale, "live");
  const dir =
    locale === "en"
      ? join(process.cwd(), "docs", slug)
      : join(process.cwd(), "docs", locale, slug);

  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "index.md"),
    `---
title: ${q(c.lw_page_title)}
description: ${q(c.lw_page_desc)}
lang: ${LOCALE_LANG[locale]}
layout: try
date: "2026-07-29"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
canonical: ${q(pathFor(locale, "live"))}
---

## ${c.lw_sec_h}

- ${c.lw_sec1}
- ${c.lw_sec2}
`
  );
  written += 1;
}

console.log(`Workbench pages generated: ${written} (English + ${LOCALES.length} locales).`);
