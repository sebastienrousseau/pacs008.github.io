import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { resolve, join } from "path";
import { DIST, LOCALES, readPage, readLocalePage, localePath, textOf } from "./helpers";

const manifest = JSON.parse(
  readFileSync(resolve(__dirname, "../data/product-manifest.json"), "utf-8")
);
const capabilities = JSON.parse(
  readFileSync(resolve(__dirname, "../data/capability-registry.json"), "utf-8")
);

/** Every built HTML page. */
function allPages(dir = DIST, found: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) allPages(full, found);
    else if (entry.endsWith(".html")) found.push(full);
  }
  return found;
}

describe("Content truth: licence", () => {
  // Regression: the site simultaneously claimed Apache-2.0 (README, footer),
  // MIT (terms, in 21 translations) and dual Apache-2.0/MIT (page footer).
  it("the manifest should record a single licence", () => {
    expect(manifest.product.license).toBe("Apache-2.0");
  });

  it("no built page should claim MIT or dual licensing", () => {
    const offenders = allPages()
      .filter((file) => {
        const text = readFileSync(file, "utf-8");
        return /\bMIT\b/.test(text) || /dual[- ]licen[cs]/i.test(text);
      })
      .map((file) => file.replace(`${DIST}/`, ""));
    expect(offenders, `pages claiming MIT/dual: ${offenders.slice(0, 5).join(", ")}`)
      .toEqual([]);
  });
});

describe("Content truth: runtime and API", () => {
  const api = readPage("api");

  it("the documented Python version should match the manifest", () => {
    expect(textOf(api)).toContain(`Python ${manifest.product.python.minimum}`);
  });

  it("should not advertise a superseded Python requirement", () => {
    expect(textOf(api)).not.toContain("3.9.2");
  });

  it("endpoint table paths should carry the same /api prefix as the examples", () => {
    // The table previously listed bare paths (GET /health) while every curl
    // example used /api/..., so neither could be copied and run as shown.
    for (const path of ["/api/health", "/api/validate", "/api/generate"]) {
      expect(textOf(api), `endpoint table is missing ${path}`).toContain(path);
    }
  });
});

describe("Content truth: capability claims", () => {
  it("browser must not be advertised as stable while layers are unimplemented", () => {
    const gaps = Object.entries(capabilities.capabilities)
      .filter(([, cap]: [string, any]) => cap.browser !== "stable")
      .map(([id]) => id);
    if (gaps.length > 0) {
      expect(manifest.interfaces.browser.status).not.toBe("stable");
    }
  });

  it("every capability should carry evidence", () => {
    for (const [id, cap] of Object.entries<any>(capabilities.capabilities)) {
      expect(cap.evidence, `${id} has no evidence`).toBeTruthy();
    }
  });

  it("the ruleset hash should be a real SHA-256", () => {
    expect(manifest.product.ruleset_hash).toMatch(/^sha256:[0-9a-f]{64}$/);
  });
});

