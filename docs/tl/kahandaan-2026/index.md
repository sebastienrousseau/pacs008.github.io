---
title: "Kahandaan sa ISO 20022 para sa 2026 | pacs008"
description: What changes on 14 November 2026 for SWIFT CBPR+ and Bank of England CHAPS, who is in scope, the exceptions, and downloadable test fixtures for each rule.
lang: tl-PH
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

# Kahandaan sa ISO 20022 para sa 2026

**107 araw** bago ang **14 Nobyembre 2026**, sa 2026-07-30.

Mula sa petsang iyon, hindi na tatanggapin ang ganap na hindi nakabalangkas na postal address sa mga mensahe ng bayad na SWIFT CBPR+ at ng CHAPS validation library ng Bank of England. Sa parehong araw ay may dalawa pang pagbabago, at susunod ang mas malaking hanay sa Nobyembre 2027.

Bawat panuntunan sa ibaba ay may pagkakakilanlan, petsa ng bisa, awtoritatibong pinagmulan, at test file — walang dito ang kailangang basta paniwalaan.

## Naaapektuhan ka ba nito?

Kasama ka sa saklaw kung nagpapadala ka ng mga bayad na CBPR+ o CHAPS na naglalaman ng postal address para sa kahit sinong partido.

| | |
|---|---|
| **Mga mensahe** | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| **Mga partido** | Debtor, creditor, ultimate debtor, ultimate creditor, and agents that carry an address |
| **Wala sa saklaw** | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| **Hindi saklaw** | Agents identified by BIC alone need no postal address (`CBPR-ADDR-005`) |

## Ano talaga ang nagbabago

Ang kinakailangan ay **pinakamababa, hindi pinakamataas**. Ito ang bahaging pinakamadalas na mali ang pagkakaintindi.

| Format | `TwnNm` | `Ctry` | `AdrLine` | Bago ang 14 Nob 2026 | Mula sa petsang iyon |
|---|---|---|---|---|---|
| Ganap na nakabalangkas | Naroon | Naroon | Wala | Tinatanggap | Tinatanggap |
| Hybrid | Naroon | Naroon | Naroon | Tinatanggap | **Tinatanggap** |
| Ganap na hindi nakabalangkas | Wala | Wala | Naroon | Tinatanggap | **Tinatanggihan** |

**Hindi** kailangang ilipat ang kalye, numero ng gusali at postal code sa mga nakabalangkas na elemento. Sapat na ang lungsod sa `<TwnNm>` at ang bansa sa `<Ctry>` bilang dalawang-titik na ISO 3166 code. Ang iba ay maaaring manatili sa mga linya ng address: hybrid na address iyon at nananatiling wasto.

[Full detail, with worked examples →](/structured-address/)

## Suriin ang iyong datos ngayon

Dalawang kasangkapan, parehong tumatakbo nang buo sa iyong browser. Walang datos ng bayad na ipinapadala.

- **[Batch address scan](/live/)** — upload a CSV of party addresses and get a
  readiness score, a breakdown by party, and a downloadable remediation list of
  the records that would fail.
- **[XSD validation](/live/)** — check an existing message against the official
  schema for element order, cardinality and datatypes.

## Mga test file

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

## Lahat ng takdang petsa, hindi lang ito

Hindi katapusan ng mga pagbabago sa ISO 20022 ang Nobyembre 2026. Mula sa petsang iyon, lilipat ang Swift sa taunang Standards Release cycle, kaya taun-taon magbabago ang mga patnubay sa paggamit.

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

## Ano ang susuriin, ayon sa tungkulin

### Engineering

- Find every place an address is concatenated into a single line before it
  reaches the message. That is usually where the problem is.
- Model town and country as separate fields end to end, not just at the
  boundary.
- Add `CBPR-ADDR-001` to `CBPR-ADDR-003` to your pre-submission validation,
  with the effective date, so failures surface before 14 November rather than
  on it.
- Add a negative test that a fully unstructured address is rejected. A rule you
  have never seen fire is a rule you cannot rely on.

### Datos

- Measure how many records are missing a structured town or country **now**, so
  the remediation effort is a number rather than a guess. The batch scan
  produces exactly this.
- Identify the authoritative source per field. Addresses often arrive from
  several systems with different conventions.
- Country must be a two-letter ISO 3166 code. `GB`, not `United Kingdom` or
  `GBR` — `CBPR-ADDR-003` fails on the latter two.

### Pagsusuri

- Test the day before, the day of, and the day after the effective date.
  Effective-date logic is where date-boundary bugs live.
- Test CBPR+ and CHAPS separately. They are modelled as distinct rules here for
  a reason.
- Include a hybrid address in the passing set. A test suite that only accepts
  fully structured addresses will reject valid traffic.

### Operasyon

- Know what a rejection for this reason will look like in your monitoring, and
  who triages it.
- Confirm your counterparties' readiness, not only your own. A compliant message
  can still fail if the receiving side is not ready.

### Pamamahala

- The exposure is the count of records that would fail today, not the count of
  systems. Ask for the number.
- Note the 2027 obligations below. Teams that treat November 2026 as the finish
  line will repeat this work in twelve months.

## Pagkakaiba ng mga scheme

| | SWIFT CBPR+ | Bank of England CHAPS |
|---|---|---|
| Unstructured rejected | 14 November 2026 | 14 November 2026 |
| Minimum acceptable | Hybrid | Hybrid |
| Enforced by | CBPR+ usage guidelines | CHAPS validation library |
| Purpose codes | Not mandated by this change | Mandatory for all payments from November 2027 |
| Structured remittance | Not mandated by this change | Mandatory from November 2027 |
| Rules here | `CBPR-ADDR-001` – `006` | `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |

## Mga sanggunian

Every rule on this page derives from one of these. Rules marked *announced* are
published intentions whose exact date should be re-verified before you rely on
them.

| Pinagmulan | Naglathala | Dokumento | Nasuri |
|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2026-07-28 |

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

