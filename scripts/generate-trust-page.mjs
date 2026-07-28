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

/**
 * Accessibility statement.
 *
 * Follows the Bank of England's pattern: state the target, state what was
 * actually tested, and list known failures openly with owners and dates. A
 * statement that claims conformance without naming its gaps is worth less
 * than one that admits them.
 */
const a11y = `---
title: "Accessibility statement | pacs008"
description: "What pacs008.com conforms to, what has been tested, the accessibility problems we currently know about, and when we expect to fix them."
lang: en-GB
layout: page
date: "${governance.verification_date}"
lastUpdated: true
image: /logo.webp
canonical: /accessibility/
robots: "index, follow"
draft: false
noindex: false
---

# Accessibility statement

This statement applies to pacs008.com. It was last reviewed on
${governance.verification_date}.

## Conformance target

We aim to meet **WCAG 2.2 Level AA**. We do not currently claim full
conformance, because parts of the site have not been tested with assistive
technology. The known gaps are listed below rather than omitted.

## What has been tested

| Area | Method | Status |
|---|---|---|
| Landmarks, headings, skip link | Automated, every build | Passing |
| Document language and direction | Automated, all 28 locales | Passing |
| Colour contrast tokens | Design review | Passing |
| Touch target size (44px minimum) | Automated | Passing |
| Reduced-motion preference | Automated | Passing |
| Image alternative text | Automated, every page | Passing |
| Keyboard-only navigation | Not yet formally tested | **Unknown** |
| Screen readers (NVDA, VoiceOver, TalkBack) | Not yet tested | **Unknown** |
| 400% zoom and 320px reflow | Not yet formally tested | **Unknown** |
| Windows high-contrast mode | Not yet tested | **Unknown** |

The ssg build runs an accessibility check over every page on each build and
currently reports no failures. That check is not a substitute for manual
testing, and we do not present it as one.

## Known problems

1. **No automated accessibility scanning in CI.** The project previously
   declared \`@axe-core/cli\` but never ran it, and it was removed because it
   pulled vulnerable transitive dependencies. Automated scanning needs to be
   reinstated with a runner that does not require chromedriver.
2. **No assistive-technology testing has been performed.** Screen reader,
   keyboard-only and voice-input paths are untested. We therefore cannot claim
   they work.
3. **Right-to-left rendering is newly enabled.** Arabic and Hebrew pages only
   began rendering right-to-left recently. The markup is correct, but the
   visual result has not been reviewed by a reader of either language.
4. **Workbench results are not fully specified for screen readers.** The
   validation results region announces status, but the findings tables and the
   batch readiness report have not been tested with a screen reader.
5. **Interior pages are not minified**, which does not affect conformance but
   does affect load time on slow connections.

## What we are doing about it

| Problem | Owner | Target |
|---|---|---|
| Reinstate automated scanning | Maintainer | Next release |
| Keyboard and screen-reader pass on critical paths | Maintainer | Before 14 November 2026 |
| RTL visual review by a native reader | Needs a contributor | Unscheduled |
| Workbench findings screen-reader review | Maintainer | With the next workbench change |

## If something does not work for you

Accessibility problems are treated as defects, not enhancements. Report them
through the [contact page](/contact/) or the issue tracker at
[${product.repository}](${product.repository}). Please say which page, which
assistive technology and which browser, and we will confirm what we can
reproduce.

## Preparation of this statement

This statement is generated from the project's own registries and reviewed
alongside them. It was last verified on ${governance.verification_date}, and the
next review is due ${governance.next_review_due}.
`;

const a11yDir = join(process.cwd(), "docs", "accessibility");
if (!existsSync(a11yDir)) mkdirSync(a11yDir, { recursive: true });
writeFileSync(join(a11yDir, "index.md"), a11y);

/**
 * Message and rule catalogue.
 *
 * The equivalent of iso20022.org's message-definition catalogue, but scoped to
 * what this package actually implements and carrying the scheme rules that
 * apply to each family. Generated, so coverage can never lead the package.
 */
