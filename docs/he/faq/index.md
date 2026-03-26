---
title: "שאלות נפוצות על ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# שאלות נפוצות על ISO 20022

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## כללי

### מהו ISO 20022?

ISO 20022 הוא תקן בינלאומי להודעות פיננסיות. הוא מגדיר שפה ומודל משותפים להודעות תשלום המוחלפות בין מוסדות פיננסיים. משתמש ב-XML ותומך בנתונים עשירים ומובנים יותר.

### מהן הודעות pacs?

משפחת הודעות pacs מכסה הוראות תשלום בין-בנקאיות, דוחות סטטוס, החזרות, ביטולים ובירורים. כוללת pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 ו-pacs.028.

## בחירת הודעה

### מתי להשתמש ב-pacs.008?

השתמש ב-pacs.008 להוראות העברת אשראי של לקוחות בין בנקים. נושא נתוני צד חייב וזכאי, סכומים, מידע הפקדה ופרטי סליקה.

## מבנה ההודעה

### מהו כותרת הקבוצה (GrpHdr)?

כותרת הקבוצה מופיעה פעם אחת לכל הודעת pacs. מכילה MsgId, CreDtTm, NbOfTxs ו-SttlmInf.

## CBPR+ והגירה

### מהו CBPR+?

CBPR+ הוא תוכנית SWIFT לאימוץ ISO 20022 בהודעות תשלום חוצות גבולות. נכנס לפעולה במרץ 2023.

## פרטים טכניים

### מהו UETR וכיצד פועל מעקב gpi?

UETR הוא מזהה UUID v4 שנוצר על ידי סוכן החייב ונישא ללא שינוי בכל חלקי התשלום למעקב gpi.

## אודות ערכת הכלים pacs008

### מה עושה pacs008?

pacs008 היא ערכת כלים ב-Python שמייצרת, מאמתת ושולחת הודעות תשלום ISO 20022.

## הפניות

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

