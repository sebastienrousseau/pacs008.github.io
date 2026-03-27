---
title: "شرح رسائل PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ar-SA
lastUpdated: true
image: /logo.webp
---

# شرح رسائل PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## دورة حياة الدفع

تتضمن دورة حياة الدفع الكاملة في pacs ست مراحل وأنواع رسائل متعددة تعمل معاً.

**المرحلة 1 — البدء.** ينشأ الدفع في مجال العميل-البنك (pain.001). يتلقى بنك المدين التعليمات ويحوّلها إلى المجال بين البنوك.

**المرحلة 2 — التعليمات بين البنوك.** ينشئ وكيل المدين pacs.008 ويرسله إلى الوكيل التالي في السلسلة. في التدفق التسلسلي، ينتقل pacs.008 خطوة بخطوة عبر الوسطاء. في تدفق التغطية، يذهب pacs.008 مباشرة من وكيل المدين إلى وكيل الدائن، بينما يحمل pacs.009 منفصل شقّ التمويل عبر سلسلة المراسلين.

**المرحلة 3 — تقارير الحالة.** في كل خطوة، يمكن للوكيل المستقبل إرجاع pacs.002 يؤكد القبول (ACCP/ACSP/ACSC) أو الرفض (RJCT) أو حالة الانتظار (PDNG). في CBPR+، يُعدّ pacs.002 إلزامياً لجميع اتصالات حالة الدفع.

**المرحلة 4 — التسوية.** تتم التسوية عبر نظام مقاصة (CLRG)، أو حسابات مراسلين (INDA/INGA)، أو عبر دفعة تغطية (COVE). يحدد تاريخ ومبلغ التسوية بين البنوك متى وكم يتم تسويته.

**المرحلة 5 — إيداع المستفيد.** يقيد وكيل الدائن المبلغ للمستفيد ويمكنه إرسال إشعار للعميل.

**المرحلة 6 — معالجة الاستثناءات.** إذا تعذّر إيداع المستفيد بعد التسوية، يُرجع pacs.004 الأموال عبر السلسلة. إذا اكتشف المُرسل خطأ أو احتيالاً، يتقدم pacs.007 عبر السلسلة. إذا كانت الحالة مجهولة، يستعلم pacs.028 من الوكيل التالي وتعود الإجابة عبر pacs.002.

### التدفق التسلسلي

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### تدفق التغطية

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## هيكل XML لـ pacs.008

يتكون pacs.008 من كتلتين رئيسيتين: رأس المجموعة (GrpHdr) ومعلومات عملية تحويل الائتمان (CdtTrfTxInf).

### رأس المجموعة (GrpHdr)

يظهر رأس المجموعة مرة واحدة بالضبط لكل رسالة ويحتوي على:

- **MsgId** — معرّف فريد للرسالة يخصصه الوكيل المُرسل. 35 حرفاً كحد أقصى، ويجب أن يكون فريداً لكل مُرسل.
- **CreDtTm** — طابع زمني للإنشاء بتنسيق ISO 8601.
- **NbOfTxs** — عدد المعاملات الفردية في الرسالة.
- **SttlmInf** — معلومات التسوية بما في ذلك طريقة التسوية (SttlmMtd) واختيارياً نظام المقاصة وحساب التسوية.
- **IntrBkSttlmDt** — تاريخ التسوية بين البنوك.
- **PmtTpInf** — معلومات نوع الدفع بما في ذلك الأولوية ومستوى الخدمة والأداة المحلية وغرض الفئة.

### معلومات عملية تحويل الائتمان (CdtTrfTxInf)

تحتوي كل معاملة على:

