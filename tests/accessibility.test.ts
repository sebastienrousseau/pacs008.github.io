import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "fs";
import { resolve, join } from "path";

const DIST = resolve(__dirname, "../docs/.vitepress/dist");

function readPage(path: string): string {
  return readFileSync(resolve(DIST, path, "index.html"), "utf-8");
}

describe("Accessibility: landmark structure", () => {
  it("homepage should have role='main' on VPContent", () => {
    const html = readPage(".");
    expect(html).toMatch(/id="VPContent"[^>]*role="main"/);
  });

  it("doc pages should NOT have role='main' on VPContent (has native <main>)", () => {
    const html = readPage("about");
    expect(html).not.toMatch(/id="VPContent"[^>]*role="main"/);
    expect(html).toContain("<main");
  });

  it("VPDocFooter should exist on doc pages (role fixed client-side)", () => {
    const html = readPage("about");
    expect(html).toContain("VPDocFooter");
  });
});

describe("Accessibility: copy button labels", () => {
  it("code block copy buttons should have type='button'", () => {
    const html = readPage("api");
    const copyButtons = html.match(/<button[^>]*class="[^"]*\bcopy\b[^"]*"[^>]*>/g) || [];
    for (const btn of copyButtons) {
      expect(btn).toContain('type="button"');
    }
  });

  it("code block copy buttons should have aria-label", () => {
    const html = readPage("api");
    const copyButtons = html.match(/<button[^>]*class="[^"]*\bcopy\b[^"]*"[^>]*>/g) || [];
    for (const btn of copyButtons) {
      expect(btn).toContain("aria-label");
    }
  });
});

describe("Accessibility: search button", () => {
  it("search button shortcut keys should have aria-hidden", () => {
    const html = readPage(".");
    expect(html).toMatch(/DocSearch-Button-Keys[^>]*aria-hidden="true"/);
  });
});

describe("Accessibility: color contrast in HomeContent", () => {
  it("code comment color should pass WCAG AA (>= 4.5:1 on #1b1b1f)", () => {
    const css = readFileSync(
      resolve(__dirname, "../docs/.vitepress/theme/components/HomeContent.vue"),
      "utf-8"
    );
    // Extract the comment color
    const match = css.match(/\.c-comment\s*\{[^}]*color:\s*(#[0-9a-fA-F]+)/);
    expect(match).toBeTruthy();
    const hex = match![1];
    // #929297 has 5.56:1 contrast on #1b1b1f — verify it's not the old #6e6e73
    expect(hex).not.toBe("#6e6e73");
    expect(hex).toBe("#929297");
  });
});

describe("Accessibility: Shiki comment color override", () => {
  it("should override #6A737D Shiki comments for better contrast", () => {
    const css = readFileSync(
      resolve(__dirname, "../docs/.vitepress/theme/custom.css"),
      "utf-8"
    );
    expect(css).toContain("--shiki-light:#6A737D");
    expect(css).toContain("--shiki-light: #5a6370");
  });
});

describe("Accessibility: logo", () => {
  it("logo should have explicit width and height", () => {
    const html = readPage(".");
    const logoImg = html.match(/<img[^>]*logo[^>]*>/)?.[0];
    expect(logoImg).toBeTruthy();
    expect(logoImg).toContain("width=");
    expect(logoImg).toContain("height=");
  });

  it("logo should use WebP format", () => {
    const html = readPage(".");
    const logoImg = html.match(/<img[^>]*logo[^>]*>/)?.[0];
    expect(logoImg).toContain("logo.webp");
  });
});
