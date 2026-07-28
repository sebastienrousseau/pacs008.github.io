/**
 * Generate docs/trust/index.md from the canonical registries.
 *
 * The Trust page exists to answer an evaluator's questions without them
 * having to reconcile pages. Every capability and limitation it states is
 * read from data/*.json at build time, so it cannot drift from what the
 * product actually does — which is the whole point of publishing it.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const dataDir = join(process.cwd(), "data");
const manifest = JSON.parse(readFileSync(join(dataDir, "product-manifest.json"), "utf8"));
const capability = JSON.parse(readFileSync(join(dataDir, "capability-registry.json"), "utf8"));
const sources = JSON.parse(readFileSync(join(dataDir, "source-registry.json"), "utf8"));

const { product, interfaces, governance } = manifest;
const STATUS_LABEL = { stable: "Stable", beta: "Beta", planned: "Not implemented" };

/** Layers the browser cannot evaluate — published rather than hidden. */
const browserGaps = Object.values(capability.capabilities).filter(
  (c) => c.browser !== "stable"
);

const capabilityRows = Object.values(capability.capabilities)
  .map((c) => {
    const cell = (k) => STATUS_LABEL[c[k]] ?? c[k];
    return `| ${c.name} | ${cell("python")} | ${cell("cli")} | ${cell("rest")} | ${cell("browser")} |`;
  })
  .join("\n");

const limitationRows = browserGaps
  .map((c) => `| ${c.name} | ${STATUS_LABEL[c.browser]} | ${c.evidence} |`)
  .join("\n");

const messageRows = capability.messages.supported
  .map(
    (m) =>
      `| \`${m.family}\` | ${m.name} | ${m.range ?? m.latest} | ${m.versions} |`
  )
  .join("\n");

const unsupportedRows = capability.messages.unsupported
  .map((m) => `| \`${m.family}\` | Not implemented | ${m.note} |`)
  .join("\n");

const sourceRows = sources.sources
  .map(
    (s) =>
      `| ${s.id} | ${s.publisher} | [${s.title}](${s.url}) | ${s.effective_date} | ${s.verified_at} |`
  )
  .join("\n");

const page = `---
title: "Trust Centre | pacs008"
description: "How pacs008 is licensed, released, and secured, what each interface can and cannot validate, and the limitations we publish rather than hide."
lang: en-GB
layout: page
date: "${governance.verification_date}"
lastUpdated: true
image: /logo.webp
canonical: /trust/
robots: "index, follow"
draft: false
noindex: false
---

# Trust Centre

This page is generated from the same registries the product is built from, so
it cannot drift from what the software actually does. Everything below is
verified as of ${governance.verification_date}.

## At a glance

| | |
|---|---|
| Licence | ${product.license} |
| Current version | ${product.version} |
| Ruleset version | ${product.ruleset_version} |
| Ruleset hash | \`${product.ruleset_hash}\` |
| Minimum Python | ${product.python.minimum} (tested on ${product.python.tested.join(", ")}) |
| Source | [${product.repository}](${product.repository}) |
| Package | [PyPI](${product.pypi}) |
| Last verified | ${governance.verification_date} |
| Next review due | ${governance.next_review_due} |

## Who maintains this

pacs008 is maintained by Sebastien Rousseau. It is an open-source project with
a small maintainer base — at present, effectively one person.

We state that plainly because it is material to an adoption decision. A single
maintainer means limited review redundancy and no guaranteed response time
outside the published policy. If you are evaluating pacs008 for production
payment workflows, weigh that alongside the licence and the validation
limitations below, and consider pinning a known version.

## What each interface can validate

Validation is layered. A result from one layer says nothing about the others,
and no interface reports a layer it did not run.

| Layer | Python | CLI | REST | Browser |
|---|---|---|---|---|
${capabilityRows}

### Published limitations

These are the layers the browser Workbench does **not** evaluate. It is marked
${interfaces.browser.status} for this reason.

| Layer | Browser status | Why |
|---|---|---|
${limitationRows}

A passing result in the Workbench is not a statement about the layers above.
For XSD and ISO-semantic checks, use the Python library, CLI or REST service.

## Message coverage

Verified against the templates shipped in the package.

| Family | Name | Versions | Count |
|---|---|---|---|
${messageRows}

### Not implemented

We list these because their absence is easy to assume away.

| Family | Status | Note |
|---|---|---|
${unsupportedRows}

## Scheme profiles

${capability.schemes
  .map((s) => `- **${s.name}** (\`${s.id}\`) — ${s.status}, effective ${s.effective_date}`)
  .join("\n")}

## Rule sources

Scheme rules are derived from published sources rather than reproduced from
restricted material.

| ID | Publisher | Document | Effective | Verified |
|---|---|---|---|---|
${sourceRows}

## Security and release integrity

- **Vulnerability disclosure** — [security.txt](/security.txt). Report privately; do not open a public issue.
- **Software bill of materials** — [CycloneDX SBOM](/sbom.cdx.json), generated each build.
- **Licence** — [Apache-2.0](${product.repository}/blob/main/LICENSE). The Apache Software Foundation publishes the licence in English only and does not recognise translations, so the English text is the only legally binding version.
- **Security architecture** — see [Security](/security/).

## Data handling

The browser Workbench processes data locally in the page. Payment payloads are
not sent to pacs008.com, not retained, and not included in analytics — there
are no analytics. Every script is served from pacs008.com itself, and the
Content-Security-Policy restricts \`script-src\` and \`connect-src\` to
\`'self'\`. See [Privacy](/privacy/).

You remain responsible for following your own organisation's data-handling
policy. Prefer synthetic data when evaluating.

## What this project is not

- Not a bank, and not affiliated with SWIFT, the Bank of England, or any scheme operator.
- Does not transmit, route, or settle payments.
- Scheme names are used descriptively to identify the rules implemented.
- A passing validation result does not guarantee acceptance by any counterparty or production system. Validate against your own contractual and scheme obligations.
`;

const outDir = join(process.cwd(), "docs", "trust");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "index.md"), page);

console.log(
  `Trust page generated: ${Object.keys(capability.capabilities).length} layers, ` +
    `${browserGaps.length} published limitation(s), ` +
    `${capability.messages.supported.length} supported message families.`
);
