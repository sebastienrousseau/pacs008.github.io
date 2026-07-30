import { describe, it, expect } from "vitest";
import { readPage, readLocalePage, readStaticJs, LOCALES } from "./helpers";

describe("Accessibility: landmark structure", () => {
  // ssg minifies the homepage (dropping attribute quotes) but leaves interior
  // pages unminified, so attribute matchers must tolerate both forms.
  it("homepage should have a main landmark with a skip target", () => {
    const html = readPage(".");
    expect(html).toMatch(/<main id="?main-content"?/);
  });

  it("interior pages should have a main landmark", () => {
    const html = readPage("about");
    expect(html).toMatch(/<main id="?main-content"?/);
  });

  it("pages should have header and footer landmarks", () => {
    const html = readPage("about");
    expect(html).toMatch(/<header class="?ap-nav"?/);
    expect(html).toMatch(/<footer class="?footer"?/);
  });

  it("every nav element should have an accessible name", () => {
    const html = readPage("about");
    const navs = html.match(/<nav[^>]*>/g) || [];
    expect(navs.length).toBeGreaterThan(0);
    for (const nav of navs) {
      expect(
        /aria-label|aria-labelledby/.test(nav),
        `nav without accessible name: ${nav}`
      ).toBe(true);
    }
  });
});

describe("Accessibility: document language", () => {
  // WCAG 2.2 SC 3.1.1 (Level A): every page must declare its own language.
  // Regression: all three layouts previously hardcoded lang="en", so all 27
  // locales shipped as English and RTL scripts had no direction.
  it("homepage should declare English", () => {
    expect(readPage(".")).toMatch(/<html lang="?en/);
  });

  it("RTL locales should declare dir=rtl", () => {
    for (const locale of ["ar", "he"]) {
      expect(readPage(locale), `${locale} should be marked RTL`).toMatch(
        /<html[^>]*dir="?rtl"?/
      );
    }
  });

  it("LTR locales should not declare dir=rtl", () => {
    for (const locale of ["fr", "de", "ja", "zh"]) {
      expect(readPage(locale), `${locale} should not be RTL`).not.toMatch(
        /<html[^>]*dir="?rtl"?/
      );
    }
  });

  it("interior locale pages should declare their language too", () => {
    expect(readLocalePage("fr", "about")).toMatch(/<html lang="?fr/);
    expect(readPage("about")).toMatch(/<html lang="?en/);
  });
});

describe("Accessibility: copy buttons", () => {
  // Copy buttons are injected at runtime by static/js/pacs008-copy.js, so the
  // static HTML contains none. Assert the contract at the source instead.
  const js = readStaticJs("pacs008-copy.js");

  it("injected copy buttons should be type=button", () => {
    expect(js).toMatch(/\.type\s*=\s*"button"/);
  });

  it("injected copy buttons should carry an aria-label", () => {
    expect(js).toMatch(/setAttribute\(\s*"aria-label"/);
  });
});

describe("Accessibility: images", () => {
  it("the nav logo should have alt text and explicit dimensions", () => {
    const html = readPage(".");
    const logo = html.match(/<img[^>]*logo[^>]*>/)?.[0];
    expect(logo).toBeTruthy();
    expect(logo).toMatch(/alt=/);
    expect(logo).toMatch(/width=/);
    expect(logo).toMatch(/height=/);
  });

  it("no image on the homepage should be missing alt", () => {
    const html = readPage(".");
    const imgs = html.match(/<img[^>]*>/g) || [];
    for (const img of imgs) {
      expect(/alt=/.test(img), `img without alt: ${img}`).toBe(true);
    }
  });
});

describe("Accessibility: decorative content", () => {
  it("flag emoji in the language switcher should be hidden from AT", () => {
    const html = readPage(".");
    const items = html.match(/<a class=ap-lang-item[^>]*>.*?<\/a>/g) || [];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      expect(
        item.includes("aria-hidden=true") || item.includes('aria-hidden="true"'),
        `switcher item without aria-hidden flag: ${item}`
      ).toBe(true);
    }
  });
});
