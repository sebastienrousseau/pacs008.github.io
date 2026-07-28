---
title: "Prazo de endereço estruturado novembro 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: pt-BR
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
    text: "Auditar a qualidade atual dos dados de endereço nos registros de devedor, credor e agente."
  - name: "Step 2"
    text: "Mapear os campos de endereço não estruturados existentes para o formato estruturado (rua, edifício, código postal, cidade, país)."
  - name: "Step 3"
    text: "Adicionar validação de endereço ao pipeline de pré-geração usando o pacs008."
  - name: "Step 4"
    text: "Testar com dados de pagamento representativos antes do prazo."
---

# Prazo de endereço estruturado novembro 2026

O SWIFT exige endereços postais estruturados em mensagens de pagamento transfronteiriças a partir de novembro de 2026. O que muda, quais mensagens são afetadas e como o pacs008 ajuda as equipes a se prepararem.

## O que está mudando

Trata-se de um requisito mínimo, não máximo. A partir de 14 de novembro de 2026, uma parte abrangida deve indicar a localidade em TwnNm e o país em Ctry como código ISO 3166 de duas letras. Rua, número do edifício e código postal podem permanecer nas linhas de endereço: isso é um endereço híbrido e é aceite. Apenas o endereço totalmente não estruturado — o endereço completo em texto livre, sem localidade nem país estruturados — é removido. Os agentes identificados apenas por BIC não são afetados.

## Por que é importante

- Endereços não estruturados aumentam as taxas de reparo manual e atrasam o processamento direto.
- Endereços estruturados melhoram a precisão da triagem de sanções ao separar o nome da parte dos dados de localização.
- Requisitos regulatórios e de esquema exigem cada vez mais dados estruturados para conformidade e relatórios.
- As taxas de rejeição de pagamentos transfronteiriços aumentam quando a qualidade do endereço não atende às expectativas das contrapartes.

## Quais mensagens são afetadas

- **pacs.008** — endereços postais do devedor e do credor em transferências de crédito de clientes.
- **pacs.009** — endereços de instituições em transferências de crédito entre instituições financeiras e pagamentos de cobertura.
- **pacs.004** — endereços das partes em devoluções de pagamento.
- **pacs.003** — endereços do credor e do devedor em débitos diretos de clientes.

## Como o pacs008 ajuda

- Valida campos de endereço postal estruturado e híbrido antes da geração de XML.
- Sinaliza dados de endereço não estruturados que falhariam após o prazo.
- Suporta tanto formatos híbridos pré-prazo quanto formatos apenas estruturados pós-prazo.
- Integra verificações de qualidade de endereço em pipelines de CI e fluxos de trabalho de validação em lote.

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

## O que fazer agora

- Auditar a qualidade atual dos dados de endereço nos registros de devedor, credor e agente.
- Mapear os campos de endereço não estruturados existentes para o formato estruturado (rua, edifício, código postal, cidade, país).
- Adicionar validação de endereço ao pipeline de pré-geração usando o pacs008.
- Testar com dados de pagamento representativos antes do prazo.

## Referências

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