describe("Content truth: privacy", () => {
  it("the analytics statement should be definite, not conditional", () => {
    const text = textOf(readPage("privacy"));
    expect(text).toContain("does not use analytics");
    expect(text).not.toContain("analytics services may collect");
  });

  it("no third-party script should ship on any page", () => {
    const offenders = allPages()
      .filter((file) => {
        const scripts = readFileSync(file, "utf-8").match(/<script[^>]*src=[^>]*>/g) || [];
        return scripts.some((s) => /src=["']?https?:\/\//.test(s));
      })
      .map((file) => file.replace(`${DIST}/`, ""));
    expect(offenders, `pages with third-party scripts: ${offenders.slice(0, 5).join(", ")}`)
      .toEqual([]);
  });
});

describe("Content truth: structured address", () => {
  const LOCALES_WITH_PAGE = ["en", ...LOCALES];

  it("every locale states the exact deadline date", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readLocalePage(prefix, "structured-address"));
      // Either the prose date or the ISO date from the generated tables.
      return !/14 (November|novembre|noviembre|Kasım|listopada|November)|2026-11-14|14\.? ?11\.? ?2026|2026 年 11 月 14 日|2026年11月14日|14 نوفمبر 2026|14 בנובמבר 2026/.test(text);
    });
    expect(missing, `locales without an exact date: ${missing.join(", ")}`).toEqual([]);
  });

  it("every locale carries the normative rule IDs", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readLocalePage(prefix, "structured-address"));
      return !text.includes("CBPR-ADDR-001") || !text.includes("CHAPS-ADDR-001");
    });
    expect(missing, `locales missing rule IDs: ${missing.join(", ")}`).toEqual([]);
  });

  it("every locale lists the excepted message types", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readLocalePage(prefix, "structured-address"));
      return !text.includes("admi.024") || !text.includes("camt.060");
    });
    expect(missing, `locales missing exceptions: ${missing.join(", ")}`).toEqual([]);
  });

  // Regression: the page previously claimed street, building number and post
  // code all had to be structured. The rule is Town + Country as a minimum.
  it("no locale claims post code or street must be structured", () => {
    const overstating = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readLocalePage(prefix, "structured-address"));
      return /post code, town, and country|code postal, ville et pays|Postleitzahl, Ort und Land|código postal, localidad y país|CAP, città e paese|postcode, plaats en land/.test(text);
    });
    expect(overstating, `locales overstating the requirement: ${overstating.join(", ")}`).toEqual([]);
  });

  // Asserts the generated format-comparison table, not prose. The table is
  // what guarantees every locale says hybrid stays acceptable and only the
  // fully unstructured form is removed.
  it("every locale carries the format comparison showing hybrid accepted", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readLocalePage(prefix, "structured-address"));
      return !(
        text.includes("Hybrid") &&
        text.includes("Fully unstructured") &&
        text.includes("Rejected")
      );
    });
    expect(missing, `locales without the format comparison: ${missing.join(", ")}`).toEqual([]);
  });
});

describe("Content truth: ISO 20022 attribution", () => {
  const sources = JSON.parse(
    readFileSync(resolve(__dirname, "../data/source-registry.json"), "utf-8")
  );

  // The ISO 20022 terms of use permit free reproduction of the material on
  // condition that any replication states it is not the official site and
  // names iso20022.org as the sole current source. Pages that reproduce that
  // material must carry it.
  it("pages reproducing ISO 20022 material carry the required statement", () => {
    for (const route of ["trust", "catalogue"]) {
      const text = textOf(readPage(route));
      expect(text, `${route} is missing the ISO 20022 attribution`).toContain(
        "not the official ISO 20022 website"
      );
      expect(text, `${route} does not name the authoritative source`).toContain(
        "iso20022.org"
      );
    }
  });

  it("the statement is held in the source registry, not hardcoded per page", () => {
    expect(sources.attribution.iso20022.statement).toContain(
      "not the official ISO 20022 website"
    );
    expect(sources.attribution.iso20022.terms_url).toBe(
      "https://www.iso20022.org/terms-use"
    );
  });
});

