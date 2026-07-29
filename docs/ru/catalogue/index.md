---
title: "Каталог сообщений и правил | pacs008"
description: "Охват отражает шаблоны, поставляемые в пакете, поэтому он не может заявлять больше, чем делает ПО."
lang: ru-RU
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ru/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# Каталог сообщений и правил

Сформировано из реестров pacs008, набор правил `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
Охват отражает шаблоны, поставляемые в пакете, поэтому он не может заявлять больше, чем делает ПО.

## Семейства сообщений

| Семейство | Название | Версии | Количество | Применимые правила |
|---|---|---|---|---|
| [`pacs.008`](/ru/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/ru/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/ru/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/ru/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/ru/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/ru/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/ru/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/ru/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### Не реализовано

Мы перечисляем их, потому что их отсутствие легко упустить.

| Семейство | Статус | Примечание |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## Профили схем

| Профиль | Название | Статус | Действует |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## Правила

У каждого правила есть стабильный идентификатор, не меняющийся между минорными выпусками. Изменение результата требует новой версии набора.

*Сводки правил и тексты исправлений приведены на английском: это нормативное содержание правила, на которое каждый интерфейс ссылается по идентификатору.*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| Профиль | cbpr-plus |
| Слой | scheme |
| Серьёзность | error |
| Действует с | 2026-11-14 |
| Сообщения | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Путь | `{party}/PstlAdr` |
| Источник | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), проверено 2026-07-28 |
| Тестовые наборы | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (проходит) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (проходит) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (не проходит) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**Исправление.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| Профиль | cbpr-plus |
| Слой | scheme |
| Серьёзность | error |
| Действует с | 2026-11-14 |
| Сообщения | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Путь | `{party}/PstlAdr/TwnNm` |
| Источник | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), проверено 2026-07-28 |
| Тестовые наборы | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (проходит) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (не проходит) |

Town Name must be carried in TwnNm, not in an address line.

**Исправление.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| Профиль | cbpr-plus |
| Слой | scheme |
| Серьёзность | error |
| Действует с | 2026-11-14 |
| Сообщения | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Путь | `{party}/PstlAdr/Ctry` |
| Источник | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), проверено 2026-07-28 |
| Тестовые наборы | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (проходит) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (не проходит) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**Исправление.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| Профиль | cbpr-plus |
| Слой | scheme |
| Серьёзность | info |
| Действует с | 2025-11-22 |
| Сообщения | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Путь | `{party}/PstlAdr` |
| Источник | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), проверено 2026-07-28 |
| Тестовые наборы | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (проходит) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**Исправление.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| Профиль | cbpr-plus |
| Слой | scheme |
| Серьёзность | info |
| Действует с | 2026-11-14 |
| Сообщения | `pacs.008`, `pacs.009` |
| Путь | `{agent}/FinInstnId/BICFI` |
| Источник | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), проверено 2026-07-28 |
| Тестовые наборы | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (проходит) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**Исправление.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| Профиль | cbpr-plus |
| Слой | scheme |
| Серьёзность | info |
| Действует с | 2026-11-14 |
| Сообщения | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| Путь | — |
| Источник | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), проверено 2026-07-28 |
| Тестовые наборы | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**Исправление.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| Профиль | chaps-uk |
| Слой | scheme |
| Серьёзность | error |
| Действует с | 2026-11-14 |
| Сообщения | `pacs.008`, `pacs.009` |
| Путь | `{party}/PstlAdr` |
| Источник | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), проверено 2026-07-28 |
| Тестовые наборы | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (проходит) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (не проходит) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**Исправление.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **объявлено, ещё не применяется**

| | |
|---|---|
| Профиль | chaps-uk |
| Слой | scheme |
| Серьёзность | error |
| Действует с | 2027-11-01 |
| Сообщения | `pacs.008`, `pacs.009` |
| Путь | `CdtTrfTxInf/Purp/Cd` |
| Источник | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), проверено 2026-07-28 |
| Тестовые наборы | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**Исправление.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **объявлено, ещё не применяется**

| | |
|---|---|
| Профиль | chaps-uk |
| Слой | scheme |
| Серьёзность | error |
| Действует с | 2027-11-01 |
| Сообщения | `pacs.008` |
| Путь | `CdtTrfTxInf/RmtInf/Strd` |
| Источник | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), проверено 2026-07-28 |
| Тестовые наборы | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**Исправление.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## Источники

| Источник | Издатель | Документ | Действует | Проверено |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## Атрибуция ISO 20022

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

Определения и идентификаторы сообщений на этой странице получены из материалов ISO 20022, используемых согласно [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
