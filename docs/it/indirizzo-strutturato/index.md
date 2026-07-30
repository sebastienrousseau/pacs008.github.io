---
title: "Scadenza indirizzo strutturato novembre 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: it-IT
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
    text: "Verificare la qualità attuale dei dati degli indirizzi nei record di debitore, creditore e agente."
  - name: "Step 2"
    text: "Mappare i campi indirizzo non strutturati esistenti al formato strutturato (via, numero civico, codice postale, città, paese)."
  - name: "Step 3"
    text: "Aggiungere la validazione degli indirizzi alla pipeline di pre-generazione utilizzando pacs008."
  - name: "Step 4"
    text: "Testare con dati di pagamento rappresentativi prima della scadenza."
---

# Scadenza indirizzo strutturato novembre 2026

SWIFT richiede indirizzi postali strutturati nei messaggi di pagamento transfrontalieri da novembre 2026. Cosa cambia, quali messaggi sono interessati e come pacs008 aiuta i team a prepararsi.

## Cosa cambia

È un requisito minimo, non massimo. Dal 14 novembre 2026 una parte interessata deve indicare la città in TwnNm e il paese in Ctry come codice ISO 3166 a due lettere. Via, numero civico e CAP possono restare nelle righe di indirizzo: questo è un indirizzo ibrido ed è accettato. Viene rimosso solo l'indirizzo completamente non strutturato, ossia l'intero indirizzo in testo libero senza città e paese strutturati. Gli agenti identificati unicamente tramite BIC non sono interessati.

## Perché è importante

- Gli indirizzi non strutturati aumentano i tassi di riparazione manuale e ritardano l'elaborazione diretta.
- Gli indirizzi strutturati migliorano la precisione dello screening delle sanzioni separando il nome della parte dai dati di localizzazione.
- I requisiti normativi e di schema impongono sempre più dati strutturati per la conformità e la rendicontazione.
- I tassi di rifiuto dei pagamenti transfrontalieri aumentano quando la qualità degli indirizzi non soddisfa le aspettative delle controparti.

## Quali messaggi sono interessati

- **pacs.008** — indirizzi postali del debitore e del creditore nei bonifici clienti.
- **pacs.009** — indirizzi delle istituzioni nei trasferimenti di credito tra istituzioni finanziarie e pagamenti di copertura.
- **pacs.004** — indirizzi delle parti nei resi di pagamento.
- **pacs.003** — indirizzi di creditore e debitore negli addebiti diretti dei clienti.

## Come pacs008 aiuta

- Valida i campi indirizzo postale strutturato e ibrido prima della generazione XML.
- Segnala i dati di indirizzo non strutturati che non supererebbero i controlli dopo la scadenza.
- Supporta sia i formati ibridi pre-scadenza sia i formati solo strutturati post-scadenza.
- Integra i controlli di qualità degli indirizzi nelle pipeline CI e nei flussi di lavoro di validazione batch.

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

## Cronologia

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

## Cosa fare adesso

- Verificare la qualità attuale dei dati degli indirizzi nei record di debitore, creditore e agente.
- Mappare i campi indirizzo non strutturati esistenti al formato strutturato (via, numero civico, codice postale, città, paese).
- Aggiungere la validazione degli indirizzi alla pipeline di pre-generazione utilizzando pacs008.
- Testare con dati di pagamento rappresentativi prima della scadenza.

## Riferimenti

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

