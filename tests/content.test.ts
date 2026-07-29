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
  it("does not generate locale copies of trust or accessibility", () => {
    for (const locale of ["fr", "de", "ja"]) {
      for (const route of ["trust", "accessibility"]) {
        expect(
          existsSync(resolve(DIST, localePath(locale, route), "index.html")),
          `${locale}/${route} should stay English-canonical`
        ).toBe(false);
      }
    }
  });
});
