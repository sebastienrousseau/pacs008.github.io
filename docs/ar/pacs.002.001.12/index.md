---
title: "pacs.002.001.12 | تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية | pacs008"
description: يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة...
lang: ar-SA
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## نظرة عامة

يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة والطابع الزمني للإنشاء
- **OrgnlGrpInfAndSts** — معلومات وحالة المجموعة الأصلية للتقارير الجماعية
- **TxInfAndSts** — معلومات وحالة المعاملة لنتائج المعاملات الفردية
- **StsRsnInf** — معلومات سبب الحالة مع رموز أسباب منظمة
- **OrgnlTxRef** — مرجع المعاملة الأصلية المرتبط بالتعليمات المصدرية

## السياق التجاري

- يُستخدم لتأكيد التسوية أو الإبلاغ عن رفض التحويلات والخصم المباشر والمرتجعات
- يمكّن المطابقة بين الوكلاء المُرسلين والمُستلمين
- مطلوب في تدفقات CBPR+ للإقرار بمعالجة رسائل pacs.008 و pacs.009
- يدعم الإبلاغ عن الحالة على مستوى المجموعة وعلى مستوى المعاملات الفردية

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
          <td class="operational-matrix-table__right">يُستخدم لتأكيد التسوية أو الإبلاغ عن رفض التحويلات والخصم المباشر والمرتجعات</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — معلومات وحالة المجموعة الأصلية للتقارير الجماعية</td>
          <td class="operational-matrix-table__right">يمكّن المطابقة بين الوكلاء المُرسلين والمُستلمين</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — معلومات وحالة المعاملة لنتائج المعاملات الفردية</td>
          <td class="operational-matrix-table__right">مطلوب في تدفقات CBPR+ للإقرار بمعالجة رسائل pacs.008 و pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — معلومات سبب الحالة مع رموز أسباب منظمة</td>
          <td class="operational-matrix-table__right">يدعم الإبلاغ عن الحالة على مستوى المجموعة وعلى مستوى المعاملات الفردية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — مرجع المعاملة الأصلية المرتبط بالتعليمات المصدرية</td>
          <td class="operational-matrix-table__right">يرسل الوكيل المُستلم pacs.002 إلى الوكيل المُرسل لتأكيد القبول أو التسوية أو الرفض لتعليمات دفع مستلمة مثل pacs.008 أو pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يحل محل سرديات حالة MT199 والحقل 79 في رسائل MT
- يفرض CBPR+ استخدام pacs.002 لجميع اتصالات حالة الدفع
- تحل رموز الأسباب المنظمة محل تفسيرات الرفض النصية الحرة
- يتطلب تكامل تتبع SWIFT gpi رسالة pacs.002 للشفافية من طرف إلى طرف

## تدفق الرسالة

يرسل الوكيل المُستلم pacs.002 إلى الوكيل المُرسل لتأكيد القبول أو التسوية أو الرفض لتعليمات دفع مستلمة مثل pacs.008 أو pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">استخدم ذلك عند المواءمة مع القوالب وأصول التحقق الحالية في المشروع.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">إصدارات الكتالوج اللاحقة</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### تعليقات الحقول

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## مقارنة pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="مقارنة pacs.002 vs pacs.028">
  <table>
    <caption>مقارنة pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>البعد</th>
        <th>pacs.002.001.12</th>
        <th>رسالة المقارنة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">الغرض الأساسي</td>
          <td class="message-comparison-table__current">الإبلاغ عن الحالة</td>
          <td class="message-comparison-table__other">طلب الحالة</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">من يبدأ التفاعل</td>
          <td class="message-comparison-table__current">المؤسسة التي ترسل الحالة</td>
          <td class="message-comparison-table__other">المؤسسة التي تطلب الحالة</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">الوضع التشغيلي</td>
          <td class="message-comparison-table__current">إبلاغ قائم على الحدث</td>
          <td class="message-comparison-table__other">استعلام قائم على الاستثناء</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">افتراض خاطئ يجب تجنبه</td>
          <td class="message-comparison-table__current">أن تقارير الحالة تُغني عن مسارات التحقيق والمتابعة</td>
          <td class="message-comparison-table__other">أن كل دفعة تحتاج إلى طلب حالة صريح</td>
        </tr>
    </tbody>
  </table>
</div>

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/ar/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني بين المؤسسات المالية</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">طلب حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.028 من مؤسسة مالية لطلب حالة تعليمات دفع مرسلة سابقاً. يمكّن التتبع الاستباقي لمعالجة المدفوعات دون انتظار تقرير حالة غير مطلوب.</td>
        </tr>
    </tbody>
  </table>
</div>

