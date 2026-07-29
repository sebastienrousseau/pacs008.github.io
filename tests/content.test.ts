import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import { resolve, join } from "path";
import { DIST, LOCALES, readPage, textOf } from "./helpers";

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
  const LOCALES_WITH_PAGE = ["", ...LOCALES.map((l) => `${l}/`)];

  it("every locale states the exact deadline date", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readPage(`${prefix}structured-address`));
      // Either the prose date or the ISO date from the generated tables.
      return !/14 (November|novembre|noviembre|Kasım|listopada|November)|2026-11-14|14\.? ?11\.? ?2026|2026 年 11 月 14 日|2026年11月14日|14 نوفمبر 2026|14 בנובמבר 2026/.test(text);
    });
    expect(missing, `locales without an exact date: ${missing.join(", ")}`).toEqual([]);
  });

  it("every locale carries the normative rule IDs", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readPage(`${prefix}structured-address`));
      return !text.includes("CBPR-ADDR-001") || !text.includes("CHAPS-ADDR-001");
    });
    expect(missing, `locales missing rule IDs: ${missing.join(", ")}`).toEqual([]);
  });

  it("every locale lists the excepted message types", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readPage(`${prefix}structured-address`));
      return !text.includes("admi.024") || !text.includes("camt.060");
    });
    expect(missing, `locales missing exceptions: ${missing.join(", ")}`).toEqual([]);
  });

  // Regression: the page previously claimed street, building number and post
  // code all had to be structured. The rule is Town + Country as a minimum.
  it("no locale claims post code or street must be structured", () => {
    const overstating = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readPage(`${prefix}structured-address`));
      return /post code, town, and country|code postal, ville et pays|Postleitzahl, Ort und Land|código postal, localidad y país|CAP, città e paese|postcode, plaats en land/.test(text);
    });
    expect(overstating, `locales overstating the requirement: ${overstating.join(", ")}`).toEqual([]);
  });

  // Asserts the generated format-comparison table, not prose. The table is
  // what guarantees every locale says hybrid stays acceptable and only the
  // fully unstructured form is removed.
  it("every locale carries the format comparison showing hybrid accepted", () => {
    const missing = LOCALES_WITH_PAGE.filter((prefix) => {
      const text = textOf(readPage(`${prefix}structured-address`));
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
