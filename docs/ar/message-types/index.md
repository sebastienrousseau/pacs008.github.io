---
title: أنواع الرسائل | العربية
description: تعريفات وإصدارات رسائل pacs المدعومة وفق ISO 20022.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# أنواع الرسائل

يغطي pacs008 تعريف رسالة pacs.008 الأساسي والرسائل ذات الصلة المستخدمة في تدفقات التنسيق والمطابقة.

## الدعم المشمول

| نوع الرسالة | الوصف |
|---|---|
| [`pacs.002.001.12`](/ar/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/ar/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/ar/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/ar/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/ar/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/ar/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/ar/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/ar/pacs.028.001.05/) | FI to FI Payment Status Request |

## نموذج التسليم

كل نوع رسالة مدعوم مدعوم بأصول قوالب ومنطق تحقق حتى تتمكن الفرق من توحيد الإنشاء واختبارات الانحدار عبر قنوات متعددة.

## سياق السوق 2026

- **SEPA SCT / SCT Inst**: يظل pacs.008 محورياً لتبادل التحويلات الائتمانية ومعالجة المدفوعات الفورية.
- **CBPR+**: يستمر pacs.008 في استبدال حمولات MT103 العابرة للحدود ببيانات منظمة أغنى.
- **العناوين المنظمة**: تشير إرشادات السوق الحالية إلى التحول في نوفمبر 2026 بعيداً عن العناوين البريدية غير المنظمة بالكامل.
- **الطريقة التسلسلية و STP**: لا تزال سلاسل البنك إلى البنك متعددة المراحل مهمة، وتبقى المتغيرات المباشرة مهمة للكفاءة التشغيلية.

## القدرات التشغيلية

يوفر pacs008 إنشاءً وتحققاً مدعوماً بالقوالب عبر مراجعات تعريف الرسائل المدعومة:

- مقارنة الإصدارات
- اختبار انحدار تحديثات الأنظمة
- تعزيز بيانات رسائل الدفع الصادرة قبل الإصدار
- دعم فرق المنتج والعمليات والترحيل من قاعدة كود واحدة

