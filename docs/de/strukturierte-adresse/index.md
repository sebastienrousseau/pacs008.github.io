---
title: "Frist für strukturierte Adressen November 2026 | pacs008"
description: Auswirkungen der SWIFT CBPR+ Frist im November 2026 für strukturierte Postanschriften auf pacs.008 und verwandte Zahlungsnachrichten, und wie pacs008...
lang: de-DE
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
    text: "Aktuelle Adressdatenqualität für Schuldner-, Gläubiger- und Agentendatensätze prüfen."
  - name: "Step 2"
    text: "Bestehende unstrukturierte Adressfelder dem strukturierten Format zuordnen (Straße, Gebäude, PLZ, Ort, Land)."
  - name: "Step 3"
    text: "Adressvalidierung mit pacs008 in die Pre-Generation-Pipeline einbauen."
  - name: "Step 4"
    text: "Mit repräsentativen Zahlungsdaten vor der Frist testen."
---

# Frist für strukturierte Adressen November 2026

SWIFT verlangt ab November 2026 strukturierte Postanschriften in grenzüberschreitenden Zahlungsnachrichten. Diese Seite erklärt, was sich ändert, welche Nachrichten betroffen sind und wie pacs008 Teams bei der Vorbereitung hilft.

## Was sich ändert

Dies ist eine Mindest-, keine Höchstanforderung. Ab dem 14. November 2026 muss eine betroffene Partei den Ort in TwnNm und das Land in Ctry als zweistelligen ISO-3166-Code führen. Straße, Hausnummer und Postleitzahl dürfen in den Adresszeilen verbleiben: Das ist eine hybride Adresse und sie wird akzeptiert. Entfernt wird ausschließlich die vollständig unstrukturierte Adresse — die gesamte Adresse als Freitext ohne strukturierten Ort und ohne Land. Ausschließlich per BIC identifizierte Institute sind nicht betroffen.

## Warum es wichtig ist

- Unstrukturierte Adressen erhöhen die manuellen Reparaturraten und verzögern die automatische Verarbeitung.
- Strukturierte Adressen verbessern die Genauigkeit der Sanktionsprüfung durch Trennung von Parteiname und Standortdaten.
- Regulatorische und schemaspezifische Anforderungen verlangen zunehmend strukturierte Daten für Compliance und Berichtswesen.
- Ablehnungsraten bei grenzüberschreitenden Zahlungen steigen, wenn die Adressqualität nicht den Erwartungen der Gegenpartei entspricht.

## Welche Nachrichten betroffen sind

- **pacs.008** — Postanschriften von Schuldner und Gläubiger bei Kundenkredittransfers.
- **pacs.009** — Institutionsadressen bei Finanzinstitutstransfers und Deckungszahlungen.
- **pacs.004** — Parteiadressen bei Zahlungsrückgaben.
- **pacs.003** — Adressen von Gläubiger und Schuldner bei Kundenlastschriften.

## Wie pacs008 hilft

- Validiert strukturierte und hybride Postadressfelder vor der XML-Generierung.
- Kennzeichnet unstrukturierte Adressdaten, die nach der Frist fehlschlagen würden.
- Unterstützt sowohl Hybridformate vor der Frist als auch rein strukturierte Formate nach der Frist.
- Integriert Adressqualitätsprüfungen in CI-Pipelines und Batch-Validierungs-Workflows.

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

## Zeitplan

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

## Was jetzt zu tun ist

- Aktuelle Adressdatenqualität für Schuldner-, Gläubiger- und Agentendatensätze prüfen.
- Bestehende unstrukturierte Adressfelder dem strukturierten Format zuordnen (Straße, Gebäude, PLZ, Ort, Land).
- Adressvalidierung mit pacs008 in die Pre-Generation-Pipeline einbauen.
- Mit repräsentativen Zahlungsdaten vor der Frist testen.

## Referenzen

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

