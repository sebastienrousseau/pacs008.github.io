/**
 * Build sitemap.xml from the pages that actually exist in public/.
 *
 * ssg's own sitemap generation depends on metadata cached in public/.meta and
 * public/.ssg-cache from a previous build. On a cold build — which is what CI
 * and every production deploy do — it emits an empty <urlset>, so the live
 * sitemap listed none of the site's 680 pages.
 *
 * Deriving it from the built tree removes that dependency entirely: whatever
 * shipped is what gets listed. It also lets the sitemap carry xhtml:link
 * alternates, which the ssg output never included even when it was populated.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative, sep } from "path";
import { routeFor, pathFor, stubPaths } from "./route-slugs.mjs";

const publicDir = join(process.cwd(), "public");
const dataDir = join(process.cwd(), "data");
const SITE = "https://pacs008.com";

const manifest = JSON.parse(
  readFileSync(join(dataDir, "product-manifest.json"), "utf8")
);
const lastmod = manifest.governance.verification_date;

const LOCALES = new Set([
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja",
  "ko", "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi",
  "yo", "zh", "zh-tw",
]);

const HREFLANG_CODE = { zh: "zh-Hans", "zh-tw": "zh-Hant" };

/** Directories that hold generated artefacts rather than pages. */
const SKIP_DIRS = new Set([
  "_csp", ".meta", ".ssg-cache", "fonts", "images", "js", "og", "fixtures", "404",
]);

/** Every built page, as a route relative to the site root. */
function collectRoutes(dir = publicDir, routes = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      collectRoutes(join(dir, entry.name), routes);
    } else if (entry.name === "index.html") {
      const rel = relative(publicDir, dir);
      routes.push(rel === "" ? "" : rel.split(sep).join("/"));
    }
  }
  return routes;
}

/**
 * Split a route into its locale and its canonical (English) path.
 *
 * Grouping has to key off the canonical path, not the published one: the
 * French and German translations of the readiness hub live at
 * /fr/preparation-2026/ and /de/bereitschaft-2026/, and keying off those would
 * file every locale as a separate logical page with no alternates at all.
 */
function splitRoute(route) {
  const parts = route ? route.split("/") : [];
  const hasLocale = parts.length > 0 && LOCALES.has(parts[0]);
  const locale = hasLocale ? parts[0] : "en";
  const published = (hasLocale ? parts.slice(1) : parts).join("/");
  return { locale, path: routeFor(locale, published) };
}

function urlFor(locale, path) {
  return `${SITE}${pathFor(locale, path)}`;
}

// Redirect stubs are real files under public/, but they are noindex and own no
// content. Listing them would ask search engines to index the very URLs the
// stubs exist to retire — and would file each locale stub of an English-only
// page as a translation of it, which is the opposite of what the stub says.
const stubs = new Set(stubPaths([...LOCALES]).map((p) => p.slice(1, -1)));

const routes = collectRoutes()
  .filter((route) => !stubs.has(route))
  .sort();

// Group by logical page so each entry can list its translations.
const byPath = new Map();
for (const route of routes) {
  const { locale, path } = splitRoute(route);
  if (!byPath.has(path)) byPath.set(path, new Set());
  byPath.get(path).add(locale);
}

const entries = routes.map((route) => {
  const { locale, path } = splitRoute(route);
  const siblings = [...byPath.get(path)].sort();

  const alternates =
    siblings.length > 1
      ? siblings
          .map(
            (l) =>
              `  <xhtml:link rel="alternate" hreflang="${
                HREFLANG_CODE[l] ?? l
              }" href="${urlFor(l, path)}"/>`
          )
          .concat(
            `  <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(
              "en",
              path
            )}"/>`
          )
          .join("\n")
      : "";

  return `<url>
  <loc>${urlFor(locale, path)}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>weekly</changefreq>
${alternates}${alternates ? "\n" : ""}</url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

writeFileSync(join(publicDir, "sitemap.xml"), xml);

const translated = [...byPath.values()].filter((s) => s.size > 1).length;
console.log(
  `Sitemap generated: ${entries.length} URLs, ${byPath.size} logical page(s), ` +
    `${translated} with alternates.`
);
