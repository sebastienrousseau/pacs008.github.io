import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";
import { allCss, readPage, DIST } from "./helpers";

describe("Responsive: viewport", () => {
  it("pages should set a responsive viewport", () => {
    const html = readPage(".");
    expect(html).toMatch(/width=device-width/);
    expect(html).toMatch(/initial-scale=1/);
  });
});

describe("Responsive: breakpoints", () => {
  const css = allCss();

  it("should ship media queries", () => {
    expect(css).toMatch(/@media/);
  });

  it("should have a mobile breakpoint at or below 480px", () => {
    expect(css).toMatch(/max-width:\s*480px/);
  });

  it("should have a tablet breakpoint at 768px or 720px", () => {
    expect(css).toMatch(/max-width:\s*(768|720)px/);
  });

  it("should have a desktop container breakpoint", () => {
    expect(css).toMatch(/max-width:\s*(1180|1280)px/);
  });

  it("should support reflow down to narrow viewports", () => {
    expect(css).toMatch(/max-width:\s*(380|400)px/);
  });
});

describe("Responsive: overflow handling", () => {
  const css = allCss();

  it("wide content should scroll horizontally rather than break layout", () => {
    expect(css).toMatch(/overflow-x:\s*auto/);
  });
});

describe("Accessibility: touch targets", () => {
  const css = allCss();

  it("should define 44px minimum touch targets", () => {
    expect(css).toMatch(/min-height:\s*44px/);
  });
});

describe("Accessibility: reduced motion", () => {
  const css = allCss();

  it("should respect prefers-reduced-motion", () => {
    expect(css).toMatch(/prefers-reduced-motion:\s*reduce/);
  });
});

describe("Responsive: horizontal gutters", () => {
  const css = allCss();

  /** Rule bodies for a class selector, across every shipped stylesheet. */
  function rulesFor(cls: string): string[] {
    return [...css.matchAll(new RegExp(`\\.${cls}\\s*\\{([^}]*)\\}`, "g"))].map((m) => m[1]);
  }

  /** Classes the markup puts on the same element as .wrap. */
  const COMBINED_WITH_WRAP = ["content-shell", "guide-grid", "ap-nav-wrap", "footer-grid"];

  it("the container class supplies a horizontal gutter", () => {
    const wrap = rulesFor("wrap").join(" ");
    expect(wrap).toMatch(/padding(?:-inline)?\s*:\s*[^;}]*1\.75rem/);
  });

  /**
   * Regression: .content-shell set `padding: 3rem 0 4rem`. It sits on the same
   * element as .wrap, which supplies `padding: 0 1.75rem`. Equal specificity,
   * declared later, and a shorthand — so it reset the horizontal padding to
   * zero and body text sat flush against the viewport edge.
   *
   * Desktop hid it: .wrap is max-width 1180px and centred, so wide viewports
   * still had a gutter. Every phone did not. Asserting on the cascade rather
   * than on a rendered screenshot, because this is a cascade bug.
   */
  it("no class sharing an element with .wrap resets its gutter", () => {
    const offenders: string[] = [];
    for (const cls of COMBINED_WITH_WRAP) {
      for (const body of rulesFor(cls)) {
        // A `padding` shorthand overrides .wrap's inline padding wholesale.
        // padding-block and padding-inline are safe: they cannot.
        if (/(?<![\w-])padding\s*:/.test(body)) offenders.push(`.${cls} { ${body.trim()} }`);
      }
    }
    expect(
      offenders,
      `these use the padding shorthand on a .wrap element: ${offenders.slice(0, 3).join(" | ")}`
    ).toEqual([]);
  });

  it("keeps long headings inside the viewport", () => {
    // The overflowing heading in the report was a symptom of the missing
    // gutter, but a long unbroken token would overflow regardless.
    expect(css).toMatch(/\.content-body h2\{[^}]*overflow-wrap:\s*break-word/);
  });
});

