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

/**
 * Prose for the localised reference pages, with per-key English fallback.
 *
 * Only scheme-changes and catalogue are localised. trust and accessibility stay
 * English-canonical: their prose is the claim itself — licensing, security
 * posture, what the validator does and does not check, conformance status — and
 * an unreviewed translation would restate those in languages that cannot be
 * verified here. The same reasoning already applied to the Apache licence text.
 */
const PAGES = JSON.parse(readFileSync(join(dataDir, "pages-copy.json"), "utf8"));

/** Locales the site generates, matching scripts/generate-locales.mjs. */
const LOCALES = [
  "ar", "bn", "cs", "de", "es", "fr", "ha", "he", "hi", "id", "it", "ja",
  "ko", "nl", "pl", "pt", "ro", "ru", "sv", "th", "tl", "tr", "uk", "vi",
  "yo", "zh", "zh-tw",
];

const LOCALE_LANG = {
  ar: "ar-SA", bn: "bn-BD", cs: "cs-CZ", de: "de-DE", es: "es-ES",
  fr: "fr-FR", ha: "ha-NG", he: "he-IL", hi: "hi-IN", id: "id-ID",
  it: "it-IT", ja: "ja-JP", ko: "ko-KR", nl: "nl-NL", pl: "pl-PL",
  pt: "pt-BR", ro: "ro-RO", ru: "ru-RU", sv: "sv-SE", th: "th-TH",
  tl: "tl-PH", tr: "tr-TR", uk: "uk-UA", vi: "vi-VN", yo: "yo-NG",
  zh: "zh-CN", "zh-tw": "zh-TW", en: "en-GB",
};

function pageCopy(locale) {
  return { ...PAGES.en, ...(PAGES[locale] || {}) };
}

/** Write a page for English at /route/ and for each locale at /<locale>/route/. */
function writeLocalised(route, build) {
  for (const locale of ["en", ...LOCALES]) {
    const dir =
      locale === "en"
        ? join(process.cwd(), "docs", route)
        : join(process.cwd(), "docs", locale, route);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.md"), build(locale, pageCopy(locale)));
  }
}

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
  .map((m) => {
    const tracked = m.tracking ? ` [Tracked](${m.tracking})` : "";
    return `| \`${m.family}\` | Not implemented | ${m.note}${tracked} |`;
  })
  .join("\n");

const sourceRows = sources.sources
  .map(
    (s) =>
      `| ${s.id} | ${s.publisher} | [${s.title}](${s.url}) | ${s.effective_date} | ${s.verified_at} |`
  )
  .join("\n");

/** Schemas the browser validator can use, from the generated manifest. */
const schemaManifest = JSON.parse(
  readFileSync(join(process.cwd(), "static", "schemas", "manifest.json"), "utf8")
);
const byFamily = {};
for (const entry of Object.values(schemaManifest.schemas)) {
  (byFamily[entry.family] ||= []).push(entry.messageType.split(".").pop());
}
const schemaTable =
  "| Message family | Versions available |\n|---|---|\n" +
  Object.keys(byFamily)
    .sort()
    .map((f) => `| \`${f}\` | ${byFamily[f].sort().join(", ")} |`)
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

### Browser XSD validation

The browser now performs real XSD validation, using libxml2 compiled to
WebAssembly and run in a Web Worker. It checks element order, cardinality and
datatypes — constraints that well-formedness parsing cannot see.

It is marked **beta** because the published schema set is a snapshot. Any
message type without a schema here reports **not evaluated**, never a pass.
Every result names the schema and its SHA-256 hash, so a report says exactly
what it was checked against.

${schemaTable}

