---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## عام

### ما هو ISO 20022؟

ISO 20022 هو معيار دولي للرسائل المالية. يحدّد لغة ونموذجاً مشتركين لرسائل الدفع المتبادلة بين المؤسسات المالية. يستخدم XML ويدعم بيانات أغنى وأكثر هيكلة.

### ما هي رسائل pacs؟

تغطي عائلة رسائل pacs تعليمات الدفع بين البنوك وتقارير الحالة والإرجاعات والعكوسات والاستفسارات. تشمل pacs.002 وpacs.003 وpacs.004 وpacs.007 وpacs.008 وpacs.009 وpacs.010 وpacs.028.

## اختيار الرسالة

### متى يجب استخدام pacs.008؟

استخدم pacs.008 لتعليمات تحويل ائتمان العملاء بين البنوك. ينقل بيانات أطراف المدين والدائن والمبالغ ومعلومات التحويل وتفاصيل التسوية.

## هيكل الرسالة

### ما هو رأس المجموعة (GrpHdr)؟

يظهر رأس المجموعة مرة واحدة لكل رسالة pacs. يحتوي على MsgId وCreDtTm وNbOfTxs وSttlmInf.

## CBPR+ والهجرة

### ما هو CBPR+؟

CBPR+ هو برنامج SWIFT لاعتماد ISO 20022 في رسائل المدفوعات عبر الحدود. بدأ العمل في مارس 2023.

## التفاصيل التقنية

### ما هو UETR وكيف يعمل تتبع gpi؟

UETR هو معرّف UUID v4 يولّده وكيل المدين ويُنقل دون تغيير عبر جميع مراحل الدفع لتتبع gpi.

## حول مجموعة أدوات pacs008

### ماذا يفعل pacs008؟

pacs008 هو مجموعة أدوات بلغة Python تنشئ وتتحقق من صحة وترسل رسائل دفع ISO 20022.

## المراجع

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

