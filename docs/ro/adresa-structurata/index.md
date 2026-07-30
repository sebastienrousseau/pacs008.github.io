---
title: "Termen adresă structurată noiembrie 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ro-RO
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
    text: "Auditați calitatea actuală a datelor de adresă în înregistrările debitorului, creditorului și agentului."
  - name: "Step 2"
    text: "Mapați câmpurile de adresă nestructurate existente la formatul structurat (stradă, clădire, cod poștal, oraș, țară)."
  - name: "Step 3"
    text: "Adăugați validarea adreselor în conducta de pre-generare folosind pacs008."
  - name: "Step 4"
    text: "Testați cu date de plată reprezentative înainte de termenul limită."
---

# Termen adresă structurată noiembrie 2026

SWIFT impune adrese poștale structurate în mesajele de plată transfrontaliere începând din noiembrie 2026. Ce se schimbă, ce mesaje sunt afectate și cum ajută pacs008 echipele să se pregătească.

## Ce se schimbă

Este o cerință minimă, nu maximă. De la 14 noiembrie 2026, o parte vizată trebuie să indice localitatea în TwnNm și țara în Ctry, sub forma unui cod ISO 3166 din două litere. Strada, numărul clădirii și codul poștal pot rămâne în liniile de adresă: aceasta este o adresă hibridă și este acceptată. Este eliminată doar adresa complet nestructurată — întreaga adresă în text liber, fără localitate și țară structurate. Agenții identificați doar prin BIC nu sunt vizați.

## De ce este important

- Adresele nestructurate cresc ratele de reparare manuală și întârzie procesarea directă.
- Adresele structurate îmbunătățesc precizia verificării sancțiunilor prin separarea numelui părții de datele de localizare.
- Cerințele de reglementare și ale schemelor impun din ce în ce mai mult date structurate pentru conformitate și raportare.
- Ratele de respingere a plăților transfrontaliere cresc când calitatea adreselor nu îndeplinește așteptările contrapartidelor.

## Ce mesaje sunt afectate

- **pacs.008** — adresele poștale ale debitorului și creditorului în transferurile de credit ale clienților.
- **pacs.009** — adresele instituțiilor în transferurile de credit între instituții financiare și plățile de acoperire.
- **pacs.004** — adresele părților în returnările de plăți.
- **pacs.003** — adresele creditorului și debitorului în debitele directe ale clienților.

## Cum ajută pacs008

- Validează câmpurile de adresă poștală structurată și hibridă înainte de generarea XML.
- Semnalează datele de adresă nestructurate care ar eșua după termenul limită.
- Suportă atât formatele hibride pre-termen cât și formatele exclusiv structurate post-termen.
- Integrează verificările de calitate a adreselor în conductele CI și fluxurile de lucru pentru validare în lot.

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

## Cronologie

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

## Ce trebuie făcut acum

- Auditați calitatea actuală a datelor de adresă în înregistrările debitorului, creditorului și agentului.
- Mapați câmpurile de adresă nestructurate existente la formatul structurat (stradă, clădire, cod poștal, oraș, țară).
- Adăugați validarea adreselor în conducta de pre-generare folosind pacs008.
- Testați cu date de plată reprezentative înainte de termenul limită.

## Referințe

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