describe("Styling: Skeletonic framework", () => {
  const meta = JSON.parse(
    readFileSync(resolve(__dirname, "../data/skeletonic.json"), "utf-8")
  );

  it("is vendored at the recorded version and hash", () => {
    const file = resolve(__dirname, "../static/css/skeletonic.min.css");
    expect(existsSync(file), "skeletonic.min.css is not vendored").toBe(true);
    const raw = readFileSync(file);
    expect(createHash("sha256").update(raw).digest("hex")).toBe(meta.sha256);
    expect(raw.length).toBe(meta.bytes);
  });

  it("ships and is linked from every content page", () => {
    expect(existsSync(resolve(DIST, "css/skeletonic.min.css"))).toBe(true);
    const missing = [".", "about", "live", "trust", "fr/essayer", "ar", "ja/about"]
      .filter((r) => !readPage(r).includes("skeletonic.min.css"));
    expect(missing, `pages without the framework: ${missing.join(", ")}`).toEqual([]);
  });

  /**
   * The integration relies on cascade layers: Skeletonic wraps everything in
   * @layer skeletonic, and unlayered CSS always beats layered CSS regardless of
   * specificity. That is what lets the framework style every element while the
   * site's own design keeps precedence — so if the layer wrapper ever vanished,
   * the framework would start overriding the site instead.
   */
  it("keeps its rules inside @layer so the site's own CSS still wins", () => {
    const css = readFileSync(resolve(DIST, "css/skeletonic.min.css"), "utf-8");
    expect(css).toMatch(/@layer\s+skeletonic/);
    // And the site's own stylesheet must not be inside a layer, or the
    // precedence relationship inverts.
    expect(allCss()).not.toMatch(/@layer[^;{]*\{[\s\S]*\.content-body\s*\{/);
  });

  it("loads before the site stylesheet, so source order matches intent", () => {
    const head = readPage("about").split("</head>")[0];
    const skeletonic = head.indexOf("skeletonic.min.css");
    const own = head.search(/_csp\/[a-f0-9]+\.css/);
    expect(skeletonic).toBeGreaterThan(-1);
    expect(own).toBeGreaterThan(-1);
    expect(skeletonic, "skeletonic must be linked before the site stylesheet").toBeLessThan(own);
  });

  // Self-hosted deliberately: the CSP is style-src 'self', so a CDN stylesheet
  // would be blocked and widening the policy is the worse trade.
  it("is self-hosted rather than loaded from a third party", () => {
    const head = readPage("about").split("</head>")[0];
    expect(head).toContain('href="/css/skeletonic.min.css"');
    expect(head).not.toMatch(/href="https?:\/\/[^"]*skeletonic/);
  });
});

describe("Styling: favicon", () => {
  const meta = JSON.parse(
    readFileSync(resolve(__dirname, "../data/favicon.json"), "utf-8")
  );

  /**
   * Regression, in two stages. First the icon href was site-relative while the
   * logo is on the CDN, so it 404d. Fixing that was not enough: the CDN *logo*
   * is a 127 KB, 162-path, 4654x4935 artwork — unusable at 16px — and Safari
   * does not accept SVG for apple-touch-icon at all, which is what iOS showed.
   *
   * The canonical icon is the CDN .ico, which carries 16/32/48/256.
   */
  it("declares a same-origin icon on every content page", () => {
    for (const route of [".", "about", "live", "fr/essayer", "ar", "ja/about"]) {
      const head = readPage(route).split("</head>")[0];
      expect(head, `${route} does not declare /favicon.ico`).toMatch(
        /rel="?icon"?[^>]*\/favicon\.ico|\/favicon\.ico[^>]*rel="?icon/
      );
    }
  });

  /**
   * The icon must not be declared from the CDN, and this is forced rather than
   * preferred: cloudcdn.pro has Cloudflare hotlink protection on
   * /pacs008/v1/favicon.ico, which 403s (error 1011) for any cross-site
   * Referer. Browsers always send one when fetching a favicon declared on a
   * page, so that URL can never render as a page icon — verified in Chrome,
   * where the identical bytes load from this origin and time out from the CDN.
   */
  it("never declares the hotlink-blocked CDN icon URL", () => {
    for (const route of [".", "about", "live", "fr/essayer"]) {
      const head = readPage(route).split("</head>")[0];
      expect(head, `${route} declares the blocked CDN icon`).not.toContain(
        meta.cdn_hotlink_block.url
      );
    }
  });

  // Safari needs a PNG here, and the CDN has none — this is the asset whose
  // absence caused the original report.
  it("ships an apple-touch-icon PNG, which the CDN does not provide", () => {
    expect(existsSync(resolve(DIST, "apple-touch-icon.png"))).toBe(true);
    const raw = readFileSync(resolve(DIST, "apple-touch-icon.png"));
    expect(createHash("sha256").update(raw).digest("hex")).toBe(meta.apple_touch_icon.sha256);
    for (const route of [".", "about", "live"]) {
      expect(readPage(route)).toMatch(
        /rel="?apple-touch-icon"?[^>]*\/apple-touch-icon\.png|\/apple-touch-icon\.png[^>]*rel="?apple-touch-icon/
      );
    }
  });

  // Browsers request this path regardless of declarations. The mirror must stay
  // byte-identical to the canonical asset, or the root request and the declared
  // icon would show different images.
  it("mirrors the canonical icon byte-for-byte at the root path", () => {
    const file = resolve(DIST, "favicon.ico");
    expect(existsSync(file), "/favicon.ico is missing").toBe(true);
    const raw = readFileSync(file);
    expect(raw.length).toBe(meta.root_mirror.bytes);
    expect(createHash("sha256").update(raw).digest("hex")).toBe(meta.root_mirror.sha256);
  });

  // No SVG icon anywhere: that is what Safari could not render.
  it("never declares an SVG as an icon", () => {
    for (const route of [".", "about", "live"]) {
      const head = readPage(route).split("</head>")[0];
      expect(head, `${route} declares an SVG icon`).not.toMatch(
        /rel="?(?:icon|apple-touch-icon)"?[^>]*\.svg/
      );
    }
  });

  // The nav logo is deliberately CDN-hosted; that was never the defect.
  it("leaves the nav logo on the CDN", () => {
    expect(readPage("about")).toMatch(/<img[^>]*cloudcdn\.pro[^>]*pacs008\.svg/);
  });
});
