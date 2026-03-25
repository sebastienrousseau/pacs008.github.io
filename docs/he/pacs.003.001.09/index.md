---
title: "pacs.003.001.09 | חיוב ישיר ללקוח בין מוסדות פיננסיים | pacs008"
description: הודעת pacs.003 מוחלפת בין מוסדות פיננסיים לביצוע הוראת חיוב ישיר של לקוח. היא מאפשרת לבנק הנושה לגבות כספים מבנק החייב בשם הנושה.
lang: he-IL
lastUpdated: true
image: /logo.svg
faq:
  - question: "האם pacs.003 הוא המראה של חיוב ישיר ל-pacs.008?"
    answer: "לא. הוא מטפל בזרימות חיוב ישיר של לקוחות, שיש להן כללי מנדט, תזמון וחריגים שונים."
  - question: "מה הכי חשוב מבחינה תפעולית?"
    answer: "איכות המנדט, כללי חשבון החייב וטיפול בהחזרות חשובים יותר מיצירת XML."
---

# pacs.003.001.09 — חיוב ישיר ללקוח בין מוסדות פיננסיים

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## סקירה

הודעת pacs.003 מוחלפת בין מוסדות פיננסיים לביצוע הוראת חיוב ישיר של לקוח. היא מאפשרת לבנק הנושה לגבות כספים מבנק החייב בשם הנושה.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה ומידע סליקה
- **DrctDbtTxInf** — מידע עסקת חיוב ישיר עם סכום וצדדים
- **Cdtr** — זיהוי הנושה ופרטי חשבון
- **CdtrAgt** — זיהוי סוכן הנושה (מוסד הגבייה)
- **DbtrAgt** — זיהוי סוכן החייב (מוסד המשלם)

## הקשר עסקי

- תומכת בתוכניות חיוב ישיר SEPA Core ו-B2B
- משמשת לגביית תשלומים חוזרים כגון מנויים, חשבונות שירותים ותשלומי הלוואות
- דורשת הפניית הרשאה תקפה בין החייב לנושה
- מאפשרת גביית צרור של הוראות חיוב ישיר מרובות בהודעה אחת

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — כותרת קבוצה עם זיהוי הודעה ומידע סליקה</td>
          <td class="operational-matrix-table__right">תומכת בתוכניות חיוב ישיר SEPA Core ו-B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — מידע עסקת חיוב ישיר עם סכום וצדדים</td>
          <td class="operational-matrix-table__right">משמשת לגביית תשלומים חוזרים כגון מנויים, חשבונות שירותים ותשלומי הלוואות</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — זיהוי הנושה ופרטי חשבון</td>
          <td class="operational-matrix-table__right">דורשת הפניית הרשאה תקפה בין החייב לנושה</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — זיהוי סוכן הנושה (מוסד הגבייה)</td>
          <td class="operational-matrix-table__right">מאפשרת גביית צרור של הוראות חיוב ישיר מרובות בהודעה אחת</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — זיהוי סוכן החייב (מוסד המשלם)</td>
          <td class="operational-matrix-table__right">סוכן הנושה יוזם pacs.003 כלפי סוכן החייב לגביית כספים. סוכן החייב מאמת את ההרשאה, בודק כיסוי חשבון, ומסלק או מחזיר את העסקה.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- דרישות כתובת מובנית וזיהוי צד חלות באופן שווה על חיובים ישירים
- נתונים הקשורים להרשאה חייבים להיות מובנים לחלוטין מנובמבר 2026
- מחליפה פורמטים מסוג MT104 מדור קודם בתהליכים חוצי גבולות
- אימות זיהוי תוכנית הנושה נאכף בהדרגה

## זרימת הודעה

סוכן הנושה יוזם pacs.003 כלפי סוכן החייב לגביית כספים. סוכן החייב מאמת את ההרשאה, בודק כיסוי חשבון, ומסלק או מחזיר את העסקה.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">מועיל למידול הפניות של חיוב ישיר בפרויקט הנוכחי.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">גרסאות קטלוג מאוחרות יותר</td>
          <td class="version-diff-table__takeaway">בדקו גרסאות מאוחרות יותר לגבי עדכוני הרשאה, סטטוס ותאימות הדדית לפני שימוש בפרויקט חדש.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### הערות לשדות

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: הצלחת חיוב ישיר תלויה לעיתים קרובות יותר באיכות החשבון וההרשאה מאשר במבנה ה-XML.

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/he/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">החזר תשלום</td>
          <td class="related-messages-table__overview">הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">היפוך תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.007 משמשת לביטול הוראת תשלום שנשלחה בעבר ועדיין לא נסלקה, או לבקשת ביטול תשלום שנסלק. בניגוד ל-pacs.004 (החזרה), היא מיוזמת על ידי הסוכן המורה המקורי.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
    </tbody>
  </table>
</div>