describe("Content truth: 2026 readiness hub", () => {
  const text = textOf(readPage("2026-readiness"));

  // Regression: this page was a 64-word paragraph whose own meta description
  // promised a "complete compliance hub". A stub on the highest-intent page on
  // the site, 108 days from the deadline it describes.
  it("is substantive, not a stub", () => {
    expect(text.split(/\s+/).length).toBeGreaterThan(600);
  });

  it("states the exact deadline and the in-scope messages", () => {
    expect(text).toContain("14 November 2026");
    for (const m of ["pacs.008", "pacs.009", "pacs.004", "pacs.003"]) {
      expect(text, `missing in-scope message ${m}`).toContain(m);
    }
  });

  it("lists the excepted message types", () => {
    for (const m of ["admi.024", "camt.025", "camt.060"]) {
      expect(text, `missing exception ${m}`).toContain(m);
    }
  });

  it("states that hybrid remains acceptable, which is the most misread part", () => {
    expect(text).toContain("Hybrid");
    expect(text).toMatch(/minimum, not a maximum/i);
  });

  it("carries rule IDs for both schemes", () => {
    expect(text).toContain("CBPR-ADDR-001");
    expect(text).toContain("CHAPS-ADDR-001");
  });

  it("links downloadable fixtures", () => {
    const html = readPage("2026-readiness");
    expect(html).toMatch(/href="?\/fixtures\/cbpr\/address\//);
    expect(html).toMatch(/href="?\/fixtures\/chaps\/address\//);
  });

  it("carries the ISO 20022 attribution", () => {
    expect(text).toContain("not the official ISO 20022 website");
  });
});

describe("Content truth: readiness hub translation", () => {
  const hubCopy = JSON.parse(
    readFileSync(resolve(__dirname, "../data/hub-copy.json"), "utf-8")
  );

  it("has hub copy for every generated locale", () => {
    const missing = ["en", ...LOCALES].filter((l) => !hubCopy[l]);
    expect(missing, `locales without hub copy: ${missing.join(", ")}`).toEqual([]);
  });

  it("every locale hub renders its own title, not the English one", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const text = textOf(readLocalePage(locale, "2026-readiness"));
      const expected = hubCopy[locale]?.title;
      if (expected && !text.includes(expected)) wrong.push(locale);
    }
    expect(wrong, `locales not showing their translated title: ${wrong.join(", ")}`).toEqual([]);
  });

  // The single most consequential sentence on the page: reading the mandate as
  // "structured only" turns a Town+Country change into an address re-modelling
  // programme. It must survive translation in every locale.
  it("every locale carries the minimum-not-maximum correction", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const text = textOf(readLocalePage(locale, "2026-readiness"));
      const expected = hubCopy[locale]?.minimum;
      if (!expected) { wrong.push(`${locale} (no string)`); continue; }
      // Probe the emphasised phrase, which is the distinctive part. A leading
      // slice is not enough: for German the first 24 characters are
      // "Die Anforderung ist ein " — present even if the correction itself
      // were replaced by English, which a mutation test caught.
      const emphasised = expected.match(/\*\*(.+?)\*\*/)?.[1];
      if (!emphasised) { wrong.push(`${locale} (no emphasis)`); continue; }
      if (!text.includes(emphasised)) wrong.push(locale);
    }
    expect(wrong, `locales missing the correction: ${wrong.join(", ")}`).toEqual([]);
  });

  it("untranslated keys fall back to English rather than disappearing", () => {
    const fr = textOf(readLocalePage("fr", "2026-readiness"));
    expect(fr).toContain("Run these through the workbench");
  });
});

describe("Content truth: site chrome translation", () => {
  const chrome = JSON.parse(
    readFileSync(resolve(__dirname, "../data/chrome-copy.json"), "utf-8")
  );

  function navOf(route: string) {
    const m = readPage(route).match(
      /<nav[^>]*aria-label="Primary navigation"[\s\S]*?<\/nav>/i
    );
    return m ? textOf(m[0]) : "";
  }

  it("has chrome copy for every generated locale", () => {
    const missing = LOCALES.filter((l) => !chrome[l]);
    expect(missing, `locales without chrome copy: ${missing.join(", ")}`).toEqual([]);
  });

  // Regression: the layouts hardcode English labels, so every locale shipped
  // an English navigation on all 680 pages regardless of page language.
  it("every locale navigation is translated, not English", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const nav = navOf(localePath(locale, "2026-readiness"));
      const expected = chrome[locale]?.Overview;
      if (expected && !nav.includes(expected)) wrong.push(locale);
    }
    expect(wrong, `locales with untranslated nav: ${wrong.join(", ")}`).toEqual([]);
  });

  it("every locale breadcrumb root is translated", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const m = readLocalePage(locale, "2026-readiness").match(
        /<nav[^>]*class="?breadcrumb"?[\s\S]*?<\/nav>/i
      );
      const expected = chrome[locale]?.Home;
      if (m && expected && !textOf(m[0]).includes(expected)) wrong.push(locale);
    }
    expect(wrong, `locales with English breadcrumb: ${wrong.join(", ")}`).toEqual([]);
  });

  it("leaves the English navigation untouched", () => {
    expect(navOf("about")).toContain("Overview");
  });

  // ISO 20022 message names are standard terminology and are deliberately not
  // translated, for the same reason TwnNm and Ctry are not.
  it("keeps ISO message identifiers in the nav", () => {
    expect(navOf(localePath("fr", "2026-readiness"))).toContain("pacs.008");
  });
});

