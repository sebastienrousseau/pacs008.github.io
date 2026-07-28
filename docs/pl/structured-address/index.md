---
title: "Termin adresu strukturalnego listopad 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: pl-PL
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
    text: "Przeprowadzić audyt obecnej jakości danych adresowych w rekordach dłużników, wierzycieli i agentów."
  - name: "Step 2"
    text: "Zmapować istniejące nieustrukturyzowane pola adresowe do formatu ustrukturyzowanego (ulica, budynek, kod pocztowy, miasto, kraj)."
  - name: "Step 3"
    text: "Dodać walidację adresów do potoku pre-generacji przy użyciu pacs008."
  - name: "Step 4"
    text: "Przetestować z reprezentatywnymi danymi płatniczymi przed terminem."
---

# Termin adresu strukturalnego listopad 2026

SWIFT wymaga ustrukturyzowanych adresów pocztowych w transgranicznych komunikatach płatniczych od listopada 2026. Co się zmienia, które komunikaty są dotknięte i jak pacs008 pomaga zespołom w przygotowaniach.

## Co się zmienia

To wymóg minimalny, a nie maksymalny. Od 14 listopada 2026 r. strona objęta wymogiem musi podać miejscowość w TwnNm oraz kraj w Ctry jako dwuliterowy kod ISO 3166. Ulica, numer budynku i kod pocztowy mogą pozostać w liniach adresu: jest to adres hybrydowy i jest akceptowany. Usuwany jest wyłącznie adres całkowicie niestrukturalny — cały adres w polach tekstowych, bez ustrukturyzowanej miejscowości i kraju. Instytucje identyfikowane wyłącznie kodem BIC nie są objęte wymogiem.

## Dlaczego to ważne

- Nieustrukturyzowane adresy zwiększają wskaźniki ręcznych napraw i opóźniają przetwarzanie bezpośrednie.
- Ustrukturyzowane adresy poprawiają dokładność weryfikacji sankcji poprzez oddzielenie nazwy strony od danych lokalizacyjnych.
- Wymogi regulacyjne i wymogi schematów coraz częściej nakazują dane ustrukturyzowane w celach zgodności i raportowania.
- Wskaźniki odrzuceń płatności transgranicznych rosną, gdy jakość adresów nie spełnia oczekiwań kontrahentów.

## Które komunikaty są dotknięte

- **pacs.008** — adresy pocztowe dłużnika i wierzyciela w przelewach kredytowych klientów.
- **pacs.009** — adresy instytucji w przelewach kredytowych między instytucjami finansowymi i płatnościach pokrycia.
- **pacs.004** — adresy stron w zwrotach płatności.
- **pacs.003** — adresy wierzyciela i dłużnika w poleceniach zapłaty klientów.

## Jak pacs008 pomaga

- Waliduje ustrukturyzowane i hybrydowe pola adresu pocztowego przed generowaniem XML.
- Oznacza nieustrukturyzowane dane adresowe, które nie przejdą weryfikacji po terminie.
- Obsługuje zarówno hybrydowe formaty przed terminem, jak i formaty wyłącznie ustrukturyzowane po terminie.
- Integruje kontrole jakości adresów w potokach CI i przepływach walidacji wsadowej.

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

## Harmonogram

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

## Co zrobić teraz

- Przeprowadzić audyt obecnej jakości danych adresowych w rekordach dłużników, wierzycieli i agentów.
- Zmapować istniejące nieustrukturyzowane pola adresowe do formatu ustrukturyzowanego (ulica, budynek, kod pocztowy, miasto, kraj).
- Dodać walidację adresów do potoku pre-generacji przy użyciu pacs008.
- Przetestować z reprezentatywnymi danymi płatniczymi przed terminem.

## Odniesienia

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

