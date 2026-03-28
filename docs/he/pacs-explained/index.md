---
title: "הסבר על הודעות pacs | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# הסבר על הודעות pacs

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## מחזור חיי התשלום

מחזור חיי התשלום המלא של pacs כולל שישה שלבים ומספר סוגי הודעות הפועלים יחד.

**שלב 1 — ייזום.** התשלום מתחיל בתחום לקוח-בנק (pain.001). בנק החייב מקבל את ההוראה וממפה אותה לתחום הבין-בנקאי.

**שלב 2 — הוראה בין-בנקאית.** סוכן החייב יוצר pacs.008 ושולח אותו לסוכן הבא בשרשרת. בזרימה טורית, pacs.008 עובר צעד אחר צעד דרך מתווכים. בזרימת כיסוי, pacs.008 הולך ישירות מסוכן החייב לסוכן הזכאי, בעוד pacs.009 נפרד נושא את רגל המימון דרך שרשרת הקורספונדנטים.

**שלב 3 — דוחות סטטוס.** בכל צעד, הסוכן המקבל יכול להחזיר pacs.002 המאשר קבלה (ACCP/ACSP/ACSC), דחייה (RJCT), או סטטוס ממתין (PDNG). ב-CBPR+, pacs.002 הוא חובה לכל תקשורת סטטוס תשלום.

**שלב 4 — סליקה.** הסליקה מתבצעת דרך מערכת סליקה (CLRG), בחשבונות קורספונדנטים (INDA/INGA), או באמצעות תשלום כיסוי (COVE). תאריך וסכום הסליקה הבין-בנקאית קובעים מתי וכמה נסלק.

**שלב 5 — זיכוי המוטב.** סוכן הזכאי מזכה את המוטב ויכול לשלוח הודעה ללקוח.

**שלב 6 — טיפול בחריגות.** אם לא ניתן לזכות את המוטב לאחר הסליקה, pacs.004 מחזיר כספים דרך השרשרת. אם המקור מגלה שגיאה או הונאה, pacs.007 מתקדם קדימה בשרשרת. אם הסטטוס לא ידוע, pacs.028 שואל את הסוכן הבא והתשובה חוזרת דרך pacs.002.

### זרימה טורית

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### זרימת כיסוי

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## מבנה XML של pacs.008

pacs.008 מורכב משני בלוקים עיקריים: כותרת הקבוצה (GrpHdr) ומידע על עסקת העברת האשראי (CdtTrfTxInf).

### כותרת הקבוצה (GrpHdr)

כותרת הקבוצה מופיעה בדיוק פעם אחת בכל הודעה ומכילה:

- **MsgId** — מזהה הודעה ייחודי שנקבע על ידי הסוכן השולח. עד 35 תווים, חייב להיות ייחודי לכל שולח.
- **CreDtTm** — חותמת זמן יצירה בפורמט ISO 8601.
- **NbOfTxs** — מספר העסקאות הבודדות בהודעה.
- **SttlmInf** — מידע סליקה כולל שיטת הסליקה (SttlmMtd) ואופציונלית מערכת הסליקה וחשבון הסליקה.
- **IntrBkSttlmDt** — תאריך הסליקה הבין-בנקאית.
- **PmtTpInf** — מידע על סוג התשלום כולל עדיפות, רמת שירות, מכשיר מקומי ומטרת קטגוריה.

### מידע עסקת העברת אשראי (CdtTrfTxInf)

כל עסקה מכילה:

