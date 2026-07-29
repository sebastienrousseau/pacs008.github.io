/**
 * Synchronise and verify the canonical registries.
 *
 * This is the build's truth gate: it computes the ruleset hash from the
 * registry contents (so it can never be hand-written or invented) and fails
 * the build when the registries contradict themselves.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { createHash } from "crypto";
import { join } from "path";
import { validateSlugs } from "./route-slugs.mjs";

const rootDir = process.cwd();
const dataDir = join(rootDir, "data");
const manifestPath = join(dataDir, "product-manifest.json");
const capabilityPath = join(dataDir, "capability-registry.json");
const sourcePath = join(dataDir, "source-registry.json");
const rulePath = join(dataDir, "rule-registry.json");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const capability = JSON.parse(readFileSync(capabilityPath, "utf8"));
const source = JSON.parse(readFileSync(sourcePath, "utf8"));
const ruleset = JSON.parse(readFileSync(rulePath, "utf8"));

const VALID_STATUSES = new Set(["stable", "beta", "planned"]);
const INTERFACES = ["python", "cli", "rest", "browser"];
const errors = [];

/**
 * Ruleset hash over the rule-bearing registries.
 *
 * Excludes product-manifest.json, which stores the result — including it
 * would make the hash depend on itself.
 */
function computeRulesetHash() {
  const hash = createHash("sha256");
  for (const file of [capabilityPath, sourcePath, rulePath]) {
    hash.update(readFileSync(file));
  }
  hash.update(manifest.product.ruleset_version);
  return `sha256:${hash.digest("hex")}`;
}

// --- Consistency assertions (blueprint gate G1) ---------------------------

for (const [id, cap] of Object.entries(capability.capabilities)) {
  for (const iface of INTERFACES) {
    if (!VALID_STATUSES.has(cap[iface])) {
      errors.push(`${id}.${iface} has invalid status "${cap[iface]}"`);
    }
  }
  if (!cap.evidence) {
    errors.push(`${id} has no evidence field`);
  }
}

// A capability the browser cannot perform must not be implied by a "stable"
// browser interface status.
const browserGaps = Object.entries(capability.capabilities)
  .filter(([, cap]) => cap.browser !== "stable")
  .map(([id]) => id);

if (browserGaps.length > 0 && manifest.interfaces.browser.status === "stable") {
  errors.push(
    `interfaces.browser is "stable" but these layers are not: ${browserGaps.join(", ")}`
  );
}

for (const src of source.sources) {
  for (const field of ["id", "publisher", "url", "effective_date", "verified_at"]) {
    if (!src[field]) errors.push(`source ${src.id ?? "(unnamed)"} is missing ${field}`);
  }
}

if (!/^\d+\.\d+\.\d+$/.test(manifest.product.version)) {
  errors.push(`product.version "${manifest.product.version}" is not semver`);
}

// --- Rule quality gate ----------------------------------------------------
// A rule may not be published without an owner-verifiable source, an effective
// date, and fixtures that actually exist on disk. An enforcing rule (error or
// warning severity) must additionally carry a failing fixture, so nobody can
// ship a rule that has never been seen to fire.

const sourceIds = new Set(source.sources.map((s) => s.id));
const seenRuleIds = new Set();
const profileIds = new Set(capability.schemes.map((s) => s.id));

for (const rule of ruleset.rules) {
  const where = `rule ${rule.id ?? "(unnamed)"}`;

  if (!rule.id) errors.push(`${where} has no id`);
  if (seenRuleIds.has(rule.id)) errors.push(`${where} has a duplicate id`);
  seenRuleIds.add(rule.id);

  for (const field of ["title", "layer", "profile", "severity", "summary", "remediation"]) {
    if (!rule[field]) errors.push(`${where} is missing ${field}`);
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(rule.effective_from || "")) {
    errors.push(`${where} has no valid effective_from date`);
  }

  if (!sourceIds.has(rule.source)) {
    errors.push(`${where} cites unknown source "${rule.source}"`);
  }

  if (rule.profile && !profileIds.has(rule.profile)) {
    errors.push(`${where} names unknown profile "${rule.profile}"`);
  }

  const fixtures = rule.fixtures || {};
  const all = [...(fixtures.valid || []), ...(fixtures.invalid || [])];
  for (const fixture of all) {
    if (!existsSync(join(rootDir, "static", fixture))) {
      errors.push(`${where} references missing fixture ${fixture}`);
    }
  }

  // Announced-but-unscheduled rules are exempt until they are enforced.
  const enforcing = rule.severity === "error" || rule.severity === "warning";
  if (enforcing && rule.status !== "announced") {
    if (!(fixtures.valid || []).length) errors.push(`${where} has no passing fixture`);
    if (!(fixtures.invalid || []).length) errors.push(`${where} has no failing fixture`);
  }
}

if (ruleset.ruleset_version !== manifest.product.ruleset_version) {
  errors.push(
    `rule-registry ruleset_version "${ruleset.ruleset_version}" does not match manifest "${manifest.product.ruleset_version}"`
  );
}

if (errors.length > 0) {
  console.error("Registry consistency check FAILED:");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

// --- Write derived facts --------------------------------------------------

const rulesetHash = computeRulesetHash();
if (manifest.product.ruleset_hash !== rulesetHash) {
  manifest.product.ruleset_hash = rulesetHash;
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`- Ruleset hash updated: ${rulesetHash}`);
}

console.log(`Verifying canonical registries for ${manifest.product.name} v${manifest.product.version}...`);
console.log(`- License: ${manifest.product.license}`);
console.log(`- Python: ${manifest.product.python.minimum}+`);
console.log(`- Ruleset: ${manifest.product.ruleset_version} (${rulesetHash})`);
console.log(`- Browser interface: ${manifest.interfaces.browser.status}`);
console.log(`- Verified date: ${manifest.governance.verification_date}`);

writeFileSync(
  join(dataDir, "registry-sync.json"),
  `${JSON.stringify(
    {
      version: manifest.product.version,
      ruleset: manifest.product.ruleset_version,
      ruleset_hash: rulesetHash,
      license: manifest.product.license,
      python_min: manifest.product.python.minimum,
      verification_date: manifest.governance.verification_date,
      schemes_count: capability.schemes.length,
      sources_count: source.sources.length,
      browser_status: manifest.interfaces.browser.status,
    },
    null,
    2
  )}\n`
);

// A slug is a permanent public identifier. Validate here, in the build's
// existing truth gate, so a collision or a non-ASCII path fails before any
// page is written rather than after 261 redirect stubs point at nothing.
const slugs = validateSlugs([
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja",
  "ko", "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi",
  "yo", "zh", "zh-tw",
]);

console.log(
  `Canonical manifest facts synchronised. ` +
    `Route slugs valid: ${slugs.routes} routes, ${slugs.translatedLocales} localised.`
);
