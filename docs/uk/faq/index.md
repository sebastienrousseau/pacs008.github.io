---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Загальні питання

### Що таке ISO 20022?

ISO 20022 — міжнародний стандарт фінансових повідомлень. Визначає спільну мову та модель для платіжних повідомлень між фінансовими установами. Використовує XML та підтримує більш повні та структуровані дані.

### Що таке повідомлення pacs?

Сімейство повідомлень pacs охоплює міжбанківські платіжні інструкції, звіти про статус, повернення, скасування та запити. Включає pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 та pacs.028.

## Вибір повідомлення

### Коли використовувати pacs.008?

Використовуйте pacs.008 для інструкцій кредитового переказу клієнта між банками.

## Структура повідомлення

### Що таке заголовок групи (GrpHdr)?

Заголовок групи з'являється рівно один раз у кожному повідомленні pacs. Містить MsgId, CreDtTm, NbOfTxs, SttlmInf.

## CBPR+ та міграція

### Що таке CBPR+?

CBPR+ — програма SWIFT із впровадження ISO 20022 для транскордонних платіжних повідомлень. Запущена у березні 2023.

## Технічні деталі

### Що таке UETR і як працює відстеження gpi?

UETR — UUID v4, згенерований агентом боржника та переданий без змін на всіх етапах платежу для відстеження gpi.

## Про pacs008

### Що робить pacs008?

pacs008 — інструментарій мовою Python для генерації, валідації та відправки платіжних повідомлень ISO 20022.

## Посилання

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

