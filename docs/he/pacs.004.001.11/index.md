---
title: "pacs.004.001.11 | החזר תשלום | pacs008"
description: הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.
lang: he-IL
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — החזר תשלום

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 2025-02-27; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם זיהוי הודעה וחותמת זמן יצירה
- **TxInf** — מידע עסקה עם סכום ההחזרה והצדדים
- **OrgnlGrpInf** — מידע על הקבוצה המקורית המקשר להודעת המקור
- **RtrRsnInf** — מידע על סיבת ההחזרה עם קודי סיבה מובנים
- **OrgnlTxRef** — הפניה לעסקה המקורית להתאמה וסיווג

## הקשר עסקי

- מטפלת בהחזרות לאחר סליקה כאשר לא ניתן לזכות את חשבון המוטב
- תומכת בתרחישי ביטול כאשר המקור מבקש החזרת כספים
- נושאת קודי סיבת החזרה מובנים לשקיפות רגולטורית ותפעולית
- חלה הן על החזרות העברות זכות (pacs.008) והן על החזרות חיוב ישיר (pacs.003)

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
          <td class="operational-matrix-table__right">מטפלת בהחזרות לאחר סליקה כאשר לא ניתן לזכות את חשבון המוטב</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — מידע עסקה עם סכום ההחזרה והצדדים</td>
          <td class="operational-matrix-table__right">תומכת בתרחישי ביטול כאשר המקור מבקש החזרת כספים</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — מידע על הקבוצה המקורית המקשר להודעת המקור</td>
          <td class="operational-matrix-table__right">נושאת קודי סיבת החזרה מובנים לשקיפות רגולטורית ותפעולית</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — מידע על סיבת ההחזרה עם קודי סיבה מובנים</td>
          <td class="operational-matrix-table__right">חלה הן על החזרות העברות זכות (pacs.008) והן על החזרות חיוב ישיר (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — הפניה לעסקה המקורית להתאמה וסיווג</td>
          <td class="operational-matrix-table__right">הסוכן מקבל ההוראות שולח pacs.004 בחזרה דרך שרשרת התשלום להחזרת כספים שנסלקו בעבר. כל סוכן בשרשרת מעבד את ההחזרה ומזכה בחזרה את החשבונות הרלוונטיים.</td>
        </tr>
    </tbody>
  </table>
</div>

## הקשר CBPR+ וסכמות

- מחליפה MT103 RETURN והודעות החזרה בשיטת הכיסוי
- קודי סיבת החזרה מתוקננים וקריאים למכונה תחת ISO 20022
- CBPR+ דורש נתוני הפניה מלאים לעסקה המקורית להתאמה
- מעקב SWIFT gpi מורחב לעסקאות החזרה לנראות מקצה לקצה

## זרימת הודעה

הסוכן מקבל ההוראות שולח pacs.004 בחזרה דרך שרשרת התשלום להחזרת כספים שנסלקו בעבר. כל סוכן בשרשרת מעבד את ההחזרה ומזכה בחזרה את החשבונות הרלוונטיים.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">המימוש הנוכחי ב-pacs008</td>
          <td class="version-diff-table__takeaway">תואם לתבניות הנוכחיות עבור הודעות החזרת תשלום.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">גרסאות קטלוג מאוחרות יותר</td>
          <td class="version-diff-table__takeaway">בדקו גרסאות מאוחרות יותר של הודעות החזרה כאשר שדרוגי סכימה או צדדים נגדיים חדשים נמצאים בתחום העבודה.</td>
        </tr>
    </tbody>
  </table>
</div>

## דוגמת XML עם הערות

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### הערות לשדות

- `OrgnlInstrId`: שדה זה חייב להצביע בחזרה אל העסקה שסולקה וכעת מוחזרת.
- `RtrdIntrBkSttlmAmt`: סכום ההחזרה צריך לשקף את הערך שהוחזר בפועל, ולא סכום עסקי ששוחזר בדיעבד.
- `RtrRsnInf`: איכות קודי הסיבה חיונית לתקשורת עם לקוחות בהמשך הדרך ולניתוב תפעולי.

## השוואה pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="השוואה pacs.004 vs pacs.007">
  <table>
    <caption>השוואה pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>ממד</th>
        <th>pacs.004.001.11</th>
        <th>הודעת השוואה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">מטרה עיקרית</td>
          <td class="message-comparison-table__current">החזרת כספים שסולקו</td>
          <td class="message-comparison-table__other">היפוך של תשלום שנשלח קודם לכן</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">מופעל על ידי</td>
          <td class="message-comparison-table__current">צד המקבל / המוטב</td>
          <td class="message-comparison-table__other">הצד המקורי שנתן את ההוראה</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">כיוון הזרימה</td>
          <td class="message-comparison-table__current">בחזרה לאורך השרשרת</td>
          <td class="message-comparison-table__other">קדימה לאורך השרשרת</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">המתאים ביותר</td>
          <td class="message-comparison-table__current">טיפול בהחזרה לאחר הסליקה</td>
          <td class="message-comparison-table__other">טיפול בהיפוך הנובע מהחזרה, מטעות או מהונאה</td>
        </tr>
    </tbody>
  </table>
</div>

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/he/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">חיוב ישיר ללקוח בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.003 מוחלפת בין מוסדות פיננסיים לביצוע הוראת חיוב ישיר של לקוח. היא מאפשרת לבנק הנושה לגבות כספים מבנק החייב בשם הנושה.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="related-messages-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
    </tbody>
  </table>
</div>

