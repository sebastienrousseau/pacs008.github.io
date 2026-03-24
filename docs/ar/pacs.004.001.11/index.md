---
title: pacs.004.001.11 | إرجاع المدفوعات | pacs008
description: يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة...
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — إرجاع المدفوعات

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026. تاريخ مرجع كتالوج ISO 20022 هو: 2025-02-27؛ وروابط المصادر مدرجة أدناه.

## عناصر البيانات الرئيسية

- **GrpHdr** — رأس المجموعة مع تعريف الرسالة والطابع الزمني للإنشاء
- **TxInf** — معلومات المعاملة مع مبلغ الإرجاع والأطراف
- **OrgnlGrpInf** — معلومات المجموعة الأصلية المرتبطة بالرسالة المصدرية
- **RtrRsnInf** — معلومات سبب الإرجاع مع رموز أسباب منظمة
- **OrgnlTxRef** — مرجع المعاملة الأصلية للمطابقة والمصالحة

## السياق التجاري

- يتعامل مع المرتجعات بعد التسوية عندما لا يمكن إيداع المبلغ في حساب المستفيد
- يدعم سيناريوهات الاسترداد حيث يطلب المُرسل إرجاع الأموال
- يحمل رموز أسباب إرجاع منظمة للشفافية التنظيمية والتشغيلية
- ينطبق على مرتجعات التحويلات (pacs.008) ومرتجعات الخصم المباشر (pacs.003)

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
          <td class="operational-matrix-table__right">يتعامل مع المرتجعات بعد التسوية عندما لا يمكن إيداع المبلغ في حساب المستفيد</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — معلومات المعاملة مع مبلغ الإرجاع والأطراف</td>
          <td class="operational-matrix-table__right">يدعم سيناريوهات الاسترداد حيث يطلب المُرسل إرجاع الأموال</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — معلومات المجموعة الأصلية المرتبطة بالرسالة المصدرية</td>
          <td class="operational-matrix-table__right">يحمل رموز أسباب إرجاع منظمة للشفافية التنظيمية والتشغيلية</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — معلومات سبب الإرجاع مع رموز أسباب منظمة</td>
          <td class="operational-matrix-table__right">ينطبق على مرتجعات التحويلات (pacs.008) ومرتجعات الخصم المباشر (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — مرجع المعاملة الأصلية للمطابقة والمصالحة</td>
          <td class="operational-matrix-table__right">يرسل الوكيل المُستلم pacs.004 عبر سلسلة الدفع لإرجاع الأموال المسوّاة سابقاً. يعالج كل وكيل في السلسلة الإرجاع ويعيد إيداع المبالغ في الحسابات المعنية.</td>
        </tr>
    </tbody>
  </table>
</div>

## سياق CBPR+ والأنظمة

- يحل محل MT103 RETURN ورسائل الإرجاع بطريقة التغطية
- رموز أسباب الإرجاع موحدة وقابلة للقراءة الآلية وفق ISO 20022
- يتطلب CBPR+ بيانات مرجعية كاملة للمعاملة الأصلية للمطابقة
- يمتد تتبع SWIFT gpi إلى معاملات الإرجاع للرؤية من طرف إلى طرف

## تدفق الرسالة

يرسل الوكيل المُستلم pacs.004 عبر سلسلة الدفع لإرجاع الأموال المسوّاة سابقاً. يعالج كل وكيل في السلسلة الإرجاع ويعيد إيداع المبالغ في الحسابات المعنية.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">التنفيذ الحالي في pacs008</td>
          <td class="version-diff-table__takeaway">يتوافق مع القوالب الحالية لرسائل إرجاع المدفوعات.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">إصدارات الكتالوج اللاحقة</td>
          <td class="version-diff-table__takeaway">راجع الإصدارات اللاحقة لرسائل الإرجاع عندما تكون ترقيات المخطط أو الأطراف المقابلة الجديدة ضمن النطاق.</td>
        </tr>
    </tbody>
  </table>
</div>

## مثال XML مشروح

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### تعليقات الحقول

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: تُعد جودة رموز الأسباب عاملاً حاسماً في تواصل العملاء اللاحق وتوجيه العمليات.

## مقارنة pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="مقارنة pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>البعد</th>
        <th>pacs.004.001.11</th>
        <th>رسالة المقارنة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">الغرض الأساسي</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">الأنسب لـ</td>
          <td class="message-comparison-table__current">معالجة الإرجاع بعد التسوية</td>
          <td class="message-comparison-table__other">معالجة العكس الناتج عن الاستدعاء أو الخطأ أو الاحتيال</td>
        </tr>
    </tbody>
  </table>
</div>

## المراجع الأساسية

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/ar/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يتم تبادل رسالة pacs.003 بين المؤسسات المالية لتنفيذ تعليمات الخصم المباشر للعميل. يمكّن بنك الدائن من تحصيل الأموال من بنك المدين نيابة عن الدائن.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="related-messages-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
    </tbody>
  </table>
</div>

