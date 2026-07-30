/**
 * Localised URL slugs.
 *
 * Every locale page used to sit under its English path — /fr/2026-readiness/
 * served entirely French prose at an English URL. The English route stays the
 * internal identifier throughout the build (generators, tests, hreflang
 * grouping and the sitemap all key off it); only the published path segment
 * changes.
 *
 * Two directions are needed and they are not symmetrical:
 *
 *   slugFor(locale, route)   build time  — where to write the page
 *   routeFor(locale, slug)   post-build  — which logical page a built file is
 *
 * The reverse map is what lets injectHreflang group /fr/preparation-2026/ with
 * /de/bereitschaft-2026/ as translations of one another rather than treating
 * them as unrelated URLs.
 */
import { readFileSync } from "fs";

// Repo-relative, not cwd-relative: this module is imported by generators that
// are run both from the repo root and from build.sh.
const REGISTRY = JSON.parse(
  readFileSync(new URL("../data/route-slugs.json", import.meta.url), "utf8")
);

const ROUTES = REGISTRY.routes;

/** Route identifiers that have at least one localised slug. */
export const SLUGGED_ROUTES = Object.keys(ROUTES);

/**
 * Published path segment for a route in a locale.
 *
 * Falls back to the English route, which is correct for both the English site
 * and for locales the registry deliberately leaves untranslated.
 */
export function slugFor(locale, route) {
  if (locale === "en") return route;
  return ROUTES[route]?.[locale] ?? route;
}

/** Reverse maps, built once: locale -> published slug -> English route. */
const reverse = new Map();

function reverseFor(locale) {
  if (!reverse.has(locale)) {
    const map = new Map();
    for (const route of SLUGGED_ROUTES) {
      map.set(slugFor(locale, route), route);
    }
    reverse.set(locale, map);
  }
  return reverse.get(locale);
}

/**
 * English route for a published slug.
 *
 * Returns the input unchanged for anything the registry does not cover —
 * message-type routes such as pacs.008.001.13, and English-only pages such as
 * /trust/ — so callers can pass any path segment safely.
 */
export function routeFor(locale, slug) {
  if (locale === "en") return slug;
  return reverseFor(locale).get(slug) ?? slug;
}

/**
 * Site-absolute path for a route in a locale, e.g. "/fr/a-propos/".
 * Pass an empty route for a locale home page.
 */
export function pathFor(locale, route) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  if (!route) return `${prefix}/`;
  return `${prefix}/${slugFor(locale, route)}/`;
}

/**
 * Every (locale, oldPath, newPath) triple where the slug changed.
 *
 * Drives the redirect stubs. GitHub Pages cannot issue a 301, so every URL
 * this site has published since March 2026 has to keep resolving from a static
 * file or it becomes a 404 for anyone holding a bookmark or an indexed link.
 */
export function movedPaths(locales) {
  const moved = [];
  for (const locale of locales) {
    for (const route of SLUGGED_ROUTES) {
      const slug = slugFor(locale, route);
      if (slug === route) continue;
      moved.push({ locale, route, from: `/${locale}/${route}/`, to: `/${locale}/${slug}/` });
    }
  }
  return moved;
}

/**
 * Routes published only in English, for which each locale still gets a stub.
 *
 * trust and accessibility state licensing, security posture and conformance —
 * the prose is the claim, so an unreviewed translation would restate it in a
 * language nobody here can verify. live is the interactive workbench, whose UI
 * strings are not in the translation registries.
 *
 * A reader who guesses /fr/live/ still gets somewhere. The stub is noindex and
 * canonicalises to the English URL, so it is not a claim that a translation
 * exists.
 */
export const ENGLISH_ONLY_ROUTES = ["live", "trust", "accessibility"];

/**
 * Every path that holds a redirect stub rather than a page.
 *
 * Defined once because three scripts need to agree on it. generate-redirects
 * writes them; generate-sitemap must exclude them, or the sitemap asks search
 * engines to index the URLs the stubs exist to retire and reports the stubs as
 * translations of the English pages; check-page-coverage must allow them.
 */
export function stubPaths(locales) {
  return [
    ...movedPaths(locales).map((m) => m.from),
    ...locales.flatMap((l) => ENGLISH_ONLY_ROUTES.map((r) => `/${l}/${r}/`)),
  ];
}

const SLUG_SHAPE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Fail the build on a registry that cannot produce a working site.
 *
 * A slug is a permanent, externally-visible identifier: a collision silently
 * drops a page, and a non-ASCII slug ships a percent-encoded URL that the
 * script policy exists to avoid. Both are cheap to check and expensive to
 * discover in production.
 */
export function validateSlugs(locales) {
  const errors = [];

  for (const [route, byLocale] of Object.entries(ROUTES)) {
    if (!SLUG_SHAPE.test(route)) {
      errors.push(`route "${route}" is not a valid slug`);
    }
    for (const [locale, slug] of Object.entries(byLocale)) {
      if (!locales.includes(locale)) {
        errors.push(`route "${route}" maps unknown locale "${locale}"`);
      }
      if (!SLUG_SHAPE.test(slug)) {
        errors.push(
          `slug "${slug}" (${locale}/${route}) must be lowercase ASCII, digits and single hyphens`
        );
      }
    }
  }

  for (const locale of locales) {
    const seen = new Map();
    for (const route of SLUGGED_ROUTES) {
      const slug = slugFor(locale, route);
      if (seen.has(slug)) {
        errors.push(
          `locale "${locale}": routes "${seen.get(slug)}" and "${route}" both publish as "${slug}"`
        );
      }
      seen.set(slug, route);
    }
    // A translated slug that collides with another route's *English* name
    // would shadow that route's redirect stub, so the stub would overwrite a
    // real page. Check the stub paths against the published paths too.
    for (const route of SLUGGED_ROUTES) {
      const slug = slugFor(locale, route);
      if (slug !== route && seen.has(route) && seen.get(route) !== route) {
        errors.push(
          `locale "${locale}": redirect stub for "${route}" collides with the published slug of "${seen.get(route)}"`
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`route-slugs.json is invalid:\n  - ${errors.join("\n  - ")}`);
  }

  const translated = locales.filter((l) =>
    SLUGGED_ROUTES.some((r) => slugFor(l, r) !== r)
  );
  return { routes: SLUGGED_ROUTES.length, translatedLocales: translated.length };
}
