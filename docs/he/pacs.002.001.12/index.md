---
title: "pacs.002.001.12 | דוח סטטוס תשלום בין מוסדות פיננסיים | pacs008"
description: הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת...
lang: he-IL
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — דוח סטטוס תשלום בין מוסדות פיננסיים

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>סטטוס רישום</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>שנה</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>גרסה</strong></td>
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## סקירה

הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה וחותמת זמן יצירה
- **OrgnlGrpInfAndSts** — מידע על הקבוצה המקורית וסטטוס לדיווח ברמת הצרור
- **TxInfAndSts** — מידע על העסקה וסטטוס לתוצאות עסקאות בודדות
- **StsRsnInf** — מידע על סיבת הסטטוס עם קודי סיבה מובנים
- **OrgnlTxRef** — הפניה לעסקה המקורית המקשרת חזרה להוראת המקור

## הקשר עסקי

- משמשת לאישור סליקה או דיווח על דחיית העברות זכות, חיובים ישירים והחזרות תשלום
- מאפשרת התאמה בין סוכנים מורים לסוכנים מקבלי הוראות
- נדרשת בתהליכי CBPR+ לאישור עיבוד הודעות pacs.008 ו-pacs.009
- תומכת בדיווח סטטוס הן ברמת קבוצת הצרור והן ברמת העסקה הבודדת

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — כותרת קבוצה עם זיהוי הודעה וחותמת זמן יצירה</td>
          <td class="operational-matrix-table__right">משמשת לאישור סליקה או דיווח על דחיית העברות זכות, חיובים ישירים והחזרות תשלום</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — מידע על הקבוצה המקורית וסטטוס לדיווח ברמת הצרור</td>
          <td class="operational-matrix-table__right">מאפשרת התאמה בין סוכנים מורים לסוכנים מקבלי הוראות</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — מידע על העסקה וסטטוס לתוצאות עסקאות בודדות</td>
          <td class="operational-matrix-table__right">נדרשת בתהליכי CBPR+ לאישור עיבוד הודעות pacs.008 ו-pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — מידע על סיבת הסטטוס עם קודי סיבה מובנים</td>
          <td class="operational-matrix-table__right">תומכת בדיווח סטטוס הן ברמת קבוצת הצרור והן ברמת העסקה הבודדת</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — הפניה לעסקה המקורית המקשרת חזרה להוראת המקור</td>
          <td class="operational-matrix-table__right">הסוכן מקבל ההוראות (המקבל) שולח pacs.002 בחזרה לסוכן המורה (השולח) לאישור קבלה, סליקה או דחייה של הוראת תשלום שהתקבלה כגון pacs.008 או pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- מחליפה את MT199 ונרטיבי סטטוס בשדה 79 בהודעות MT
- CBPR+ מחייב pacs.002 לכל תקשורת סטטוס תשלום
- קודי סיבה מובנים מחליפים הסברי דחייה בטקסט חופשי
- שילוב מעקב SWIFT gpi דורש pacs.002 לשקיפות מקצה לקצה

## זרימת הודעה

הסוכן מקבל ההוראות (המקבל) שולח pacs.002 בחזרה לסוכן המורה (השולח) לאישור קבלה, סליקה או דחייה של הוראת תשלום שהתקבלה כגון pacs.008 או pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">השתמשו בכך כאשר יש להתאים לתבניות ולאמצעי האימות הנוכחיים של הפרויקט.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">גרסאות קטלוג מאוחרות יותר</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### הערות לשדות

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## השוואה pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="השוואה pacs.002 vs pacs.028">
  <table>
    <caption>השוואה pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>ממד</th>
        <th>pacs.002.001.12</th>
        <th>הודעת השוואה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">מטרה עיקרית</td>
          <td class="message-comparison-table__current">דיווח סטטוס</td>
          <td class="message-comparison-table__other">בקשת סטטוס</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">מי מתחיל את האינטראקציה</td>
          <td class="message-comparison-table__current">המוסד ששולח את הסטטוס</td>
          <td class="message-comparison-table__other">המוסד שמבקש סטטוס</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">עמדה תפעולית</td>
          <td class="message-comparison-table__current">דיווח מונע אירוע</td>
          <td class="message-comparison-table__other">בירור מונע חריגה</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">הנחה שגויה שיש להימנע ממנה</td>
          <td class="message-comparison-table__current">שדיווח סטטוס מחליף תהליכי בירור וחקירה</td>
          <td class="message-comparison-table__other">שכל תשלום דורש בקשת סטטוס מפורשת</td>
        </tr>
    </tbody>
  </table>
</div>

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/he/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">העברת אשראי ללקוח בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">העברת אשראי בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">בקשת סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.028 נשלחת על ידי מוסד פיננסי לבקשת מצב הוראת תשלום שנשלחה בעבר. היא מאפשרת מעקב יזום אחר עיבוד התשלום מבלי להמתין לדוח סטטוס שלא התבקש.</td>
        </tr>
    </tbody>
  </table>
</div>

