---
title: סוגי הודעות | עברית
description: הגדרות וגרסאות הודעות pacs נתמכות לפי ISO 20022.
lang: he-IL
lastUpdated: true
image: /logo.svg
---

# סוגי הודעות

pacs008 מכסה את הגדרת ההודעה המרכזית pacs.008 והודעות קשורות המשמשות בתהליכי תיאום והתאמה.

## תמיכה כלולה

| סוג הודעה | תיאור |
|---|---|
| [`pacs.002.001.12`](/he/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/he/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/he/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/he/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/he/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/he/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/he/pacs.028.001.05/) | FI to FI Payment Status Request |

## מודל אספקה

כל סוג הודעה נתמך מגובה בנכסי תבניות ולוגיקת אימות כדי שצוותים יוכלו לתקנן יצירה ובדיקות רגרסיה.

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