- **PmtId** — מזהי תשלום: InstrId, EndToEndId, TxId ו-UETR.
- **IntrBkSttlmAmt** — סכום הסליקה הבין-בנקאית עם קוד מטבע.
- **InstdAmt** — הסכום המקורי שהורה (עשוי להיות שונה מסכום הסליקה עקב המרת מטבע).
- **ChrgBr** — קוד נושא העמלות (DEBT, CRED, SHAR או SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — שם, כתובת, זיהוי, חשבון וסוכן של החייב.
- **Cdtr / CdtrAcct / CdtrAgt** — שם, כתובת, זיהוי, חשבון וסוכן של הזכאי.
- **IntrmyAgt1 / 2 / 3** — עד שלושה סוכנים מתווכים בשרשרת.
- **RmtInf** — מידע העברה, לא מובנה (טקסט חופשי) או מובנה (הפניות מסמכים, סכומים, תאריכים).
- **Purp** — קוד מטרה מובנה.
- **RgltryRptg** — פרטי דיווח רגולטורי.

## מזהי תשלום

הודעות pacs משתמשות במספר מזהים הממלאים תפקידים שונים בשרשרת התשלום.

<div class="api-fields-table" tabindex="0" aria-label="מזהי תשלום">
  <table>
    <caption>מזהי תשלום ותפקידיהם</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">מזהה</th>
        <th scope="col">נקבע על ידי</th>
        <th scope="col">משתנה בשרשרת?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">כל סוכן שולח</td>
          <td class="api-fields-table__constraint">כן — חדש לכל הודעה</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">כל סוכן מורה</td>
          <td class="api-fields-table__constraint">כן — עשוי להשתנות בכל צעד</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">המקור (החייב)</td>
          <td class="api-fields-table__constraint">לא — אסור לשנות</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">הסוכן המורה הראשון</td>
          <td class="api-fields-table__constraint">לא — אסור לשנות</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">סוכן החייב</td>
          <td class="api-fields-table__constraint">לא — מעקב אוניברסלי</td>
        </tr>
    </tbody>
  </table>
</div>

## שיטות סליקה

אלמנט SttlmMtd מגדיר כיצד מתבצעת הסליקה הבין-בנקאית.

- **CLRG** — סליקה דרך מערכת סליקה כגון TARGET2, EURO1 או CHIPS. הנפוצה ביותר לסליקה מקומית ואזורית.
- **INDA** — סליקה בספרי הסוכן המונחה. סוכן החייב מחזיק חשבון נוסטרו אצל הסוכן הבא. אופיינית לבנקאות קורספונדנטית דו-צדדית.
- **INGA** — סליקה בספרי הסוכן המורה. הסוכן המונחה מחזיק חשבון נוסטרו אצל הסוכן השולח. פחות נפוצה מ-INDA.
- **COVE** — סליקה דרך תשלום כיסוי נפרד. pacs.009 נושא את רגל המימון בעוד pacs.008 נושא את נתוני הלקוח ישירות. משמש בבנקאות קורספונדנטית חוצת גבולות.

## קודי נושא עמלות

אלמנט ChrgBr מציין מי נושא בעמלות התשלום.

- **DEBT** — החייב נושא בכל העמלות (שווה ערך MT103: OUR). הזכאי מקבל את הסכום המלא.
- **CRED** — הזכאי נושא בכל העמלות (שווה ערך MT103: BEN). העמלות מנוכות מההעברה.
- **SHAR** — העמלות מתחלקות (שווה ערך MT103: SHA). כל צד משלם את עמלות הסוכן שלו. הנפוץ ביותר לתשלומים חוצי גבולות.
- **SLEV** — העמלות עוקבות אחרי רמת השירות. חובה ב-SEPA. ללא ניכויים מסכום ההעברה.

## מיפוי שדות MT103 ל-pacs.008

<div class="api-fields-table" tabindex="0" aria-label="מיפוי שדות MT103 ל-pacs.008">
  <table>
    <caption>מיפויי שדות עיקריים מ-MT103 ל-pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">שדה MT103</th>
        <th scope="col">שם MT103</th>
        <th scope="col">נתיב XML ב-pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">הפניית השולח</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">קוד פעולה בנקאית</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">תאריך ערך / סכום</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">סכום מבוקש</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">לקוח מזמין</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">מוסד מזמין</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">מוסד החשבון</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">לקוח מוטב</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">מידע העברה</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">פרטי עמלות</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">מידע שולח למקבל</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## קודי סטטוס וסיבה

### קודי סטטוס pacs.002

<div class="api-fields-table" tabindex="0" aria-label="קודי סטטוס pacs.002">
  <table>
    <caption>קודי סטטוס עסקה ב-pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">קוד</th>
        <th scope="col">משמעות</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">התקבל — בדיקות מוקדמות עברו</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">התקבל — סליקה בתהליך</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">התקבל — סליקה הושלמה</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">נתקבל — טרם עובד</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">ממתין — נדרש עיבוד נוסף</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">נדחה — עם קוד סיבה</td></tr>
    </tbody>
  </table>
</div>

### קודי סיבת דחייה והחזרה נפוצים

<div class="api-fields-table" tabindex="0" aria-label="קודי סיבה נפוצים">
  <table>
    <caption>קודי סיבת דחייה והחזרה בשימוש תכוף</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">קוד</th>
        <th scope="col">שם</th>
        <th scope="col">תיאור</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">מספר חשבון שגוי</td><td class="api-fields-table__constraint">מספר החשבון אינו תקין או אינו קיים</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">חשבון סגור</td><td class="api-fields-table__constraint">החשבון סגור</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">חשבון חסום</td><td class="api-fields-table__constraint">החשבון חסום לעסקאות</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">יתרה לא מספקת</td><td class="api-fields-table__constraint">יתרה לא מספקת בחשבון החייב</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">כפילות</td><td class="api-fields-table__constraint">זוהה תשלום כפול</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">כתובת זכאי חסרה</td><td class="api-fields-table__constraint">כתובת הזכאי חסרה או חלקית</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">לבקשת הלקוח</td><td class="api-fields-table__constraint">החזרה או דחייה לבקשת הלקוח</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">תשלום כפול</td><td class="api-fields-table__constraint">תשלום כפול זוהה</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">בעקבות ביטול</td><td class="api-fields-table__constraint">בעקבות בקשת ביטול</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">הונאה</td><td class="api-fields-table__constraint">חשד להונאה</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC שגוי</td><td class="api-fields-table__constraint">ה-BIC שגוי או לא ידוע</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">שם/כתובת זכאי חסרים</td><td class="api-fields-table__constraint">שם או נתוני כתובת של הזכאי חסרים</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">שעת סגירה</td><td class="api-fields-table__constraint">שעת הסגירה לעיבוד חלפה</td></tr>
    </tbody>
  </table>
</div>

## פורמט כתובת דואר

### כתובת מובנית

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### כתובת לא מובנית (מיושנת ל-CBPR+ אחרי נובמבר 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

אילוצים עיקריים: StrtNm עד 70 תווים (CBPR+), TwnNm עד 35 תווים (CBPR+), Ctry בפורמט ISO 3166-1 alpha-2, AdrLine עד 70 תווים לשורה ועד 7 שורות.

## זיהוי צדדים

צדדים ב-pacs.008 תומכים במספר שיטות זיהוי:

- **BIC** — קוד מזהה עסקי לפי ISO 9362. 8 או 11 תווים (BBBBCCLL או BBBBCCLLBBB). משמש ב-FinInstnId/BICFI לסוכנים וב-OrgId/AnyBIC לצדדים.
- **LEI** — מזהה ישות משפטית לפי ISO 17442. 20 תווים אלפאנומריים. מופיע ב-OrgId/LEI לצדדים וב-FinInstnId/LEI לסוכנים. משפר הבחנת ישויות לדיווח רגולטורי.
- **IBAN** — מספר חשבון בנק בינלאומי לפי ISO 13616. משמש ב-DbtrAcct/Id/IBAN וב-CdtrAcct/Id/IBAN.
- **מזהי ארגון** — מזהים אחרים מבוססי סכמה (מספר מס, DUNS, מספר לקוח) דרך OrgId/Othr עם קוד שם סכמה.
- **מזהים פרטיים** — לאנשים טבעיים: תאריך ומקום לידה, דרכון (CCPT), תעודת זהות (NIDN) או רישיון נהיגה (DRLC) דרך PrvtId.

## מידע העברה

נתוני ההעברה ב-pacs.008 משתמשים באלמנט RmtInf בשתי צורות:

**לא מובנה** — טקסט חופשי עד 140 תווים להופעה. פשוט אך מגביל התאמה אוטומטית.

**מובנה** — הפניות מסמכים עם קודי סוג, מספרים, תאריכים וסכומים. סוגי מסמכים נפוצים: CINV (חשבונית מסחרית), CREN (הודעת זיכוי), SOAC (דף חשבון). תומך בהפניות זכאי ISO 11649 (RF + ספרות ביקורת + הפניה) דרך CdtrRefInf. מאפשר התאמת חשבוניות אוטומטית ותשלומי ריבוי חשבוניות.

## UETR ומעקב gpi

UETR (Unique End-to-End Transaction Reference) הוא UUID v4 שנוצר על ידי סוכן החייב. הוא מופיע ב-PmtId/UETR לאורך pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 ו-pacs.028. הוא חייב להישאר ללא שינוי לאורך כל שרשרת התשלום.

SWIFT gpi משתמש ב-UETR למעקב אחר תשלומים דרך מסד נתוני Tracker מבוסס ענן. כל סוכן מאשר קבלה ועיבוד, מה שמאפשר נראות מקצה לקצה. הסכם רמת השירות של gpi לתשלומים חוצי גבולות מכוון לזיכוי באותו יום בחשבון הזכאי.

## הפניות

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

