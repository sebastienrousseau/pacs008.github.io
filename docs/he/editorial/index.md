---
title: "מדיניות עריכה | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# מדיניות עריכה

This page explains how content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 קטלוג הגדרות הודעות](https://www.iso20022.org/iso-20022-message-definitions) למפרטי הודעות והיסטוריית גרסאות.
- [SWIFT CBPR+ הנחיות שימוש](https://www.swift.com/standards/iso-20022) להקשר תשלומים חוצי גבולות.
- [EPC SEPA ספר כללי העברת אשראי](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) לכללי העברת אשראי באירו.
- [EPC SEPA ספר כללי העברת אשראי מיידית](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) לכללי תשלום מיידי.

## תהליך סקירת תוכן

כל עמוד ב-pacs008.com עובר סקירה מובנית לפני פרסום. תוכן חדש מתחיל כטיוטה המבוססת על חומרי מקור ראשוניים. הטיוטה נבדקת לדיוק טכני מול קטלוג הודעות ISO 20022 ותיעוד מערכת רלוונטי. מספרי גרסה, מזהי רישום והגדרות שדות מאומתים מול רשומות הקטלוג הרשמי.

לאחר הסקירה הראשונית, התוכן עובר בדיקה מבנית להבטחת עקביות עם עמודים קיימים. ניווט, הפניות צולבות ומינוח מתוקננים ברחבי האתר. תאריך הסקירה המוצג בכל עמוד הודעה משקף את האימות האחרון מול מקורות ראשוניים.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## דיוק טכני

תוכן טכני עוקב אחר הגדרות הודעות ISO 20022 כפי שפורסמו בקטלוג הרשמי. שמות שדות, סוגי נתונים וכללי עוצמה תואמים את סכמות XSD לכל גרסת הודעה. כאשר שימוש ספציפי למערכת שונה מהתקן הבסיסי, תיעוד המערכת הרלוונטי מצוטט ישירות.

דוגמאות קוד בתיעוד API נבדקות מול הגרסה הנוכחית של ערכת הכלים pacs008. פקודות CLI, נקודות קצה API ושיטות ספריית Python משקפות את החבילה המפורסמת ב-PyPI. דוגמאות מתעדכנות עם כל גרסה חדשה לשמירה על סנכרון עם ערכת הכלים.

## מתודולוגיית תרגום

pacs008.com זמין ב-22 שפות. כל התוכן נוצר באנגלית. עמודים מתורגמים נוצרים מחומר המקור האנגלי המסוקר באמצעות סקריפט בנייה השומר על מבנה העמוד, היררכיית כותרות ויעדי קישורים בכל האזורים.

מונחים טכניים, מזהי ISO וקודים תקניים נותרים ללא תרגום למניעת עמימות. מונחים כמו pacs.008.001.13, BIC, IBAN ו-CBPR+ מופיעים בצורתם התקנית בכל שפה. תוכן לא-טכני מתורגם לקריאה טבעית בכל שפת יעד. תרגומים נסקרים לעקביות מבנית ונוצרים מחדש כאשר חומר המקור האנגלי משתנה.

## תדירות עדכונים

תוכן מתעדכן בתגובה לשלושה גורמים. ראשית, כאשר ISO 20022 מפרסם גרסת קטלוג הודעות חדשה המשפיעה על הגדרות הודעות pacs. שנית, כאשר SWIFT מפרסם הנחיות שימוש CBPR+ מעודכנות או מועדי מעבר. שלישית, כאשר EPC מעדכן את ספרי הכללים של העברת אשראי או העברת אשראי מיידית ב-SEPA.

ערכת הכלים pacs008 פועלת לפי גרסאות סמנטיות. כל גרסה חדשה משתקפת בתיעוד API וביומן השינויים. האתר נבנה מחדש ונפרס מחדש עם כל עדכון תוכן או ערכת כלים.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
