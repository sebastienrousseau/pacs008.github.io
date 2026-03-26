---
title: "הסבר על הודעות PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# הסבר על הודעות PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## מחזור חיי התשלום

מחזור חיי התשלום המלא של pacs כולל שישה שלבים ומספר סוגי הודעות הפועלים יחד.

**שלב 1 — ייזום.** התשלום מתחיל בתחום לקוח-בנק (pain.001).

**שלב 2 — הוראה בין-בנקאית.** סוכן החייב יוצר pacs.008 ושולח אותו לסוכן הבא.

**שלב 3 — דוחות סטטוס.** הסוכן המקבל יכול לשלוח pacs.002 לאישור הסטטוס.

**שלב 4 — סליקה.** מתבצעת דרך CLRG, INDA/INGA, או COVE.

**שלב 5 — זיכוי המוטב.** סוכן הזכאי מזכה את המוטב.

**שלב 6 — טיפול בחריגות.** pacs.004 מחזיר כספים. pacs.007 מבטל. pacs.028 מברר סטטוס.

### זרימה סדרתית

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### זרימת כיסוי

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## מבנה XML של pacs.008

pacs.008 מורכב משני בלוקים עיקריים: כותרת הקבוצה (GrpHdr) ומידע על עסקת העברת האשראי (CdtTrfTxInf).

## הפניות

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