describe("Content truth: localised reference pages", () => {
  const pages = JSON.parse(
    readFileSync(resolve(__dirname, "../data/pages-copy.json"), "utf-8")
  );

  it("scheme-changes, catalogue and design-partners exist for every locale", () => {
    const missing: string[] = [];
    for (const locale of LOCALES) {
      for (const route of ["scheme-changes", "catalogue", "design-partners"]) {
        if (!existsSync(resolve(DIST, localePath(locale, route), "index.html"))) {
          missing.push(`${locale}/${route}`);
        }
      }
    }
    expect(missing, `missing localised pages: ${missing.slice(0, 6).join(", ")}`).toEqual([]);
  });

  it("each locale renders its own translated headings", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const text = textOf(readLocalePage(locale, "catalogue"));
      const expected = pages[locale]?.cat_title;
      if (expected && !text.includes(expected)) wrong.push(locale);
    }
    expect(wrong, `locales without a translated catalogue title: ${wrong.join(", ")}`).toEqual([]);
  });

  // design-partners is the one page that makes a claim about the project's
  // own honesty ("there are no case studies here yet"). A locale that shipped
  // it in English would be the page contradicting itself.
  it("translates the design-partners body in every locale", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const text = textOf(readLocalePage(locale, "design-partners"));
      const expected = pages[locale]?.dp_h_none;
      if (!expected) {
        wrong.push(`${locale} (no translation data)`);
      } else if (!text.includes(expected)) {
        wrong.push(locale);
      }
    }
    expect(wrong, `locales without a translated design-partners page: ${wrong.join(", ")}`).toEqual([]);
  });

  it("keeps the no-case-studies statement on every design-partners page", () => {
    const missing: string[] = [];
    for (const locale of ["en", ...LOCALES]) {
      const text = textOf(readLocalePage(locale, "design-partners"));
      // The page must never be reduced to a heading: the substantive
      // explanation of why there are no case studies has to ship with it.
      if (!text.includes(pages[locale].dp_none)) missing.push(locale);
    }
    expect(missing, `design-partners missing its explanation: ${missing.join(", ")}`).toEqual([]);
  });

  // Rule summaries and remediation stay English: they are the normative rule
  // content, referenced by identifier from every interface. Localised pages
  // say so rather than leaving a reader to wonder.
  it("keeps normative rule text in English and explains why", () => {
    const fr = textOf(readLocalePage("fr", "catalogue"));
    expect(fr).toContain("Fully unstructured postal address is not accepted");
    expect(fr).toContain(pages.fr.cat_rule_text_en);
  });

  it("does not show the translation note on the English page", () => {
    expect(textOf(readPage("catalogue"))).not.toContain(pages.en.cat_rule_text_en);
  });

  // trust and accessibility are deliberately English-canonical.
  // A locale path may hold a redirect stub — that is deliberate, so a reader
  // who guessed /fr/trust/ reaches the English page rather than a 404. What it
  // must never hold is a translated copy: these pages state licensing,
  // security posture and conformance, and an unreviewed translation would
  // restate those claims in a language that cannot be verified here.
  it("serves only redirect stubs, never translations, of English-canonical pages", () => {
    for (const locale of ["fr", "de", "ja"]) {
      for (const route of ["trust", "accessibility"]) {
        const file = resolve(DIST, locale, route, "index.html");
        expect(existsSync(file), `${locale}/${route} should resolve, not 404`).toBe(true);
        const html = readFileSync(file, "utf-8");
        expect(html, `${locale}/${route} is a real page, not a stub`).toMatch(
          /<meta http-equiv="refresh"/
        );
        expect(html, `${locale}/${route} stub should point at the English page`).toContain(
          `href="https://pacs008.com/${route}/"`
        );
      }
    }
  });
});

