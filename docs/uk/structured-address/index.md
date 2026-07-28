---
title: "Термін структурованої адреси листопад 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: uk-UA
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
    text: "Провести аудит поточної якості адресних даних у записах боржників, кредиторів та агентів."
  - name: "Step 2"
    text: "Зіставити існуючі неструктуровані поля адрес зі структурованим форматом (вулиця, будівля, поштовий індекс, місто, країна)."
  - name: "Step 3"
    text: "Додати валідацію адрес до конвеєра попередньої генерації за допомогою pacs008."
  - name: "Step 4"
    text: "Провести тестування з репрезентативними платіжними даними до граничного терміну."
---

# Термін структурованої адреси листопад 2026

SWIFT вимагає структуровані поштові адреси в транскордонних платіжних повідомленнях з листопада 2026 року. Що змінюється, які повідомлення зачеплені та як pacs008 допомагає командам підготуватися.

## Що змінюється

SWIFT CBPR+ переходить від неструктурованих поштових адрес до структурованих полів адрес у транскордонних платіжних повідомленнях. Після граничного терміну в листопаді 2026 року поля адрес ключових сторін повинні використовувати структурований формат з окремими елементами для назви вулиці, номера будівлі, поштового індексу, міста та країни.

## Чому це важливо

- Неструктуровані адреси збільшують частку ручних виправлень та затримують наскрізну обробку.
- Структуровані адреси підвищують точність санкційного скринінгу шляхом відокремлення імені сторони від даних про місцезнаходження.
- Регуляторні вимоги та вимоги схем дедалі частіше наказують використовувати структуровані дані для комплаєнсу та звітності.
- Рівень відхилення транскордонних платежів зростає, коли якість адрес не відповідає очікуванням контрагентів.

## Які повідомлення зачеплені

- **pacs.008** — поштові адреси боржника та кредитора в клієнтських кредитових переказах.
- **pacs.009** — адреси установ у кредитових переказах між фінансовими установами та покриваючих платежах.
- **pacs.004** — адреси сторін у поверненнях платежів.
- **pacs.003** — адреси кредитора та боржника в прямих дебетуваннях клієнтів.

## Як допомагає pacs008

- Валідує структуровані та гібридні поля поштової адреси перед генерацією XML.
- Позначає неструктуровані адресні дані, які не пройдуть перевірку після граничного терміну.
- Підтримує як гібридні формати до граничного терміну, так і виключно структуровані формати після нього.
- Інтегрує перевірки якості адрес у CI-конвеєри та пакетні робочі процеси валідації.

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

## Хронологія

- **Березень 2023** — SWIFT CBPR+ запущено з ISO 20022 для транскордонних платежів.
- **Листопад 2025** — період співіснування платіжних інструкцій MT та MX завершується.
- **Листопад 2026** — вимога структурованої поштової адреси набуває чинності для повідомлень CBPR+.
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## Що робити зараз

- Провести аудит поточної якості адресних даних у записах боржників, кредиторів та агентів.
- Зіставити існуючі неструктуровані поля адрес зі структурованим форматом (вулиця, будівля, поштовий індекс, місто, країна).
- Додати валідацію адрес до конвеєра попередньої генерації за допомогою pacs008.
- Провести тестування з репрезентативними платіжними даними до граничного терміну.

## Посилання

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

