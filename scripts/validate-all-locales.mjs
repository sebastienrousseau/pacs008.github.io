import fs from "fs";
import path from "path";
import { slugFor } from "./route-slugs.mjs";

const docsDir = path.resolve("docs");
// Canonical route names. The published path segment is per-locale — see
// data/route-slugs.json — so these are resolved through slugFor() rather than
// used as paths directly.
const expectedRoutes = [
  "",
  "about",
  "message-types",
  "message-selection",
  "api",
  "contact",
  "privacy",
  "terms",
  "editorial",
  "structured-address",
  "faq",
  "pacs-explained",
  "glossary",
  "security",
  "2026-readiness",
  "changelog"
];

const localeDirs = [
  "", // root EN
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja", "ko",
  "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi", "yo", "zh", "zh-tw"
];

let totalChecked = 0;
let errors = 0;

console.log("Starting comprehensive multi-locale validation audit...");

for (const loc of localeDirs) {
  const locPrefix = loc ? loc : "en (root)";
  for (const route of expectedRoutes) {
    const slug = route ? slugFor(loc || "en", route) : "";
    const pageRel = slug ? `${slug}/index.md` : "index.md";
    const filePath = loc ? path.join(docsDir, loc, pageRel) : path.join(docsDir, pageRel);
    totalChecked++;

    if (!fs.existsSync(filePath)) {
      console.error(`[ERROR] Missing page: ${locPrefix} -> ${pageRel}`);
      errors++;
      continue;
    }

    const content = fs.readFileSync(filePath, "utf8");

    // 1. Check Frontmatter
    if (!content.startsWith("---")) {
      console.error(`[ERROR] Invalid frontmatter start in ${locPrefix}/${pageRel}`);
      errors++;
    }

    const titleMatch = content.match(/^title:\s*(.*)$/m);
    if (!titleMatch || !titleMatch[1].trim()) {
      console.error(`[ERROR] Missing title in ${locPrefix}/${pageRel}`);
      errors++;
    } else {
      const titleVal = titleMatch[1];
      // Check for redundant locale string in titles
      if (titleVal.includes(" | Français |") || titleVal.includes(" | Deutsch |") || titleVal.includes(" | Español |") || titleVal.includes(" | Italiano |")) {
        console.error(`[ERROR] Title contains redundant locale label in ${locPrefix}/${pageRel}: ${titleVal}`);
        errors++;
      }
    }

    // 2. Check Body Content Length
    const bodyIndex = content.indexOf("---", 3);
    if (bodyIndex === -1) {
      console.error(`[ERROR] Malformed frontmatter closing in ${locPrefix}/${pageRel}`);
      errors++;
      continue;
    }

    const body = content.slice(bodyIndex + 3).trim();
    if (body.length < 50) {
      console.error(`[ERROR] Insufficient body content in ${locPrefix}/${pageRel} (${body.length} chars)`);
      errors++;
    }
  }
}

console.log(`\nLocale Validation Audit Results:`);
console.log(`- Total Files Checked: ${totalChecked}`);
console.log(`- Errors Encountered: ${errors}`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log("✅ All 28 locales 100% validated successfully with zero errors!");
}
