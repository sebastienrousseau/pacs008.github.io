import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import { resolve, join } from "path";
import { DIST, readPage, textOf } from "./helpers";

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
