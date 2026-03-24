---
title: pacs.009.001.10 | העברת אשראי בין מוסדות פיננסיים | pacs008
description: הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.
lang: he-IL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — העברת אשראי בין מוסדות פיננסיים

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__label"><strong>שם ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## סקירה

הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה ומידע סליקה
- **CdtTrfTxInf** — מידע עסקת העברת זכות עם סכום סליקה בין-בנקאי
- **Dbtr / DbtrAgt** — זיהוי מוסד החייב וסוכנו
- **Cdtr / CdtrAgt** — זיהוי מוסד הנושה וסוכנו
- **IntrBkSttlmAmt** — סכום סליקה בין-בנקאי במטבע הסליקה

## הקשר עסקי

- משמשת להעברות בין בנקים בחשבון עצמי ותשלומי כיסוי
- תומכת בניהול נזילות בין שותפי בנקאות קורספונדנטית
- נושאת את רגל הכיסוי של העברות זכות לקוח המסולקות בשיטת כיסוי
- מאפשרת פעולות אוצר ומימון בין מוסדות פיננסיים

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — כותרת קבוצה עם זיהוי הודעה ומידע סליקה</td>
          <td class="operational-matrix-table__right">משמשת להעברות בין בנקים בחשבון עצמי ותשלומי כיסוי</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — מידע עסקת העברת זכות עם סכום סליקה בין-בנקאי</td>
          <td class="operational-matrix-table__right">תומכת בניהול נזילות בין שותפי בנקאות קורספונדנטית</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — זיהוי מוסד החייב וסוכנו</td>
          <td class="operational-matrix-table__right">נושאת את רגל הכיסוי של העברות זכות לקוח המסולקות בשיטת כיסוי</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — זיהוי מוסד הנושה וסוכנו</td>
          <td class="operational-matrix-table__right">מאפשרת פעולות אוצר ומימון בין מוסדות פיננסיים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — סכום סליקה בין-בנקאי במטבע הסליקה</td>
          <td class="operational-matrix-table__right">מוסד החייב שולח pacs.009 למוסד הנושה להעברת כספיו. לתשלומי שיטת כיסוי, pacs.009 מספקת את רגל המימון בעוד pacs.008 נושאת את הוראת הלקוח בנתיב נפרד.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- מחליפה MT202 ו-MT202COV להעברות בין מוסדות
- תהליכי שיטת כיסוי מצמידים pacs.009 להוראת הלקוח הבסיסית pacs.008
- נתוני צד מובנים וזיהוי LEI נדרשים בהדרגה
- SWIFT gpi מכסה pacs.009 לשקיפות בנקאות קורספונדנטית

## זרימת הודעה

מוסד החייב שולח pacs.009 למוסד הנושה להעברת כספיו. לתשלומי שיטת כיסוי, pacs.009 מספקת את רגל המימון בעוד pacs.008 נושאת את הוראת הלקוח בנתיב נפרד.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">תואם את רמת התמיכה הנוכחית של הפרויקט בזרימות העברת אשראי בין מוסדות פיננסיים.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">גרסאות קטלוג מאוחרות יותר</td>
          <td class="version-diff-table__takeaway">חשוב לתכנון מפת הדרכים בסביבות בנקאות מתכתבת ותשלומי כיסוי.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### הערות לשדות

- `InstrId`: השתמשו במזהה של שלב המימון שאפשר עדיין לקשר לכל זרם לקוח בסיסי.
- `IntrBkSttlmAmt`: תזרימי חשבון עצמי ותזרימי כיסוי דורשים לעיתים קרובות בקרות אוצר מחמירות יותר על סכומי ותאריכי הסליקה.
- `Dbtr` / `Cdtr`: אלה צדדים מוסדיים, ולא תפקידי לקוח קמעונאי; יש למודל אותם בהתאם.

## השוואה pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="השוואה pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>ממד</th>
        <th>pacs.009.001.10</th>
        <th>הודעת השוואה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">מטרה עיקרית</td>
          <td class="message-comparison-table__current">העברת אשראי לחשבון עצמי של מוסד או רגל כיסוי</td>
          <td class="message-comparison-table__other">העברת אשראי של לקוח</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">בעלות עסקית</td>
          <td class="message-comparison-table__current">פעילות אוצר / בנקאות קורספונדנטית / מימון</td>
          <td class="message-comparison-table__other">תפעול תשלומי לקוחות</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">צירופים טיפוסיים</td>
          <td class="message-comparison-table__current">תזרימי pacs.002, pacs.004 ותזרימי pacs.008 מקושרים</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">הנחה שגויה שיש להימנע ממנה</td>
          <td class="message-comparison-table__current">שזו רק pacs.008 טכנית יותר</td>
          <td class="message-comparison-table__other">שהיא יכולה לשאת בצורה נקייה תזרימי מימון מוסדיים</td>
        </tr>
    </tbody>
  </table>
</div>

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">חיוב ישיר בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.010 משמשת בין מוסדות פיננסיים לעסקאות חיוב ישיר בחשבון המוסד עצמו. היא מאפשרת למוסד אחד לגבות כספים ישירות מחשבון מוסד אחר.</td>
        </tr>
    </tbody>
  </table>
</div>

