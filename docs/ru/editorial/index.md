---
title: "Редакционная политика | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: ru-RU
lastUpdated: true
image: /logo.webp
---

# Редакционная политика

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [Каталог определений сообщений ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) — спецификации сообщений и история версий.
- [Руководство по использованию SWIFT CBPR+](https://www.swift.com/standards/iso-20022) — контекст трансграничных платежей.
- [Правила EPC SEPA Credit Transfer](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) — правила кредитовых переводов в евро.
- [Правила EPC SEPA Instant Credit Transfer](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) — правила мгновенных платежей.

## Процесс проверки контента

Каждая страница на pacs008.com проходит структурированную проверку перед публикацией. Новый контент начинается с черновика на основе первичных источников. Черновик проверяется на техническую точность по каталогу сообщений ISO 20022 и соответствующей документации схем. Номера версий, регистрационные идентификаторы и определения полей верифицируются по официальным записям каталога.

После первоначальной проверки контент проходит структурный контроль для обеспечения согласованности с существующими страницами. Навигация, перекрёстные ссылки и терминология стандартизированы по всему сайту. Дата проверки на каждой странице сообщения отражает последнюю верификацию по первичным источникам.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Техническая точность

Технический контент соответствует определениям сообщений ISO 20022, опубликованным в официальном каталоге. Наименования полей, типы данных и правила кардинальности соответствуют XSD-схемам для каждой версии сообщения. Когда использование в конкретной схеме отличается от базового стандарта, соответствующая документация схемы цитируется напрямую.

Примеры кода в документации API протестированы на текущем релизе инструментария pacs008. Команды CLI, эндпоинты API и методы библиотеки Python соответствуют опубликованному пакету на PyPI. Примеры обновляются с каждым новым релизом для синхронизации с инструментарием.

## Методология перевода

pacs008.com доступен на 22 языках. Весь контент создаётся на английском языке. Переведённые страницы генерируются из проверенного английского исходного материала с помощью скрипта сборки, сохраняющего структуру страниц, иерархию заголовков и целевые ссылки во всех локалях.

Технические термины, идентификаторы ISO и стандартные коды остаются без перевода во избежание неоднозначности. Такие термины, как pacs.008.001.13, BIC, IBAN и CBPR+, отображаются в стандартной форме на каждом языке. Нетехнический контент переводится для естественного чтения на каждом целевом языке. Переводы проверяются на структурную согласованность и перегенерируются при изменении английского исходного материала.

## Частота обновлений

Контент обновляется в ответ на три триггера. Первый — когда ISO 20022 публикует новую версию каталога сообщений, затрагивающую определения сообщений pacs. Второй — когда SWIFT выпускает обновлённое руководство по использованию CBPR+ или новые сроки миграции. Третий — когда EPC обновляет правила SEPA Credit Transfer или SEPA Instant Credit Transfer.

Инструментарий pacs008 следует семантическому версионированию. Каждый новый релиз отражается в документации API и журнале изменений. Сайт пересобирается и повторно развёртывается при каждом обновлении контента или инструментария.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