describe("Content truth: translation data integrity", () => {
  const files = ["chrome-copy.json", "hub-copy.json", "pages-copy.json"];

  /**
   * Unicode blocks, and which locales are allowed to use them.
   *
   * A translated string that carries characters from a foreign script reads as
   * plausible text and passes every other check: nothing compares it against a
   * reference, and a build that renders it is working correctly. This caught a
   * real defect — Cyrillic spliced into a Japanese string — that no assertion
   * about presence, length or fallback would have found.
   *
   * U+0964/U+0965 are excluded from the Devanagari range: the danda sits in
   * that block but terminates sentences across Indic scripts, Bengali and
   * Hindi alike.
   */
  const SCRIPTS: Record<string, RegExp> = {
    cyrillic: /[Ѐ-ӿ]/,
    arabic: /[؀-ۿ]/,
    hebrew: /[֐-׿]/,
    devanagari: /[ऀ-ॣ०-ॿ]/,
    bengali: /[ঀ-৿]/,
    thai: /[฀-๿]/,
    hangul: /[가-힯]/,
    kana: /[぀-ヿ]/,
  };

  const EXPECTED: Record<string, string[]> = {
    ru: ["cyrillic"],
    uk: ["cyrillic"],
    ar: ["arabic"],
    he: ["hebrew"],
    hi: ["devanagari"],
    bn: ["bengali", "devanagari"],
    th: ["thai"],
    ko: ["hangul"],
    ja: ["kana"],
  };

  it("no locale string carries characters from a foreign script", () => {
    const bad: string[] = [];
    for (const file of files) {
      const data = JSON.parse(
        readFileSync(resolve(__dirname, "../data", file), "utf-8")
      );
      for (const locale of Object.keys(data)) {
        if (locale.startsWith("_") || locale === "en") continue;
        const allowed = new Set(EXPECTED[locale] ?? []);
        for (const [key, value] of Object.entries<string>(data[locale])) {
          if (typeof value !== "string") continue;
          for (const [script, pattern] of Object.entries(SCRIPTS)) {
            if (!allowed.has(script) && pattern.test(value)) {
              bad.push(`${file} ${locale}.${key}: unexpected ${script}`);
            }
          }
        }
      }
    }
    expect(bad, `foreign-script contamination: ${bad.slice(0, 5).join("; ")}`).toEqual([]);
  });
});

describe("Content truth: chrome labels containing an ampersand", () => {
  const chrome = JSON.parse(
    readFileSync(resolve(__dirname, "../data/chrome-copy.json"), "utf-8")
  );

  // Regression: fix-ssg-html unescapes the whole body — it has to, because ssg
  // entity-escapes the content fragment — which turned the layouts' `&amp;`
  // into a bare `&`. The chrome keys spell it `&amp;`, so the three labels
  // containing an ampersand matched nothing and shipped in English in all 27
  // locales, sitting between neighbours that had translated correctly.
  // Keyed off a real locale: chrome-copy holds no "en" block, because the
  // English labels live in the layout and that is their source of truth.
  const AMPERSAND_KEYS = Object.keys(chrome.fr).filter((k) => k.includes("&amp;"));

  it("has ampersand labels to test, or this suite proves nothing", () => {
    expect(AMPERSAND_KEYS.length).toBeGreaterThan(2);
  });

  it("translates every ampersand label in every locale", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const html = readLocalePage(locale, "about");
      for (const key of AMPERSAND_KEYS) {
        const value = chrome[locale]?.[key];
        if (!value) {
          wrong.push(`${locale}: no copy for ${key}`);
        } else if (!html.includes(value)) {
          wrong.push(`${locale}: ${key}`);
        }
      }
    }
    expect(wrong, `untranslated ampersand labels: ${wrong.slice(0, 6).join(", ")}`).toEqual([]);
  });

  it("leaves no English ampersand label on a locale page", () => {
    const offenders: string[] = [];
    for (const locale of LOCALES) {
      const html = readLocalePage(locale, "about");
      for (const key of AMPERSAND_KEYS) {
        // Match the unescaped form, which is what actually ships.
        const bare = key.replace(/&amp;/g, "&");
        if (html.includes(`>${bare}<`)) offenders.push(`${locale}: ${bare}`);
      }
    }
    expect(offenders, `English labels left behind: ${offenders.slice(0, 6).join(", ")}`).toEqual([]);
  });
});

