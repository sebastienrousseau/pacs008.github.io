---
title: "סוגי הודעות | pacs008 ISO 20022"
description: הגדרות וגרסאות הודעות pacs נתמכות לפי ISO 20022. יצירה, אימות, תיאום API ותמיכת ציות לתהליכי העברת אשראי ללקוחות בין מוסדות פיננסיים.
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# סוגי הודעות

pacs008 מכסה את הגדרת ההודעה המרכזית pacs.008 והודעות קשורות המשמשות בתהליכי תיאום והתאמה.

## תמיכה כלולה

<div class="message-coverage-table" tabindex="0" aria-label="תמיכה כלולה">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>סוג הודעה</th>
        <th>תיאור</th>
        <th>שנה</th>
        <th>סקירה</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">חיוב ישיר ללקוח בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.003 מוחלפת בין מוסדות פיננסיים לביצוע הוראת חיוב ישיר של לקוח. היא מאפשרת לבנק הנושה לגבות כספים מבנק החייב בשם הנושה.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">החזר תשלום</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">היפוך תשלום בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.007 משמשת לביטול הוראת תשלום שנשלחה בעבר ועדיין לא נסלקה, או לבקשת ביטול תשלום שנסלק. בניגוד ל-pacs.004 (החזרה), היא מיוזמת על ידי הסוכן המורה המקורי.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">העברת אשראי ללקוח בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">העברת אשראי בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">חיוב ישיר בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.010 משמשת בין מוסדות פיננסיים לעסקאות חיוב ישיר בחשבון המוסד עצמו. היא מאפשרת למוסד אחד לגבות כספים ישירות מחשבון מוסד אחר.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/he/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">בקשת סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">הודעת pacs.028 נשלחת על ידי מוסד פיננסי לבקשת מצב הוראת תשלום שנשלחה בעבר. היא מאפשרת מעקב יזום אחר עיבוד התשלום מבלי להמתין לדוח סטטוס שלא התבקש.</td>
        </tr>
    </tbody>
  </table>
</div>

## מודל אספקה

כל סוג הודעה נתמך מגובה בנכסי תבניות ולוגיקת אימות כדי שצוותים יוכלו לתקנן יצירה ובדיקות רגרסיה.

## בחירת ההודעה הנכונה

קטלוג ההודעות חשוב במיוחד כאשר צוותים צריכים לקבוע איזו הודעה מתחילה את הזרימה, איזו מדווחת על סטטוס ואיזו מתקנת או מבטלת את התהליך.

ראו את [מדריך בחירת ההודעות](/he/message-selection/) לקבלת מבט החלטה מרוכז על זרימות pacs הנתמכות.

## הקשר שוק 2026

- **SEPA SCT / SCT Inst**: pacs.008 נשאר מרכזי להחלפת העברות אשראי ועיבוד תשלומים מיידיים.
- **CBPR+**: pacs.008 ממשיך להחליף מטענים חוצי גבולות בסגנון MT103 בנתונים מובנים עשירים יותר.
- **כתובות מובנות**: הנחיות השוק הנוכחיות מצביעות על המעבר בנובמבר 2026 מכתובות דואר לא מובנות לחלוטין.
- **שיטה סדרתית ו-STP**: שרשראות בנק-לבנק רב-שלביות עדיין חשובות, וגרסאות עיבוד ישיר נשארות חשובות ליעילות תפעולית.

## יכולות תפעוליות

pacs008 מספק יצירה ואימות מבוססי תבניות לאורך גרסאות הגדרות הודעות נתמכות:

- להשוות גרסאות
- לבצע בדיקות רגרסיה לעדכוני סכמות
- לחזק נתוני הודעות תשלום יוצאים לפני שחרור
- לתמוך בצוותי מוצר, תפעול ומעבר מבסיס קוד אחד

