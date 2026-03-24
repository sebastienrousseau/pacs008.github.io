---
title: pacs.007.001.11 | היפוך תשלום בין מוסדות פיננסיים | pacs008
description: הודעת pacs.007 משמשת לביטול הוראת תשלום שנשלחה בעבר ועדיין לא נסלקה, או לבקשת ביטול תשלום שנסלק. בניגוד ל-pacs.004 (החזרה), היא מיוזמת על ידי הסוכן המורה...
lang: he-IL
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — היפוך תשלום בין מוסדות פיננסיים

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## סקירה

הודעת pacs.007 משמשת לביטול הוראת תשלום שנשלחה בעבר ועדיין לא נסלקה, או לבקשת ביטול תשלום שנסלק. בניגוד ל-pacs.004 (החזרה), היא מיוזמת על ידי הסוכן המורה המקורי.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה וחותמת זמן יצירה
- **TxInf** — מידע עסקה עם סכום הביטול והצדדים
- **OrgnlGrpInf** — מידע על הקבוצה המקורית המפנה להודעת המקור
- **RvslRsnInf** — מידע על סיבת הביטול עם קודי סיבה מובנים
- **OrgnlTxRef** — הפניה לעסקה המקורית לעקיבות מקצה לקצה

## הקשר עסקי

- מיוזמת כאשר השולח המקורי מזהה שגיאה לפני או אחרי סליקה
- משמשת בתרחישי הונאה כאשר נדרש ביטול מהיר
- תומכת בביטול מלא וחלקי של סכומי התשלום המקוריים
- נושאת קודי סיבת ביטול מובנים לעיבוד במורד השרשרת

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
          <td class="operational-matrix-table__right">מיוזמת כאשר השולח המקורי מזהה שגיאה לפני או אחרי סליקה</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — מידע עסקה עם סכום הביטול והצדדים</td>
          <td class="operational-matrix-table__right">משמשת בתרחישי הונאה כאשר נדרש ביטול מהיר</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — מידע על הקבוצה המקורית המפנה להודעת המקור</td>
          <td class="operational-matrix-table__right">תומכת בביטול מלא וחלקי של סכומי התשלום המקוריים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — מידע על סיבת הביטול עם קודי סיבה מובנים</td>
          <td class="operational-matrix-table__right">נושאת קודי סיבת ביטול מובנים לעיבוד במורד השרשרת</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — הפניה לעסקה המקורית לעקיבות מקצה לקצה</td>
          <td class="operational-matrix-table__right">הסוכן המורה (השולח המקורי) שולח pacs.007 קדימה דרך שרשרת התשלום לביטול תשלום שהוזמן בעבר. כל סוכן מעבד את הוראת הביטול ומתאים את הסליקה בהתאם.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- נבדלת מ-pacs.004 בכיוון — ביטול זורם קדימה מהמקור, החזרה זורמת אחורה מהמוטב
- CBPR+ דורש צימוד עם מזהי הודעה מקוריים להתאמה אוטומטית
- קודי סיבה מובנים מחליפים נרטיבים בטקסט חופשי מהודעות MT מדור קודם
- נמצאת בשימוש גובר בתהליכי ביטול תשלום מיידי ומניעת הונאה

## זרימת הודעה

הסוכן המורה (השולח המקורי) שולח pacs.007 קדימה דרך שרשרת התשלום לביטול תשלום שהוזמן בעבר. כל סוכן מעבד את הוראת הביטול ומתאים את הסליקה בהתאם.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">בסיס טוב למידול תהליכי היפוך.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">גרסאות קטלוג מאוחרות יותר</td>
          <td class="version-diff-table__takeaway">בדקו גרסאות מאוחרות יותר לצורך התאמה לתשתית השוק הנוכחית.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### הערות לשדות

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: שמרו על אסמכתת התשלום המקורית כדי למנוע שברים בתהליכי התאמה.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## השוואה pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="השוואה pacs.007 vs pacs.004">
  <table>
    <caption>השוואה pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>ממד</th>
        <th>pacs.007.001.11</th>
        <th>הודעת השוואה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">מטרה עיקרית</td>
          <td class="message-comparison-table__current">היפוך של תשלום שנשלח קודם לכן</td>
          <td class="message-comparison-table__other">החזרת כספים שסולקו</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">מופעל על ידי</td>
          <td class="message-comparison-table__current">הצד המקורי שנתן את ההוראה</td>
          <td class="message-comparison-table__other">צד המקבל / המוטב</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">כיוון הזרימה</td>
          <td class="message-comparison-table__current">קדימה לאורך השרשרת</td>
          <td class="message-comparison-table__other">בחזרה לאורך השרשרת</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">המתאים ביותר</td>
          <td class="message-comparison-table__current">טיפול בהיפוך הנובע מהחזרה, מטעות או מהונאה</td>
          <td class="message-comparison-table__other">טיפול בהחזרה לאחר הסליקה</td>
        </tr>
    </tbody>
  </table>
</div>

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/he/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">העברת אשראי ללקוח בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">החזר תשלום</td>
          <td class="related-messages-table__overview">הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
    </tbody>
  </table>
</div>

