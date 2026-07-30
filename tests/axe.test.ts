import { describe, it, expect } from "vitest";
import axe from "axe-core";
import { readPage, localePath } from "./helpers";

/**
 * Automated WCAG scanning over the built output.
 *
 * This replaces @axe-core/cli, which was declared but never actually run and
 * pulled chromedriver plus a chain of vulnerable transitive dependencies. The
 * axe-core library needs no browser binary.
 *
 * What this does NOT cover, and why:
 *
 *   colour contrast   needs real layout and computed styles; happy-dom cannot
 *                     resolve the stylesheets, so the rule is disabled rather
 *                     than run against nothing and reported as passing
 *   focus order       needs a real browser
 *   screen readers    needs a human
 *
 * Those gaps are stated on /accessibility/ rather than papered over.
 */

const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

/** Load built HTML into the test DOM, minus resources happy-dom would fetch. */
function mount(route: string) {
  const html = readPage(route)
    .replace(/<!doctype[^>]*>/i, "")
    .replace(/<link[^>]*rel=["']?stylesheet["']?[^>]*>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
  document.documentElement.innerHTML = html;
  return document;
}

async function scan(route: string) {
  const results = await axe.run(mount(route), {
    runOnly: { type: "tag", values: TAGS },
    rules: { "color-contrast": { enabled: false } },
  });
  return results;
}

function describeViolations(results: any) {
  return results.violations
    .map((v: any) => `${v.id} (${v.impact}, ${v.nodes.length} node(s)): ${v.help}`)
    .join(" | ");
}

// One route per template and per script direction, rather than all 678 pages —
// the templates are shared, so a template defect shows up on any instance.
const ROUTES: Array<[string, string]> = [
  ["homepage", "."],
  ["content page", "about"],
  ["API reference", "api"],
  ["workbench", "live"],
  ["trust centre", "trust"],
  ["catalogue", "catalogue"],
  ["accessibility statement", "accessibility"],
  ["readiness content", "structured-address"],
  ["RTL locale", "ar"],
  ["CJK locale", "ja"],
  ["localised content page", localePath("fr", "about")],
];

describe("Accessibility: automated WCAG scan", () => {
  for (const [label, route] of ROUTES) {
    it(`${label} has no WCAG A/AA violations`, async () => {
      const results = await scan(route);
      expect(results.violations.length, describeViolations(results)).toBe(0);
    }, 60000);
  }

  it("actually evaluates rules rather than silently passing an empty page", async () => {
    const results = await scan("about");
    expect(results.passes.length).toBeGreaterThan(10);
    expect(document.querySelectorAll("*").length).toBeGreaterThan(100);
  }, 60000);

  it("records which checks are deliberately excluded", async () => {
    const results = await scan("about");
    const ran = new Set([
      ...results.passes.map((r: any) => r.id),
      ...results.violations.map((r: any) => r.id),
      ...results.incomplete.map((r: any) => r.id),
    ]);
    // Contrast is excluded on purpose; assert it is genuinely not being run,
    // so nobody reads a green suite as covering it.
    expect(ran.has("color-contrast")).toBe(false);
  }, 60000);
});
