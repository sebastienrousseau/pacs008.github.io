---
title: "מדריך בחירת הודעות | pacs008"
description: בחרו את הודעת pacs המתאימה של ISO 20022 ליצירה, סטטוס, החזרות, היפוכים ובירורים.
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# מדריך בחירת הודעות

בחרו תחילה את משפחת pacs לפי האירוע העסקי, ואז לפי הסכמה ומודל ההפעלה.

## מטריצת החלטה מהירה

<div class="decision-matrix-table" tabindex="0" aria-label="מטריצת החלטה מהירה">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/he/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">דוח סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">חיוב ישיר ללקוח בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.003 מוחלפת בין מוסדות פיננסיים לביצוע הוראת חיוב ישיר של לקוח. היא מאפשרת לבנק הנושה לגבות כספים מבנק החייב בשם הנושה.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">החזר תשלום</td>
          <td class="decision-matrix-table__overview">הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">היפוך תשלום בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.007 משמשת לביטול הוראת תשלום שנשלחה בעבר ועדיין לא נסלקה, או לבקשת ביטול תשלום שנסלק. בניגוד ל-pacs.004 (החזרה), היא מיוזמת על ידי הסוכן המורה המקורי.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">העברת אשראי ללקוח בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">העברת אשראי בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">חיוב ישיר בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.010 משמשת בין מוסדות פיננסיים לעסקאות חיוב ישיר בחשבון המוסד עצמו. היא מאפשרת למוסד אחד לגבות כספים ישירות מחשבון מוסד אחר.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/he/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">בקשת סטטוס תשלום בין מוסדות פיננסיים</td>
          <td class="decision-matrix-table__overview">הודעת pacs.028 נשלחת על ידי מוסד פיננסי לבקשת מצב הוראת תשלום שנשלחה בעבר. היא מאפשרת מעקב יזום אחר עיבוד התשלום מבלי להמתין לדוח סטטוס שלא התבקש.</td>
        </tr>
    </tbody>
  </table>
</div>

## נקודות השוואה נפוצות

<div class="comparison-points-table" tabindex="0" aria-label="נקודות השוואה נפוצות">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>השוואה</th>
        <th>הבחנה מרכזית</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">תשלום לקוח מול תנועת מוסד או כיסוי</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">החזרה מצד המקבל מול היפוך מצד השולח</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">דוח סטטוס מול בקשת סטטוס</td>
        </tr>
    </tbody>
  </table>
</div>

## עמודי הודעות נתמכים

- [`pacs.002.001.12`](/he/pacs.002.001.12/) — דוח סטטוס תשלום בין מוסדות פיננסיים
- [`pacs.003.001.09`](/he/pacs.003.001.09/) — חיוב ישיר ללקוח בין מוסדות פיננסיים
- [`pacs.004.001.11`](/he/pacs.004.001.11/) — החזר תשלום
- [`pacs.007.001.11`](/he/pacs.007.001.11/) — היפוך תשלום בין מוסדות פיננסיים
- [`pacs.008.001.13`](/he/pacs.008.001.13/) — העברת אשראי ללקוח בין מוסדות פיננסיים
- [`pacs.009.001.10`](/he/pacs.009.001.10/) — העברת אשראי בין מוסדות פיננסיים
- [`pacs.010.001.05`](/he/pacs.010.001.05/) — חיוב ישיר בין מוסדות פיננסיים
- [`pacs.028.001.05`](/he/pacs.028.001.05/) — בקשת סטטוס תשלום בין מוסדות פיננסיים

