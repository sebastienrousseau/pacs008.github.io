---
title: "Deadline ng structured address noong Nobyembre 2026 | pacs008"
description: Paano naaapektuhan ng SWIFT CBPR+ November 2026 structured postal address deadline ang pacs.008 at mga kaugnay na mensahe ng pagbabayad, at paano...
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
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "I-audit ang kasalukuyang kalidad ng address data sa mga record ng debtor, creditor, at agent."
  - name: "Step 2"
    text: "I-map ang mga umiiral na unstructured na address field sa structured na format (kalye, gusali, postal code, lungsod, bansa)."
  - name: "Step 3"
    text: "Magdagdag ng address validation sa pre-generation pipeline gamit ang pacs008."
  - name: "Step 4"
    text: "Mag-test gamit ang representative na payment data bago ang deadline."
---

# Deadline ng structured address noong Nobyembre 2026

Kinakailangan ng SWIFT ang mga structured na postal address sa mga cross-border na mensahe ng pagbabayad mula Nobyembre 2026. Ano ang nagbabago, aling mga mensahe ang apektado, at paano tumutulong ang pacs008 sa mga team na maghanda.

## Ano ang nagbabago

Ito ay pinakamababang kinakailangan, hindi pinakamataas. Mula 14 Nobyembre 2026, dapat ilagay ng saklaw na partido ang lungsod sa TwnNm at ang bansa sa Ctry bilang dalawang-titik na ISO 3166 code. Ang kalye, numero ng gusali at postal code ay maaaring manatili sa mga linya ng address: iyon ay hybrid na address at tinatanggap ito. Ang inaalis lamang ay ang ganap na hindi nakabalangkas na address — ang buong address sa malayang teksto nang walang nakabalangkas na lungsod at bansa. Hindi apektado ang mga institusyong tinutukoy sa pamamagitan ng BIC lamang.

## Bakit ito mahalaga

- Ang mga unstructured na address ay nagpapataas ng rate ng manu-manong pag-aayos at nagpapabagal ng direktang pagproseso.
- Ang mga structured na address ay nagpapabuti ng katumpakan ng sanctions screening sa pamamagitan ng paghihiwalay ng pangalan ng partido mula sa data ng lokasyon.
- Ang mga regulatoryo at scheme na kinakailangan ay lalong nag-uutos ng structured na data para sa pagsunod at pag-uulat.
- Ang mga rate ng pagtanggi sa cross-border na pagbabayad ay tumataas kapag ang kalidad ng address ay hindi nakakatugon sa mga inaasahan ng counterparty.

## Aling mga mensahe ang apektado

- **pacs.008** — mga postal address ng debtor at creditor sa mga customer credit transfer.
- **pacs.009** — mga address ng institusyon sa mga credit transfer sa pagitan ng mga financial institution at cover payment.
- **pacs.004** — mga address ng partido sa mga payment return.
- **pacs.003** — mga address ng creditor at debtor sa mga customer direct debit.

## Paano tumutulong ang pacs008

- Vine-validate ang mga structured at hybrid na postal address field bago ang XML generation.
- Mina-mark ang mga unstructured na address data na mabibigo pagkatapos ng deadline.
- Sinusuportahan ang parehong mga hybrid na format bago ang deadline at structured-only na format pagkatapos ng deadline.
- Ini-integrate ang mga address quality check sa mga CI pipeline at batch validation workflow.

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

## Timeline

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

## Ano ang dapat gawin ngayon

- I-audit ang kasalukuyang kalidad ng address data sa mga record ng debtor, creditor, at agent.
- I-map ang mga umiiral na unstructured na address field sa structured na format (kalye, gusali, postal code, lungsod, bansa).
- Magdagdag ng address validation sa pre-generation pipeline gamit ang pacs008.
- Mag-test gamit ang representative na payment data bago ang deadline.

## Mga Sanggunian

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

