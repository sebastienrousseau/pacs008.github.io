---
title: pacs.028.001.05 | בקשת סטטוס תשלום בין מוסדות פיננסיים | pacs008
description: הודעת pacs.028 נשלחת על ידי מוסד פיננסי לבקשת מצב הוראת תשלום שנשלחה בעבר. היא מאפשרת מעקב יזום אחר עיבוד התשלום מבלי להמתין לדוח סטטוס שלא התבקש.
lang: he-IL
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — בקשת סטטוס תשלום בין מוסדות פיננסיים

| | |
|---|---|
| **שם ISO** | FIToFIPaymentStatusRequestV05 |
| **סטטוס רישום** | Registered |
| **שנה** | 2019 |
| **גרסה** | 5 |

## סקירה

הודעת pacs.028 נשלחת על ידי מוסד פיננסי לבקשת מצב הוראת תשלום שנשלחה בעבר. היא מאפשרת מעקב יזום אחר עיבוד התשלום מבלי להמתין לדוח סטטוס שלא התבקש.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה וחותמת זמן יצירה
- **TxInf** — מידע עסקה המזהה את התשלום לבירור
- **OrgnlGrpInf** — מידע על הקבוצה המקורית המפנה להודעת המקור
- **OrgnlInstrId** — מזהה ההוראה המקורית מהתשלום המקורי
- **OrgnlEndToEndId** — מזהה מקצה לקצה מקורי לעקיבות

## הקשר עסקי

- מאפשרת בירור סטטוס יזום עבור הוראות תשלום בתהליך
- תומכת בצוותי תפעול החוקרים תשלומים מעוכבים או חסרים
- משלימה את pacs.002 ביוזמת תקשורת סטטוס במקום המתנה
- משמשת בתהליכי טיפול בחריגים וניטור SLA

<div class="operational-matrix-table" tabindex="0" aria-label="אלמנטי נתונים מרכזיים הקשר עסקי">
  <table>
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
          <td class="operational-matrix-table__right">מאפשרת בירור סטטוס יזום עבור הוראות תשלום בתהליך</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — מידע עסקה המזהה את התשלום לבירור</td>
          <td class="operational-matrix-table__right">תומכת בצוותי תפעול החוקרים תשלומים מעוכבים או חסרים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — מידע על הקבוצה המקורית המפנה להודעת המקור</td>
          <td class="operational-matrix-table__right">משלימה את pacs.002 ביוזמת תקשורת סטטוס במקום המתנה</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — מזהה ההוראה המקורית מהתשלום המקורי</td>
          <td class="operational-matrix-table__right">משמשת בתהליכי טיפול בחריגים וניטור SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — מזהה מקצה לקצה מקורי לעקיבות</td>
          <td class="operational-matrix-table__right">הסוכן המורה שולח pacs.028 לסוכן מקבל ההוראות לבקשת סטטוס של תשלום ספציפי. הסוכן מקבל ההוראות משיב עם pacs.002 המכילה את סטטוס העיבוד הנוכחי.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- מחליפה תבניות בירור סטטוס MT199 ושאילתות הודעות SWIFT ידניות
- CBPR+ תומך בבקשות סטטוס מובנות המקושרות למזהי הודעה מקוריים
- מעקב מבוסס UETR דרך gpi מפחית את הצורך בבירורים ידניים
- משולבת בהדרגה בלוחות בקרת פעולות תשלום אוטומטיים

## זרימת הודעה

הסוכן המורה שולח pacs.028 לסוכן מקבל ההוראות לבקשת סטטוס של תשלום ספציפי. הסוכן מקבל ההוראות משיב עם pacs.002 המכילה את סטטוס העיבוד הנוכחי.

## טבלת הבדלי גרסאות

<div class="version-diff-table" tabindex="0" aria-label="טבלת הבדלי גרסאות">
  <table>
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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">מתאים למידול הנוכחי של בקשות סטטוס.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">גרסת קטלוג מאוחרת יותר</td>
          <td class="version-diff-table__takeaway">בדקו את גרסת הקטלוג החדשה יותר לצורך תכנון אינטראופרביליות עתידי.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### הערות לשדות

- `MsgId`: הבקשה עצמה צריכה מזהה בר-ביקורת הנבדל מהתשלום הבסיסי.
- `OrgnlInstrId`: השתמשו במזהה המקור המדויק מההוראה המקורית כדי למקסם את דיוק ההתאמה.
- `OrgnlEndToEndId`: הכללת עקיבות הלקוח מסייעת לצוותי התפעול ליישב את הבירור מהר יותר.

## השוואה pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="השוואה pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>ממד</th>
        <th>pacs.028.001.05</th>
        <th>הודעת השוואה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">מטרה עיקרית</td>
          <td class="message-comparison-table__current">בקשת סטטוס</td>
          <td class="message-comparison-table__other">דיווח סטטוס</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">מי מתחיל את האינטראקציה</td>
          <td class="message-comparison-table__current">המוסד שמבקש סטטוס</td>
          <td class="message-comparison-table__other">המוסד ששולח את הסטטוס</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">עמדה תפעולית</td>
          <td class="message-comparison-table__current">בירור מונע חריגה</td>
          <td class="message-comparison-table__other">דיווח מונע אירוע</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">הנחה שגויה שיש להימנע ממנה</td>
          <td class="message-comparison-table__current">שיש לשלוח אותו באופן שגרתי עבור כל תשלום</td>
          <td class="message-comparison-table__other">שהוא מבטל את הצורך בניהול מקרים פרואקטיבי</td>
        </tr>
    </tbody>
  </table>
</div>

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/he/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">העברת אשראי ללקוח בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">העברת אשראי בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.</td>
        </tr>
    </tbody>
  </table>
</div>

