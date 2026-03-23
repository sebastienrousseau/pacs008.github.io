---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل...
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **اسم ISO** | FIToFICustomerCreditTransferV13 |
| **حالة التسجيل** | Registered |
| **السنة** | 2023 |
| **الإصدار** | 13 |

## نظرة عامة

رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 27 February 2025؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع معرف الرسالة وتاريخ الإنشاء وعدد المعاملات ومعلومات التسوية
- **CdtTrfTxInf** — معلومات معاملة التحويل مع المبلغ والرسوم والغرض
- **Dbtr / DbtrAgt** — تعريف وتفاصيل حساب المدين ووكيله
- **Cdtr / CdtrAgt** — تعريف وتفاصيل حساب الدائن ووكيله
- **RmtInf** — معلومات التحويل لمراجع الدفع المنظمة أو غير المنظمة

## السياق التجاري

- الرسالة الأساسية للتحويلات عبر الحدود والمحلية التي يبدؤها العملاء
- تُستخدم عبر SEPA SCT و SEPA Instant و CBPR+ وأنظمة المقاصة الوطنية
- تحمل معلومات تحويل منظمة لدعم المصالحة المباشرة
- تدعم طرق التسوية التسلسلية والتغطية والمباشرة لسلاسل الدفع متعددة المراحل

| عناصر البيانات الرئيسية | السياق التجاري |
|---|---|
| **GrpHdr** — رأس المجموعة مع معرف الرسالة وتاريخ الإنشاء وعدد المعاملات ومعلومات التسوية | الرسالة الأساسية للتحويلات عبر الحدود والمحلية التي يبدؤها العملاء |
| **CdtTrfTxInf** — معلومات معاملة التحويل مع المبلغ والرسوم والغرض | تُستخدم عبر SEPA SCT و SEPA Instant و CBPR+ وأنظمة المقاصة الوطنية |
| **Dbtr / DbtrAgt** — تعريف وتفاصيل حساب المدين ووكيله | تحمل معلومات تحويل منظمة لدعم المصالحة المباشرة |
| **Cdtr / CdtrAgt** — تعريف وتفاصيل حساب الدائن ووكيله | تدعم طرق التسوية التسلسلية والتغطية والمباشرة لسلاسل الدفع متعددة المراحل |
| **RmtInf** — معلومات التحويل لمراجع الدفع المنظمة أو غير المنظمة | ينشئ وكيل المدين pacs.008 ويرسله إلى وكيل الدائن (مباشرة أو عبر وسطاء). يتحقق كل وكيل في السلسلة ويثري ويمرر التعليمات حتى يقيد وكيل الدائن المبلغ في حساب المستفيد. |

## سياق CBPR+ والأنظمة

- يحل محل MT103 و MT103+ للتحويلات العابرة للحدود
- ينطبق الموعد النهائي للعناوين المنظمة في نوفمبر 2026 على جميع العناوين البريدية للأطراف
- يتطلب SWIFT gpi رسالة pacs.008 للتتبع من طرف إلى طرف المستند إلى UETR
- تعكس 13 مراجعة التطور المستمر للمخططات عبر البنى التحتية للسوق

## تدفق الرسالة

ينشئ وكيل المدين pacs.008 ويرسله إلى وكيل الدائن (مباشرة أو عبر وسطاء). يتحقق كل وكيل في السلسلة ويثري ويمرر التعليمات حتى يقيد وكيل الدائن المبلغ في حساب المستفيد.

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## الإصدارات المدعومة

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## الرسائل ذات الصلة
| نوع الرسالة | الوصف | نظرة عامة |
|---|---|---|
| [`pacs.002.001.12`](/ar/pacs.002.001.12/) | FI to FI Payment Status Report | يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع. |
| [`pacs.004.001.11`](/ar/pacs.004.001.11/) | Payment Return | يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة. |
| [`pacs.009.001.10`](/ar/pacs.009.001.10/) | Financial Institution Credit Transfer | يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة. |

