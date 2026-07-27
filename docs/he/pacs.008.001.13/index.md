---
title: "pacs.008.001.13 | העברת אשראי ללקוח בין מוסדות פיננסיים | pacs008"
description: הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת...
lang: he-IL
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — העברת אשראי ללקוח בין מוסדות פיננסיים

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">שדה</th>
        <th scope="col">ערך</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>שם ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>סטטוס רישום</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>שנה</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>גרסה</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## סקירה

הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם מזהה הודעה, תאריך יצירה, מספר עסקאות ומידע סליקה
- **CdtTrfTxInf** — מידע עסקת העברת זכות עם סכום, עמלות ומטרה
- **Dbtr / DbtrAgt** — זיהוי החייב וסוכן החייב ופרטי חשבון
- **Cdtr / CdtrAgt** — זיהוי הנושה וסוכן הנושה ופרטי חשבון
- **RmtInf** — מידע העברה להפניות תשלום מובנות או בלתי מובנות

## הקשר עסקי

- ההודעה העיקרית להעברות זכות חוצות גבולות ומקומיות ביוזמת לקוח
- בשימוש ב-SEPA SCT, SEPA Instant, CBPR+ ומערכות סליקה לאומיות
- נושאת מידע העברה מובנה לתמיכה בהתאמה אוטומטית
- תומכת בשיטות סליקה סדרתית, כיסוי וישירה לשרשראות תשלום מרובות רגליים

<div class="operational-matrix-table" tabindex="0" aria-label="אלמנטי נתונים מרכזיים הקשר עסקי">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>אלמנטי נתונים מרכזיים</th>
        <th>הקשר עסקי</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — כותרת קבוצה עם מזהה הודעה, תאריך יצירה, מספר עסקאות ומידע סליקה</td>
          <td class="operational-matrix-table__right">ההודעה העיקרית להעברות זכות חוצות גבולות ומקומיות ביוזמת לקוח</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — מידע עסקת העברת זכות עם סכום, עמלות ומטרה</td>
          <td class="operational-matrix-table__right">בשימוש ב-SEPA SCT, SEPA Instant, CBPR+ ומערכות סליקה לאומיות</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — זיהוי החייב וסוכן החייב ופרטי חשבון</td>
          <td class="operational-matrix-table__right">נושאת מידע העברה מובנה לתמיכה בהתאמה אוטומטית</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — זיהוי הנושה וסוכן הנושה ופרטי חשבון</td>
          <td class="operational-matrix-table__right">תומכת בשיטות סליקה סדרתית, כיסוי וישירה לשרשראות תשלום מרובות רגליים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — מידע העברה להפניות תשלום מובנות או בלתי מובנות</td>
          <td class="operational-matrix-table__right">סוכן החייב יוצר pacs.008 ושולח אותה לסוכן הנושה (ישירות או דרך מתווכים). כל סוכן בשרשרת מאמת, מעשיר ומעביר את ההוראה עד שסוכן הנושה מזכה את חשבון המוטב.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- מחליפה MT103 ו-MT103+ להעברות זכות חוצות גבולות של לקוחות
- מועד אחרון לכתובת מובנית של נובמבר 2026 חל על כל כתובות הדואר של הצדדים
- SWIFT gpi דורש pacs.008 למעקב מקצה לקצה מבוסס UETR
- 13 מהדורות משקפות התפתחות סכמה מתמשכת במשטחי שוק

## זרימת הודעה

סוכן החייב יוצר pacs.008 ושולח אותה לסוכן הנושה (ישירות או דרך מתווכים). כל סוכן בשרשרת מאמת, מעשיר ומעביר את ההוראה עד שסוכן הנושה מזכה את חשבון המוטב.

## טבלת הבדלי גרסאות

<div class="version-diff-table" tabindex="0" aria-label="טבלת הבדלי גרסאות">
  <table>
    <caption>טבלת הבדלי גרסאות</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>טווח גרסאות</th>
        <th>למה זה חשוב</th>
        <th>לקח יישומי</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">גרסאות מוקדמות</td>
          <td class="version-diff-table__takeaway">שימושי בעיקר לניתוח מיגרציות מורשת ולהבנת היסטוריית גרסאות.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">גרסאות מודרניות שלפני הגרסה הנוכחית</td>
          <td class="version-diff-table__takeaway">אלו הגרסאות שסביר ביותר שיופיעו בפרויקטי מיגרציה או קיום-משותף עדכניים.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">גרסת הקטלוג הנוכחית</td>
          <td class="version-diff-table__takeaway">השתמשו בכך לתכנון סביב הגרסה הנוכחית, תוך המשך בדיקת כללי השימוש והיערכות הצדדים הנגדיים.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

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

### הערות לשדות

- `MsgId`: זה צריך לזהות את מעטפת ההודעה עצמה, ולא את אסמכתת תשלום הלקוח הסופי.
- `EndToEndId`: שמרו על עקיבות מוכוונת-לקוח יציבה לאורך המערכות במורד הזרם ככל האפשר.
- `UETR`: השתמשו בכך באופן עקבי בסביבות חוצות-גבולות ועשירות במעקב; אל תייצרו אותו באופן אד-הוק בשלבים מאוחרים יותר של התהליך.
- `IntrBkSttlmAmt`: אמתו את הסכום והמטבע באמצעות כללי עסק לפני אימות הסכימה.
- `Dbtr` / `Cdtr`: איכות פרטי הצדדים, מבנה הכתובת והמזהים הם בדרך כלל הגורמים המרכזיים להיקף התיקונים.

## השוואה pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="השוואה pacs.008 vs pacs.009">
  <table>
    <caption>השוואה pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>ממד</th>
        <th>pacs.008.001.13</th>
        <th>הודעת השוואה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">מטרה עיקרית</td>
          <td class="message-comparison-table__current">העברת אשראי של לקוח</td>
          <td class="message-comparison-table__other">העברת אשראי לחשבון עצמי של מוסד או רגל כיסוי</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">בעלות עסקית</td>
          <td class="message-comparison-table__current">תפעול תשלומי לקוחות</td>
          <td class="message-comparison-table__other">פעילות אוצר / בנקאות קורספונדנטית / מימון</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">צירופים טיפוסיים</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">תזרימי pacs.002, pacs.004 ולעיתים גם תזרימי pacs.008 מקושרים</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">הנחה שגויה שיש להימנע ממנה</td>
          <td class="message-comparison-table__current">שכל ההעברות בין בנקים שייכות לכאן</td>
          <td class="message-comparison-table__other">שהוא יכול להחליף הוראות העברת אשראי של לקוחות</td>
        </tr>
    </tbody>
  </table>
</div>

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## גרסאות נתמכות

<div class="message-versions-table" tabindex="0" aria-label="גרסאות נתמכות">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>גרסה</th>
        <th>מצב</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>נוכחי</strong></td>
        </tr>
    </tbody>
  </table>
</div>

## הודעות קשורות
<div class="related-messages-table" tabindex="0" aria-label="הודעות קשורות">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>סוג הודעה</th>
        <th>תיאור</th>
        <th>סקירה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">החזר תשלום</td>
          <td class="related-messages-table__overview">הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">העברת אשראי בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.</td>
        </tr>
    </tbody>
  </table>
</div>