describe("Content truth: footer translation", () => {
  const chrome = JSON.parse(
    readFileSync(resolve(__dirname, "../data/chrome-copy.json"), "utf-8")
  );
  const TAGLINE =
    "Open-source, scheme-aware ISO 20022 payment clearing and settlement. " +
    "Validated files, local processing, zero payload storage.";

  function footerOf(html: string): string {
    return html.match(/<footer[^>]*class="?footer"?[\s\S]*?<\/footer>/i)?.[0] ?? "";
  }

  // Regression: the footer was not in translateChrome's region list, so every
  // locale page ended in a fully English site map repeating the navigation.
  it("translates the footer headings in every locale", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const footer = textOf(footerOf(readLocalePage(locale, "about")));
      for (const key of ["Overview", "Message Specs", "Technical &amp; Help"]) {
        const value = chrome[locale]?.[key];
        if (value && !footer.includes(value)) wrong.push(`${locale}: ${key}`);
      }
    }
    expect(wrong, `English footer headings: ${wrong.slice(0, 6).join(", ")}`).toEqual([]);
  });

  it("translates the footer tagline in every locale", () => {
    const wrong = LOCALES.filter((locale) => {
      const footer = textOf(footerOf(readLocalePage(locale, "about")));
      return footer.includes(TAGLINE) || !footer.includes(chrome[locale][TAGLINE]);
    });
    expect(wrong, `English footer tagline: ${wrong.join(", ")}`).toEqual([]);
  });

  // ISO 20022 message names stay English for the same reason TwnNm and the
  // rule IDs do: they are the standard's own terminology.
  it("keeps ISO message names in the footer untranslated", () => {
    const footer = footerOf(readLocalePage("fr", "about"));
    expect(footer).toContain("pacs.008 Credit Transfer");
  });

  // The Apache Software Foundation publishes no official translation of the
  // licence, and only the English text binds. A translated licence line would
  // imply otherwise.
  it("leaves the licence line in English", () => {
    for (const locale of ["fr", "ja", "ar"]) {
      expect(textOf(footerOf(readLocalePage(locale, "about")))).toContain(
        "Released under the Apache License 2.0"
      );
    }
  });
});

describe("Content truth: author attribution", () => {
  // Required on every page in every locale. The footer credit must be a link
  // to the author's own site, not bare text.
  const AUTHOR = /href=(?:"https:\/\/sebastienrousseau\.com\/"|https:\/\/sebastienrousseau\.com\/)\s+rel=(?:"author"|author)/;

  /** Redirect stubs hold no footer; they are not pages. */
  function contentPages(): string[] {
    return allPages().filter(
      (f) => !/<meta http-equiv="refresh"/i.test(readFileSync(f, "utf-8"))
    );
  }

  it("every page links the copyright name to the author's site", () => {
    const missing = contentPages()
      .filter((f) => !AUTHOR.test(readFileSync(f, "utf-8")))
      .map((f) => f.slice(DIST.length + 1));
    expect(missing, `pages without the author link: ${missing.slice(0, 6).join(", ")}`)
      .toEqual([]);
  });

  // The three layouts render different footers — page, home and workbench —
  // and each had its own copy of the credit line.
  it("covers all three layouts, not just the page layout", () => {
    for (const route of [".", "live", localePath("fr", "about")]) {
      expect(readPage(route), `${route} has no author link`).toMatch(AUTHOR);
    }
  });

  it("keeps the credit adjacent to the copyright notice", () => {
    const text = textOf(readPage("."));
    expect(text).toMatch(/©\s*2023[–-]2026\s*Sebastien Rousseau/);
  });
});

