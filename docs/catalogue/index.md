---
title: "Message and rule catalogue | pacs008"
description: "Every ISO 20022 message family and scheme rule pacs008 implements, with versions, effective dates, authoritative sources and downloadable test fixtures."
lang: en-GB
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# Message and rule catalogue

Generated from the pacs008 registries at ruleset `2026.11.0`
(hash `sha256:0ca5d26f5c28ddfec34a3f8091fcb7422b01b88177fab21ba0e6e78ee610e607`). Coverage reflects the templates shipped in
the package, so it cannot claim more than the software does.

## Message families

| Family | Name | Versions | Count | Applicable rules |
|---|---|---|---|---|
| [`pacs.008`](/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### Not implemented

- `pain.*` — No templates in the package. Relevant to the November 2026 MT101 CBPR+ retirement, which relays to pain.001. Scoped in sebastienrousseau/pacs008#13; out of scope is a legitimate outcome.
- `camt.*` — No templates in the package. camt.110 becomes receive-and-consume mandatory in November 2026 and camt.110/111 both mandatory in November 2027. A known dated gap, not a current capability. Scoped in sebastienrousseau/pacs008#12.
- `head.001` — Business Application Header not shipped as a standalone template.

## Scheme profiles

| Profile | Name | Status | Effective |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## Rules

Every rule has a stable identifier that does not change across minor releases.
A change in pass/fail behaviour requires a new ruleset version.

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| Profile | cbpr-plus |
| Layer | scheme |
| Severity | error |
| Effective from | 2026-11-14 |
| Messages | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Path | `{party}/PstlAdr` |
| Source | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), verified 2026-07-28 |
| Fixtures | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (passes) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (passes) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (fails) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**Remediation.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| Profile | cbpr-plus |
| Layer | scheme |
| Severity | error |
| Effective from | 2026-11-14 |
| Messages | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Path | `{party}/PstlAdr/TwnNm` |
| Source | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), verified 2026-07-28 |
| Fixtures | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (passes) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (fails) |

Town Name must be carried in TwnNm, not in an address line.

**Remediation.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| Profile | cbpr-plus |
| Layer | scheme |
| Severity | error |
| Effective from | 2026-11-14 |
| Messages | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Path | `{party}/PstlAdr/Ctry` |
| Source | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), verified 2026-07-28 |
| Fixtures | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (passes) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (fails) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**Remediation.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| Profile | cbpr-plus |
| Layer | scheme |
| Severity | info |
| Effective from | 2025-11-22 |
| Messages | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Path | `{party}/PstlAdr` |
| Source | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), verified 2026-07-28 |
| Fixtures | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (passes) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**Remediation.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| Profile | cbpr-plus |
| Layer | scheme |
| Severity | info |
| Effective from | 2026-11-14 |
| Messages | `pacs.008`, `pacs.009` |
| Path | `{agent}/FinInstnId/BICFI` |
| Source | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), verified 2026-07-28 |
| Fixtures | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (passes) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**Remediation.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| Profile | cbpr-plus |
| Layer | scheme |
| Severity | info |
| Effective from | 2026-11-14 |
| Messages | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| Path | — |
| Source | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), verified 2026-07-28 |
| Fixtures | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**Remediation.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| Profile | chaps-uk |
| Layer | scheme |
| Severity | error |
| Effective from | 2026-11-14 |
| Messages | `pacs.008`, `pacs.009` |
| Path | `{party}/PstlAdr` |
| Source | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), verified 2026-07-28 |
| Fixtures | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (passes) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (fails) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**Remediation.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **announced, not yet enforced**

| | |
|---|---|
| Profile | chaps-uk |
| Layer | scheme |
| Severity | error |
| Effective from | 2027-11-01 |
| Messages | `pacs.008`, `pacs.009` |
| Path | `CdtTrfTxInf/Purp/Cd` |
| Source | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), verified 2026-07-28 |
| Fixtures | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**Remediation.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **announced, not yet enforced**

| | |
|---|---|
| Profile | chaps-uk |
| Layer | scheme |
| Severity | error |
| Effective from | 2027-11-01 |
| Messages | `pacs.008` |
| Path | `CdtTrfTxInf/RmtInf/Strd` |
| Source | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), verified 2026-07-28 |
| Fixtures | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**Remediation.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## Sources

| ID | Publisher | Document | Effective | Verified |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022 attribution

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

Message definitions and identifiers on this page derive from ISO 20022 material,
used under the [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
