import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

const CSS_PATH = resolve(
  __dirname,
  "../docs/.vitepress/theme/components/HomeContent.vue"
);
const CUSTOM_CSS = resolve(__dirname, "../docs/.vitepress/theme/custom.css");

describe("Responsive: HomeContent breakpoints", () => {
  const css = readFileSync(CSS_PATH, "utf-8");

  it("should have a tablet breakpoint at 768px", () => {
    expect(css).toContain("@media (max-width: 768px)");
  });

  it("should have a mobile breakpoint at 480px", () => {
    expect(css).toContain("@media (max-width: 480px)");
  });

  it("should have a desktop constraint at 1068px", () => {
    expect(css).toContain("@media (max-width: 1068px)");
  });

  it("trust grid should be 3 columns by default", () => {
    expect(css).toContain("grid-template-columns: repeat(3, 1fr)");
  });

  it("trust grid should be 2 columns on tablet", () => {
    expect(css).toContain("grid-template-columns: repeat(2, 1fr)");
  });

  it("trust grid should be 1 column on mobile", () => {
    expect(css).toMatch(/480px[\s\S]*grid-template-columns:\s*1fr/);
  });

  it("code block should have overflow-x for horizontal scroll", () => {
    expect(css).toContain("overflow-x: auto");
  });
});

describe("Responsive: Hero", () => {
  const css = readFileSync(CUSTOM_CSS, "utf-8");

  it("hero should have min-height for viewport fill", () => {
    expect(css).toContain(
      "min-height: calc(100vh - var(--vp-nav-height, 64px))"
    );
  });

  it("should have hero gradient background", () => {
    expect(css).toContain("linear-gradient");
    expect(css).toContain(".VPHomeHero");
  });

  it("hero alt button should have white text for contrast on dark bg", () => {
    expect(css).toContain(".VPHomeHero .VPButton.alt");
    expect(css).toMatch(/VPHomeHero .VPButton\.alt[\s\S]*?color:\s*#ffffff/);
  });
});

describe("Responsive: nav touch targets", () => {
  const css = readFileSync(CUSTOM_CSS, "utf-8");

  it("nav dropdown links should have min-height 44px", () => {
    expect(css).toContain("min-height: 44px");
  });
});

describe("Responsive: reduced motion", () => {
  const homeCss = readFileSync(CSS_PATH, "utf-8");

  it("HomeContent should respect prefers-reduced-motion", () => {
    expect(homeCss).toContain("prefers-reduced-motion: reduce");
  });
});
