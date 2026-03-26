---
title: "pacs.010.001.05 | חיוב ישיר בין מוסדות פיננסיים | pacs008"
description: הודעת pacs.010 משמשת בין מוסדות פיננסיים לעסקאות חיוב ישיר בחשבון המוסד עצמו. היא מאפשרת למוסד אחד לגבות כספים ישירות מחשבון מוסד אחר.
lang: he-IL
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — חיוב ישיר בין מוסדות פיננסיים

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## סקירה

הודעת pacs.010 משמשת בין מוסדות פיננסיים לעסקאות חיוב ישיר בחשבון המוסד עצמו. היא מאפשרת למוסד אחד לגבות כספים ישירות מחשבון מוסד אחר.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה ומידע סליקה
- **DrctDbtTxInf** — מידע עסקת חיוב ישיר עם סכום הגבייה
- **Cdtr / CdtrAgt** — זיהוי מוסד הנושה וסוכנו
- **Dbtr / DbtrAgt** — זיהוי מוסד החייב וסוכנו
- **IntrBkSttlmAmt** — סכום סליקה בין-בנקאי במטבע הסליקה

## הקשר עסקי

- תומכת בגביית חיוב ישיר בין-בנקאי בין מוסדות פיננסיים
- משמשת לגביית עמלות, דרישות מרווח והתחייבויות סליקה מוסדיות
- דורשת הסדרים דו-צדדיים מוסכמים מראש בין מוסדות משתתפים
- קריטית לניהול מזומנים מוסדי ומחזורי סליקה בין-בנקאיים

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
          <td class="operational-matrix-table__right">תומכת בגביית חיוב ישיר בין-בנקאי בין מוסדות פיננסיים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — מידע עסקת חיוב ישיר עם סכום הגבייה</td>
          <td class="operational-matrix-table__right">משמשת לגביית עמלות, דרישות מרווח והתחייבויות סליקה מוסדיות</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — זיהוי מוסד הנושה וסוכנו</td>
          <td class="operational-matrix-table__right">דורשת הסדרים דו-צדדיים מוסכמים מראש בין מוסדות משתתפים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — זיהוי מוסד החייב וסוכנו</td>
          <td class="operational-matrix-table__right">קריטית לניהול מזומנים מוסדי ומחזורי סליקה בין-בנקאיים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — סכום סליקה בין-בנקאי במטבע הסליקה</td>
          <td class="operational-matrix-table__right">מוסד הנושה שולח pacs.010 למוסד החייב לגביית כספים תחת הסדר מוסכם מראש. מוסד החייב מאמת את הבקשה ומסלק או דוחה את החיוב הישיר.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- מחליפה אלמנטים מ-MT204 לעיבוד חיוב ישיר בין-בנקאי
- זיהוי צד מובנה עוקב אחר אותן דרישות כמו הודעות pacs אחרות
- אימות מזהים מוסדיים (BIC, LEI) הוא חובה
- נכללת במפות דרכים לאימוץ מלא של ISO 20022 במשטחי שוק

## זרימת הודעה

מוסד הנושה שולח pacs.010 למוסד החייב לגביית כספים תחת הסדר מוסכם מראש. מוסד החייב מאמת את הבקשה ומסלק או דוחה את החיוב הישיר.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">מהווה נקודת ייחוס לתמיכה בחיוב ישיר בין מוסדות בפרויקט הנוכחי.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">גרסת קטלוג מאוחרת יותר</td>
          <td class="version-diff-table__takeaway">בדקו זאת לפני אימוץ דרישות תשתית חדשות יותר.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### הערות לשדות

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/he/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">העברת אשראי בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">חיוב ישיר ללקוח בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.003 מוחלפת בין מוסדות פיננסיים לביצוע הוראת חיוב ישיר של לקוח. היא מאפשרת לבנק הנושה לגבות כספים מבנק החייב בשם הנושה.</td>
        </tr>
    </tbody>
  </table>
</div>

