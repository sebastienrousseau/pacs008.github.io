import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const DIST = resolve(__dirname, "../docs/.vitepress/dist");

describe("Navigation consolidation", () => {
  it("should have exactly 2 dropdown menu groups on the homepage", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    const menuGroups = html.match(/VPNavBarMenuGroup/g) || [];
    // Each dropdown creates 2 mentions: one for desktop nav, one for mobile extra menu
    // VPNavBarMenuGroup appears in desktop nav only
    expect(menuGroups.length).toBe(2);
  });

  it("should have no standalone VPNavBarMenuLink items", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    // Standalone nav links (not inside dropdowns) use VPNavBarMenuLink
    const standaloneLinks = html.match(/class="[^"]*VPNavBarMenuLink[^"]*"/g) || [];
    expect(standaloneLinks.length).toBe(0);
  });

  it("should include About in Docs dropdown", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    // The nav should contain links to /about/ inside a dropdown
    expect(html).toContain('href="/about/"');
  });

  it("should include Contact in Resources dropdown", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain('href="/contact/"');
  });

  it("should include Structured Address in Resources dropdown", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain('href="/structured-address/"');
  });

  it("should use localized nav for French pages", () => {
    const html = readFileSync(resolve(DIST, "fr/index.html"), "utf-8");
    expect(html).toContain('href="/fr/about/"');
    expect(html).toContain('href="/fr/contact/"');
  });
});

describe("Homepage hero", () => {
  it("should have 'Get Started' as primary CTA", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain("Get Started");
  });

  it("should have 'View API' as secondary CTA", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain("View API");
  });

  it("should link Get Started to /about/", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain('href="/about/"');
  });

  it("should link View API to /api/", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain('href="/api/"');
  });

  it("should have alt button styling class", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    // VitePress renders secondary action with .alt class
    expect(html).toMatch(/VPButton[^"]*alt/);
  });
});

describe("Homepage features", () => {
  it("should render 4 feature cards", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    const featureItems = html.match(/class="[^"]*VPFeature\b/g) || [];
    expect(featureItems.length).toBe(4);
  });

  it("should include all 4 feature titles", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain("What it does");
    expect(html).toContain("Validation");
    expect(html).toContain("Security");
    expect(html).toContain("2026 Readiness");
  });
});

describe("Homepage custom content sections", () => {
  it("should include code snippet section", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain("See it in action");
    expect(html).toContain("pip install pacs008");
    expect(html).toContain("Pacs008Generator");
  });

  it("should include CBPR+ deadline banner", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain("CBPR+ Structured Address Deadline");
    expect(html).toContain("November 2026");
    expect(html).toContain("/structured-address/");
  });

  it("should include trust signals section", () => {
    const html = readFileSync(resolve(DIST, "index.html"), "utf-8");
    expect(html).toContain("Open-source and standards-driven");
    expect(html).toContain("ISO 20022 compliant");
    expect(html).toContain("Open source");
    expect(html).toContain("Available on PyPI");
  });
});