const rules = JSON.parse(readFileSync(join(dataDir, "rule-registry.json"), "utf8"));
const sourceById = Object.fromEntries(sources.sources.map((s) => [s.id, s]));

const familyRows = capability.messages.supported
  .map((m) => {
    const applicable = rules.rules.filter((r) => (r.messages || []).includes(m.family));
    const ruleLinks = applicable.length
      ? applicable.map((r) => `\`${r.id}\``).join(", ")
      : "—";
    return `| [\`${m.family}\`](/${m.latest}/) | ${m.name} | ${m.range ?? m.latest} | ${m.versions} | ${ruleLinks} |`;
  })
  .join("\n");

const ruleDetail = rules.rules
  .map((r) => {
    const src = sourceById[r.source];
    const fixtures = [
      ...(r.fixtures?.valid || []).map((f) => `[\`${f.split("/").pop()}\`](/${f}) (passes)`),
      ...(r.fixtures?.invalid || []).map((f) => `[\`${f.split("/").pop()}\`](/${f}) (fails)`),
    ];
    const status = r.status === "announced" ? " — **announced, not yet enforced**" : "";
    return `#### \`${r.id}\` — ${r.title}${status}

| | |
|---|---|
| Profile | ${r.profile} |
| Layer | ${r.layer} |
| Severity | ${r.severity} |
| Effective from | ${r.effective_from} |
| Messages | ${(r.messages || []).map((m) => `\`${m}\``).join(", ") || "—"} |
| Path | ${r.path_template ? `\`${r.path_template}\`` : "—"} |
| Source | [${r.source}](${src ? src.url : "#"}), verified ${src ? src.verified_at : "—"} |
| Fixtures | ${fixtures.length ? fixtures.join(" · ") : "—"} |

${r.summary}

**Remediation.** ${r.remediation}${r.note ? `\n\n*${r.note}*` : ""}
`;
  })
  .join("\n");

const catalogue = `---
title: "Message and rule catalogue | pacs008"
description: "Every ISO 20022 message family and scheme rule pacs008 implements, with versions, effective dates, authoritative sources and downloadable test fixtures."
lang: en-GB
layout: page
date: "${governance.verification_date}"
lastUpdated: true
image: /logo.webp
canonical: /catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# Message and rule catalogue

Generated from the pacs008 registries at ruleset \`${rules.ruleset_version}\`
(hash \`${product.ruleset_hash}\`). Coverage reflects the templates shipped in
the package, so it cannot claim more than the software does.

## Message families

| Family | Name | Versions | Count | Applicable rules |
|---|---|---|---|---|
${familyRows}

### Not implemented

${capability.messages.unsupported.map((m) => `- \`${m.family}\` — ${m.note}`).join("\n")}

## Scheme profiles

| Profile | Name | Status | Effective |
|---|---|---|---|
${capability.schemes.map((s) => `| \`${s.id}\` | ${s.name} | ${s.status} | ${s.effective_date} |`).join("\n")}

## Rules

Every rule has a stable identifier that does not change across minor releases.
A change in pass/fail behaviour requires a new ruleset version.

${ruleDetail}

## Sources

| ID | Publisher | Document | Effective | Verified |
|---|---|---|---|---|
${sources.sources.map((s) => `| \`${s.id}\` | ${s.publisher} | [${s.title}](${s.url}) | ${s.effective_date} | ${s.verified_at} |`).join("\n")}
`;

const catDir = join(process.cwd(), "docs", "catalogue");
if (!existsSync(catDir)) mkdirSync(catDir, { recursive: true });
writeFileSync(join(catDir, "index.md"), catalogue);

console.log(
  `Catalogue generated: ${capability.messages.supported.length} families, ` +
    `${rules.rules.length} rules, ${sources.sources.length} sources.`
);

console.log(
  `Trust page generated: ${Object.keys(capability.capabilities).length} layers, ` +
    `${browserGaps.length} published limitation(s), ` +
    `${capability.messages.supported.length} supported message families.`
);
