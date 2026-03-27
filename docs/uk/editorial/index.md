---
title: "Редакційна політика | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: uk-UA
lastUpdated: true
image: /logo.webp
---

# Редакційна політика

This page explains how content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [Каталог визначень повідомлень ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) — специфікації повідомлень та історія версій.
- [Настанови з використання SWIFT CBPR+](https://www.swift.com/standards/iso-20022) — контекст транскордонних платежів.
- [Правила EPC SEPA Credit Transfer](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) — правила кредитових переказів у євро.
- [Правила EPC SEPA Instant Credit Transfer](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) — правила миттєвих платежів.

## Процес перевірки контенту

Кожна сторінка на pacs008.com проходить структуровану перевірку перед публікацією. Новий контент починається з чернетки на основі первинних джерел. Чернетка перевіряється на технічну точність за каталогом повідомлень ISO 20022 та відповідною документацією схем. Номери версій, реєстраційні ідентифікатори та визначення полів верифікуються за офіційними записами каталогу.

Після початкової перевірки контент проходить структурний контроль для забезпечення узгодженості з наявними сторінками. Навігація, перехресні посилання та термінологія стандартизовані по всьому сайту. Дата перевірки на кожній сторінці повідомлення відображає останню верифікацію за первинними джерелами.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Технічна точність

Технічний контент відповідає визначенням повідомлень ISO 20022, опублікованим в офіційному каталозі. Найменування полів, типи даних та правила кардинальності відповідають XSD-схемам для кожної версії повідомлення. Коли використання в конкретній схемі відрізняється від базового стандарту, відповідна документація схеми цитується безпосередньо.

Приклади коду в документації API протестовані на поточному релізі інструментарію pacs008. Команди CLI, ендпоінти API та методи бібліотеки Python відповідають опублікованому пакету на PyPI. Приклади оновлюються з кожним новим релізом для синхронізації з інструментарієм.

## Методологія перекладу

pacs008.com доступний 22 мовами. Весь контент створюється англійською мовою. Перекладені сторінки генеруються з перевіреного англійського вихідного матеріалу за допомогою скрипта збірки, що зберігає структуру сторінок, ієрархію заголовків та цільові посилання в усіх локалях.

Технічні терміни, ідентифікатори ISO та стандартні коди залишаються без перекладу для уникнення неоднозначності. Такі терміни, як pacs.008.001.13, BIC, IBAN та CBPR+, відображаються в стандартній формі кожною мовою. Нетехнічний контент перекладається для природного читання кожною цільовою мовою. Переклади перевіряються на структурну узгодженість та перегенеровуються при зміні англійського вихідного матеріалу.

## Частота оновлень

Контент оновлюється у відповідь на три тригери. Перший — коли ISO 20022 публікує нову версію каталогу повідомлень, що впливає на визначення повідомлень pacs. Другий — коли SWIFT випускає оновлені настанови з використання CBPR+ або нові терміни міграції. Третій — коли EPC оновлює правила SEPA Credit Transfer або SEPA Instant Credit Transfer.

Інструментарій pacs008 дотримується семантичного версіонування. Кожен новий реліз відображається в документації API та журналі змін. Сайт перезбирається та повторно розгортається при кожному оновленні контенту або інструментарію.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
