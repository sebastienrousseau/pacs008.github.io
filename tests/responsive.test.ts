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
