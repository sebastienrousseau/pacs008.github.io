---
title: "Plazo de dirección estructurada noviembre 2026 | pacs008"
description: Cómo afecta el plazo SWIFT CBPR+ de noviembre 2026 para direcciones postales estructuradas a pacs.008 y mensajes de pago relacionados, y cómo pacs008...
lang: es-ES
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
    text: "Auditar la calidad actual de los datos de dirección en los registros de deudor, acreedor y agente."
  - name: "Step 2"
    text: "Mapear los campos de dirección no estructurados existentes al formato estructurado (calle, edificio, código postal, ciudad, país)."
  - name: "Step 3"
    text: "Añadir validación de dirección al pipeline de pre-generación usando pacs008."
  - name: "Step 4"
    text: "Probar con datos de pago representativos antes del plazo."
---

# Plazo de dirección estructurada noviembre 2026

SWIFT requiere direcciones postales estructuradas en mensajes de pago transfronterizos a partir de noviembre de 2026. Esta página explica qué cambia, qué mensajes se ven afectados y cómo pacs008 ayuda a los equipos a prepararse.

## Qué cambia

Se trata de un requisito mínimo, no máximo. A partir del 14 de noviembre de 2026, una parte afectada debe indicar la localidad en TwnNm y el país en Ctry como código ISO 3166 de dos letras. La calle, el número de edificio y el código postal pueden permanecer en las líneas de dirección: eso es una dirección híbrida y se acepta. Solo se elimina la dirección totalmente no estructurada, es decir, la dirección completa en texto libre sin localidad ni país estructurados. Los agentes identificados únicamente mediante BIC no se ven afectados.

## Por qué es importante

- Las direcciones no estructuradas aumentan las tasas de reparación manual y retrasan el procesamiento automático.
- Las direcciones estructuradas mejoran la precisión del filtrado de sanciones al separar el nombre de la parte de los datos de ubicación.
- Los requisitos regulatorios y de esquema exigen cada vez más datos estructurados para el cumplimiento y la presentación de informes.
- Las tasas de rechazo de pagos transfronterizos aumentan cuando la calidad de las direcciones no cumple las expectativas de las contrapartes.

## Qué mensajes se ven afectados

- **pacs.008** — direcciones postales del deudor y acreedor en transferencias de crédito de clientes.
- **pacs.009** — direcciones de instituciones en transferencias de crédito entre instituciones financieras y pagos de cobertura.
- **pacs.004** — direcciones de las partes en devoluciones de pago.
- **pacs.003** — direcciones del acreedor y deudor en domiciliaciones de clientes.

## Cómo ayuda pacs008

- Valida campos de dirección postal estructurada e híbrida antes de la generación XML.
- Señala datos de dirección no estructurados que fallarían después del plazo.
- Soporta tanto formatos híbridos pre-plazo como formatos solo estructurados post-plazo.
- Integra verificaciones de calidad de dirección en pipelines CI y flujos de validación por lotes.

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

## Cronología

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

## Qué hacer ahora

- Auditar la calidad actual de los datos de dirección en los registros de deudor, acreedor y agente.
- Mapear los campos de dirección no estructurados existentes al formato estructurado (calle, edificio, código postal, ciudad, país).
- Añadir validación de dirección al pipeline de pre-generación usando pacs008.
- Probar con datos de pago representativos antes del plazo.

## Referencias

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

