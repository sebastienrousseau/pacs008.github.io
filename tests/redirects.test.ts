/**
 * Every URL the site published before localised slugs landed must still work.
 *
 * The site served /fr/2026-readiness/ and 260 siblings from March 2026. Those
 * URLs are indexed and bookmarked, and GitHub Pages cannot issue a 301, so the
 * only thing standing between them and a 404 is a static stub. This suite is
 * the guard on that: it reads the same registry the build does, and asserts
 * against the built tree rather than trusting the generator's own log line.
 */
import { describe, it, expect } from "vitest";
import { readFileSync, existsSync, readdirSync } from "fs";
import { resolve } from "path";
import { DIST, LOCALES, readPage, textOf, localePath } from "./helpers";

const REGISTRY = JSON.parse(
  readFileSync(resolve(__dirname, "../data/route-slugs.json"), "utf-8")
);
const ROUTES: Record<string, Record<string, string>> = REGISTRY.routes;

/** Every route whose published slug differs from the English route. */
const moved = LOCALES.flatMap((locale) =>
  Object.keys(ROUTES)
    .filter((route) => (ROUTES[route]?.[locale] ?? route) !== route)
    .map((route) => ({ locale, route, slug: ROUTES[route][locale] }))
);

describe("Localised URLs: the migration", () => {
  it("moves a meaningful number of URLs, or this suite proves nothing", () => {
    // Guards against a registry that silently emptied: every assertion below
    // iterates `moved`, so an empty list would make them all vacuously pass.
    expect(moved.length).toBeGreaterThan(200);
  });

  it("publishes every locale page at its translated slug", () => {
    const missing = moved
      .filter(({ locale, slug }) => !existsSync(resolve(DIST, locale, slug, "index.html")))
      .map(({ locale, slug }) => `${locale}/${slug}`);
    expect(missing, `slugs with no page: ${missing.slice(0, 8).join(", ")}`).toEqual([]);
  });

  it("keeps every retired URL resolving", () => {
    const gone = moved
      .filter(({ locale, route }) => !existsSync(resolve(DIST, locale, route, "index.html")))
      .map(({ locale, route }) => `${locale}/${route}`);
    expect(gone, `retired URLs now 404: ${gone.slice(0, 8).join(", ")}`).toEqual([]);
  });
});

describe("Localised URLs: redirect stubs", () => {
  // Sample rather than parse 261 files: the stubs are generated from one
  // template, so a defect in one is a defect in all.
  const sample = ["fr/2026-readiness", "de/about", "pl/scheme-changes", "vi/faq"];

  it("points each stub at the translated page", () => {
    for (const path of sample) {
      const [locale, route] = path.split("/");
      const html = readPage(path);
      const target = `/${localePath(locale, route)}/`;
      expect(html, `${path} canonical`).toContain(
        `<link rel="canonical" href="https://pacs008.com${target}">`
      );
      expect(html, `${path} refresh`).toContain(`content="0; url=${target}"`);
    }
  });

  it("keeps stubs out of the index", () => {
    for (const path of sample) {
      expect(readPage(path), `${path} is indexable`).toMatch(
        /<meta name="robots" content="noindex, follow">/
      );
    }
  });

  // A refresh that fails silently strands the reader on a blank page, which is
  // a worse outcome than the 404 the stub exists to prevent.
  it("offers a visible link when the refresh does not fire", () => {
    for (const path of sample) {
      const [locale, route] = path.split("/");
      expect(textOf(readPage(path)).trim(), `${path} has no visible link`).toContain(
        "has moved to"
      );
      expect(readPage(path)).toContain(`<a href="/${localePath(locale, route)}/">`);
    }
  });

  it("never lists a stub in the sitemap", () => {
    const sitemap = readFileSync(resolve(DIST, "sitemap.xml"), "utf-8");
    const listed = moved
      .filter(({ locale, route }) => sitemap.includes(`<loc>https://pacs008.com/${locale}/${route}/</loc>`))
      .map(({ locale, route }) => `${locale}/${route}`);
    expect(listed, `stubs in sitemap: ${listed.slice(0, 5).join(", ")}`).toEqual([]);
  });

  it("lists the translated URL in the sitemap instead", () => {
    const sitemap = readFileSync(resolve(DIST, "sitemap.xml"), "utf-8");
    const missing = moved
      .filter(({ locale, slug }) => !sitemap.includes(`<loc>https://pacs008.com/${locale}/${slug}/</loc>`))
      .map(({ locale, slug }) => `${locale}/${slug}`);
    expect(missing, `translated URLs absent from sitemap: ${missing.slice(0, 5).join(", ")}`).toEqual([]);
  });
});