- **PmtId** — معرّفات الدفع: InstrId، EndToEndId، TxId، وUETR.
- **IntrBkSttlmAmt** — مبلغ التسوية بين البنوك مع رمز العملة.
- **InstdAmt** — المبلغ الأصلي المطلوب (قد يختلف عن مبلغ التسوية بسبب تحويل العملات).
- **ChrgBr** — رمز تحمّل الرسوم (DEBT أو CRED أو SHAR أو SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — اسم المدين وعنوانه وتعريفه وحسابه ووكيله.
- **Cdtr / CdtrAcct / CdtrAgt** — اسم الدائن وعنوانه وتعريفه وحسابه ووكيله.
- **IntrmyAgt1 / 2 / 3** — حتى ثلاثة وكلاء وسطاء في السلسلة.
- **RmtInf** — معلومات التحويل، إما غير مهيكلة (نص حر) أو مهيكلة (مراجع مستندات، مبالغ، تواريخ).
- **Purp** — رمز غرض مهيكل.
- **RgltryRptg** — تفاصيل الإبلاغ التنظيمي.

## معرّفات الدفع

تستخدم رسائل pacs عدة معرّفات تؤدي أدواراً مختلفة في سلسلة الدفع.

<div class="api-fields-table" tabindex="0" aria-label="معرّفات الدفع">
  <table>
    <caption>معرّفات الدفع وأدوارها</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">المعرّف</th>
        <th scope="col">يُعيّنه</th>
        <th scope="col">يتغير في السلسلة؟</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">كل وكيل مُرسل</td>
          <td class="api-fields-table__constraint">نعم — جديد لكل رسالة</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">كل وكيل آمر</td>
          <td class="api-fields-table__constraint">نعم — قد يتغير في كل خطوة</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">المُنشئ (المدين)</td>
          <td class="api-fields-table__constraint">لا — يجب ألا يُعدَّل</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">أول وكيل آمر</td>
          <td class="api-fields-table__constraint">لا — يجب ألا يُعدَّل</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">وكيل المدين</td>
          <td class="api-fields-table__constraint">لا — تتبع شامل</td>
        </tr>
    </tbody>
  </table>
</div>

## طرق التسوية

يحدد عنصر SttlmMtd كيفية إجراء التسوية بين البنوك.

- **CLRG** — التسوية عبر نظام مقاصة مثل TARGET2 أو EURO1 أو CHIPS. الأكثر شيوعاً للمقاصة المحلية والإقليمية.
- **INDA** — التسوية في دفاتر الوكيل المُوجَّه إليه. يحتفظ وكيل المدين بحساب نوسترو لدى الوكيل التالي. نموذجي للبنوك المراسلة الثنائية.
- **INGA** — التسوية في دفاتر الوكيل الآمر. يحتفظ الوكيل المُوجَّه إليه بحساب نوسترو لدى الوكيل المُرسل. أقل شيوعاً من INDA.
- **COVE** — التسوية عبر دفعة تغطية منفصلة. يحمل pacs.009 شقّ التمويل بينما يحمل pacs.008 بيانات العميل مباشرة. يُستخدم في البنوك المراسلة عبر الحدود.

## رموز تحمّل الرسوم

يحدد عنصر ChrgBr من يتحمل رسوم الدفع.

- **DEBT** — يتحمل المدين جميع الرسوم (ما يعادل MT103: OUR). يتلقى الدائن المبلغ الكامل.
- **CRED** — يتحمل الدائن جميع الرسوم (ما يعادل MT103: BEN). تُخصم الرسوم من التحويل.
- **SHAR** — تُقسَّم الرسوم (ما يعادل MT103: SHA). يدفع كل طرف رسوم وكيله الخاص. الأكثر شيوعاً للمدفوعات عبر الحدود.
- **SLEV** — تتبع الرسوم مستوى الخدمة. إلزامي لـ SEPA. بدون خصم من مبلغ التحويل.

## تنسيق العنوان البريدي

### عنوان مهيكل

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### عنوان غير مهيكل (مُهمَل لـ CBPR+ بعد نوفمبر 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

القيود الرئيسية: StrtNm بحد أقصى 70 حرفاً (CBPR+)، TwnNm بحد أقصى 35 حرفاً (CBPR+)، Ctry بتنسيق ISO 3166-1 alpha-2، AdrLine بحد أقصى 70 حرفاً لكل سطر و7 سطور كحد أقصى.

## تعريف الأطراف

تدعم الأطراف في pacs.008 عدة طرق تعريف:

- **BIC** — رمز تعريف الأعمال وفقاً لـ ISO 9362. يتكون من 8 أو 11 حرفاً (BBBBCCLL أو BBBBCCLLBBB). يُستخدم في FinInstnId/BICFI للوكلاء وOrgId/AnyBIC للأطراف.
- **LEI** — معرّف الكيان القانوني وفقاً لـ ISO 17442. يتكون من 20 حرفاً أبجدياً رقمياً. يظهر في OrgId/LEI للأطراف وFinInstnId/LEI للوكلاء. يعزز توضيح الكيانات للإبلاغ التنظيمي.
- **IBAN** — رقم الحساب المصرفي الدولي وفقاً لـ ISO 13616. يُستخدم في DbtrAcct/Id/IBAN وCdtrAcct/Id/IBAN.
- **معرّفات المنظمة** — معرّفات أخرى قائمة على المخطط (رقم ضريبي، DUNS، رقم عميل) عبر OrgId/Othr مع رمز اسم المخطط.
- **معرّفات خاصة** — للأشخاص الطبيعيين: تاريخ ومكان الميلاد، جواز السفر (CCPT)، بطاقة الهوية الوطنية (NIDN) أو رخصة القيادة (DRLC) عبر PrvtId.

## معلومات التحويل

تستخدم بيانات التحويل في pacs.008 عنصر RmtInf بشكلين:

**غير مهيكلة** — نص حر يصل إلى 140 حرفاً لكل حدوث. بسيطة لكنها تحدّ من المطابقة الآلية.

**مهيكلة** — مراجع مستندات مع رموز أنواع وأرقام وتواريخ ومبالغ. أنواع المستندات الشائعة: CINV (فاتورة تجارية)، CREN (إشعار دائن)، SOAC (كشف حساب). تدعم مراجع الدائن وفقاً لـ ISO 11649 (RF + أرقام تحقق + مرجع) عبر CdtrRefInf. تتيح المطابقة الآلية للفواتير والمدفوعات متعددة الفواتير.

## UETR وتتبع gpi

UETR (Unique End-to-End Transaction Reference) هو UUID v4 يُنشئه وكيل المدين. يظهر في PmtId/UETR عبر pacs.008 وpacs.009 وpacs.002 وpacs.004 وpacs.007 وpacs.028. يجب أن يبقى دون تغيير طوال سلسلة الدفع بأكملها.

يستخدم SWIFT gpi مُعرّف UETR لتتبع المدفوعات عبر قاعدة بيانات Tracker السحابية. يؤكد كل وكيل الاستلام والمعالجة، مما يتيح رؤية شاملة من البداية إلى النهاية. تستهدف اتفاقية مستوى خدمة gpi للمدفوعات عبر الحدود إيداع المبلغ في حساب الدائن في نفس اليوم.

## المراجع

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