Note what this does and does not mean for \`pain\` and \`camt\`: the browser can
check whether such a message is **structurally valid**, which covers reading an
incoming \`camt.110\`. The package still cannot generate or parse them. Validating
a message is not the same as supporting it, and the message coverage table above
is the one that describes support.

If the engine or the schema fails to load, the result is **not evaluated** with
the reason shown. That is deliberate — a validator that quietly reports success
when it did not run is worse than one that does not run at all.

The engine and schema are about 850 KB and download only when you ask for
validation, not on page load.

Schemas are served from this origin under the ISO 20022 terms of use, which
state the material is intended to be used and reproduced freely. See the
attribution below.

Still not evaluated in the browser: ISO semantic consistency, such as whether
a control sum matches the sum of its transactions. Use the Python library, CLI
or REST service for that. The full record is in \`DECISIONS.md\` (D-003).

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

| ID | Publisher | Document | Effective | Verified |
|---|---|---|---|---|
${sourceRows}

### ISO 20022 attribution

${sources.attribution.iso20022.statement}

ISO 20022 material is used under the [${sources.attribution.iso20022.policy}](${sources.attribution.iso20022.terms_url}),
which states that the material is intended to be used and reproduced freely by
all interested users. That policy also requires the statement above, because
the Repository changes frequently and only the official site is current.

Verified against the published terms on ${sources.attribution.iso20022.verified_at}.

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
| WCAG 2.2 A/AA rule scan (axe-core) | Automated, every test run | Passing |
| Landmarks, headings, skip link | Automated, every build | Passing |
| Document language and direction | Automated, all 28 locales | Passing |
| Form control labels and accessible names | Automated (axe) | Passing |
| Touch target size (44px minimum) | Automated | Passing |
| Reduced-motion preference | Automated | Passing |
| Image alternative text | Automated, every page | Passing |
| Skip link behaviour | Manual, in a real browser | Passing |
| Visible focus indicator | Manual, in a real browser | Passing |
| Right-to-left layout (Arabic) | Manual, in a real browser | Passing — no horizontal overflow |
| Colour contrast | **Not covered by the automated scan** | Design review only |
| Full keyboard traversal | Attempted; could not be driven reliably | **Unknown** |
| Screen readers (NVDA, VoiceOver, TalkBack) | Not tested | **Unknown** |
| 400% zoom and 320px reflow | Attempted; viewport could not be resized | **Unknown** |
| Windows high-contrast mode | Not tested | **Unknown** |

The axe-core scan runs against the built HTML for one page per template and
per script direction, including right-to-left and CJK locales. It found two
critical defects when first introduced — an unlabelled file input and a select
element with no accessible name, both in the workbench — which have been
fixed.

Automated scanning is a floor, not a ceiling. It cannot tell you whether a
page is usable.

## Known problems

1. **Colour contrast is not automatically verified.** The scan runs without a
   real layout engine, so contrast cannot be computed. Rather than run the rule
   against unstyled markup and report a meaningless pass, it is disabled and
   listed here. Contrast is currently checked by design review only.
2. **No assistive-technology testing has been performed.** Screen reader,
   keyboard-only and voice-input paths are untested. We therefore cannot claim
   they work.
3. **Right-to-left rendering has not been reviewed by a native reader.** A
   browser check of the Arabic homepage confirms \`dir="rtl"\` applies, the
   navigation mirrors correctly and there is no horizontal overflow. That
   establishes the layout is not broken. It does not establish that the
   typography, line breaking or terminology read well to an Arabic or Hebrew
   speaker, and we do not claim it does.
4. **Workbench results are not fully specified for screen readers.** The
   validation results region announces status, but the findings tables, the
   batch readiness report and the XML inspection output have not been tested
   with a screen reader.
5. **Interior pages are not minified**, which does not affect conformance but
   does affect load time on slow connections.

## What we are doing about it

| Problem | Owner | Target |
|---|---|---|
| Automated WCAG scanning | Maintainer | **Done** — axe-core, every test run |
| Colour contrast in an automated run | Maintainer | Needs a real browser runner |
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

writeLocalised("catalogue", (locale, c) => {
  const famRows = capability.messages.supported
    .map((m) => {
      const applicable = rules.rules.filter((r) => (r.messages || []).includes(m.family));
      const ruleLinks = applicable.length ? applicable.map((r) => `\`${r.id}\``).join(", ") : "—";
      return `| [\`${m.family}\`](${locale === "en" ? "" : `/${locale}`}/${m.latest}/) | ${m.name} | ${m.range ?? m.latest} | ${m.versions} | ${ruleLinks} |`;
    })
    .join("\n");

  const detail = rules.rules
    .map((r) => {
      const src = sourceById[r.source];
      const fx = [
        ...(r.fixtures?.valid || []).map((f) => `[\`${f.split("/").pop()}\`](/${f}) (${c.cat_passes})`),
        ...(r.fixtures?.invalid || []).map((f) => `[\`${f.split("/").pop()}\`](/${f}) (${c.cat_fails})`),
      ];
      const st = r.status === "announced" ? ` — **${c.cat_announced}**` : "";
      return `#### \`${r.id}\` — ${r.title}${st}

| | |
|---|---|
| ${c.cat_th_profile} | ${r.profile} |
| ${c.cat_l_layer} | ${r.layer} |
| ${c.cat_l_severity} | ${r.severity} |
| ${c.cat_l_effective_from} | ${r.effective_from} |
| ${c.cat_l_messages} | ${(r.messages || []).map((m) => `\`${m}\``).join(", ") || "—"} |
| ${c.cat_l_path} | ${r.path_template ? `\`${r.path_template}\`` : "—"} |
| ${c.cat_th_source} | [${r.source}](${src ? src.url : "#"}), ${c.cat_th_verified.toLowerCase()} ${src ? src.verified_at : "—"} |
| ${c.cat_l_fixtures} | ${fx.length ? fx.join(" · ") : "—"} |

