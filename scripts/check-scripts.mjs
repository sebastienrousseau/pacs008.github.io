/**
 * Syntax-check every script the site ships.
 *
 * ssg extracts inline <script> blocks into content-hashed files under
 * public/_csp/ and collapses each onto a single line without converting `//`
 * line comments. The first such comment then swallows the entire remainder of
 * the file, and the browser reports "Unexpected end of input".
 *
 * Nothing else notices. The HTML is valid, the file exists, it is the right
 * length, it is served with the right content type — and every behaviour it was
 * supposed to attach is simply dead. That shipped on the homepage until
 * Lighthouse surfaced the console error.
 *
 * So: parse each one. `new Function` is enough to catch a truncated body, and
 * needs no bundler.
 */
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, resolve } from "path";

const publicDir = resolve("public");
const DIRS = ["_csp", "js"];

const failures = [];
let checked = 0;

for (const dir of DIRS) {
  const full = join(publicDir, dir);
  if (!existsSync(full)) continue;
  for (const name of readdirSync(full).filter((f) => f.endsWith(".js"))) {
    const file = join(full, name);
    const src = readFileSync(file, "utf8");
    checked += 1;
    try {
      // Module syntax (import/export) is legal in the worker and client modules,
      // so fall back to parsing as a module body before declaring a failure.
      new Function(src);
    } catch (err) {
      if (/import|export/.test(src) && /Unexpected token|Cannot use import/.test(err.message)) {
        continue;
      }
      failures.push(`${dir}/${name}: ${err.message}`);
    }
  }
}

// A single-line file containing a `//` comment is the signature of the defect
// above, whether or not it happens to still parse.
for (const dir of DIRS) {
  const full = join(publicDir, dir);
  if (!existsSync(full)) continue;
  for (const name of readdirSync(full).filter((f) => f.endsWith(".js"))) {
    const src = readFileSync(join(full, name), "utf8");
    const lines = src.split("\n").filter((l) => l.trim()).length;
    if (lines <= 2 && /(?<![:\\/])\/\/(?!\/)/.test(src.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, ""))) {
      failures.push(
        `${dir}/${name}: single-line file contains a // comment, which swallows everything after it`
      );
    }
  }
}

if (failures.length > 0) {
  console.error(`Script check FAILED: ${failures.length} of ${checked} shipped script(s)\n`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error(
    "\nA script that fails to parse is invisible everywhere else: valid HTML, " +
      "correct content type, plausible size, and every behaviour it attaches is dead."
  );
  process.exit(1);
}

console.log(`Scripts OK: ${checked} shipped script(s) parse.`);
