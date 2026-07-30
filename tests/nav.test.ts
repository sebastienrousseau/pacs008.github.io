import { describe, it, expect } from "vitest";
import { readPage, readLocalePage, localePath, attr, textOf } from "./helpers";

describe("Navigation structure", () => {
  const html = readPage(".");

  it("should render the primary nav header", () => {
    expect(html).toMatch(/<header class=ap-nav/);
  });

  it("primary nav should have an accessible name", () => {
    expect(html).toMatch(/<nav[^>]*aria-label="Primary navigation"/);
  });

  it("should expose a skip link to the main landmark", () => {
    expect(html).toMatch(/class=skip-link[^>]*href=#main-content/);
  });

  it("should link to the core sections", () => {
    for (const route of ["/about/", "/api/", "/contact/", "/structured-address/"]) {
      expect(html, `homepage is missing a link to ${route}`).toMatch(
        attr("href", route)
      );
    }
  });

  it("should link to the live workbench", () => {
    expect(html).toMatch(attr("href", "/live/"));
  });
});

describe("Navigation: localisation", () => {
  it("French pages should link to French routes", () => {
    const html = readPage("fr");
    expect(html).toMatch(attr("href", `/${localePath("fr", "about")}/`));
    expect(html).toMatch(attr("href", `/${localePath("fr", "contact")}/`));
  });

  it("German pages should link to German routes", () => {
    const html = readPage("de");
    expect(html).toMatch(attr("href", `/${localePath("de", "about")}/`));
  });
});

describe("Homepage content sections", () => {
  const html = readPage(".");

  it("should present the workbench call to action", () => {
    expect(html).toContain("See it live");
  });

  it("should reference the November 2026 structured address milestone", () => {
    expect(html).toContain("2026");
    expect(html).toMatch(attr("href", "/structured-address/"));
  });

  it("should show the install command", () => {
    // Syntax highlighting splits the command across spans, so match the text.
    expect(textOf(html)).toContain("pip install pacs008");
  });
});

describe("Breadcrumbs", () => {
  it("interior pages should have a labelled breadcrumb nav", () => {
    const html = readPage("about");
    expect(html).toMatch(/<nav[^>]*aria-label="?Breadcrumb"?/);
  });
});
