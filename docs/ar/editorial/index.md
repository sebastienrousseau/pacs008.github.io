---
title: "السياسة التحريرية | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: ar-SA
lastUpdated: true
image: /logo.webp
---

# السياسة التحريرية

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 كتالوج تعريفات الرسائل](https://www.iso20022.org/iso-20022-message-definitions) لمواصفات الرسائل وتاريخ الإصدارات.
- [SWIFT CBPR+ إرشادات الاستخدام](https://www.swift.com/standards/iso-20022) لسياق المدفوعات عبر الحدود.
- [EPC SEPA دليل قواعد تحويل الائتمان](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) لقواعد تحويل الائتمان باليورو.
- [EPC SEPA دليل قواعد تحويل الائتمان الفوري](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) لقواعد الدفع الفوري.

## عملية مراجعة المحتوى

كل صفحة على pacs008.com تمر بمراجعة منهجية قبل النشر. يبدأ المحتوى الجديد كمسودة مبنية على المصادر الأولية. تُفحص المسودة للتأكد من دقتها التقنية مقارنةً بكتالوج رسائل ISO 20022 ووثائق المنظومة ذات الصلة. تُتحقق أرقام الإصدارات ومعرّفات التسجيل وتعريفات الحقول مقابل إدخالات الكتالوج الرسمية.

بعد المراجعة الأولية يخضع المحتوى لفحص هيكلي لضمان الاتساق مع الصفحات القائمة. تُوحّد التنقلات والإحالات المتبادلة والمصطلحات عبر الموقع. يعكس تاريخ المراجعة المعروض على كل صفحة رسائل آخر تحقق مقابل المصادر الأولية.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## الدقة التقنية

يتبع المحتوى التقني تعريفات رسائل ISO 20022 المنشورة في الكتالوج الرسمي. تتطابق أسماء الحقول وأنواع البيانات وقواعد العدد مع مخططات XSD لكل إصدار رسالة. عندما يختلف الاستخدام الخاص بالمنظومة عن المعيار الأساسي تُستشهد وثائق المنظومة ذات الصلة مباشرةً.

أمثلة الشفرات في وثائق API مختبرة مقابل الإصدار الحالي لأداة pacs008. تعكس أوامر CLI ونقاط نهاية API وأساليب مكتبة Python الحزمة المنشورة على PyPI. تُحدَّث الأمثلة مع كل إصدار جديد للحفاظ على التزامن مع الأداة.

## منهجية الترجمة

pacs008.com متاح بـ 22 لغة. ينشأ كل المحتوى باللغة الإنجليزية. تُنتج الصفحات المترجمة من المادة المصدرية الإنجليزية المراجعة باستخدام سكربت بناء يحافظ على بنية الصفحة وتسلسل العناوين وأهداف الروابط عبر جميع اللغات.

تبقى المصطلحات التقنية ومعرّفات ISO والرموز المعيارية دون ترجمة لتجنب الغموض. مصطلحات مثل pacs.008.001.13 وBIC وIBAN وCBPR+ تظهر بصيغتها المعيارية في كل لغة. يُترجم المحتوى غير التقني ليُقرأ بشكل طبيعي في كل لغة مستهدفة. تُراجع الترجمات من حيث الاتساق الهيكلي وتُعاد توليدها عند تغيير المادة المصدرية الإنجليزية.

## تواتر التحديثات

يُحدَّث المحتوى استجابةً لثلاثة محفزات. أولًا عندما تنشر ISO 20022 إصدار كتالوج رسائل جديدًا يؤثر على تعريفات رسائل pacs. ثانيًا عندما تصدر SWIFT إرشادات استخدام CBPR+ محدثة أو مواعيد نهائية للترحيل. ثالثًا عندما يُحدِّث EPC أدلة قواعد تحويل الائتمان أو تحويل الائتمان الفوري ضمن SEPA.

تتبع أداة pacs008 نظام الإصدار الدلالي. ينعكس كل إصدار جديد في وثائق API وسجل التغييرات. يُعاد بناء الموقع وإعادة نشره مع كل تحديث للمحتوى أو الأداة.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
