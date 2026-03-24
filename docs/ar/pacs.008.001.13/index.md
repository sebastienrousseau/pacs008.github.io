---
title: pacs.008.001.13 | تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية | pacs008
description: رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل...
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية

| | |
|---|---|
| **اسم ISO** | FIToFICustomerCreditTransferV13 |
| **حالة التسجيل** | Registered |
| **السنة** | 2023 |
| **الإصدار** | 13 |

## نظرة عامة

رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

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
          <td class="operational-matrix-table__left">**GrpHdr** — رأس المجموعة مع معرف الرسالة وتاريخ الإنشاء وعدد المعاملات ومعلومات التسوية</td>
          <td class="operational-matrix-table__right">الرسالة الأساسية للتحويلات عبر الحدود والمحلية التي يبدؤها العملاء</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**CdtTrfTxInf** — معلومات معاملة التحويل مع المبلغ والرسوم والغرض</td>
          <td class="operational-matrix-table__right">تُستخدم عبر SEPA SCT و SEPA Instant و CBPR+ وأنظمة المقاصة الوطنية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Dbtr / DbtrAgt** — تعريف وتفاصيل حساب المدين ووكيله</td>
          <td class="operational-matrix-table__right">تحمل معلومات تحويل منظمة لدعم المصالحة المباشرة</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Cdtr / CdtrAgt** — تعريف وتفاصيل حساب الدائن ووكيله</td>
          <td class="operational-matrix-table__right">تدعم طرق التسوية التسلسلية والتغطية والمباشرة لسلاسل الدفع متعددة المراحل</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**RmtInf** — معلومات التحويل لمراجع الدفع المنظمة أو غير المنظمة</td>
          <td class="operational-matrix-table__right">ينشئ وكيل المدين pacs.008 ويرسله إلى وكيل الدائن (مباشرة أو عبر وسطاء). يتحقق كل وكيل في السلسلة ويثري ويمرر التعليمات حتى يقيد وكيل الدائن المبلغ في حساب المستفيد.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يحل محل MT103 و MT103+ للتحويلات العابرة للحدود
- ينطبق الموعد النهائي للعناوين المنظمة في نوفمبر 2026 على جميع العناوين البريدية للأطراف
- يتطلب SWIFT gpi رسالة pacs.008 للتتبع من طرف إلى طرف المستند إلى UETR
- تعكس 13 مراجعة التطور المستمر للمخططات عبر البنى التحتية للسوق

## تدفق الرسالة

ينشئ وكيل المدين pacs.008 ويرسله إلى وكيل الدائن (مباشرة أو عبر وسطاء). يتحقق كل وكيل في السلسلة ويثري ويمرر التعليمات حتى يقيد وكيل الدائن المبلغ في حساب المستفيد.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">الإصدارات المبكرة</td>
          <td class="version-diff-table__takeaway">مفيد بشكل أساسي لتحليل الترحيل من الأنظمة القديمة وفهم سياق تاريخ الإصدارات.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">الإصدارات الحديثة السابقة للإصدار الحالي</td>
          <td class="version-diff-table__takeaway">هذه هي الإصدارات الأكثر احتمالاً للظهور في مشاريع الترحيل أو التعايش الحديثة.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">إصدار الكتالوج الحالي</td>
          <td class="version-diff-table__takeaway">استخدم ذلك للتخطيط للإصدار الحالي مع الاستمرار في التحقق من إرشادات استخدام المخطط وجاهزية الأطراف المقابلة.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### تعليقات الحقول

- `MsgId`: يجب أن يعرّف هذا غلاف الرسالة نفسه، لا مرجع دفعة العميل النهائي.
- `EndToEndId`: حافظ على إمكانية التتبع الموجهة للعميل مستقرة عبر الأنظمة اللاحقة حيثما أمكن.
- `UETR`: استخدم هذا بصورة متسقة في البيئات العابرة للحدود والغنية بالتتبع؛ ولا تنشئه بشكل ارتجالي في المراحل اللاحقة من سير العمل.
- `IntrBkSttlmAmt`: تحقق من المبلغ والعملة باستخدام قواعد الأعمال قبل التحقق من المخطط.
- `Dbtr` / `Cdtr`: تكون جودة بيانات الأطراف وبنية العنوان والمعرّفات عادةً أهم العوامل المؤثرة في معدلات الإصلاح.

## مقارنة pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="مقارنة pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>البعد</th>
        <th>pacs.008.001.13</th>
        <th>رسالة المقارنة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">الغرض الأساسي</td>
          <td class="message-comparison-table__current">تحويل ائتماني للعميل</td>
          <td class="message-comparison-table__other">تحويل ائتماني لحساب المؤسسة نفسها أو مرحلة تغطية</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">المالك التشغيلي</td>
          <td class="message-comparison-table__current">عمليات مدفوعات العملاء</td>
          <td class="message-comparison-table__other">عمليات الخزانة / المراسلة / التمويل</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">الاقترانات المعتادة</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">تدفقات pacs.002 وpacs.004 وأحياناً تدفقات pacs.008 المرتبطة</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">افتراض خاطئ يجب تجنبه</td>
          <td class="message-comparison-table__current">أن جميع التحويلات بين البنوك تندرج هنا</td>
          <td class="message-comparison-table__other">أنه يمكنه أن يحل محل تعليمات التحويل الائتماني الخاصة بالعملاء</td>
        </tr>
    </tbody>
  </table>
</div>

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

| الإصدار | |
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
| `pacs.008.001.13` | **الحالي** |

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
          <td class="related-messages-table__id"><a href="/ar/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">إرجاع المدفوعات</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">تحويل ائتماني بين المؤسسات المالية</td>
          <td class="related-messages-table__overview">يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.</td>
        </tr>
    </tbody>
  </table>
</div>

