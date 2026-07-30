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
  it("declares the CDN icon on every content page", () => {
    for (const route of [".", "about", "live", "fr/essayer", "ar", "ja/about"]) {
      const head = readPage(route).split("</head>")[0];
      expect(head, `${route} does not declare the CDN icon`).toContain(meta.declared);
    }
  });

  /**
   * The declaration only became viable once Cloudflare Hotlink Protection was
   * turned off for /pacs008/*. Before that it 403d (error 1011) for any
   * cross-site Referer, and browsers always send one when fetching a favicon
   * referenced by a page — so the icon never rendered while curl without a
   * Referer saw 200.
   *
   * This suite is offline and cannot prove the CDN is still reachable; that is
   * `npm run check:cdn-icon`. What it can prove is that the fallback which makes
   * a future re-block a degradation rather than an outage is still in place.
   */
  it("keeps the same-origin fallback that survives a CDN re-block", () => {
    const file = resolve(DIST, "favicon.ico");
    expect(existsSync(file), "/favicon.ico fallback is missing").toBe(true);
    const raw = readFileSync(file);
    expect(raw.length).toBe(meta.fallback_bytes ?? raw.length);
    // Identical to the declared CDN asset, so a fallback shows the same image.
    expect(createHash("sha256").update(raw).digest("hex")).toBe(meta.fallback_sha256);
  });

  it("records how to restore the CDN path if it is blocked again", () => {
    expect(meta.cdn_hotlink_block.fix).toMatch(/hotlink_protection/);
    expect(meta.cdn_hotlink_block.verify).toBe("npm run check:cdn-icon");
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

describe("Responsive: mobile navigation", () => {
  const css = allCss();

  /**
   * Regression: _layouts/try.html shipped a five-item navigation with no
   * collapse — no burger, no toggle, two media queries against page.html's
   * fourteen. Its minimum width was ~748px, so mobile Chrome widened the layout
   * viewport to fit it and zoomed the whole page out. The reported symptom was
   * text clipped at the leading edge.
   *
   * Measured properly by `npm run mobile`, which drives real device metrics over
   * CDP. This asserts the mechanism that fix depends on, so it cannot be removed
   * without a test failing even when nobody runs the browser check.
   */
  it("every layout with a nav can collapse it", () => {
    // Assert the markup, not the string: `ap-burger` also appears in the CSS,
    // so a substring check passes with the control deleted — which it did, and
    // left the menu collapsed with no way to open it.
    for (const layout of ["page", "try"]) {
      const src = readFileSync(resolve(__dirname, `../_layouts/${layout}.html`), "utf-8");
      expect(src, `${layout}.html has no burger label element`).toMatch(
        /<label[^>]*class="ap-burger"[^>]*for="ap-menu-toggle"|<label[^>]*for="ap-menu-toggle"[^>]*class="ap-burger"/
      );
      expect(src, `${layout}.html has no toggle input`).toMatch(
        /<input[^>]*id="ap-menu-toggle"/
      );
    }
  });

  // The collapse hides the menu; the control is what reopens it. Losing the
  // control is not an overflow fault, so the overflow check cannot catch it —
  // the built pages have to be asserted directly.
  it("ships the burger control on the built pages, not just in the layouts", () => {
    for (const route of [".", "about", "live", "fr/essayer"]) {
      const html = readPage(route);
      expect(html, `${route} has no burger control`).toMatch(/class="?ap-burger"?/);
      expect(html, `${route} has no toggle input`).toMatch(/id="?ap-menu-toggle"?/);
    }
  });

  it("hides the horizontal menu below the desktop breakpoint", () => {
    // The rule that actually does the collapsing.
    expect(css).toMatch(/@media[^{]*max-width:\s*1180px[^{]*\{[^]*?\.ap-burger\s*\{\s*display:\s*inline-flex/);
  });

  /**
   * Grid children default to min-width:auto and refuse to shrink below their
   * min-content width, which long tokens like `requested_execution_date` set
   * above a phone's width. Both halves are needed: the item must be allowed to
   * shrink and the content must be allowed to wrap.
   */
  it("lets grid children shrink and long tokens wrap", () => {
    expect(css).toMatch(/\.guide-grid\s*>\s*\*[^{]*\{[^}]*min-width:\s*0/);
    expect(css).toMatch(/overflow-wrap:\s*anywhere/);
  });

  // A <select> sizes to its widest <option> and does not shrink. This was
  // locale-dependent: French option text overflowed where English fitted.
  it("keeps the sample selector within the viewport", () => {
    expect(css).toMatch(/\.pill-select\s*\{[^}]*max-width:\s*100%/);
  });
});

describe("Styling: brand logo", () => {
  const logo = resolve(DIST, "logo.webp");

  /**
   * Regression: /logo.webp was a different, older mark — a teal sunburst rather
   * than the current waves-and-sun logo. It is used by the homepage nav, the
   * workbench nav and the PWA manifest icon, so three surfaces showed the wrong
   * brand while content pages showed the right one.
   */
  it("ships at the size the PWA manifest declares", () => {
    expect(existsSync(logo)).toBe(true);
    const manifest = JSON.parse(readFileSync(resolve(DIST, "manifest.json"), "utf-8"));
    const icon = (manifest.icons ?? []).find((i: any) => i.src.includes("logo.webp"));
    expect(icon, "manifest does not reference logo.webp").toBeTruthy();
    expect(icon.sizes).toBe("512x512");
  });

  it("is the current brand, not the superseded mark", () => {
    // The old file was 66,712 bytes of teal-sunburst artwork. The current mark,
    // rendered from the same source as the favicon, is far smaller. A byte-size
    // assertion is crude but it is the one check that fails if the old asset
    // returns, without adding an image-diff dependency.
    const bytes = readFileSync(logo).length;
    expect(bytes).toBeLessThan(30_000);
    expect(bytes).toBeGreaterThan(2_000);
  });
});
