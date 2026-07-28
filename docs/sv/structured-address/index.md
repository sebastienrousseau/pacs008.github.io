---
title: "Tidsfrist för strukturerade adresser november 2026 | pacs008"
description: Hur SWIFT CBPR+ tidsfrist för strukturerade postadresser i november 2026 påverkar pacs.008 och relaterade betalningsmeddelanden, och hur pacs008 hjälper...
lang: sv-SE
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
    text: "Granska nuvarande adressdatakvalitet i gäldenärs-, borgenärs- och agentposter."
  - name: "Step 2"
    text: "Mappa befintliga ostrukturerade adressfält till det strukturerade formatet (gata, byggnad, postnummer, stad, land)."
  - name: "Step 3"
    text: "Lägg till adressvalidering i förgenereringspipelinen med pacs008."
  - name: "Step 4"
    text: "Testa med representativa betalningsdata före tidsfristen."
---

# Tidsfrist för strukturerade adresser november 2026

SWIFT kräver strukturerade postadresser i gränsöverskridande betalningsmeddelanden från november 2026. Vad som ändras, vilka meddelanden som påverkas och hur pacs008 hjälper team att förbereda sig.

## Vad som ändras

SWIFT CBPR+ övergår från ostrukturerade postadresser till strukturerade adressfält i gränsöverskridande betalningsmeddelanden. Efter tidsfristen i november 2026 måste adressfälten för viktiga parter använda det strukturerade formatet med separata element för gatunamn, byggnadsnummer, postnummer, stad och land.

## Varför det är viktigt

- Ostrukturerade adresser ökar andelen manuella reparationer och försenar direkt genomströmning.
- Strukturerade adresser förbättrar noggrannheten i sanktionsgranskning genom att separera partnamn från platsdata.
- Regulatoriska krav och schemakrav kräver i allt större utsträckning strukturerade data för efterlevnad och rapportering.
- Avvisningsfrekvensen för gränsöverskridande betalningar ökar när adresskvaliteten inte uppfyller motpartens förväntningar.

## Vilka meddelanden som påverkas

- **pacs.008** — postadresser för gäldenär och borgenär i kundkreditöverföringar.
- **pacs.009** — institutionsadresser i kreditöverföringar mellan finansinstitut och täckningsbetalningar.
- **pacs.004** — partadresser i betalningsreturer.
- **pacs.003** — borgenärs- och gäldenärsadresser i kundautogiro.

## Hur pacs008 hjälper

- Validerar strukturerade och hybridpostadressfält före XML-generering.
- Flaggar ostrukturerade adressdata som skulle misslyckas efter tidsfristen.
- Stöder både hybridformat före tidsfristen och enbart strukturerade format efter tidsfristen.
- Integrerar adresskvalitetskontroller i CI-pipelines och batchvalideringsarbetsflöden.

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

## Tidslinje

- **Mars 2023** — SWIFT CBPR+ driftsätts med ISO 20022 för gränsöverskridande betalningar.
- **November 2025** — samexistensperioden för MT- och MX-betalningsinstruktioner upphör.
- **November 2026** — kravet på strukturerad postadress träder i kraft för CBPR+-meddelanden.
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## Vad man ska göra nu

- Granska nuvarande adressdatakvalitet i gäldenärs-, borgenärs- och agentposter.
- Mappa befintliga ostrukturerade adressfält till det strukturerade formatet (gata, byggnad, postnummer, stad, land).
- Lägg till adressvalidering i förgenereringspipelinen med pacs008.
- Testa med representativa betalningsdata före tidsfristen.

## Referenser

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

