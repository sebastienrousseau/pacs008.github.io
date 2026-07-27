---
title: "شرح رسائل pacs | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ar-SA
lastUpdated: true
image: /logo.webp
---

# شرح رسائل pacs

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

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

## تطابق حقول MT103 مع pacs.008

<div class="api-fields-table" tabindex="0" aria-label="تطابق حقول MT103 مع pacs.008">
  <table>
    <caption>التطابقات الرئيسية للحقول من MT103 إلى pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">حقل MT103</th>
        <th scope="col">اسم MT103</th>
        <th scope="col">مسار XML في pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">مرجع المُرسل</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">رمز العملية المصرفية</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">تاريخ القيمة / المبلغ</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">المبلغ المطلوب</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">العميل الآمر</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">المؤسسة الآمرة</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">مؤسسة الحساب</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">العميل المستفيد</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">معلومات التحويل</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">تفاصيل الرسوم</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">معلومات المُرسل إلى المستلم</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## رموز الحالة والسبب

### رموز حالة pacs.002

<div class="api-fields-table" tabindex="0" aria-label="رموز حالة pacs.002">
  <table>
    <caption>رموز حالة المعاملة في pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">الرمز</th>
        <th scope="col">المعنى</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">مقبول — اجتياز الفحوصات الأولية</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">مقبول — التسوية جارية</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">مقبول — التسوية مكتملة</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">مُستلَم — لم تتم معالجته بعد</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">معلّق — يلزم مزيد من المعالجة</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">مرفوض — مع رمز السبب</td></tr>
    </tbody>
  </table>
</div>

### رموز أسباب الرفض والإرجاع الشائعة

<div class="api-fields-table" tabindex="0" aria-label="رموز الأسباب الشائعة">
  <table>
    <caption>رموز أسباب الرفض والإرجاع الأكثر استخداماً</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">الرمز</th>
        <th scope="col">الاسم</th>
        <th scope="col">الوصف</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">رقم حساب غير صحيح</td><td class="api-fields-table__constraint">رقم الحساب غير صالح أو غير موجود</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">حساب مغلق</td><td class="api-fields-table__constraint">الحساب مغلق</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">حساب محظور</td><td class="api-fields-table__constraint">الحساب محظور للمعاملات</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">رصيد غير كافٍ</td><td class="api-fields-table__constraint">رصيد غير كافٍ في حساب المدين</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">ازدواجية</td><td class="api-fields-table__constraint">تم اكتشاف دفعة مكررة</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">عنوان الدائن مفقود</td><td class="api-fields-table__constraint">عنوان الدائن مفقود أو غير مكتمل</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">بطلب من العميل</td><td class="api-fields-table__constraint">إرجاع أو رفض بطلب من العميل</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">دفعة مكررة</td><td class="api-fields-table__constraint">تم تحديد دفعة مكررة</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">بعد الإلغاء</td><td class="api-fields-table__constraint">بناءً على طلب إلغاء</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">احتيال</td><td class="api-fields-table__constraint">اشتباه في احتيال</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC غير صحيح</td><td class="api-fields-table__constraint">رمز BIC غير صحيح أو غير معروف</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">اسم/عنوان الدائن مفقود</td><td class="api-fields-table__constraint">اسم أو بيانات عنوان الدائن مفقودة</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">الموعد النهائي</td><td class="api-fields-table__constraint">تم تجاوز الموعد النهائي للمعالجة</td></tr>
    </tbody>
  </table>
</div>

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