${r.summary}

**${c.cat_l_remediation}.** ${r.remediation}${r.note ? `\n\n*${r.note}*` : ""}
`;
    })
    .join("\n");

  return `---
title: "${c.cat_title} | pacs008"
description: "${c.cat_coverage}"
lang: ${LOCALE_LANG[locale]}
layout: page
date: "${governance.verification_date}"
lastUpdated: true
image: /logo.webp
canonical: ${locale === "en" ? "/catalogue/" : `/${locale}/catalogue/`}
robots: "index, follow"
draft: false
noindex: false
---

# ${c.cat_title}

${c.cat_generated} \`${rules.ruleset_version}\` (hash \`${product.ruleset_hash}\`).
${c.cat_coverage}

## ${c.cat_h_families}

| ${c.cat_th_family} | ${c.cat_th_name} | ${c.cat_th_versions} | ${c.cat_th_count} | ${c.cat_th_rules} |
|---|---|---|---|---|
${famRows}

### ${c.cat_h_notimpl}

${c.cat_notimpl_intro}

| ${c.cat_th_family} | ${c.cat_th_status} | ${c.cat_th_note} |
|---|---|---|
${unsupportedRows}

## ${c.cat_h_profiles}

| ${c.cat_th_profile} | ${c.cat_th_name} | ${c.cat_th_status} | ${c.cat_th_effective} |
|---|---|---|---|
${capability.schemes.map((x) => `| \`${x.id}\` | ${x.name} | ${x.status} | ${x.effective_date} |`).join("\n")}

## ${c.cat_h_rules}

${c.cat_rules_intro}

${locale === "en" ? "" : `*${c.cat_rule_text_en}*\n`}
${detail}

## ${c.cat_h_sources}

| ${c.cat_th_source} | ${c.cat_th_publisher} | ${c.cat_th_document} | ${c.cat_th_effective} | ${c.cat_th_verified} |
|---|---|---|---|---|
${sources.sources.map((x) => `| \`${x.id}\` | ${x.publisher} | [${x.title}](${x.url}) | ${x.effective_date} | ${x.verified_at} |`).join("\n")}

## ${c.cat_h_attr}

${sources.attribution.iso20022.statement}

${c.cat_attr_note} [${sources.attribution.iso20022.policy}](${sources.attribution.iso20022.terms_url}).
`;
});

console.log(
  `Catalogue generated: ${capability.messages.supported.length} families, ` +
    `${rules.rules.length} rules, ${sources.sources.length} sources.`
);

/**
 * Scheme change log and Atom feed.
 *
 * Swift moves to an annual Standards Release cycle from November 2026, so
 * scheme rules will change every year. A dated, citable log is the difference
 * between a one-off compliance page and a resource people subscribe to.
 *
 * Entries are derived from rule effective dates, so publishing a rule
 * publishes its change. Nothing is hand-maintained.
 */
const byDate = {};
for (const rule of rules.rules) {
  (byDate[rule.effective_from] ||= []).push(rule);
}
const dates = Object.keys(byDate).sort().reverse();

const logSections = dates
  .map((date) => {
    const items = byDate[date]
      .map((r) => {
        const announced = r.status === "announced" ? " *(announced, not yet enforced)*" : "";
        return `- \`${r.id}\` — ${r.title} (${r.profile}, ${r.severity})${announced}`;
      })
      .join("\n");
    return `### ${date}\n\n${items}\n`;
  })
  .join("\n");

