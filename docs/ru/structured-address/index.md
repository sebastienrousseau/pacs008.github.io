---
title: "Срок структурированного адреса ноябрь 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ru-RU
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
    text: "Провести аудит текущего качества адресных данных в записях должников, кредиторов и агентов."
  - name: "Step 2"
    text: "Сопоставить существующие неструктурированные поля адресов со структурированным форматом (улица, здание, почтовый индекс, город, страна)."
  - name: "Step 3"
    text: "Добавить валидацию адресов в конвейер предварительной генерации с помощью pacs008."
  - name: "Step 4"
    text: "Провести тестирование с репрезентативными платёжными данными до крайнего срока."
---

# Срок структурированного адреса ноябрь 2026

SWIFT требует структурированные почтовые адреса в трансграничных платёжных сообщениях с ноября 2026 года. Что меняется, какие сообщения затронуты и как pacs008 помогает командам подготовиться.

## Что меняется

Это минимальное, а не максимальное требование. С 14 ноября 2026 года соответствующая сторона обязана указывать город в TwnNm и страну в Ctry в виде двухбуквенного кода ISO 3166. Улица, номер здания и почтовый индекс могут оставаться в адресных строках: это гибридный адрес, и он принимается. Исключается только полностью неструктурированный адрес — весь адрес в свободном тексте без структурированных города и страны. Учреждения, идентифицируемые только по BIC, требование не затрагивает.

## Почему это важно

- Неструктурированные адреса увеличивают долю ручных исправлений и задерживают сквозную обработку.
- Структурированные адреса повышают точность санкционного скрининга за счёт отделения имени стороны от данных о местоположении.
- Регуляторные требования и требования схем всё чаще предписывают структурированные данные для комплаенса и отчётности.
- Уровень отклонения трансграничных платежей растёт, когда качество адресов не соответствует ожиданиям контрагентов.

## Какие сообщения затронуты

- **pacs.008** — почтовые адреса должника и кредитора в клиентских кредитовых переводах.
- **pacs.009** — адреса учреждений в кредитовых переводах между финансовыми учреждениями и покрывающих платежах.
- **pacs.004** — адреса сторон в возвратах платежей.
- **pacs.003** — адреса кредитора и должника в прямых дебетованиях клиентов.

## Как помогает pacs008

- Валидирует структурированные и гибридные поля почтового адреса перед генерацией XML.
- Отмечает неструктурированные адресные данные, которые не пройдут проверку после крайнего срока.
- Поддерживает как гибридные форматы до крайнего срока, так и исключительно структурированные форматы после него.
- Интегрирует проверки качества адресов в CI-конвейеры и пакетные рабочие процессы валидации.

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

## Хронология

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

## Что делать сейчас

- Провести аудит текущего качества адресных данных в записях должников, кредиторов и агентов.
- Сопоставить существующие неструктурированные поля адресов со структурированным форматом (улица, здание, почтовый индекс, город, страна).
- Добавить валидацию адресов в конвейер предварительной генерации с помощью pacs008.
- Провести тестирование с репрезентативными платёжными данными до крайнего срока.

## Ссылки

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

