---
title: "יומן שינויי סכמות | pacs008"
description: "כל שינוי כלל שקובע אם הודעה מתקבלת, מקובץ לפי מועד תחילה."
lang: he-IL
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /he/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# יומן שינויי סכמות

כל שינוי כלל שקובע אם הודעה מתקבלת, מקובץ לפי מועד תחילה.

נוצר ממרשם הכללים, מערך כללים `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

מנובמבר 2026 עוברת Swift למחזור שנתי של Standards Release, ולכן הרשימה תגדל מדי שנה במקום להסתיים במועד היעד.

הרשמה: [Atom feed](/scheme-changes.xml).

## ניהול גרסאות של מערך הכללים

מזהי כללים יציבים בין גרסאות משנה. שינוי בתוצאת כלל מחייב גרסת מערך חדשה, כך שדוח יישאר ניתן לשחזור.

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## כיצד לקבע מערך כללים

דוחות אימות מתעדים את גרסת המערך ואת הטביעה. ציינו את שניהם בעת דיווח על פער, כדי לשחזר את המערך המדויק.
