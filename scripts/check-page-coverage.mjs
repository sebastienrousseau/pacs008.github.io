/**
 * Verify the built tree holds exactly the pages it should.
 *
 * The link checker proves nothing points at a 404. This proves the converse:
 * that no page is quietly missing, and that no page exists which nothing was
 * asked to produce.
 *
 * Both directions matter and fail differently. A missing page is a hole a
 * reader can reach through the navigation. An unexpected page is usually a
 * stale directory that survived a rename — it still serves, still gets
 * indexed, and is frozen at whatever the generator last wrote there, which is
 * exactly the failure the slug migration had to prune.
 */
import { readdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import { slugFor, SLUGGED_ROUTES, ENGLISH_ONLY_ROUTES } from "./route-slugs.mjs";

const publicDir = join(process.cwd(), "public");

const LOCALES = [
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja",
  "ko", "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi",
  "yo", "zh", "zh-tw",
];

/** Routes every locale must publish. */
const LOCALE_ROUTES = [
  "2026-readiness", "about", "api", "catalogue", "changelog", "contact",
  "design-partners", "editorial", "faq", "glossary", "message-selection",
  "message-types", "pacs-explained", "privacy", "scheme-changes", "security",
  "structured-address", "terms",
];

/** ISO message-type routes, published per locale and never translated. */
const MESSAGE_ROUTES = JSON.parse(
  readFileSync(join(process.cwd(), "data", "capability-registry.json"), "utf8")
).messages.supported.map((m) => m.latest);

/** Routes deliberately English-only, with the reason recorded. */
const ENGLISH_ONLY = {
  trust: "prose is the claim itself; an unreviewed translation would restate licensing and security posture",
  accessibility: "conformance statement; same reasoning as trust",
  live: "interactive workbench; UI strings are not in the translation registries",
  404: "served by the host for any unmatched path, in one language",
};

const failures = [];

/** A route is present if <dir>/index.html exists. */
function present(...parts) {
  return existsSync(join(publicDir, ...parts, "index.html"));
}

// --- Every locale publishes every route, at its own slug -------------------
for (const locale of LOCALES) {
  if (!present(locale)) failures.push(`${locale}: no home page`);

  for (const route of LOCALE_ROUTES) {
    const slug = slugFor(locale, route);
    if (!present(locale, slug)) failures.push(`${locale}: missing ${route} (expected /${locale}/${slug}/)`);
  }
  for (const route of MESSAGE_ROUTES) {
    if (!present(locale, route)) failures.push(`${locale}: missing ${route}`);
  }
}

// --- English publishes the same routes, plus the English-only ones ---------
for (const route of [...LOCALE_ROUTES, ...MESSAGE_ROUTES, ...Object.keys(ENGLISH_ONLY)]) {
  if (!present(route)) failures.push(`en: missing ${route}`);
}
if (!existsSync(join(publicDir, "index.html"))) failures.push("en: no home page");

// --- No locale publishes an English-only route ----------------------------
// These pages state licensing, security posture and conformance, or hold UI
// strings that are not in the translation registries. A locale copy would
// restate those claims in a language that cannot be verified here.
//
// A redirect stub at the locale path is fine and deliberate — it sends a reader
// who guessed /fr/live/ to the English page instead of a 404 — so the check is
// that anything sitting there IS a stub, not that nothing sits there. Getting
// this wrong in the other direction would let a real translated copy of the
// Trust Centre ship unnoticed.
// Both markers, checked independently: the stub template emits robots before
// refresh, and a single ordered pattern silently reported every stub as a real
// page.
const isRedirectStub = (html) =>
  /<meta http-equiv="refresh"/i.test(html) &&
  /<meta name="robots" content="noindex/i.test(html);
for (const locale of LOCALES) {
  for (const route of Object.keys(ENGLISH_ONLY)) {
    // 404 has no locale stub: the host serves it for any unmatched path.
    if (route === "404") {
      if (present(locale, route)) failures.push(`${locale}: has a copy of 404`);
      continue;
    }
    if (!present(locale, route)) {
      failures.push(`${locale}: /${locale}/${route}/ has no redirect stub to the English page`);
      continue;
    }
    const html = readFileSync(join(publicDir, locale, route, "index.html"), "utf8");
    if (!isRedirectStub(html)) {
      failures.push(`${locale}: /${locale}/${route}/ is a real page, but ${route} is English-canonical`);
    }
  }
}

// --- Nothing unexpected sits at a locale's top level ----------------------
// Catches a stale directory left behind by a rename: it still serves, still
// gets indexed, and is frozen at whatever last wrote it.
const expectedSlugs = new Map();
for (const locale of LOCALES) {
  const allowed = new Set([
    ...LOCALE_ROUTES.map((r) => slugFor(locale, r)),
    ...MESSAGE_ROUTES,
    // Redirect stubs: routes this locale renamed, plus the English-only
    // routes a reader might guess a locale path for.
    ...SLUGGED_ROUTES.filter((r) => slugFor(locale, r) !== r),
    ...ENGLISH_ONLY_ROUTES,
  ]);
  expectedSlugs.set(locale, allowed);

  const dir = join(publicDir, locale);
  if (!existsSync(dir)) continue;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (!allowed.has(entry.name)) {
      failures.push(`${locale}: unexpected directory /${locale}/${entry.name}/`);
    }
  }
}

const localePages = LOCALES.length * (1 + LOCALE_ROUTES.length + MESSAGE_ROUTES.length);
const enPages = 1 + LOCALE_ROUTES.length + MESSAGE_ROUTES.length + Object.keys(ENGLISH_ONLY).length;

if (failures.length > 0) {
  console.error(`Page coverage check FAILED: ${failures.length} problem(s)\n`);
  for (const f of failures.slice(0, 40)) console.error(`  - ${f}`);
  if (failures.length > 40) console.error(`  ... and ${failures.length - 40} more`);
  process.exit(1);
}

console.log(
  `Page coverage OK: ${LOCALES.length} locales x ` +
    `${LOCALE_ROUTES.length + MESSAGE_ROUTES.length} routes (${localePages} pages), ` +
    `English ${enPages}, ${Object.keys(ENGLISH_ONLY).length} English-canonical routes ` +
    `reached from every locale by stub, none translated.`
);
