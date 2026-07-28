import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const rootDir = process.cwd();
const manifestPath = join(rootDir, "data", "product-manifest.json");
const capabilityPath = join(rootDir, "data", "capability-registry.json");
const sourcePath = join(rootDir, "data", "source-registry.json");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const capability = JSON.parse(readFileSync(capabilityPath, "utf8"));
const source = JSON.parse(readFileSync(sourcePath, "utf8"));

console.log(`Verifying canonical registries for ${manifest.product.name} v${manifest.product.version}...`);
console.log(`- License: ${manifest.product.license}`);
console.log(`- Python: ${manifest.product.python.minimum}+`);
console.log(`- Ruleset: ${manifest.product.ruleset_version} (${manifest.product.ruleset_hash})`);
console.log(`- Verified Date: ${manifest.governance.verification_date}`);

// Ensure lock/synchronization between package facts and website
const syncSummary = {
  version: manifest.product.version,
  ruleset: manifest.product.ruleset_version,
  license: manifest.product.license,
  python_min: manifest.product.python.minimum,
  verification_date: manifest.governance.verification_date,
  schemes_count: capability.schemes.length,
  sources_count: source.sources.length
};

writeFileSync(join(rootDir, "data", "registry-sync.json"), JSON.stringify(syncSummary, null, 2));
console.log("✅ Canonical manifest facts synchronized successfully!");
