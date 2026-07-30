/**
 * Verify every internal link, and every URL the site advertises, resolves.
 *
 * The site is 1,022 files across 28 locales with post-build link rewriting, a
 * per-locale slug map and 261 redirect stubs. Every one of those mechanisms
 * edits hrefs, and a broken internal link is invisible to the page that holds
 * it — nothing fails, the reader just lands on a 404.
 *
 * Four classes of target are checked, because they fail independently:
 *
 *   href/src        what a reader or crawler follows
 *   rel=canonical   which URL a page claims owns its content
 *   hreflang        which URL each translation lives at
 *   sitemap <loc>   what the site asks to have indexed
 *
 * A canonical or hreflang pointing at a 404 is worse than a broken anchor: it
 * is the site actively telling search engines the wrong thing, and it shipped
 * on 759 pages before this check existed.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "fs";
import { join, relative, sep, posix } from "path";

const publicDir = join(process.cwd(), "public");
const SITE = "https://pacs008.com";

/** Directories holding generated artefacts that are not linkable pages. */
const SKIP_WALK = new Set([".meta", ".ssg-cache"]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_WALK.has(entry.name)) continue;
      walk(join(dir, entry.name), out);
    } else if (entry.name.endsWith(".html")) {
      out.push(join(dir, entry.name));
    }
  }
  return out;
}

/**
 * Does a site-absolute path resolve to something served?
 *
 * A directory path is served by its index.html; anything else must exist as a
 * file. Trailing-slash and no-slash forms are both accepted because GitHub
 * Pages serves both.
 */
const resolveCache = new Map();
function resolves(pathname) {
  if (resolveCache.has(pathname)) return resolveCache.get(pathname);

  const clean = decodeURIComponent(pathname.replace(/[?#].*$/, ""));
  const rel = clean.replace(/^\/+/, "").replace(/\/+$/, "");
  const target = rel === "" ? publicDir : join(publicDir, ...rel.split("/"));

  let ok = false;
  if (existsSync(target)) {
    ok = statSync(target).isDirectory()
      ? existsSync(join(target, "index.html"))
      : true;
  }
  resolveCache.set(pathname, ok);
  return ok;
}

/** Absolute site URLs count as internal; off-site URLs are not our problem. */
function internalPath(url) {
  if (url.startsWith(`${SITE}/`)) return url.slice(SITE.length);
  if (url === SITE) return "/";
  if (url.startsWith("/")) return url;
  return null;
}

const IGNORE_SCHEME = /^(https?:|mailto:|tel:|data:|javascript:|#)/i;

const files = walk(publicDir);
/** target -> { kind, pages: Set } */
const broken = new Map();

function record(kind, target, page) {
  const key = `${kind} ${target}`;
  if (!broken.has(key)) broken.set(key, { kind, target, pages: new Set() });
  broken.get(key).pages.add(page);
}

let hrefsChecked = 0;
let canonicalsChecked = 0;
let hreflangChecked = 0;

for (const file of files) {
  const page = relative(publicDir, file).split(sep).join("/");
  const html = readFileSync(file, "utf8");

  // --- href and src ------------------------------------------------------
  // Attribute values may be quoted or bare: ssg minifies some pages.
  for (const m of html.matchAll(/\b(?:href|src)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
    const raw = (m[1] ?? m[2] ?? m[3] ?? "").trim();
    if (!raw || IGNORE_SCHEME.test(raw)) continue;
    // Protocol-relative and bare-domain forms are external.
    if (raw.startsWith("//")) continue;

    const path = internalPath(raw);
    // Relative links (no leading slash) are resolved against the page's own
    // directory, which is how a browser reads them.
    const resolved =
      path ?? posix.normalize(posix.join(posix.dirname(`/${page}`), raw));

    hrefsChecked += 1;
    if (!resolves(resolved)) record("link", resolved, page);
  }

  // --- rel=canonical -----------------------------------------------------
  for (const m of html.matchAll(/<link[^>]*rel="?canonical"?[^>]*>/gi)) {
    const href = m[0].match(/href="([^"]+)"/)?.[1];
    if (!href) continue;
    const path = internalPath(href);
    canonicalsChecked += 1;
    if (path === null) record("canonical-offsite", href, page);
    else if (!resolves(path)) record("canonical", path, page);
  }

  // --- hreflang alternates ----------------------------------------------
  for (const m of html.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="[^"]*"[^>]*>/gi)) {
    const href = m[0].match(/href="([^"]+)"/)?.[1];
    if (!href) continue;
    const path = internalPath(href);
    hreflangChecked += 1;
    if (path === null) record("hreflang-offsite", href, page);
    else if (!resolves(path)) record("hreflang", path, page);
  }
}

// --- sitemap ------------------------------------------------------------
let sitemapChecked = 0;
const sitemapFile = join(publicDir, "sitemap.xml");
if (existsSync(sitemapFile)) {
  const xml = readFileSync(sitemapFile, "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = internalPath(m[1]);
    sitemapChecked += 1;
    if (path === null || !resolves(path)) record("sitemap", m[1], "sitemap.xml");
  }
  for (const m of xml.matchAll(/<xhtml:link[^>]*href="([^"]+)"/g)) {
    const path = internalPath(m[1]);
    sitemapChecked += 1;
    if (path === null || !resolves(path)) record("sitemap-alternate", m[1], "sitemap.xml");
  }
}

console.log(
  `Link check: ${files.length} pages, ${hrefsChecked} href/src, ` +
    `${canonicalsChecked} canonical, ${hreflangChecked} hreflang, ` +
    `${sitemapChecked} sitemap URLs.`
);

if (broken.size > 0) {
  console.error(`\nBroken targets: ${broken.size}\n`);
  const sorted = [...broken.values()].sort((a, b) => b.pages.size - a.pages.size);
  for (const { kind, target, pages } of sorted) {
    const examples = [...pages].slice(0, 3).join(", ");
    console.error(
      `  [${kind}] ${target}\n      referenced by ${pages.size} page(s): ${examples}` +
        (pages.size > 3 ? ", ..." : "")
    );
  }
  console.error(
    "\nA broken internal link is invisible to the page that holds it: nothing " +
      "fails, the reader just lands on a 404."
  );
  process.exit(1);
}

console.log("All internal links, canonicals, hreflang alternates and sitemap URLs resolve.");
