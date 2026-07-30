---
title: "Deadline gestructureerd adres november 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: nl-NL
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
    text: "Huidige adresgegevenskwaliteit auditen over debiteur-, crediteur- en agentrecords."
  - name: "Step 2"
    text: "Bestaande ongestructureerde adresvelden toewijzen aan het gestructureerde formaat (straat, gebouw, postcode, plaats, land)."
  - name: "Step 3"
    text: "Adresvalidatie toevoegen aan de pre-generatiepipeline met pacs008."
  - name: "Step 4"
    text: "Testen met representatieve betalingsgegevens vóór de deadline."
---

# Deadline gestructureerd adres november 2026

SWIFT vereist gestructureerde postadressen in grensoverschrijdende betalingsberichten vanaf november 2026. Wat er verandert, welke berichten betrokken zijn en hoe pacs008 teams helpt zich voor te bereiden.

## Wat er verandert

Dit is een minimumvereiste, geen maximum. Vanaf 14 november 2026 moet een betrokken partij de plaats in TwnNm en het land in Ctry opnemen als tweeletterige ISO 3166-code. Straat, huisnummer en postcode mogen in de adresregels blijven staan: dat is een hybride adres en dat wordt geaccepteerd. Alleen het volledig ongestructureerde adres — het hele adres als vrije tekst zonder gestructureerde plaats en land — verdwijnt. Instellingen die uitsluitend met een BIC worden geïdentificeerd, vallen hierbuiten.

## Waarom het belangrijk is

- Ongestructureerde adressen verhogen het percentage handmatige reparaties en vertragen directe verwerking.
- Gestructureerde adressen verbeteren de nauwkeurigheid van sanctiescreening door partijnaam te scheiden van locatiegegevens.
- Regelgevende en schema-eisen schrijven steeds vaker gestructureerde gegevens voor ten behoeve van compliance en rapportage.
- Afwijzingspercentages van grensoverschrijdende betalingen stijgen wanneer de adreskwaliteit niet aan de verwachtingen van de tegenpartij voldoet.

## Welke berichten betrokken zijn

- **pacs.008** — postadressen van debiteur en crediteur in klantoverschrijvingen.
- **pacs.009** — instellingsadressen in kredietoverdrachten tussen financiële instellingen en dekkingsbetalingen.
- **pacs.004** — partij-adressen bij betalingsretourzendingen.
- **pacs.003** — adressen van crediteur en debiteur bij automatische incasso's van klanten.

## Hoe pacs008 helpt

- Valideert gestructureerde en hybride postadresvelden vóór XML-generatie.
- Markeert ongestructureerde adresgegevens die na de deadline zouden falen.
- Ondersteunt zowel hybride formaten vóór de deadline als uitsluitend gestructureerde formaten na de deadline.
- Integreert adresqualiteitscontroles in CI-pipelines en batchvalidatieworkflows.

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

## Tijdlijn

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

## Wat nu te doen

- Huidige adresgegevenskwaliteit auditen over debiteur-, crediteur- en agentrecords.
- Bestaande ongestructureerde adresvelden toewijzen aan het gestructureerde formaat (straat, gebouw, postcode, plaats, land).
- Adresvalidatie toevoegen aan de pre-generatiepipeline met pacs008.
- Testen met representatieve betalingsgegevens vóór de deadline.

## Referenties

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

