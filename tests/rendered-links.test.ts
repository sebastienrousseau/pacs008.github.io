/**
 * Links as a crawler sees them after the page's scripts have run.
 *
 * Googlebot renders pages before it extracts links, so a script that rewrites
 * an href publishes that URL as surely as the static markup does. A client-side
 * language switcher used to take the current path, swap the locale prefix and
 * keep the slug, which built /ja/adiresi-eleto/ (the Yoruba slug under the
 * Japanese prefix) and 1,200 other 404s, and sent English pages to locale
 * redirect stubs. Search Console reported every one of them.
 *
 * The static link checks in build.sh cannot see a rewrite done at runtime, so
 * this suite renders a sample of pages in happy-dom, runs the site's own
 * scripts against them, and checks every internal link that results.
 */
import { describe, it, expect } from "vitest";
import { Window } from "happy-dom";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { DIST, LOCALES, localePath } from "./helpers";

const SITE = "https://pacs008.com";

/** Routes whose slug differs between locales, plus the home page. */
const SAMPLE_ROUTES = [".", "structured-address", "design-partners", "editorial", "2026-readiness"];

/**
 * Same signature as isRedirectStub() in scripts/route-slugs.mjs. Not imported:
 * that module resolves its data file through `new URL(..., import.meta.url)`,
 * which happy-dom's URL global turns into a non-file URL under vitest.
 */
function isRedirectStub(html: string): boolean {
  return /<meta http-equiv="refresh" content="0; url=/i.test(html);
}

/** Built file for a site path, or null when nothing is served there. */
function servedFile(pathname: string): string | null {
  const rel = decodeURIComponent(pathname).replace(/^\/+|\/+$/g, "");
  const file = rel === "" ? resolve(DIST, "index.html") : resolve(DIST, rel, "index.html");
  if (existsSync(file)) return file;
  const asset = resolve(DIST, rel);
  return rel !== "" && existsSync(asset) ? asset : null;
}

const rendered = new Map<string, string[]>();

/** Rendered hrefs for a page, rendered once and shared across the tests. */
function renderedHrefs(sitePath: string): string[] {
  if (!rendered.has(sitePath)) rendered.set(sitePath, render(sitePath));
  return rendered.get(sitePath)!;
}

/** Load a built page, run its first-party scripts, return the rendered hrefs. */
function render(sitePath: string): string[] {
  const html = readFileSync(servedFile(sitePath)!, "utf-8");
  const window = new Window({
    url: `${SITE}${sitePath}`,
    settings: {
      disableJavaScriptFileLoading: true,
      disableCSSFileLoading: true,
      disableIframePageLoading: true,
      enableJavaScriptEvaluation: true,
    },
  });
  window.document.write(html);
  for (const script of window.document.querySelectorAll("script[src]")) {
    const src = script.getAttribute("src") ?? "";
    if (!src.startsWith("/")) continue;
    const file = resolve(DIST, src.replace(/^\/+/, ""));
    if (!existsSync(file)) continue;
    try {
      window.eval(readFileSync(file, "utf-8"));
    } catch {
      // A script that needs a browser API happy-dom lacks cannot rewrite links
      // either; the assertions below are about the links that did get written.
    }
  }
  const hrefs = [...window.document.querySelectorAll("a[href]")].map(
    (a) => a.getAttribute("href") ?? ""
  );
  window.happyDOM.abort();
  window.close();
  return hrefs;
}

/** Every sampled page, English and localised, by site path. */
const pages = ["en", ...LOCALES].flatMap((locale) =>
  SAMPLE_ROUTES.map((route) => {
    if (route === ".") return locale === "en" ? "/" : `/${locale}/`;
    return `/${localePath(locale, route)}/`;
  })
);

// Rendering 140 pages takes tens of seconds; the default 5s limit is for unit tests.
describe("Rendered links", { timeout: 180_000 }, () => {
  it("samples every locale, or this suite proves nothing", () => {
    expect(pages.length).toBe((LOCALES.length + 1) * SAMPLE_ROUTES.length);
    for (const page of pages) expect(servedFile(page), page).not.toBeNull();
  });

  it("never links to a page that does not exist", () => {
    const broken: string[] = [];
    for (const page of pages) {
      for (const href of renderedHrefs(page)) {
        if (!href.startsWith("/") || href.startsWith("//")) continue;
        const path = href.replace(/[?#].*$/, "");
        if (!servedFile(path)) broken.push(`${page} -> ${path}`);
      }
    }
    expect(broken, `rendered 404 links: ${broken.slice(0, 8).join(", ")}`).toEqual([]);
  });

  // A stub serves external traffic only (DECISIONS.md D-005). An internal link
  // through one wastes a hop and tells a crawler the old URL is current.
  it("never links to a redirect stub", () => {
    const viaStub: string[] = [];
    for (const page of pages) {
      for (const href of renderedHrefs(page)) {
        if (!href.startsWith("/") || href.startsWith("//")) continue;
        const file = servedFile(href.replace(/[?#].*$/, ""));
        if (file?.endsWith("index.html") && isRedirectStub(readFileSync(file, "utf-8"))) {
          viaStub.push(`${page} -> ${href}`);
        }
      }
    }
    expect(viaStub, `rendered links to stubs: ${viaStub.slice(0, 8).join(", ")}`).toEqual([]);
  });

  it("switches language to the same page at the target locale's own slug", () => {
    const wrong: string[] = [];
    for (const page of pages.filter((p) => p.includes("adres") || p.includes("structured"))) {
      const html = readFileSync(servedFile(page)!, "utf-8");
      const window = new Window({ url: `${SITE}${page}` });
      window.document.write(html.replace(/<script[\s\S]*?<\/script>/gi, ""));
      const items = [...window.document.querySelectorAll("a.ap-lang-item")];
      for (const a of items) {
        const lang = a.getAttribute("data-lang") ?? "";
        const want = `/${localePath(lang, "structured-address")}/`;
        if (a.getAttribute("href") !== want) wrong.push(`${page} [${lang}] ${a.getAttribute("href")}`);
      }
      window.close();
      expect(items.length, `${page} switcher`).toBe(LOCALES.length + 1);
    }
    expect(wrong, `switcher targets: ${wrong.slice(0, 8).join(", ")}`).toEqual([]);
  });
});
