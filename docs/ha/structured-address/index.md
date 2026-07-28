---
title: "Ƙayyadaddun lokacin adireshin da aka tsara na Nuwamba 2026 | pacs008"
description: Yadda ƙayyadaddun lokacin adireshin da SWIFT CBPR+ ta tsara na Nuwamba 2026 ke shafar pacs.008 da saƙonnin biyan kuɗi masu alaƙa, da yadda pacs008 ke...
lang: ha-NG
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Bincika ingancin bayanan adireshin yanzu a cikin bayanan mai bashi, mai karɓa, da wakili."
  - name: "Step 2"
    text: "Taswirar filayen adireshi marasa tsari da ke akwai zuwa tsarin mai tsari (titi, gini, lambar gidan waya, gari, ƙasa)."
  - name: "Step 3"
    text: "Ƙara tabbatar da adireshi zuwa bututun kafin ƙirƙira ta amfani da pacs008."
  - name: "Step 4"
    text: "Gwada tare da bayanan biyan kuɗi na wakilci kafin wa'adin."
---

# Ƙayyadaddun lokacin adireshin da aka tsara na Nuwamba 2026

SWIFT na buƙatar adireshi na gidan waya masu tsari a cikin saƙonnin biyan kuɗi na ƙetare iyaka daga Nuwamba 2026. Menene ke canzawa, waɗanne saƙonni ne abin ya shafa, da yadda pacs008 ke taimaka wa ƙungiyoyi su shirya.

## Menene ke canzawa

SWIFT CBPR+ na matsawa daga adireshi na gidan waya marasa tsari zuwa filayen adireshin da ke da tsari a cikin saƙonnin biyan kuɗi na ƙetare iyaka. Bayan ƙarshen wa'adin Nuwamba 2026, filayen adireshin manyan ɓangarori dole ne su yi amfani da tsarin da ke da sassa daban-daban na sunan titi, lambar gini, lambar gidan waya, gari, da ƙasa.

## Me ya sa wannan yana da muhimmanci

- Adireshi marasa tsari suna ƙara yawan gyare-gyare na hannu kuma suna jinkirta sarrafa kai tsaye.
- Adireshi masu tsari suna inganta daidaiton tantance takunkumi ta hanyar raba sunan ɓangare daga bayanan wurin.
- Buƙatun doka da na tsarin suna ƙara tilasta bayanan da ke da tsari don bin doka da ba da rahoto.
- Adadin ƙin biyan kuɗi na ƙetare iyaka yana ƙaruwa idan ingancin adireshin bai cika tsammanin abokin ciniki ba.

## Waɗanne saƙonni ne abin ya shafa

- **pacs.008** — adireshi na gidan waya na mai bashi da mai karɓa a cikin canja wurin kuɗin abokin ciniki.
- **pacs.009** — adireshi na cibiyoyi a cikin canja wurin kuɗi tsakanin cibiyoyin kuɗi da biyan kuɗin rufewa.
- **pacs.004** — adireshi na ɓangarori a cikin mayar da kuɗi.
- **pacs.003** — adireshi na mai karɓa da mai bashi a cikin cire kuɗi kai tsaye na abokin ciniki.

## Yadda pacs008 ke taimakawa

- Yana tabbatar da filayen adireshin gidan waya masu tsari da na haɗin gwiwa kafin ƙirƙirar XML.
- Yana nuna bayanan adireshin da ba su da tsari waɗanda za su gaza bayan wa'adin.
- Yana tallafawa duka tsarin haɗin gwiwa kafin wa'adi da tsarin masu tsari kaɗai bayan wa'adi.
- Yana haɗa binciken ingancin adireshi cikin bututun CI da tsarin tabbatar da ayyukan tari.

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## Jadawalin lokaci

- **Maris 2023** — SWIFT CBPR+ ya fara aiki tare da ISO 20022 don biyan kuɗi na ƙetare iyaka.
- **Nuwamba 2025** — lokacin zaman tare na umarnin biyan kuɗi MT da MX ya ƙare.
- **Nuwamba 2026** — buƙatar adireshin gidan waya mai tsari ta fara aiki ga saƙonnin CBPR+.
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## Abin da za a yi yanzu

- Bincika ingancin bayanan adireshin yanzu a cikin bayanan mai bashi, mai karɓa, da wakili.
- Taswirar filayen adireshi marasa tsari da ke akwai zuwa tsarin mai tsari (titi, gini, lambar gidan waya, gari, ƙasa).
- Ƙara tabbatar da adireshi zuwa bututun kafin ƙirƙira ta amfani da pacs008.
- Gwada tare da bayanan biyan kuɗi na wakilci kafin wa'adin.

## Nassoshi

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

