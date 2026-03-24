---
title: "pacs.028.001.05 | طلب حالة الدفع من مؤسسة مالية إلى مؤسسة مالية | pacs008"
description: يُرسل رسالة pacs.028 من مؤسسة مالية لطلب حالة تعليمات دفع مرسلة سابقاً. يمكّن التتبع الاستباقي لمعالجة المدفوعات دون انتظار تقرير حالة غير مطلوب.
lang: ar-SA
lastUpdated: true
image: /logo.svg
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — طلب حالة الدفع من مؤسسة مالية إلى مؤسسة مالية

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">الحقل</th>
        <th scope="col">القيمة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>اسم ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>حالة التسجيل</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>السنة</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>الإصدار</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## نظرة عامة

يُرسل رسالة pacs.028 من مؤسسة مالية لطلب حالة تعليمات دفع مرسلة سابقاً. يمكّن التتبع الاستباقي لمعالجة المدفوعات دون انتظار تقرير حالة غير مطلوب.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة والطابع الزمني للإنشاء
- **TxInf** — معلومات المعاملة المحددة للدفعة المراد الاستفسار عنها
- **OrgnlGrpInf** — معلومات المجموعة الأصلية المشيرة إلى الرسالة المصدرية
- **OrgnlInstrId** — تعريف التعليمات الأصلية من الدفعة المصدرية
- **OrgnlEndToEndId** — تعريف من طرف إلى طرف أصلي للتتبع

## السياق التجاري

- يمكّن الاستفسار الاستباقي عن حالة تعليمات الدفع العابرة
- يساعد فرق العمليات في التحقيق في المدفوعات المتأخرة أو المفقودة
- يكمّل pacs.002 من خلال بدء اتصال الحالة بدلاً من الانتظار
- يُستخدم في تدفقات إدارة الاستثناءات ومراقبة اتفاقيات مستوى الخدمة

<div class="operational-matrix-table" tabindex="0" aria-label="عناصر البيانات الرئيسية السياق التجاري">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>عناصر البيانات الرئيسية</th>
        <th>السياق التجاري</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — رأس المجموعة مع تعريف الرسالة والطابع الزمني للإنشاء</td>
          <td class="operational-matrix-table__right">يمكّن الاستفسار الاستباقي عن حالة تعليمات الدفع العابرة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — معلومات المعاملة المحددة للدفعة المراد الاستفسار عنها</td>
          <td class="operational-matrix-table__right">يساعد فرق العمليات في التحقيق في المدفوعات المتأخرة أو المفقودة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — معلومات المجموعة الأصلية المشيرة إلى الرسالة المصدرية</td>
          <td class="operational-matrix-table__right">يكمّل pacs.002 من خلال بدء اتصال الحالة بدلاً من الانتظار</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — تعريف التعليمات الأصلية من الدفعة المصدرية</td>
          <td class="operational-matrix-table__right">يُستخدم في تدفقات إدارة الاستثناءات ومراقبة اتفاقيات مستوى الخدمة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — تعريف من طرف إلى طرف أصلي للتتبع</td>
          <td class="operational-matrix-table__right">يرسل الوكيل المُرسل pacs.028 إلى الوكيل المُستلم لطلب حالة دفعة محددة. يستجيب الوكيل المُستلم برسالة pacs.002 تحتوي على حالة المعالجة الحالية.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يحل محل أنماط استفسار حالة MT199 واستعلامات رسائل SWIFT اليدوية
- يدعم CBPR+ طلبات الحالة المنظمة المرتبطة بمعرفات الرسالة الأصلية
- يقلل التتبع المستند إلى UETR عبر gpi من الحاجة إلى الاستفسارات اليدوية
- يتم دمجه بشكل متزايد في لوحات معلومات عمليات الدفع الآلية

## تدفق الرسالة

يرسل الوكيل المُرسل pacs.028 إلى الوكيل المُستلم لطلب حالة دفعة محددة. يستجيب الوكيل المُستلم برسالة pacs.002 تحتوي على حالة المعالجة الحالية.

## جدول فروق الإصدارات

<div class="version-diff-table" tabindex="0" aria-label="جدول فروق الإصدارات">
  <table>
    <caption>جدول فروق الإصدارات</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>نطاق الإصدار</th>
        <th>لماذا يهم</th>
        <th>الخلاصة التنفيذية</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">مناسب لنمذجة طلبات الحالة الحالية.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">إصدار الكتالوج اللاحق</td>
          <td class="version-diff-table__takeaway">تحقق من الإصدار الأحدث من الكتالوج للتخطيط المستقبلي للتشغيل البيني.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### تعليقات الحقول

- `MsgId`: يحتاج الطلب نفسه إلى معرّف قابل للتدقيق ومتميز عن الدفعة الأساسية.
- `OrgnlInstrId`: استخدم معرّف المصدر الدقيق من التعليمات الأصلية لزيادة دقة المطابقة إلى الحد الأقصى.
- `OrgnlEndToEndId`: يساعد تضمين إمكانية تتبع العميل فرق العمليات على تسوية الاستعلام بشكل أسرع.

## مقارنة pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="مقارنة pacs.028 vs pacs.002">
  <table>
    <caption>مقارنة pacs.028 vs pacs.002</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>البعد</th>
        <th>pacs.028.001.05</th>
        <th>رسالة المقارنة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">الغرض الأساسي</td>
          <td class="message-comparison-table__current">طلب الحالة</td>
          <td class="message-comparison-table__other">الإبلاغ عن الحالة</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">من يبدأ التفاعل</td>
          <td class="message-comparison-table__current">المؤسسة التي تطلب الحالة</td>
          <td class="message-comparison-table__other">المؤسسة التي ترسل الحالة</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">الوضع التشغيلي</td>
          <td class="message-comparison-table__current">استعلام قائم على الاستثناء</td>
          <td class="message-comparison-table__other">إبلاغ قائم على الحدث</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">افتراض خاطئ يجب تجنبه</td>
          <td class="message-comparison-table__current">أنه يجب إرساله بشكل روتيني لكل دفعة</td>
          <td class="message-comparison-table__other">أنه يلغي الحاجة إلى إدارة الحالات بشكل استباقي</td>
        </tr>
    </tbody>
  </table>
</div>

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## الرسائل ذات الصلة
<div class="related-messages-table" tabindex="0" aria-label="الرسائل ذات الصلة">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>نوع الرسالة</th>
        <th>الوصف</th>
        <th>نظرة عامة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني بين المؤسسات المالية</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.</td>
        </tr>
    </tbody>
  </table>
</div>

