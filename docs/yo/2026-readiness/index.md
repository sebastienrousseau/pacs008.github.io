---
title: "Ìmúrasílẹ̀ ISO 20022 fún 2026 | pacs008"
description: What changes on 14 November 2026 for SWIFT CBPR+ and Bank of England CHAPS, who is in scope, the exceptions, and downloadable test fixtures for each rule.
lang: yo-NG
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
---

# Ìmúrasílẹ̀ ISO 20022 fún 2026

**Ọjọ́ 108** sí **14 November 2026**, ní 2026-07-29.

Láti ọjọ́ yẹn, àwọn àdírẹ́sì ìfìwéránṣẹ́ tí kò ní ètò rárá kò ní jẹ́ ìtẹ́wọ́gbà mọ́ nínú àwọn ìránṣẹ́ ìsanwó SWIFT CBPR+ àti nípasẹ̀ ilé-ìkàwé ìjẹ́rìísí CHAPS ti Bank of England. Ní ọjọ́ kan náà, ìyípadà méjì mìíràn tún bẹ̀rẹ̀, ìtòlẹ́sẹẹsẹ tí ó tóbi jù yóò sì tẹ̀lé ní November 2027.

Every rule below carries an identifier, an effective date, an authoritative source and a test fixture, so nothing here has to be taken on trust.

## Ṣé ó kàn ọ́?

Ó kàn ọ́ bí o bá ń fi àwọn ìsanwó CBPR+ tàbí CHAPS tí ó ní àdírẹ́sì ìfìwéránṣẹ́ fún ẹgbẹ́ èyíkéyìí ránṣẹ́.

| | |
|---|---|
| **Àwọn ìránṣẹ́** | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| **Àwọn ẹgbẹ́** | Debtor, creditor, ultimate debtor, ultimate creditor, and agents that carry an address |
| **Kò sí nínú àyè** | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| **A yọ̀ǹda** | Agents identified by BIC alone need no postal address (`CBPR-ADDR-005`) |

## Ohun tí ó ń yí padà gan-an

Ìbéèrè náà jẹ́ **èyí tí ó kéré jùlọ, kì í ṣe èyí tí ó pọ̀ jùlọ**. Èyí ni apá tí a sábà ń ṣàìlóye jùlọ.

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | **Accepted** |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

**Kò pọn dandan** kí o gbé ojú-ọ̀nà, nọ́mbà ilé àti kóòdù ìfìwéránṣẹ́ lọ sínú àwọn èròjà tí ó ní ètò. Ìlú nínú `<TwnNm>` àti orílẹ̀-èdè nínú `<Ctry>` gẹ́gẹ́ bí kóòdù ISO 3166 oníléta méjì ti tó. Ìyókù lè wà nínú àwọn ìlà àdírẹ́sì: àdírẹ́sì àkópọ̀ ni èyí, ó sì ṣì wúlò.

[Full detail, with worked examples →](/structured-address/)

## Ṣàyẹ̀wò dátà rẹ nísinsìnyí

Irinṣẹ́ méjì, gbogbo wọn ń ṣiṣẹ́ pátápátá nínú aṣàwákiri rẹ. A kò fi dátà ìsanwó kankan ránṣẹ́.

- **[Batch address scan](/live/)** — upload a CSV of party addresses and get a
  readiness score, a breakdown by party, and a downloadable remediation list of
  the records that would fail.
- **[XSD validation](/live/)** — check an existing message against the official
  schema for element order, cardinality and datatypes.

## Àwọn fáìlì ìdánwò

Run these through the workbench, the CLI or the API. Each maps to the rule it
exercises, so you can confirm your pipeline reacts the way you expect.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## Gbogbo àwọn ọjọ́ pàtàkì, kì í ṣe èyí nìkan

November 2026 kì í ṣe òpin àwọn ìyípadà ISO 20022. Láti ọjọ́ yẹn Swift yóò yí padà sí ìyípo Standards Release ọlọ́dọọdún, nítorí náà àwọn ìtọ́sọ́nà ìlò yóò yí padà lọ́dọọdún.

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

[Dated change log and feed →](/scheme-changes/)

## Ohun tí a gbọ́dọ̀ ṣàyẹ̀wò, gẹ́gẹ́ bí ipa

### Ìmọ̀-ẹ̀rọ

- Find every place an address is concatenated into a single line before it
  reaches the message. That is usually where the problem is.
- Model town and country as separate fields end to end, not just at the
  boundary.
- Add `CBPR-ADDR-001` to `CBPR-ADDR-003` to your pre-submission validation,
  with the effective date, so failures surface before 14 November rather than
  on it.
- Add a negative test that a fully unstructured address is rejected. A rule you
  have never seen fire is a rule you cannot rely on.

### Dátà

- Measure how many records are missing a structured town or country **now**, so
  the remediation effort is a number rather than a guess. The batch scan
  produces exactly this.
- Identify the authoritative source per field. Addresses often arrive from
  several systems with different conventions.
- Country must be a two-letter ISO 3166 code. `GB`, not `United Kingdom` or
  `GBR` — `CBPR-ADDR-003` fails on the latter two.

### Ìdánwò

- Test the day before, the day of, and the day after the effective date.
  Effective-date logic is where date-boundary bugs live.
- Test CBPR+ and CHAPS separately. They are modelled as distinct rules here for
  a reason.
- Include a hybrid address in the passing set. A test suite that only accepts
  fully structured addresses will reject valid traffic.

### Ìṣiṣẹ́

- Know what a rejection for this reason will look like in your monitoring, and
  who triages it.
- Confirm your counterparties' readiness, not only your own. A compliant message
  can still fail if the receiving side is not ready.

### Ìṣàkóso

- The exposure is the count of records that would fail today, not the count of
  systems. Ask for the number.
- Note the 2027 obligations below. Teams that treat November 2026 as the finish
  line will repeat this work in twelve months.

## Ìyàtọ̀ láàrin àwọn ètò

| | SWIFT CBPR+ | Bank of England CHAPS |
|---|---|---|
| Unstructured rejected | 14 November 2026 | 14 November 2026 |
| Minimum acceptable | Hybrid | Hybrid |
| Enforced by | CBPR+ usage guidelines | CHAPS validation library |
| Purpose codes | Not mandated by this change | Mandatory for all payments from November 2027 |
| Structured remittance | Not mandated by this change | Mandatory from November 2027 |
| Rules here | `CBPR-ADDR-001` – `006` | `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |

## Àwọn orísun

Every rule on this page derives from one of these. Rules marked *announced* are
published intentions whose exact date should be re-verified before you rely on
them.

| Source | Publisher | Document | Verified |
|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2026-07-28 |

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