writeLocalised("scheme-changes", (locale, c) => `---
title: "${c.cl_title} | pacs008"
description: "${c.cl_intro}"
lang: ${LOCALE_LANG[locale]}
layout: page
date: "${governance.verification_date}"
lastUpdated: true
image: /logo.webp
canonical: ${locale === "en" ? "/scheme-changes/" : `/${locale}/scheme-changes/`}
robots: "index, follow"
draft: false
noindex: false
---

# ${c.cl_title}

${c.cl_intro}

${c.cl_generated} \`${rules.ruleset_version}\` (hash \`${product.ruleset_hash}\`).

${c.cl_annual}

${c.cl_subscribe}: [Atom feed](/scheme-changes.xml).

## ${c.cl_h_versioning}

${c.cl_versioning}

${logSections}

## ${c.cl_h_pin}

${c.cl_pin}
`);

/**
 * Design partner programme.
 *
 * Deliberately a route for collecting real stories, not a page of invented
 * ones. There are currently no case studies, and the page says so. A
 * fabricated testimonial would undo the provenance work the rest of the site
 * exists to support.
 */
writeLocalised("design-partners", (locale, c) => `---
title: "${c.dp_title} | pacs008"
description: "${c.dp_what}"
lang: ${LOCALE_LANG[locale]}
layout: page
date: "${governance.verification_date}"
lastUpdated: true
image: /logo.webp
canonical: ${locale === "en" ? "/design-partners/" : `/${locale}/design-partners/`}
robots: "index, follow"
draft: false
noindex: false
---

# ${c.dp_title}

## ${c.dp_h_none}

${c.dp_none}

${c.dp_none2}

## ${c.dp_h_what}

${c.dp_what}

## ${c.dp_h_ask}

- ${c.dp_ask1}
- ${c.dp_ask2}
- ${c.dp_ask3}
- ${c.dp_ask4}

${c.dp_nodata}

## ${c.dp_h_get}

- ${c.dp_get1}
- ${c.dp_get2}
- ${c.dp_get3}
- ${c.dp_get4}

## ${c.dp_h_cannot}

- ${c.dp_cannot1}
- ${c.dp_cannot2}
- ${c.dp_cannot3}

[Trust Centre](/trust/) · [security.txt](/security.txt)

## ${c.dp_h_review}

${c.dp_review}

[${c.dp_h_touch}](${locale === "en" ? "/contact/" : `/${locale}/contact/`})

## ${c.dp_h_touch}

${c.dp_touch}

[${product.repository}](${product.repository}) · [${c.dp_h_touch}](${locale === "en" ? "/contact/" : `/${locale}/contact/`})
`);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>pacs008 scheme changes</title>
  <subtitle>Dated ISO 20022 scheme rule changes for CBPR+, CHAPS and related profiles</subtitle>
  <link href="https://pacs008.com/scheme-changes.xml" rel="self"/>
  <link href="https://pacs008.com/scheme-changes/"/>
  <id>https://pacs008.com/scheme-changes/</id>
  <updated>${governance.verification_date}T00:00:00Z</updated>
  <author><name>pacs008</name></author>
${rules.rules
  .map(
    (r) => `  <entry>
    <title>${esc(r.id)} — ${esc(r.title)}</title>
    <link href="https://pacs008.com/catalogue/"/>
    <id>tag:pacs008.com,${r.effective_from}:${esc(r.id)}</id>
    <updated>${r.effective_from}T00:00:00Z</updated>
    <category term="${esc(r.profile)}"/>
    <summary>${esc(r.summary)}</summary>
  </entry>`
  )
  .join("\n")}
</feed>
`;

const staticDir = join(process.cwd(), "static");
writeFileSync(join(staticDir, "scheme-changes.xml"), feed);

console.log(
  `Change log generated: ${dates.length} dated group(s), ${rules.rules.length} feed entries.`
);

console.log(
  `Trust page generated: ${Object.keys(capability.capabilities).length} layers, ` +
    `${browserGaps.length} published limitation(s), ` +
    `${capability.messages.supported.length} supported message families.`
);
