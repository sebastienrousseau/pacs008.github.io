---
title: Типы сообщений | Русский
description: Поддерживаемые определения и версии сообщений pacs ISO 20022.
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# Типы сообщений

Pacs008 охватывает основное определение сообщения pacs.008 и связанные сообщения, используемые в потоках оркестрации и сверки.

## Включённая поддержка

- [`pacs.002.001.12`](/ru/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/ru/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/ru/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/ru/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.01`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.02`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.03`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.04`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.05`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.06`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.07`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.08`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.09`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.10`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.11`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.12`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.13`](/ru/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/ru/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/ru/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/ru/pacs.028.001.05/) — FI to FI Payment Status Request

## Модель поставки

Каждый поддерживаемый тип сообщения обеспечен шаблонами и логикой валидации, чтобы команды могли стандартизировать генерацию и регрессионное тестирование по нескольким каналам.

## Рыночный контекст 2026

- **SEPA SCT / SCT Inst**: pacs.008 остаётся центральным для обмена кредитовыми переводами и обработки мгновенных платежей.
- **CBPR+**: pacs.008 продолжает заменять трансграничные нагрузки в стиле MT103 более богатыми структурированными данными.
- **Структурированные адреса**: текущие рыночные рекомендации указывают на переход в ноябре 2026 от полностью неструктурированных почтовых адресов.
- **Серийный метод и STP**: многоэтапные межбанковские цепочки по-прежнему важны, а варианты сквозной обработки остаются ключевыми для операционной эффективности.

## Операционные возможности

Pacs008 предоставляет генерацию и валидацию на основе шаблонов по поддерживаемым ревизиям определений сообщений:

- сравнивать версии
- проводить регрессионное тестирование обновлений схем
- укреплять данные исходящих платёжных сообщений перед релизом
- поддерживать команды продукта, операций и миграции из одной кодовой базы

