---
title: Типи повідомлень | Українська
description: Підтримувані визначення та версії повідомлень pacs ISO 20022.
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# Типи повідомлень

pacs008 охоплює основне визначення повідомлення pacs.008 та пов'язані повідомлення, що використовуються в потоках оркестрації та звірки.

## Включена підтримка

| Тип повідомлення | Опис |
|---|---|
| [`pacs.002.001.12`](/uk/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/uk/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/uk/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/uk/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/uk/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/uk/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/uk/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/uk/pacs.028.001.05/) | FI to FI Payment Status Request |

## Модель постачання

Кожен підтримуваний тип повідомлення забезпечений шаблонами та логікою валідації, щоб команди могли стандартизувати генерацію та регресійне тестування по декількох каналах.

## Ринковий контекст 2026

- **SEPA SCT / SCT Inst**: pacs.008 залишається центральним для обміну кредитовими переказами та обробки миттєвих платежів.
- **CBPR+**: pacs.008 продовжує замінювати транскордонні навантаження у стилі MT103 багатшими структурованими даними.
- **Структуровані адреси**: поточні ринкові рекомендації вказують на перехід у листопаді 2026 від повністю неструктурованих поштових адрес.
- **Серійний метод та STP**: багатоетапні міжбанківські ланцюги залишаються важливими, а варіанти наскрізної обробки залишаються ключовими для операційної ефективності.

## Операційні можливості

pacs008 надає генерацію та валідацію на основі шаблонів по підтримуваних ревізіях визначень повідомлень:

- порівнювати версії
- проводити регресійне тестування оновлень схем
- зміцнювати дані вихідних платіжних повідомлень перед релізом
- підтримувати команди продукту, операцій та міграції з однієї кодової бази

