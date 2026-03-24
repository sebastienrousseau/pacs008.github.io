---
title: pacs.003.001.09 | خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية | pacs008
description: يتم تبادل رسالة pacs.003 بين المؤسسات المالية لتنفيذ تعليمات الخصم المباشر للعميل. يمكّن بنك الدائن من تحصيل الأموال من بنك المدين نيابة عن الدائن.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## نظرة عامة

يتم تبادل رسالة pacs.003 بين المؤسسات المالية لتنفيذ تعليمات الخصم المباشر للعميل. يمكّن بنك الدائن من تحصيل الأموال من بنك المدين نيابة عن الدائن.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة ومعلومات التسوية
- **DrctDbtTxInf** — معلومات معاملة الخصم المباشر مع المبلغ والأطراف
- **Cdtr** — تعريف الدائن وتفاصيل الحساب
- **CdtrAgt** — تعريف وكيل الدائن (المؤسسة المحصّلة)
- **DbtrAgt** — تعريف وكيل المدين (المؤسسة الدافعة)

## السياق التجاري

- يدعم أنظمة الخصم المباشر SEPA Core و B2B
- يُستخدم لتحصيل المدفوعات المتكررة مثل الاشتراكات وفواتير الخدمات وسداد القروض
- يتطلب مرجع تفويض صالح بين المدين والدائن
- يمكّن التحصيل الجماعي لتعليمات خصم مباشر متعددة في رسالة واحدة

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
          <td class="operational-matrix-table__right">يدعم أنظمة الخصم المباشر SEPA Core و B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — معلومات معاملة الخصم المباشر مع المبلغ والأطراف</td>
          <td class="operational-matrix-table__right">يُستخدم لتحصيل المدفوعات المتكررة مثل الاشتراكات وفواتير الخدمات وسداد القروض</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — تعريف الدائن وتفاصيل الحساب</td>
          <td class="operational-matrix-table__right">يتطلب مرجع تفويض صالح بين المدين والدائن</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — تعريف وكيل الدائن (المؤسسة المحصّلة)</td>
          <td class="operational-matrix-table__right">يمكّن التحصيل الجماعي لتعليمات خصم مباشر متعددة في رسالة واحدة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — تعريف وكيل المدين (المؤسسة الدافعة)</td>
          <td class="operational-matrix-table__right">يبادر وكيل الدائن بإرسال pacs.003 نحو وكيل المدين لتحصيل الأموال. يتحقق وكيل المدين من التفويض ويفحص تغطية الحساب ثم يسوّي أو يرجع المعاملة.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- تنطبق متطلبات العنوان المنظم وتحديد الأطراف بالتساوي على الخصم المباشر
- يجب أن تكون البيانات المتعلقة بالتفويض منظمة بالكامل اعتباراً من نوفمبر 2026
- يحل محل تنسيقات الخصم المباشر من نوع MT104 في التدفقات العابرة للحدود
- يتم تطبيق التحقق من تعريف نظام الدائن بشكل متزايد

## تدفق الرسالة

يبادر وكيل الدائن بإرسال pacs.003 نحو وكيل المدين لتحصيل الأموال. يتحقق وكيل المدين من التفويض ويفحص تغطية الحساب ثم يسوّي أو يرجع المعاملة.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">مفيد لنمذجة مراجع الخصم المباشر في المشروع الحالي.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">إصدارات الكتالوج اللاحقة</td>
          <td class="version-diff-table__takeaway">تحقق من الإصدارات اللاحقة لمعرفة تحديثات التفويض والحالة وقابلية التشغيل البيني قبل استخدام الرسالة في تنفيذ جديد.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### تعليقات الحقول

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: نجاح الخصم المباشر يعتمد غالباً على جودة الحساب والتفويض أكثر من اعتماده على بنية XML.

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/ar/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">إرجاع المدفوعات</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">عكس الدفعة من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.007 لعكس تعليمات دفع مرسلة سابقاً لم تتم تسويتها بعد أو لطلب عكس دفعة مسوّاة. على عكس pacs.004 (الإرجاع)، يتم بدؤه من الوكيل المُرسل الأصلي.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
    </tbody>
  </table>
</div>

