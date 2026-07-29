---
title: "Jerin saƙonni da ƙa'idoji | pacs008"
description: "Iyakar ta yi daidai da samfuran da ke cikin fakitin, don haka ba za ta iya iƙirarin fiye da abin da manhajar ke yi ba."
lang: ha-NG
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ha/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# Jerin saƙonni da ƙa'idoji

An samar daga rajistocin pacs008, saitin ƙa'idoji `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
Iyakar ta yi daidai da samfuran da ke cikin fakitin, don haka ba za ta iya iƙirarin fiye da abin da manhajar ke yi ba.

## Iyalan saƙonni

| Iyali | Suna | Sigogi | Adadi | Ƙa'idodin da suka dace |
|---|---|---|---|---|
| [`pacs.008`](/ha/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/ha/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/ha/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/ha/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/ha/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/ha/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/ha/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/ha/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### Ba a aiwatar ba

Muna lissafa su domin sauƙin ɗauka cewa suna nan.

| Iyali | Matsayi | Bayani |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## Bayanan tsarin

| Bayani | Suna | Matsayi | Fara aiki |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## Ƙa'idoji

Kowace ƙa'ida tana da mai ganowa mai ƙarko wanda ba ya canzawa tsakanin ƙananan fitarwa. Canjin sakamako yana buƙatar sabuwar siga ta saiti.

*Taƙaitattun ƙa'idoji da rubutun gyara ana nuna su da Turanci: su ne abin da ƙa'ida ta tanada, kuma kowace ƙofa tana koma musu ta mai ganowa.*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| Bayani | cbpr-plus |
| Matakin | scheme |
| Muhimmanci | error |
| Yana aiki tun | 2026-11-14 |
| Saƙonni | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Hanya | `{party}/PstlAdr` |
| Majiya | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), an tabbatar 2026-07-28 |
| Fayilolin gwaji | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (ya wuce) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ya wuce) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (ya faɗi) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**Gyara.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| Bayani | cbpr-plus |
| Matakin | scheme |
| Muhimmanci | error |
| Yana aiki tun | 2026-11-14 |
| Saƙonni | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Hanya | `{party}/PstlAdr/TwnNm` |
| Majiya | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), an tabbatar 2026-07-28 |
| Fayilolin gwaji | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ya wuce) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (ya faɗi) |

Town Name must be carried in TwnNm, not in an address line.

**Gyara.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| Bayani | cbpr-plus |
| Matakin | scheme |
| Muhimmanci | error |
| Yana aiki tun | 2026-11-14 |
| Saƙonni | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Hanya | `{party}/PstlAdr/Ctry` |
| Majiya | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), an tabbatar 2026-07-28 |
| Fayilolin gwaji | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ya wuce) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (ya faɗi) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**Gyara.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| Bayani | cbpr-plus |
| Matakin | scheme |
| Muhimmanci | info |
| Yana aiki tun | 2025-11-22 |
| Saƙonni | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Hanya | `{party}/PstlAdr` |
| Majiya | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), an tabbatar 2026-07-28 |
| Fayilolin gwaji | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ya wuce) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**Gyara.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| Bayani | cbpr-plus |
| Matakin | scheme |
| Muhimmanci | info |
| Yana aiki tun | 2026-11-14 |
| Saƙonni | `pacs.008`, `pacs.009` |
| Hanya | `{agent}/FinInstnId/BICFI` |
| Majiya | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), an tabbatar 2026-07-28 |
| Fayilolin gwaji | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (ya wuce) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**Gyara.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| Bayani | cbpr-plus |
| Matakin | scheme |
| Muhimmanci | info |
| Yana aiki tun | 2026-11-14 |
| Saƙonni | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| Hanya | — |
| Majiya | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), an tabbatar 2026-07-28 |
| Fayilolin gwaji | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**Gyara.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| Bayani | chaps-uk |
| Matakin | scheme |
| Muhimmanci | error |
| Yana aiki tun | 2026-11-14 |
| Saƙonni | `pacs.008`, `pacs.009` |
| Hanya | `{party}/PstlAdr` |
| Majiya | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), an tabbatar 2026-07-28 |
| Fayilolin gwaji | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (ya wuce) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (ya faɗi) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**Gyara.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **an sanar, ba a fara aiwatarwa ba**

| | |
|---|---|
| Bayani | chaps-uk |
| Matakin | scheme |
| Muhimmanci | error |
| Yana aiki tun | 2027-11-01 |
| Saƙonni | `pacs.008`, `pacs.009` |
| Hanya | `CdtTrfTxInf/Purp/Cd` |
| Majiya | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), an tabbatar 2026-07-28 |
| Fayilolin gwaji | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**Gyara.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **an sanar, ba a fara aiwatarwa ba**

| | |
|---|---|
| Bayani | chaps-uk |
| Matakin | scheme |
| Muhimmanci | error |
| Yana aiki tun | 2027-11-01 |
| Saƙonni | `pacs.008` |
| Hanya | `CdtTrfTxInf/RmtInf/Strd` |
| Majiya | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), an tabbatar 2026-07-28 |
| Fayilolin gwaji | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**Gyara.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## Majiyoyi

| Majiya | Mai bugawa | Takarda | Fara aiki | An tabbatar |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## Ambaton ISO 20022

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

Ma'anonin saƙonni da masu ganowa a wannan shafi sun samo asali daga kayan ISO 20022, ana amfani da su bisa [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
