---
title: "Trust Centre | pacs008"
description: "How pacs008 is licensed, released, and secured, what each interface can and cannot validate, and the limitations we publish rather than hide."
lang: en-GB
layout: page
date: "2026-07-28"
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
verified as of 2026-07-28.

## At a glance

| | |
|---|---|
| Licence | Apache-2.0 |
| Current version | 0.0.8 |
| Ruleset version | 2026.11.0 |
| Ruleset hash | `sha256:396cb1e755a89aa7b73e54a9d5eb52de9bdd849931f98b2336731842856a2f02` |
| Minimum Python | 3.10 (tested on 3.10, 3.11, 3.12) |
| Source | [https://github.com/sebastienrousseau/pacs008](https://github.com/sebastienrousseau/pacs008) |
| Package | [PyPI](https://pypi.org/project/pacs008/) |
| Last verified | 2026-07-28 |
| Next review due | 2026-08-28 |

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
| Input Safety & Parsing (Layer 0) | Stable | Stable | Stable | Beta |
| Input Schema Validation (Layer 1) | Stable | Stable | Stable | Stable |
| Identifier & Format Verification (Layer 2) | Stable | Stable | Stable | Stable |
| XML Syntax & Namespace Validation (Layer 3) | Stable | Stable | Stable | Not implemented |
| XSD Sequence & Cardinality Checks (Layer 4) | Stable | Stable | Stable | Not implemented |
| ISO Semantic Consistency (Layer 5) | Stable | Stable | Stable | Not implemented |
| Scheme Profile Rules — CBPR+, CHAPS (Layer 6) | Stable | Stable | Stable | Beta |
| Effective-Date Rules — 14 Nov 2026 (Layer 7) | Stable | Stable | Stable | Beta |
| Organisation Policy Packs (Layer 8) | Not implemented | Not implemented | Not implemented | Not implemented |

### Published limitations

These are the layers the browser Workbench does **not** evaluate. It is marked
beta for this reason.

| Layer | Browser status | Why |
|---|---|---|
| Input Safety & Parsing (Layer 0) | Beta | CSV/JSON parsing present; no file-size or MIME enforcement implemented (no MAX_FILE_SIZE in static/js) |
| XML Syntax & Namespace Validation (Layer 3) | Not implemented | Browser generates XML but never parses it; no DOMParser usage in static/js |
| XSD Sequence & Cardinality Checks (Layer 4) | Not implemented | No XSD validation in static/js; the pacs.008 XSD URN appears only as a namespace string in generated output |
| ISO Semantic Consistency (Layer 5) | Not implemented | No control-sum, transaction-count or cross-field consistency checks in static/js |
| Scheme Profile Rules — CBPR+, CHAPS (Layer 6) | Beta | Postal address classified as fully structured / hybrid / unstructured, plus LEI format (ISO 17442); no wider profile rule set |
| Effective-Date Rules — 14 Nov 2026 (Layer 7) | Beta | The 2026 deadline is hardcoded in the address classifier; there is no selectable effective date |
| Organisation Policy Packs (Layer 8) | Not implemented | Not implemented in any interface |

A passing result in the Workbench is not a statement about the layers above.
For XSD and ISO-semantic checks, use the Python library, CLI or REST service.

## Message coverage

Verified against the templates shipped in the package.

| Family | Name | Versions | Count |
|---|---|---|---|
| `pacs.008` | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 |
| `pacs.002` | FI to FI Payment Status Report | pacs.002.001.12 | 1 |
| `pacs.003` | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 |
| `pacs.004` | Payment Return | pacs.004.001.11 | 1 |
| `pacs.007` | FI to FI Payment Reversal | pacs.007.001.11 | 1 |
| `pacs.009` | Financial Institution Credit Transfer | pacs.009.001.10 | 1 |
| `pacs.010` | Financial Institution Direct Debit | pacs.010.001.05 | 1 |
| `pacs.028` | FI to FI Payment Status Request | pacs.028.001.05 | 1 |

### Not implemented

We list these because their absence is easy to assume away.

| Family | Status | Note |
|---|---|---|
| `pain.*` | Not implemented | No templates in the package. Customer-to-bank initiation is out of scope; do not imply support. |
| `camt.*` | Not implemented | No templates in the package. Includes camt.110/111 Exceptions & Investigations, mandatory from 2027 — a known future gap, not a current capability. |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## Scheme profiles

- **SWIFT CBPR+** (`cbpr-plus`) — stable, effective 2026-11-14
- **Bank of England CHAPS** (`chaps-uk`) — stable, effective 2026-11-14
- **Eurosystem T2 RTGS** (`t2-rtgs`) — stable, effective 2026-11-14
- **US Federal Reserve Fedwire** (`fedwire`) — stable, effective 2025-03-10
- **HVPS+ High-Value Payments** (`hvps-plus`) — stable, effective 2026-11-14
- **SEPA Instant Credit Transfer** (`sct-inst`) — stable, effective 2025-01-01

## Rule sources

Scheme rules are derived from published sources rather than reproduced from
restricted material.

| ID | Publisher | Document | Effective | Verified |
|---|---|---|---|---|
| SWIFT-ADDR-2026 | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| BOE-CHAPS-2026 | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| ISO-20022-PACS008-13 | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## Security and release integrity

- **Vulnerability disclosure** — [security.txt](/security.txt). Report privately; do not open a public issue.
- **Software bill of materials** — [CycloneDX SBOM](/sbom.cdx.json), generated each build.
- **Licence** — [Apache-2.0](https://github.com/sebastienrousseau/pacs008/blob/main/LICENSE). The Apache Software Foundation publishes the licence in English only and does not recognise translations, so the English text is the only legally binding version.
- **Security architecture** — see [Security](/security/).

## Data handling

The browser Workbench processes data locally in the page. Payment payloads are
not sent to pacs008.com, not retained, and not included in analytics — there
are no analytics. Every script is served from pacs008.com itself, and the
Content-Security-Policy restricts `script-src` and `connect-src` to
`'self'`. See [Privacy](/privacy/).

You remain responsible for following your own organisation's data-handling
policy. Prefer synthetic data when evaluating.

## What this project is not

- Not a bank, and not affiliated with SWIFT, the Bank of England, or any scheme operator.
- Does not transmit, route, or settle payments.
- Scheme names are used descriptively to identify the rules implemented.
- A passing validation result does not guarantee acceptance by any counterparty or production system. Validate against your own contractual and scheme obligations.
