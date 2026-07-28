/**
 * Synchronise and verify the canonical registries.
 *
 * This is the build's truth gate: it computes the ruleset hash from the
 * registry contents (so it can never be hand-written or invented) and fails
 * the build when the registries contradict themselves.
 */
import { readFileSync, writeFileSync } from "fs";
import { createHash } from "crypto";
import { join } from "path";

const rootDir = process.cwd();
const dataDir = join(rootDir, "data");
const manifestPath = join(dataDir, "product-manifest.json");
const capabilityPath = join(dataDir, "capability-registry.json");
const sourcePath = join(dataDir, "source-registry.json");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const capability = JSON.parse(readFileSync(capabilityPath, "utf8"));
const source = JSON.parse(readFileSync(sourcePath, "utf8"));

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
  for (const file of [capabilityPath, sourcePath]) {
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

console.log("Canonical manifest facts synchronised.");
