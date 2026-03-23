---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.
lang: he-IL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **שם ISO** | FinancialInstitutionCreditTransferV10 |
| **סטטוס רישום** | Registered |
| **שנה** | 2019 |
| **גרסה** | 10 |

## סקירה

הודעת pacs.009 משמשת להעברות זכות בין מוסדות פיננסיים כאשר ההעברה מבוצעת בשם המוסד עצמו ולא בשם לקוח. היא תומכת במימון בין-בנקאי, תשלומי כיסוי וניהול נזילות.

> נבדק לאחרונה מול מקורות ראשיים ב-23 במרץ 2026. תאריך הייחוס של קטלוג ISO 20022: 27 February 2025; קישורי המקורות מופיעים למטה.

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

| אלמנטי נתונים מרכזיים | הקשר עסקי |
|---|---|
| **GrpHdr** — כותרת קבוצה עם זיהוי הודעה ומידע סליקה | משמשת להעברות בין בנקים בחשבון עצמי ותשלומי כיסוי |
| **CdtTrfTxInf** — מידע עסקת העברת זכות עם סכום סליקה בין-בנקאי | תומכת בניהול נזילות בין שותפי בנקאות קורספונדנטית |
| **Dbtr / DbtrAgt** — זיהוי מוסד החייב וסוכנו | נושאת את רגל הכיסוי של העברות זכות לקוח המסולקות בשיטת כיסוי |
| **Cdtr / CdtrAgt** — זיהוי מוסד הנושה וסוכנו | מאפשרת פעולות אוצר ומימון בין מוסדות פיננסיים |
| **IntrBkSttlmAmt** — סכום סליקה בין-בנקאי במטבע הסליקה | מוסד החייב שולח pacs.009 למוסד הנושה להעברת כספיו. לתשלומי שיטת כיסוי, pacs.009 מספקת את רגל המימון בעוד pacs.008 נושאת את הוראת הלקוח בנתיב נפרד. |

## הקשר CBPR+ וסכמות

- מחליפה MT202 ו-MT202COV להעברות בין מוסדות
- תהליכי שיטת כיסוי מצמידים pacs.009 להוראת הלקוח הבסיסית pacs.008
- נתוני צד מובנים וזיהוי LEI נדרשים בהדרגה
- SWIFT gpi מכסה pacs.009 לשקיפות בנקאות קורספונדנטית

## זרימת הודעה

מוסד החייב שולח pacs.009 למוסד הנושה להעברת כספיו. לתשלומי שיטת כיסוי, pacs.009 מספקת את רגל המימון בעוד pacs.008 נושאת את הוראת הלקוח בנתיב נפרד.

## מקורות ראשיים

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## הודעות קשורות
| סוג הודעה | תיאור | סקירה |
|---|---|---|
| [`pacs.008.001.13`](/he/pacs.008.001.13/) | FI to FI Customer Credit Transfer | הודעת pacs.008 היא הוראת התשלום המרכזית המוחלפת בין מוסדות פיננסיים להעברת כספים בשם לקוח. היא נושאת מידע על החייב, הנושה, הסכום ופרטי ההעברה עבור עסקת העברת זכות אחת או יותר. |
| [`pacs.002.001.12`](/he/pacs.002.001.12/) | FI to FI Payment Status Report | הודעת pacs.002 נשלחת על ידי מוסד פיננסי לדיווח על מצב הוראת תשלום שנשלחה בעבר. היא מספקת מידע על אישור, דחייה או סטטוס ממתין עבור עסקאות בודדות בתוך הודעת תשלום. |
| [`pacs.010.001.05`](/he/pacs.010.001.05/) | Financial Institution Direct Debit | הודעת pacs.010 משמשת בין מוסדות פיננסיים לעסקאות חיוב ישיר בחשבון המוסד עצמו. היא מאפשרת למוסד אחד לגבות כספים ישירות מחשבון מוסד אחר. |