describe("Content truth: workbench translation", () => {
  const live = JSON.parse(
    readFileSync(resolve(__dirname, "../data/live-copy.json"), "utf-8")
  );

  it("publishes the workbench in every locale", () => {
    const missing = LOCALES.filter(
      (l) => !existsSync(resolve(DIST, localePath(l, "live"), "index.html"))
    );
    expect(missing, `locales without a workbench: ${missing.join(", ")}`).toEqual([]);
  });

  // The site is required to be fully translated, so the completeness target is
  // asserted directly rather than tracked as a declared gap. The two checks are
  // kept separate: the first fails if any key is missing from the data, the
  // second if a key exists but never reaches the page.
  it("has workbench copy for every key in every locale", () => {
    const keys = Object.keys(live.en);
    const incomplete = LOCALES.map((l) => {
      const missing = keys.filter((k) => !(k in (live[l] || {})));
      return missing.length > 0 ? `${l} (${missing.length} missing)` : null;
    }).filter(Boolean);
    expect(incomplete, `incomplete workbench copy: ${incomplete.join(", ")}`).toEqual([]);
  });

  it("declares no pending locales", () => {
    expect(live._pending_locales, "the workbench is not fully translated").toEqual([]);
  });

  // The workbench is the site's main call to action. A locale rendering it in
  // English means a reader who followed "Voir en direct" left their language.
  it("renders its own language in every locale", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const text = textOf(readPage(localePath(locale, "live")));
      const expected = live[locale]?.lw_h1;
      if (!expected) wrong.push(`${locale} (declared done, no copy)`);
      else if (!text.includes(expected)) wrong.push(locale);
    }
    expect(wrong, `workbench not translated: ${wrong.join(", ")}`).toEqual([]);
  });

  // The fallback path still has to work: a key added to the English base
  // before its translations land must render English, never a blank element.
  it("falls back to English for an unknown locale rather than emitting nothing", () => {
    const text = textOf(readPage("live"));
    expect(text).toContain(live.en.lw_h1);
    expect(text).toContain(live.en.lw_h_step1);
  });

  it("leaves no English heading behind on a translated workbench", () => {
    const offenders: string[] = [];
    for (const locale of LOCALES) {
      const html = readPage(localePath(locale, "live"));
      for (const en of ["Add your payment data", "Batch address readiness scan",
                        "Inspect an existing XML file", "Validate against the XSD"]) {
        if (html.includes(`>${en}<`)) offenders.push(`${locale}: ${en}`);
      }
    }
    expect(offenders, `English left behind: ${offenders.slice(0, 6).join(", ")}`).toEqual([]);
  });

  // Values are HTML, so a translation can drop a link or turn an identifier
  // into prose while still rendering. Both must survive.
  it("keeps the inline links and ISO identifiers in every locale", () => {
    const broken: string[] = [];
    for (const locale of LOCALES) {
      const html = readPage(localePath(locale, "live"));
      for (const id of ["pacs.008.001.13", "ChrgBr", "TwnNm", "town_name", "camt.111"]) {
        if (!html.includes(id)) broken.push(`${locale}: lost ${id}`);
      }
      if (!/href="\/trust\/"/.test(html)) broken.push(`${locale}: lost the Trust Centre link`);
    }
    expect(broken, `${broken.slice(0, 6).join(", ")}`).toEqual([]);
  });

  // Replacement counts nested same-name tags to find the close tag. Getting
  // that wrong truncates mid-element and leaves orphaned close tags.
  it("leaves no data-i18n marker unreplaced and no orphaned markup", () => {
    for (const locale of ["fr", "de", "ja", "ar"]) {
      const html = readPage(localePath(locale, "live"));
      expect(html, `${locale} has an empty translated element`).not.toMatch(
        /data-i18n="[^"]+"><\/(?:p|li|h2|h3|span|button|label|option)>/
      );
    }
  });
});

describe("Content truth: social preview metadata", () => {
  // Regression: ssg derives og:description by scraping rendered page text, and
  // the scrape included an HTML comment from _layouts/page.html explaining why
  // the page title is not an <h1>. That comment was the social-share
  // description on around 760 pages.
  it("no page advertises the layout's source comment", () => {
    const offenders = allPages()
      .filter((f) => {
        const head = readFileSync(f, "utf-8").split("</head>")[0];
        return /Two h1 elements|the document's single h1/.test(head);
      })
      .map((f) => f.slice(DIST.length + 1));
    expect(offenders, `pages leaking the comment: ${offenders.slice(0, 4).join(", ")}`).toEqual([]);
  });

  // The duplicate survived because the dedupe pattern was content=["'][^"']*["'],
  // which cannot match content containing the other quote character — and the
  // scraped text contains an apostrophe.
  it("emits exactly one description meta per page", () => {
    const offenders = allPages()
      .filter((f) => {
        const head = readFileSync(f, "utf-8").split("</head>")[0];
        return (head.match(/<meta\s+name="description"/g) || []).length > 1;
      })
      .map((f) => f.slice(DIST.length + 1));
    expect(offenders, `pages with duplicate descriptions: ${offenders.slice(0, 4).join(", ")}`)
      .toEqual([]);
  });

  it("matches the social description to the page's own translated one", () => {
    for (const locale of ["fr", "ja"]) {
      const head = readPage(localePath(locale, "live")).split("</head>")[0];
      const own = head.match(/<meta name="description" content="([^"]*)"/)?.[1];
      const og = head.match(/<meta property="og:description" content="([^"]*)"/)?.[1];
      expect(og, `${locale} og:description does not match`).toBe(own);
    }
  });
});
