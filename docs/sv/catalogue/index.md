---
title: "Katalog över meddelanden och regler | pacs008"
description: "Täckningen speglar mallarna som ingår i paketet och kan därför inte hävda mer än vad programvaran gör."
lang: sv-SE
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /sv/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# Katalog över meddelanden och regler

Genererad ur pacs008-registren, regeluppsättning `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
Täckningen speglar mallarna som ingår i paketet och kan därför inte hävda mer än vad programvaran gör.

## Meddelandefamiljer

| Familj | Namn | Versioner | Antal | Tillämpliga regler |
|---|---|---|---|---|
| [`pacs.008`](/sv/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/sv/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/sv/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/sv/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/sv/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/sv/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/sv/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/sv/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### Inte implementerat

Vi listar dem eftersom deras frånvaro är lätt att förutsätta.

| Familj | Status | Not |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## Schemaprofiler

| Profil | Namn | Status | Gäller |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## Regler

Varje regel har en stabil identifierare som inte ändras mellan mindre versioner. Ändras utfallet krävs en ny uppsättningsversion.

*Regelsammanfattningar och åtgärdstexter visas på engelska: de utgör regelns normativa innehåll och refereras med identifierare från varje gränssnitt.*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| Profil | cbpr-plus |
| Lager | scheme |
| Allvarlighetsgrad | error |
| Gäller från | 2026-11-14 |
| Meddelanden | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Sökväg | `{party}/PstlAdr` |
| Källa | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), granskad 2026-07-28 |
| Testdata | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (godkänns) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (godkänns) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (underkänns) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**Åtgärd.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| Profil | cbpr-plus |
| Lager | scheme |
| Allvarlighetsgrad | error |
| Gäller från | 2026-11-14 |
| Meddelanden | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Sökväg | `{party}/PstlAdr/TwnNm` |
| Källa | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), granskad 2026-07-28 |
| Testdata | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (godkänns) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (underkänns) |

Town Name must be carried in TwnNm, not in an address line.

**Åtgärd.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| Profil | cbpr-plus |
| Lager | scheme |
| Allvarlighetsgrad | error |
| Gäller från | 2026-11-14 |
| Meddelanden | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Sökväg | `{party}/PstlAdr/Ctry` |
| Källa | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), granskad 2026-07-28 |
| Testdata | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (godkänns) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (underkänns) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**Åtgärd.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| Profil | cbpr-plus |
| Lager | scheme |
| Allvarlighetsgrad | info |
| Gäller från | 2025-11-22 |
| Meddelanden | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Sökväg | `{party}/PstlAdr` |
| Källa | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), granskad 2026-07-28 |
| Testdata | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (godkänns) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**Åtgärd.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| Profil | cbpr-plus |
| Lager | scheme |
| Allvarlighetsgrad | info |
| Gäller från | 2026-11-14 |
| Meddelanden | `pacs.008`, `pacs.009` |
| Sökväg | `{agent}/FinInstnId/BICFI` |
| Källa | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), granskad 2026-07-28 |
| Testdata | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (godkänns) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**Åtgärd.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| Profil | cbpr-plus |
| Lager | scheme |
| Allvarlighetsgrad | info |
| Gäller från | 2026-11-14 |
| Meddelanden | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| Sökväg | — |
| Källa | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), granskad 2026-07-28 |
| Testdata | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**Åtgärd.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| Profil | chaps-uk |
| Lager | scheme |
| Allvarlighetsgrad | error |
| Gäller från | 2026-11-14 |
| Meddelanden | `pacs.008`, `pacs.009` |
| Sökväg | `{party}/PstlAdr` |
| Källa | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), granskad 2026-07-28 |
| Testdata | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (godkänns) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (underkänns) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**Åtgärd.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **aviserad, ännu ej tillämpad**

| | |
|---|---|
| Profil | chaps-uk |
| Lager | scheme |
| Allvarlighetsgrad | error |
| Gäller från | 2027-11-01 |
| Meddelanden | `pacs.008`, `pacs.009` |
| Sökväg | `CdtTrfTxInf/Purp/Cd` |
| Källa | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), granskad 2026-07-28 |
| Testdata | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**Åtgärd.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **aviserad, ännu ej tillämpad**

| | |
|---|---|
| Profil | chaps-uk |
| Lager | scheme |
| Allvarlighetsgrad | error |
| Gäller från | 2027-11-01 |
| Meddelanden | `pacs.008` |
| Sökväg | `CdtTrfTxInf/RmtInf/Strd` |
| Källa | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), granskad 2026-07-28 |
| Testdata | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**Åtgärd.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## Källor

| Källa | Utgivare | Dokument | Gäller | Granskad |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022-hänvisning

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

Meddelandedefinitioner och identifierare på denna sida härrör från ISO 20022-material, använt enligt [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
