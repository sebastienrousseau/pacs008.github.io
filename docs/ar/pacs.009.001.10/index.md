---
title: "pacs.009.001.10 | تحويل ائتماني بين المؤسسات المالية | pacs008"
description: يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية...
lang: ar-SA
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — تحويل ائتماني بين المؤسسات المالية

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## نظرة عامة

يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة ومعلومات التسوية
- **CdtTrfTxInf** — معلومات معاملة التحويل مع مبلغ التسوية بين البنوك
- **Dbtr / DbtrAgt** — المؤسسة المدينة وتعريف وكيلها
- **Cdtr / CdtrAgt** — المؤسسة الدائنة وتعريف وكيلها
- **IntrBkSttlmAmt** — مبلغ التسوية بين البنوك بعملة التسوية

## السياق التجاري

- يُستخدم لتحويلات الحساب الخاص بين البنوك ومدفوعات التغطية
- يدعم إدارة السيولة بين شركاء البنوك المراسلة
- يحمل ساق التغطية لتحويلات العملاء المسوّاة بطريقة التغطية
- يمكّن عمليات الخزينة والتمويل بين المؤسسات المالية

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — رأس المجموعة مع تعريف الرسالة ومعلومات التسوية</td>
          <td class="operational-matrix-table__right">يُستخدم لتحويلات الحساب الخاص بين البنوك ومدفوعات التغطية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — معلومات معاملة التحويل مع مبلغ التسوية بين البنوك</td>
          <td class="operational-matrix-table__right">يدعم إدارة السيولة بين شركاء البنوك المراسلة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — المؤسسة المدينة وتعريف وكيلها</td>
          <td class="operational-matrix-table__right">يحمل ساق التغطية لتحويلات العملاء المسوّاة بطريقة التغطية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — المؤسسة الدائنة وتعريف وكيلها</td>
          <td class="operational-matrix-table__right">يمكّن عمليات الخزينة والتمويل بين المؤسسات المالية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — مبلغ التسوية بين البنوك بعملة التسوية</td>
          <td class="operational-matrix-table__right">ترسل المؤسسة المدينة pacs.009 إلى المؤسسة الدائنة لتحويل أموالها الخاصة. لمدفوعات التغطية، يوفر pacs.009 ساق التمويل بينما يحمل pacs.008 تعليمات العميل عبر مسار منفصل.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يحل محل MT202 و MT202COV للتحويلات بين المؤسسات
- تقترن تدفقات طريقة التغطية pacs.009 مع تعليمات العميل pacs.008 الأساسية
- بيانات الأطراف المنظمة وتعريف LEI مطلوبة بشكل متزايد
- يغطي SWIFT gpi رسالة pacs.009 لشفافية البنوك المراسلة

## تدفق الرسالة

ترسل المؤسسة المدينة pacs.009 إلى المؤسسة الدائنة لتحويل أموالها الخاصة. لمدفوعات التغطية، يوفر pacs.009 ساق التمويل بينما يحمل pacs.008 تعليمات العميل عبر مسار منفصل.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">يتوافق مع مستوى الدعم الحالي في المشروع لتدفّقات تحويل الائتمان بين المؤسسات المالية.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">إصدارات الكتالوج اللاحقة</td>
          <td class="version-diff-table__takeaway">مهم لتخطيط خارطة الطريق في بيئات المراسلة المصرفية ودفعات التغطية.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### تعليقات الحقول

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## مقارنة pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="مقارنة pacs.009 vs pacs.008">
  <table>
    <caption>مقارنة pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>البعد</th>
        <th>pacs.009.001.10</th>
        <th>رسالة المقارنة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">الغرض الأساسي</td>
          <td class="message-comparison-table__current">تحويل ائتماني لحساب المؤسسة نفسها أو مرحلة تغطية</td>
          <td class="message-comparison-table__other">تحويل ائتماني للعميل</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">المالك التشغيلي</td>
          <td class="message-comparison-table__current">عمليات الخزانة / المراسلة / التمويل</td>
          <td class="message-comparison-table__other">عمليات مدفوعات العملاء</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">الاقترانات المعتادة</td>
          <td class="message-comparison-table__current">تدفقات pacs.002 وpacs.004 وتدفقات pacs.008 المرتبطة</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">افتراض خاطئ يجب تجنبه</td>
          <td class="message-comparison-table__current">أنه مجرد pacs.008 أكثر تقنية</td>
          <td class="message-comparison-table__other">أنه يمكنه حمل تدفقات تمويل المؤسسات بسلاسة</td>
        </tr>
    </tbody>
  </table>
</div>

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">خصم مباشر بين المؤسسات المالية</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.010 بين المؤسسات المالية لمعاملات الخصم المباشر على الحساب الخاص للمؤسسة. يمكّن مؤسسة من تحصيل الأموال مباشرة من حساب مؤسسة أخرى.</td>
        </tr>
    </tbody>
  </table>
</div>

