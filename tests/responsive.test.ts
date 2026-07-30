import { describe, it, expect } from "vitest";
import { allCss, readPage } from "./helpers";

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
