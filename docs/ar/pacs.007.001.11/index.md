---
title: pacs.007.001.11 | عكس الدفعة من مؤسسة مالية إلى مؤسسة مالية | pacs008
description: يُستخدم رسالة pacs.007 لعكس تعليمات دفع مرسلة سابقاً لم تتم تسويتها بعد أو لطلب عكس دفعة مسوّاة. على عكس pacs.004 (الإرجاع)، يتم بدؤه من الوكيل المُرسل...
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — عكس الدفعة من مؤسسة مالية إلى مؤسسة مالية

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>اسم ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## نظرة عامة

يُستخدم رسالة pacs.007 لعكس تعليمات دفع مرسلة سابقاً لم تتم تسويتها بعد أو لطلب عكس دفعة مسوّاة. على عكس pacs.004 (الإرجاع)، يتم بدؤه من الوكيل المُرسل الأصلي.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة والطابع الزمني للإنشاء
- **TxInf** — معلومات المعاملة مع مبلغ العكس والأطراف
- **OrgnlGrpInf** — معلومات المجموعة الأصلية المشيرة إلى الرسالة المصدرية
- **RvslRsnInf** — معلومات سبب العكس مع رموز أسباب منظمة
- **OrgnlTxRef** — مرجع المعاملة الأصلية للتتبع من طرف إلى طرف

## السياق التجاري

- يُبدأ عندما يحدد المُرسل الأصلي خطأً قبل أو بعد التسوية
- يُستخدم في سيناريوهات الاحتيال التي تتطلب عكساً سريعاً
- يدعم العكس الكامل والجزئي لمبالغ الدفع الأصلية
- يحمل رموز أسباب عكس منظمة للمعالجة في المراحل اللاحقة

<div class="operational-matrix-table" tabindex="0" aria-label="عناصر البيانات الرئيسية السياق التجاري">
  <table>
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
          <td class="operational-matrix-table__right">يُبدأ عندما يحدد المُرسل الأصلي خطأً قبل أو بعد التسوية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — معلومات المعاملة مع مبلغ العكس والأطراف</td>
          <td class="operational-matrix-table__right">يُستخدم في سيناريوهات الاحتيال التي تتطلب عكساً سريعاً</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — معلومات المجموعة الأصلية المشيرة إلى الرسالة المصدرية</td>
          <td class="operational-matrix-table__right">يدعم العكس الكامل والجزئي لمبالغ الدفع الأصلية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — معلومات سبب العكس مع رموز أسباب منظمة</td>
          <td class="operational-matrix-table__right">يحمل رموز أسباب عكس منظمة للمعالجة في المراحل اللاحقة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — مرجع المعاملة الأصلية للتتبع من طرف إلى طرف</td>
          <td class="operational-matrix-table__right">يرسل الوكيل المُرسل الأصلي pacs.007 عبر سلسلة الدفع لعكس دفعة مُرسلة سابقاً. يعالج كل وكيل تعليمات العكس ويعدّل التسوية وفقاً لذلك.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يتميز عن pacs.004 بالاتجاه — العكس يتقدم من المُرسل والإرجاع يرجع من المستفيد
- يتطلب CBPR+ الاقتران بمعرفات الرسالة الأصلية للمطابقة الآلية
- تحل رموز الأسباب المنظمة محل السرديات النصية الحرة من رسائل MT القديمة
- يُستخدم بشكل متزايد في تدفقات استرداد المدفوعات الفورية ومنع الاحتيال

## تدفق الرسالة

يرسل الوكيل المُرسل الأصلي pacs.007 عبر سلسلة الدفع لعكس دفعة مُرسلة سابقاً. يعالج كل وكيل تعليمات العكس ويعدّل التسوية وفقاً لذلك.

## جدول فروق الإصدارات

<div class="version-diff-table" tabindex="0" aria-label="جدول فروق الإصدارات">
  <table>
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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">يمثل أساساً جيداً لنمذجة مسارات عكس العمليات.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">إصدارات الكتالوج اللاحقة</td>
          <td class="version-diff-table__takeaway">تحقق من الإصدارات اللاحقة للتأكد من التوافق مع متطلبات بنية السوق الحالية.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### تعليقات الحقول

- `MsgId`: تحتاج رسالة العكس نفسها إلى معرّف مستقل وآمن لأغراض التدقيق.
- `OrgnlInstrId`: حافظ على مرجع الدفعة الأصلي لتجنب انقطاع المطابقة.
- `RvslRsnInf`: استخدم أسباب عكس مهيكلة بحيث يمكن توجيه حالات الاحتيال والخطأ وتكرار الدفعات بشكل مختلف.

## مقارنة pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="مقارنة pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>البعد</th>
        <th>pacs.007.001.11</th>
        <th>رسالة المقارنة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">الغرض الأساسي</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">الأنسب لـ</td>
          <td class="message-comparison-table__current">معالجة العكس الناتج عن الاستدعاء أو الخطأ أو الاحتيال</td>
          <td class="message-comparison-table__other">معالجة الإرجاع بعد التسوية</td>
        </tr>
    </tbody>
  </table>
</div>

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/ar/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">إرجاع المدفوعات</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
    </tbody>
  </table>
</div>

