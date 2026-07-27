import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, existsSync } from "fs";
import { resolve, join } from "path";

const DIST = resolve(__dirname, "../docs/.vitepress/dist");

function readPage(path: string): string {
  const file = path === "."
    ? resolve(DIST, "index.html")
    : resolve(DIST, path, "index.html");
  return readFileSync(file, "utf-8");
}

describe("SEO: meta tags", () => {
  it("homepage should have title", () => {
    const html = readPage(".");
    expect(html).toMatch(/<title>[^<]+<\/title>/);
  });

  it("homepage should have meta description", () => {
    const html = readPage(".");
    expect(html).toMatch(/<meta[^>]*name="description"[^>]*content="[^"]+"/);
  });

  it("homepage should have canonical URL", () => {
    const html = readPage(".");
    expect(html).toMatch(/<link[^>]*rel="canonical"/);
  });

  it("homepage should have JSON-LD schema", () => {
    const html = readPage(".");
    expect(html).toContain("application/ld+json");
    expect(html).toContain("schema.org");
  });
});

describe("SEO: sitemap", () => {
  it("should have a sitemap.xml", () => {
    expect(existsSync(resolve(DIST, "sitemap.xml"))).toBe(true);
  });

  it("sitemap should contain hreflang alternates", () => {
    const sitemap = readFileSync(resolve(DIST, "sitemap.xml"), "utf-8");
    expect(sitemap).toContain("xhtml:link");
    expect(sitemap).toContain('hreflang="en"');
    expect(sitemap).toContain('hreflang="fr"');
    expect(sitemap).toContain('hreflang="ar"');
  });

  it("sitemap should contain x-default", () => {
    const sitemap = readFileSync(resolve(DIST, "sitemap.xml"), "utf-8");
    expect(sitemap).toContain('hreflang="x-default"');
  });
});

describe("SEO: robots.txt", () => {
  it("should have a robots.txt", () => {
    expect(existsSync(resolve(DIST, "robots.txt"))).toBe(true);
  });

  it("robots.txt should allow all crawlers", () => {
    const robots = readFileSync(resolve(DIST, "robots.txt"), "utf-8");
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
  });

  it("robots.txt should reference sitemap", () => {
    const robots = readFileSync(resolve(DIST, "robots.txt"), "utf-8");
    expect(robots).toContain("Sitemap:");
  });
});

describe("SEO: locale coverage", () => {
  const LOCALES = [
    "ar", "de", "es", "fr", "he", "hi", "id", "it", "ja", "ko",
    "nl", "pl", "pt", "ro", "ru", "th", "tr", "uk", "vi", "zh", "zh-tw",
  ];

  it("all 21 non-English locales should have homepage", () => {
    for (const locale of LOCALES) {
      const path = resolve(DIST, locale, "index.html");
      expect(existsSync(path), `Missing ${locale}/index.html`).toBe(true);
    }
  });
});
