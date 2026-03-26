---
title: "PACS messages explained | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# PACS messages explained

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Жизненный цикл платежа

Полный жизненный цикл платежа pacs включает шесть этапов и несколько типов сообщений, работающих совместно.

**Этап 1 — Инициирование.** Платёж возникает в домене клиент-банк (pain.001).

**Этап 2 — Межбанковская инструкция.** Агент должника создаёт pacs.008 и отправляет его следующему агенту.

**Этап 3 — Отчёты о статусе.** Принимающий агент может отправить pacs.002 для подтверждения статуса.

**Этап 4 — Расчёт.** Выполняется через CLRG, INDA/INGA или COVE.

**Этап 5 — Зачисление бенефициару.** Агент кредитора зачисляет средства бенефициару.

**Этап 6 — Обработка исключений.** pacs.004 возвращает средства. pacs.007 отменяет платёж. pacs.028 запрашивает статус.

### Последовательный поток

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Поток покрытия

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML-структура pacs.008

pacs.008 состоит из двух основных блоков: заголовка группы (GrpHdr) и информации о транзакции кредитового перевода (CdtTrfTxInf).

## Ссылки

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

