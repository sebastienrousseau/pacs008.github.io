import { describe, it, expect } from "vitest";
import { readFileSync, existsSync, readdirSync } from "fs";
import { resolve } from "path";
import { DIST, LOCALES, readPage, readLocalePage, localePath, pageExists } from "./helpers";

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

  // Regression: ssg derives its sitemap from cache written by a previous
  // build, so on a cold build — CI, and every production deploy — it emitted
  // an empty <urlset> and the live sitemap listed none of the site's pages.
  // It is now generated from the built tree in build.sh.
  it("sitemap should list substantially all built pages", () => {
    const sitemap = readFileSync(sitemapPath, "utf-8");
    const urls = (sitemap.match(/<url>/g) || []).length;
    expect(urls, "sitemap is empty or truncated").toBeGreaterThan(500);
  });

  it("sitemap should carry hreflang alternates for translated pages", () => {
    const sitemap = readFileSync(sitemapPath, "utf-8");
    expect(sitemap).toContain("xmlns:xhtml");
    expect(sitemap).toContain('hreflang="x-default"');
    expect(sitemap).toMatch(/<xhtml:link rel="alternate" hreflang="fr"/);
  });

  it("every sitemap URL should be absolute and end with a slash", () => {
    const sitemap = readFileSync(sitemapPath, "utf-8");
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const bad = locs.filter((u) => !u.startsWith("https://pacs008.com/") || !u.endsWith("/"));
    expect(bad.slice(0, 5)).toEqual([]);
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
  const html = readLocalePage("fr", "about");
  const links = html.match(/<link rel="alternate" hreflang="[^"]+" href="[^"]+"/g) || [];

  it("translated pages should publish alternates", () => {
    expect(links.length).toBeGreaterThan(1);
  });

  it("should include a self-referencing alternate", () => {
    expect(html).toContain(
      `hreflang="fr" href="https://pacs008.com/${localePath("fr", "about")}/"`
    );
  });

  // Each locale must announce its own slug, not the English path. Announcing
  // /de/about/ for the German page would point every crawler at a noindex
  // redirect stub instead of the page that holds the content.
  it("announces each locale at its own translated URL", () => {
    expect(html).toContain('hreflang="de" href="https://pacs008.com/de/ueber-uns/"');
    expect(html).toContain('hreflang="es" href="https://pacs008.com/es/acerca-de/"');
    // Locales the registry leaves untranslated keep the English slug.
    expect(html).toContain('hreflang="ja" href="https://pacs008.com/ja/about/"');
  });

  it("should declare x-default pointing at the English page", () => {
    expect(html).toContain('hreflang="x-default" href="https://pacs008.com/about/"');
  });

  it("should never emit an empty href or hreflang", () => {
    for (const route of [".", "about", localePath("fr", "about"), "ar"]) {
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

/** Every built HTML page, including redirect stubs. */
function allPages(dir = DIST, found: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) allPages(full, found);
    else if (entry.name.endsWith(".html")) found.push(full);
  }
  return found;
}

describe("SEO: canonical URLs", () => {
  // Regression: templates/page.html emits {{base_url}}{{permalink}}, and ssg's
  // permalink for a page written as <route>/index.md is /<route>/index/. The
  // build then flattens <route>/index/index.html up to <route>/index.html, so
  // 759 of 761 pages shipped a self-referencing canonical pointing at a URL
  // that 404s. Only the English home page, on a different template with a
  // hardcoded "/", was correct.
  it("no page declares a canonical ending in /index/", () => {
    const offenders = allPages()
      .filter((file) => /rel="canonical" href="[^"]*\/index\/"/.test(readFileSync(file, "utf-8")))
      .map((file) => file.slice(DIST.length + 1));
    expect(offenders, `canonicals pointing at /index/: ${offenders.slice(0, 5).join(", ")}`)
      .toEqual([]);
  });

  it("declares the canonical each page is actually served from", () => {
    const cases: Array<[string, string]> = [
      [".", "https://pacs008.com/"],
      ["about", "https://pacs008.com/about/"],
      ["fr", "https://pacs008.com/fr/"],
      [localePath("fr", "about"), "https://pacs008.com/fr/a-propos/"],
      [localePath("ja", "about"), "https://pacs008.com/ja/about/"],
      ["fr/pacs.008.001.13", "https://pacs008.com/fr/pacs.008.001.13/"],
    ];
    for (const [route, expected] of cases) {
      expect(readPage(route), `${route} canonical`).toContain(
        `<link rel="canonical" href="${expected}">`
      );
    }
  });

  // The canonical and the self-referencing hreflang alternate are computed the
  // same way, so they must agree. If they ever disagree the page is telling
  // search engines two different things about which URL owns its content.
  it("agrees with the self-referencing hreflang alternate", () => {
    const disagreements: string[] = [];
    for (const locale of ["fr", "de", "ja", "ar", "pl"]) {
      const html = readLocalePage(locale, "about");
      const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
      const self = html.match(
        new RegExp(`hreflang="${locale}" href="([^"]+)"`)
      )?.[1];
      if (canonical !== self) disagreements.push(`${locale}: ${canonical} vs ${self}`);
    }
    expect(disagreements, `canonical/hreflang mismatch: ${disagreements.join("; ")}`)
      .toEqual([]);
  });
});
