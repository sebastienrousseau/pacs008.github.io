import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { DIST, LOCALES, readPage, pageExists } from "./helpers";

describe("SEO: meta tags", () => {
  const html = readPage(".");

  it("homepage should have a title", () => {
    expect(html).toMatch(/<title>[^<]+<\/title>/);
  });

  it("homepage should have a meta description", () => {
    expect(html).toMatch(/<meta[^>]*name="?description"?[^>]*content="[^"]+"/);
  });

  it("homepage should have a canonical URL", () => {
    expect(html).toMatch(/<link[^>]*rel="?canonical"?/);
  });

  it("homepage should have JSON-LD schema", () => {
    expect(html).toContain("application/ld+json");
    expect(html).toContain("schema.org");
  });

  it("homepage should declare a viewport", () => {
    expect(html).toMatch(/name=viewport|name="viewport"/);
  });
});

describe("SEO: sitemap", () => {
  const sitemapPath = resolve(DIST, "sitemap.xml");

  it("should have a sitemap.xml", () => {
    expect(existsSync(sitemapPath)).toBe(true);
  });

  it("sitemap should list the homepage", () => {
    const sitemap = readFileSync(sitemapPath, "utf-8");
    expect(sitemap).toContain("<loc>https://pacs008.com/</loc>");
  });

  it("sitemap should be well-formed enough to have matching urlset tags", () => {
    const sitemap = readFileSync(sitemapPath, "utf-8");
    expect(sitemap).toContain("<urlset");
    expect(sitemap).toContain("</urlset>");
    const opens = (sitemap.match(/<url>/g) || []).length;
    const closes = (sitemap.match(/<\/url>/g) || []).length;
    expect(opens).toBe(closes);
    expect(opens).toBeGreaterThan(0);
  });
});

describe("SEO: robots.txt", () => {
  const robotsPath = resolve(DIST, "robots.txt");

  it("should have a robots.txt", () => {
    expect(existsSync(robotsPath)).toBe(true);
  });

  it("robots.txt should allow crawlers", () => {
    const robots = readFileSync(robotsPath, "utf-8");
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
  });

  it("robots.txt should reference the sitemap", () => {
    const robots = readFileSync(robotsPath, "utf-8");
    expect(robots).toContain("Sitemap:");
  });
});

describe("SEO: locale coverage", () => {
  it("every generated locale should have a built homepage", () => {
    for (const locale of LOCALES) {
      expect(pageExists(locale), `Missing ${locale}/index.html`).toBe(true);
    }
  });

  it("locale homepages should declare their own language, not en", () => {
    const wrong: string[] = [];
    for (const locale of LOCALES) {
      const lang = readPage(locale).match(/<html[^>]*lang="?([\w-]+)"?/)?.[1];
      // zh-tw may legitimately serialise as zh-Hant, so compare on the prefix.
      const base = lang?.split("-")[0]?.toLowerCase();
      if (base !== locale.split("-")[0].toLowerCase()) {
        wrong.push(`${locale}=>${lang ?? "none"}`);
      }
    }
    expect(wrong, `locale pages with wrong <html lang>: ${wrong.join(", ")}`).toEqual([]);
  });
});

describe("SEO: hreflang annotations", () => {
  // Regression: the layouts emitted <link rel="alternate" href="" hreflang="">
  // on all 675 pages — invalid markup and no usable annotation. hreflang on
  // the switcher anchors does not count; search engines need <link> in <head>.
  const html = readPage("fr/about");
  const links = html.match(/<link rel="alternate" hreflang="[^"]+" href="[^"]+"/g) || [];

  it("translated pages should publish alternates", () => {
    expect(links.length).toBeGreaterThan(1);
  });

  it("should include a self-referencing alternate", () => {
    expect(html).toContain('hreflang="fr" href="https://pacs008.com/fr/about/"');
  });

  it("should declare x-default pointing at the English page", () => {
    expect(html).toContain('hreflang="x-default" href="https://pacs008.com/about/"');
  });

  it("should never emit an empty href or hreflang", () => {
    for (const route of [".", "about", "fr/about", "ar"]) {
      const page = readPage(route);
      expect(page, `${route} has an empty alternate`).not.toMatch(
        /rel="?alternate"?[^>]*(href=""|hreflang="")/
      );
    }
  });

  it("every alternate target should be a page that exists", () => {
    const dead: string[] = [];
    for (const link of links) {
      const href = link.match(/href="([^"]+)"/)?.[1];
      if (!href) continue;
      const route = href.replace("https://pacs008.com/", "").replace(/\/$/, "");
      if (!pageExists(route === "" ? "." : route)) dead.push(href);
    }
    expect(dead, `alternates pointing at missing pages: ${dead.join(", ")}`).toEqual([]);
  });
});

describe("SEO: language switcher integrity", () => {
  const html = readPage(".");
  const items = html.match(/<a class=ap-lang-item[^>]*>/g) || [];

  it("should render a language switcher", () => {
    expect(items.length).toBeGreaterThan(0);
  });

  // Regression: the switcher previously advertised 35 languages while
  // scripts/generate-locales.mjs only generates 28, so /hu/, /el/, /fa/,
  // /ta/, /te/, /mr/ and /ms/ were user-visible 404s.
  it("every language switcher link should resolve to a built page", () => {
    const dead: string[] = [];
    for (const item of items) {
      const href = item.match(/href=([^\s>]+)/)?.[1];
      if (!href) continue;
      const route = href === "/" ? "." : href.replace(/^\/|\/$/g, "");
      if (!pageExists(route)) dead.push(href);
    }
    expect(dead, `dead language switcher links: ${dead.join(", ")}`).toEqual([]);
  });

  it("switcher entry count should match the generated locale count", () => {
    // 27 non-English locales plus the English root.
    expect(items.length).toBe(LOCALES.length + 1);
  });
});
