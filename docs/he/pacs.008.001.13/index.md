---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת...
lang: he-IL
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **שם ISO** | FIToFICustomerCreditTransferV13 |
| **סטטוס רישום** | Registered |
| **שנה** | 2023 |
| **גרסה** | 13 |

## סקירה

הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 27 February 2025; קישורי המקורות מופיעים למטה.

## אלמנטי נתונים מרכזיים

- **GrpHdr** — כותרת קבוצה עם מזהה הודעה, תאריך יצירה, מספר עסקאות ומידע סליקה
- **CdtTrfTxInf** — מידע עסקת העברת זכות עם סכום, עמלות ומטרה
- **Dbtr / DbtrAgt** — זיהוי החייב וסוכן החייב ופרטי חשבון
- **Cdtr / CdtrAgt** — זיהוי הנושה וסוכן הנושה ופרטי חשבון
- **RmtInf** — מידע העברה להפניות תשלום מובנות או בלתי מובנות

## הקשר עסקי

- ההודעה העיקרית להעברות זכות חוצות גבולות ומקומיות ביוזמת לקוח
- בשימוש ב-SEPA SCT, SEPA Instant, CBPR+ ומערכות סליקה לאומיות
- נושאת מידע העברה מובנה לתמיכה בהתאמה אוטומטית
- תומכת בשיטות סליקה סדרתית, כיסוי וישירה לשרשראות תשלום מרובות רגליים

| אלמנטי נתונים מרכזיים | הקשר עסקי |
|---|---|
| **GrpHdr** — כותרת קבוצה עם מזהה הודעה, תאריך יצירה, מספר עסקאות ומידע סליקה | ההודעה העיקרית להעברות זכות חוצות גבולות ומקומיות ביוזמת לקוח |
| **CdtTrfTxInf** — מידע עסקת העברת זכות עם סכום, עמלות ומטרה | בשימוש ב-SEPA SCT, SEPA Instant, CBPR+ ומערכות סליקה לאומיות |
| **Dbtr / DbtrAgt** — זיהוי החייב וסוכן החייב ופרטי חשבון | נושאת מידע העברה מובנה לתמיכה בהתאמה אוטומטית |
| **Cdtr / CdtrAgt** — זיהוי הנושה וסוכן הנושה ופרטי חשבון | תומכת בשיטות סליקה סדרתית, כיסוי וישירה לשרשראות תשלום מרובות רגליים |
| **RmtInf** — מידע העברה להפניות תשלום מובנות או בלתי מובנות | סוכן החייב יוצר pacs.008 ושולח אותה לסוכן הנושה (ישירות או דרך מתווכים). כל סוכן בשרשרת מאמת, מעשיר ומעביר את ההוראה עד שסוכן הנושה מזכה את חשבון המוטב. |

## הקשר CBPR+ וסכמות

- מחליפה MT103 ו-MT103+ להעברות זכות חוצות גבולות של לקוחות
- מועד אחרון לכתובת מובנית של נובמבר 2026 חל על כל כתובות הדואר של הצדדים
- SWIFT gpi דורש pacs.008 למעקב מקצה לקצה מבוסס UETR
- 13 מהדורות משקפות התפתחות סכמה מתמשכת במשטחי שוק

## זרימת הודעה

סוכן החייב יוצר pacs.008 ושולח אותה לסוכן הנושה (ישירות או דרך מתווכים). כל סוכן בשרשרת מאמת, מעשיר ומעביר את ההוראה עד שסוכן הנושה מזכה את חשבון המוטב.

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## גרסאות נתמכות

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## הודעות קשורות
| סוג הודעה | תיאור | סקירה |
|---|---|---|
| [`pacs.002.001.12`](/he/pacs.002.001.12/) | FI to FI Payment Status Report | הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום. |
| [`pacs.004.001.11`](/he/pacs.004.001.11/) | Payment Return | הודעת pacs.004 משמשת להחזרת עסקת תשלום שנסלקה בעבר. היא הופכת את זרימת הכספים כאשר תשלום אינו ניתן להחלה, נשלח בטעות או מוחזר על ידי המוסד המקורי. |
| [`pacs.009.001.10`](/he/pacs.009.001.10/) | Financial Institution Credit Transfer | הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות. |

