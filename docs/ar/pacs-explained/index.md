---
title: "PACS messages explained | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# PACS messages explained

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## دورة حياة الدفع

تتضمن دورة حياة الدفع الكاملة في pacs ست مراحل وأنواع رسائل متعددة تعمل معاً.

**المرحلة 1 — البدء.** ينشأ الدفع في مجال العميل-البنك (pain.001).

**المرحلة 2 — التعليمات بين البنوك.** ينشئ وكيل المدين pacs.008 ويرسله إلى الوكيل التالي.

**المرحلة 3 — تقارير الحالة.** يمكن للوكيل المستقبل إرسال pacs.002 لتأكيد الحالة.

**المرحلة 4 — التسوية.** تتم عبر CLRG أو INDA/INGA أو COVE.

**المرحلة 5 — إيداع المستفيد.** يقيد وكيل الدائن المبلغ للمستفيد.

**المرحلة 6 — معالجة الاستثناءات.** يُرجع pacs.004 الأموال. يعكس pacs.007 الدفع. يستعلم pacs.028 عن الحالة.

### التدفق التسلسلي

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### تدفق التغطية

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## هيكل XML لـ pacs.008

يتكون pacs.008 من كتلتين رئيسيتين: رأس المجموعة (GrpHdr) ومعلومات عملية تحويل الائتمان (CdtTrfTxInf).

## المراجع

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

