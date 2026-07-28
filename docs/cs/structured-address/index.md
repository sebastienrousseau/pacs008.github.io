---
title: "Termín strukturovaných adres v listopadu 2026 | pacs008"
description: Jak termín strukturovaných poštovních adres SWIFT CBPR+ v listopadu 2026 ovlivňuje pacs.008 a související platební zprávy.
lang: cs-CZ
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
    text: "Provést audit současné kvality adresních údajů v záznamech dlužníků, věřitelů a agentů."
  - name: "Step 2"
    text: "Namapovat existující nestrukturovaná adresní pole na strukturovaný formát (ulice, budova, PSČ, město, země)."
  - name: "Step 3"
    text: "Přidat validaci adres do pre-generačního pipeline pomocí pacs008."
  - name: "Step 4"
    text: "Otestovat s reprezentativními platebními daty před uplynutím lhůty."
---

# Termín strukturovaných adres v listopadu 2026

SWIFT vyžaduje strukturované poštovní adresy v přeshraničních platebních zprávách od listopadu 2026. Co se mění, které zprávy jsou dotčeny a jak pacs008 pomáhá týmům s přípravou.

## Co se mění

Jde o minimální, nikoli maximální požadavek. Od 14. listopadu 2026 musí dotčená strana uvádět město v TwnNm a zemi v Ctry jako dvoupísmenný kód ISO 3166. Ulice, číslo budovy a PSČ mohou zůstat v adresních řádcích: jde o hybridní adresu a je akceptována. Odstraňuje se pouze zcela nestrukturovaná adresa — celá adresa ve volném textu bez strukturovaného města a země. Institucí identifikovaných pouze pomocí BIC se to netýká.

## Proč je to důležité

- Nestrukturované adresy zvyšují míru manuálních oprav a zpožďují přímé zpracování.
- Strukturované adresy zlepšují přesnost prověřování sankcí oddělením jména strany od lokalizačních údajů.
- Regulatorní požadavky a požadavky schémat stále více nařizují strukturovaná data pro dodržování předpisů a výkaznictví.
- Míra zamítnutí přeshraničních plateb roste, když kvalita adres nesplňuje očekávání protistrany.

## Které zprávy jsou dotčeny

- **pacs.008** — poštovní adresy dlužníka a věřitele v zákaznických úhradách.
- **pacs.009** — adresy institucí v mezibankovních úhradách a krycích platbách.
- **pacs.004** — adresy stran ve vratných platbách.
- **pacs.003** — adresy věřitele a dlužníka v přímých inkasech zákazníků.

## Jak pacs008 pomáhá

- Validuje strukturovaná a hybridní pole poštovní adresy před generováním XML.
- Označuje nestrukturované adresní údaje, které by po uplynutí lhůty neprošly.
- Podporuje jak hybridní formáty před lhůtou, tak výhradně strukturované formáty po lhůtě.
- Integruje kontroly kvality adres do CI pipeline a dávkových validačních pracovních postupů.

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

## Časová osa

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

## Co dělat nyní

- Provést audit současné kvality adresních údajů v záznamech dlužníků, věřitelů a agentů.
- Namapovat existující nestrukturovaná adresní pole na strukturovaný formát (ulice, budova, PSČ, město, země).
- Přidat validaci adres do pre-generačního pipeline pomocí pacs008.
- Otestovat s reprezentativními platebními daty před uplynutím lhůty.

## Reference

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

