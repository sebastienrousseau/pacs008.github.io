---
title: "Àkójọ ìránṣẹ́ àti òfin | pacs008"
description: "Ìbò náà ṣàfihàn àwọn àwòṣe tí ó wà nínú àpò-ẹ̀rọ, nítorí náà kò lè sọ ju ohun tí ẹ̀rọ náà ń ṣe lọ."
lang: yo-NG
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /yo/atoka/
robots: "index, follow"
draft: false
noindex: false
---

# Àkójọ ìránṣẹ́ àti òfin

A ṣe é láti inú àwọn àkọsílẹ̀ pacs008, àkójọ òfin `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
Ìbò náà ṣàfihàn àwọn àwòṣe tí ó wà nínú àpò-ẹ̀rọ, nítorí náà kò lè sọ ju ohun tí ẹ̀rọ náà ń ṣe lọ.

## Àwọn ìdílé ìránṣẹ́

| Ìdílé | Orúkọ | Àwọn ẹ̀dà | Iye | Àwọn òfin tí ó kan |
|---|---|---|---|---|
| [`pacs.008`](/yo/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/yo/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/yo/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/yo/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/yo/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/yo/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/yo/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/yo/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### Kò tí ì ṣiṣẹ́

A kọ wọ́n sílẹ̀ nítorí pé ó rọrùn láti rò pé wọ́n wà.

| Ìdílé | Ipò | Àkíyèsí |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## Àwọn ìtòlẹ́sẹẹsẹ ètò

| Ìtòlẹ́sẹẹsẹ | Orúkọ | Ipò | Ìbẹ̀rẹ̀ |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## Àwọn òfin

Òfin kọ̀ọ̀kan ní ìdámọ̀ tí kò yí padà láàrin àwọn ìtúsílẹ̀ kékeré. Ìyípadà nínú àbájáde béèrè ẹ̀dà àkójọ tuntun.

*Àkótán òfin àti ọ̀rọ̀ àtúnṣe ni a fi hàn ní Gẹ̀ẹ́sì: wọ́n jẹ́ àkóónú òfin tí ó ní agbára, tí gbogbo ìsopọ̀ ń tọ́ka sí nípasẹ̀ ìdámọ̀.*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | cbpr-plus |
| Ìpele | scheme |
| Ìwúwo | error |
| Ó ń ṣiṣẹ́ láti | 2026-11-14 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Ọ̀nà | `{party}/PstlAdr` |
| Orísun | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (ó kọjá) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ó kọjá) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (ó kùnà) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**Àtúnṣe.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | cbpr-plus |
| Ìpele | scheme |
| Ìwúwo | error |
| Ó ń ṣiṣẹ́ láti | 2026-11-14 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Ọ̀nà | `{party}/PstlAdr/TwnNm` |
| Orísun | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ó kọjá) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (ó kùnà) |

Town Name must be carried in TwnNm, not in an address line.

**Àtúnṣe.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | cbpr-plus |
| Ìpele | scheme |
| Ìwúwo | error |
| Ó ń ṣiṣẹ́ láti | 2026-11-14 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Ọ̀nà | `{party}/PstlAdr/Ctry` |
| Orísun | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ó kọjá) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (ó kùnà) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**Àtúnṣe.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | cbpr-plus |
| Ìpele | scheme |
| Ìwúwo | info |
| Ó ń ṣiṣẹ́ láti | 2025-11-22 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Ọ̀nà | `{party}/PstlAdr` |
| Orísun | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (ó kọjá) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**Àtúnṣe.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | cbpr-plus |
| Ìpele | scheme |
| Ìwúwo | info |
| Ó ń ṣiṣẹ́ láti | 2026-11-14 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009` |
| Ọ̀nà | `{agent}/FinInstnId/BICFI` |
| Orísun | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (ó kọjá) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**Àtúnṣe.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | cbpr-plus |
| Ìpele | scheme |
| Ìwúwo | info |
| Ó ń ṣiṣẹ́ láti | 2026-11-14 |
| Àwọn ìránṣẹ́ | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| Ọ̀nà | — |
| Orísun | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**Àtúnṣe.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | chaps-uk |
| Ìpele | scheme |
| Ìwúwo | error |
| Ó ń ṣiṣẹ́ láti | 2026-11-14 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009` |
| Ọ̀nà | `{party}/PstlAdr` |
| Orísun | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (ó kọjá) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (ó kùnà) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**Àtúnṣe.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **a ti kéde, kò tí ì bẹ̀rẹ̀**

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | chaps-uk |
| Ìpele | scheme |
| Ìwúwo | error |
| Ó ń ṣiṣẹ́ láti | 2027-11-01 |
| Àwọn ìránṣẹ́ | `pacs.008`, `pacs.009` |
| Ọ̀nà | `CdtTrfTxInf/Purp/Cd` |
| Orísun | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**Àtúnṣe.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **a ti kéde, kò tí ì bẹ̀rẹ̀**

| | |
|---|---|
| Ìtòlẹ́sẹẹsẹ | chaps-uk |
| Ìpele | scheme |
| Ìwúwo | error |
| Ó ń ṣiṣẹ́ láti | 2027-11-01 |
| Àwọn ìránṣẹ́ | `pacs.008` |
| Ọ̀nà | `CdtTrfTxInf/RmtInf/Strd` |
| Orísun | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), àyẹ̀wò 2026-07-28 |
| Àwọn fáìlì ìdánwò | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**Àtúnṣe.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## Àwọn orísun

| Orísun | Olùtẹ̀jáde | Àkọsílẹ̀ | Ìbẹ̀rẹ̀ | Àyẹ̀wò |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## Ìdámọ̀ ISO 20022

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

Àwọn ìtumọ̀ ìránṣẹ́ àti ìdámọ̀ lórí ojú-ìwé yìí wá láti ohun èlò ISO 20022, tí a ń lò lábẹ́ [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
