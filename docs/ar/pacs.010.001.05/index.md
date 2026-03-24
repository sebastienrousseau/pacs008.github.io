---
title: pacs.010.001.05 | خصم مباشر بين المؤسسات المالية | pacs008
description: يُستخدم رسالة pacs.010 بين المؤسسات المالية لمعاملات الخصم المباشر على الحساب الخاص للمؤسسة. يمكّن مؤسسة من تحصيل الأموال مباشرة من حساب مؤسسة أخرى.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — خصم مباشر بين المؤسسات المالية

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

يُستخدم رسالة pacs.010 بين المؤسسات المالية لمعاملات الخصم المباشر على الحساب الخاص للمؤسسة. يمكّن مؤسسة من تحصيل الأموال مباشرة من حساب مؤسسة أخرى.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة ومعلومات التسوية
- **DrctDbtTxInf** — معلومات معاملة الخصم المباشر مع مبلغ التحصيل
- **Cdtr / CdtrAgt** — المؤسسة الدائنة وتعريف وكيلها
- **Dbtr / DbtrAgt** — المؤسسة المدينة وتعريف وكيلها
- **IntrBkSttlmAmt** — مبلغ التسوية بين البنوك بعملة التسوية

## السياق التجاري

- يدعم تحصيل الخصم المباشر بين المؤسسات المالية
- يُستخدم لتحصيل الرسوم ونداءات الهامش والتزامات التسوية المؤسسية
- يتطلب ترتيبات ثنائية متفق عليها مسبقاً بين المؤسسات المشاركة
- حاسم لإدارة النقد المؤسسي ودورات التسوية بين البنوك

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — رأس المجموعة مع تعريف الرسالة ومعلومات التسوية</td>
          <td class="operational-matrix-table__right">يدعم تحصيل الخصم المباشر بين المؤسسات المالية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — معلومات معاملة الخصم المباشر مع مبلغ التحصيل</td>
          <td class="operational-matrix-table__right">يُستخدم لتحصيل الرسوم ونداءات الهامش والتزامات التسوية المؤسسية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — المؤسسة الدائنة وتعريف وكيلها</td>
          <td class="operational-matrix-table__right">يتطلب ترتيبات ثنائية متفق عليها مسبقاً بين المؤسسات المشاركة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — المؤسسة المدينة وتعريف وكيلها</td>
          <td class="operational-matrix-table__right">حاسم لإدارة النقد المؤسسي ودورات التسوية بين البنوك</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — مبلغ التسوية بين البنوك بعملة التسوية</td>
          <td class="operational-matrix-table__right">ترسل المؤسسة الدائنة pacs.010 إلى المؤسسة المدينة لتحصيل الأموال وفق ترتيب متفق عليه مسبقاً. تتحقق المؤسسة المدينة من الطلب وتسوّي أو ترفض الخصم المباشر.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يحل محل عناصر MT204 لمعالجة الخصم المباشر بين البنوك
- يتبع تعريف الأطراف المنظم نفس المتطلبات كباقي رسائل pacs
- التحقق من المعرفات المؤسسية (BIC, LEI) إلزامي
- مشمول في خرائط طريق اعتماد ISO 20022 الكاملة عبر البنى التحتية للسوق

## تدفق الرسالة

ترسل المؤسسة الدائنة pacs.010 إلى المؤسسة المدينة لتحصيل الأموال وفق ترتيب متفق عليه مسبقاً. تتحقق المؤسسة المدينة من الطلب وتسوّي أو ترفض الخصم المباشر.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">يمثّل نقطة مرجعية لدعم الخصم المباشر بين المؤسسات في المشروع الحالي.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">إصدار الكتالوج اللاحق</td>
          <td class="version-diff-table__takeaway">راجع ذلك قبل اعتماد متطلبات البنية التحتية الأحدث.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### تعليقات الحقول

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/ar/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني بين المؤسسات المالية</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يتم تبادل رسالة pacs.003 بين المؤسسات المالية لتنفيذ تعليمات الخصم المباشر للعميل. يمكّن بنك الدائن من تحصيل الأموال من بنك المدين نيابة عن الدائن.</td>
        </tr>
    </tbody>
  </table>
</div>

