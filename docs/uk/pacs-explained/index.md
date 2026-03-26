---
title: "Пояснення повідомлень PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: uk-UA
lastUpdated: true
image: /logo.webp
---

# Пояснення повідомлень PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Життєвий цикл платежу

Повний життєвий цикл платежу pacs включає шість етапів та кілька типів повідомлень, що працюють спільно.

**Етап 1 — Ініціювання.** Платіж виникає у домені клієнт-банк (pain.001).

**Етап 2 — Міжбанківська інструкція.** Агент боржника створює pacs.008 та надсилає його наступному агенту.

**Етап 3 — Звіти про статус.** Агент-отримувач може надіслати pacs.002 для підтвердження статусу.

**Етап 4 — Розрахунок.** Виконується через CLRG, INDA/INGA або COVE.

**Етап 5 — Зарахування бенефіціару.** Агент кредитора зараховує кошти бенефіціару.

**Етап 6 — Обробка винятків.** pacs.004 повертає кошти. pacs.007 скасовує платіж. pacs.028 запитує статус.

### Послідовний потік

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Потік покриття

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML-структура pacs.008

pacs.008 складається з двох основних блоків: заголовка групи (GrpHdr) та інформації про транзакцію кредитового переказу (CdtTrfTxInf).

## Посилання

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

