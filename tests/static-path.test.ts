import { describe, expect, it } from "vitest";
import { resolve, sep } from "node:path";
// @ts-expect-error plain ESM script module without type declarations
import { resolvePublicPath } from "../scripts/static-path.mjs";

/**
 * The Lighthouse and mobile-overflow checks serve public/ from a local HTTP
 * server. A request path must never resolve outside public/: join() alone
 * turns "/../package.json" into the repository's own package.json.
 */
describe("resolvePublicPath", () => {
  const root = resolve("public");

  it("maps a site path into public/", () => {
    expect(resolvePublicPath(root, "/index.html")).toBe(`${root}${sep}index.html`);
    expect(resolvePublicPath(root, "/docs/?lang=fr")).toBe(`${root}${sep}docs`);
    expect(resolvePublicPath(root, "/")).toBe(root);
  });

  it.each([
    "/../package.json",
    "/%2e%2e/%2e%2e/etc/passwd",
    "/docs/../../README.md",
    "/..",
  ])("refuses %s", (path) => {
    expect(resolvePublicPath(root, path)).toBeNull();
  });

  it("refuses a sibling directory that shares the prefix", () => {
    expect(resolvePublicPath(root, "/../public-other/x")).toBeNull();
  });

  it("refuses a malformed escape", () => {
    expect(resolvePublicPath(root, "/%E0%A4%A")).toBeNull();
  });
});