describe("Localised URLs: internal links", () => {
  const movedPaths = new Set(moved.map(({ locale, route }) => `/${locale}/${route}/`));

  /** Every built page except the stubs, which are meant to sit at old paths. */
  function contentPages(dir = DIST, found: string[] = []): string[] {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name);
      if (entry.isDirectory()) contentPages(full, found);
      else if (entry.name === "index.html") {
        const rel = full.slice(DIST.length + 1).replace(/index\.html$/, "");
        if (!movedPaths.has(`/${rel}`)) found.push(full);
      }
    }
    return found;
  }

  // The stubs keep external links alive. An *internal* link to a retired URL
  // is just a wasted hop through a noindex page, and it tells a crawler the
  // site itself believes the old URL is current.
  it("no page links to a URL the slug change retired", () => {
    const offenders: string[] = [];
    for (const file of contentPages()) {
      const html = readFileSync(file, "utf-8");
      for (const m of html.matchAll(/href="(\/[\w-]+\/[\w.-]+\/)"/g)) {
        if (movedPaths.has(m[1])) {
          offenders.push(`${file.slice(DIST.length + 1)} -> ${m[1]}`);
          break;
        }
      }
    }
    expect(offenders, `pages linking to retired URLs: ${offenders.slice(0, 6).join(", ")}`)
      .toEqual([]);
  });
});

describe("Localised URLs: slug hygiene", () => {
  it("keeps every slug copy-pasteable ASCII", () => {
    const bad: string[] = [];
    for (const [route, byLocale] of Object.entries(ROUTES)) {
      for (const [locale, slug] of Object.entries(byLocale)) {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) bad.push(`${locale}/${route} = ${slug}`);
      }
    }
    expect(bad, `slugs needing percent-encoding: ${bad.join(", ")}`).toEqual([]);
  });

  it("never publishes two routes at the same path in one locale", () => {
    const collisions: string[] = [];
    for (const locale of LOCALES) {
      const seen = new Map<string, string>();
      for (const route of Object.keys(ROUTES)) {
        const slug = ROUTES[route]?.[locale] ?? route;
        if (seen.has(slug)) collisions.push(`${locale}: ${seen.get(slug)} + ${route} -> ${slug}`);
        seen.set(slug, route);
      }
    }
    expect(collisions, `slug collisions: ${collisions.join(", ")}`).toEqual([]);
  });

  // Message-type routes are ISO 20022 identifiers, not words. Translating
  // pacs.008.001.13 would make the URL unciteable against the standard.
  it("never translates a message-type route", () => {
    expect(Object.keys(ROUTES).filter((r) => /^(pacs|pain|camt)\./.test(r))).toEqual([]);
    expect(existsSync(resolve(DIST, "fr", "pacs.008.001.13", "index.html"))).toBe(true);
  });
});

describe("Localised URLs: English-only routes", () => {
  // trust and accessibility state licensing, security posture and conformance;
  // live is the workbench, whose UI strings are not in the registries. None is
  // translated. But the workbench is the site's main call to action, and a
  // reader who reached for /fr/live/ — or was sent the link — got a 404.
  const ENGLISH_ONLY = ["live", "trust", "accessibility"];

  it("resolves the locale path for every English-only route", () => {
    const missing: string[] = [];
    for (const locale of LOCALES) {
      for (const route of ENGLISH_ONLY) {
        if (!existsSync(resolve(DIST, locale, route, "index.html"))) {
          missing.push(`${locale}/${route}`);
        }
      }
    }
    expect(missing, `404 on guessed locale paths: ${missing.slice(0, 8).join(", ")}`).toEqual([]);
  });

  it("sends the reader to the English page, not a translation", () => {
    for (const locale of ["fr", "ja", "ar"]) {
      for (const route of ENGLISH_ONLY) {
        const html = readPage(`${locale}/${route}`);
        expect(html, `${locale}/${route} target`).toContain(
          `<link rel="canonical" href="https://pacs008.com/${route}/">`
        );
        expect(html, `${locale}/${route} refresh`).toContain(`content="0; url=/${route}/"`);
      }
    }
  });

  // The stub must not read as a claim that a translation exists. If these URLs
  // entered the sitemap they would be filed as alternates of the English page,
  // which is the opposite of what the stub says.
  it("keeps them out of the sitemap", () => {
    const sitemap = readFileSync(resolve(DIST, "sitemap.xml"), "utf-8");
    const listed: string[] = [];
    for (const locale of LOCALES) {
      for (const route of ENGLISH_ONLY) {
        if (sitemap.includes(`https://pacs008.com/${locale}/${route}/`)) {
          listed.push(`${locale}/${route}`);
        }
      }
    }
    expect(listed, `English-only stubs in sitemap: ${listed.slice(0, 5).join(", ")}`).toEqual([]);
  });

  it("still lists the English page itself", () => {
    const sitemap = readFileSync(resolve(DIST, "sitemap.xml"), "utf-8");
    for (const route of ENGLISH_ONLY) {
      expect(sitemap, `${route} missing from sitemap`).toContain(
        `<loc>https://pacs008.com/${route}/</loc>`
      );
    }
  });

  // hreflang is generated before the stubs are written, which is what keeps the
  // English page from advertising 27 translations it does not have. Asserting it
  // here so the ordering in build.sh cannot be changed without a test failing.
  it("does not advertise the stubs as hreflang alternates", () => {
    const html = readPage("live");
    for (const locale of LOCALES) {
      expect(html, `live claims a ${locale} translation`).not.toContain(
        `hreflang="${locale}" href="https://pacs008.com/${locale}/live/"`
      );
    }
  });
});
