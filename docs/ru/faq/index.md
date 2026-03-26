---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Общие вопросы

### Что такое ISO 20022?

ISO 20022 — международный стандарт финансовых сообщений. Определяет общий язык и модель для платёжных сообщений между финансовыми учреждениями. Использует XML и поддерживает более полные и структурированные данные.

### Что такое сообщения pacs?

Семейство сообщений pacs охватывает межбанковские платёжные инструкции, отчёты о статусе, возвраты, отмены и запросы. Включает pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 и pacs.028.

## Выбор сообщения

### Когда использовать pacs.008?

Используйте pacs.008 для инструкций кредитового перевода клиента между банками.

## Структура сообщения

### Что такое заголовок группы (GrpHdr)?

Заголовок группы появляется ровно один раз в каждом сообщении pacs. Содержит MsgId, CreDtTm, NbOfTxs, SttlmInf.

## CBPR+ и миграция

### Что такое CBPR+?

CBPR+ — программа SWIFT по внедрению ISO 20022 для трансграничных платёжных сообщений. Запущена в марте 2023.

## Технические детали

### Что такое UETR и как работает отслеживание gpi?

UETR — UUID v4, генерируемый агентом должника и передаваемый без изменений на всех этапах платежа для отслеживания gpi.

## О pacs008

### Что делает pacs008?

pacs008 — Python-инструментарий для генерации, валидации и отправки платёжных сообщений ISO 20022.

## Ссылки

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

