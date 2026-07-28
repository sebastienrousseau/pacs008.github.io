---
title: "מועד אחרון לכתובת מובנית נובמבר 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: he-IL
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "לבצע ביקורת על איכות נתוני הכתובות הנוכחיים ברשומות חייב, נושה וסוכן."
  - name: "Step 2"
    text: "למפות שדות כתובת לא מובנים קיימים לפורמט המובנה (רחוב, בניין, מיקוד, עיר, מדינה)."
  - name: "Step 3"
    text: "להוסיף אימות כתובת לצינור קדם-היצירה באמצעות pacs008."
  - name: "Step 4"
    text: "לבדוק עם נתוני תשלום מייצגים לפני המועד האחרון."
---

# מועד אחרון לכתובת מובנית נובמבר 2026

SWIFT דורש כתובות דואר מובנות בהודעות תשלום חוצות גבולות החל מנובמבר 2026. מה משתנה, אילו הודעות מושפעות וכיצד pacs008 עוזר לצוותים להתכונן.

## מה משתנה

זו דרישת מינימום, לא מקסימום. החל מ-14 בנובמבר 2026 על צד רלוונטי לציין את העיר בשדה TwnNm ואת המדינה בשדה Ctry כקוד ISO 3166 בן שתי אותיות. רחוב, מספר בניין ומיקוד יכולים להישאר בשורות הכתובת: זו כתובת היברידית והיא מתקבלת. מבוטלת רק הכתובת הבלתי מובנית לחלוטין — כלומר כל הכתובת כטקסט חופשי ללא עיר ומדינה מובנות. מוסדות המזוהים באמצעות BIC בלבד אינם מושפעים.

## למה זה חשוב

- כתובות לא מובנות מגדילות את שיעורי התיקון הידני ומעכבות עיבוד ישיר.
- כתובות מובנות משפרות את דיוק סינון הסנקציות על ידי הפרדת שם הצד מנתוני המיקום.
- דרישות רגולטוריות ודרישות סכמה מחייבות יותר ויותר נתונים מובנים לציות ודיווח.
- שיעורי דחיית תשלומים חוצי גבולות עולים כאשר איכות הכתובת אינה עומדת בציפיות הצד הנגדי.

## אילו הודעות מושפעות

- **pacs.008** — כתובות דואר של החייב והנושה בהעברות אשראי ללקוחות.
- **pacs.009** — כתובות מוסדות בהעברות אשראי בין מוסדות פיננסיים ותשלומי כיסוי.
- **pacs.004** — כתובות צדדים בהחזרי תשלומים.
- **pacs.003** — כתובות נושה וחייב בחיובים ישירים של לקוחות.

## כיצד pacs008 עוזר

- מאמת שדות כתובת דואר מובנים והיברידיים לפני יצירת XML.
- מסמן נתוני כתובת לא מובנים שייכשלו לאחר המועד האחרון.
- תומך הן בפורמטים היברידיים לפני המועד האחרון והן בפורמטים מובנים בלבד לאחריו.
- משלב בדיקות איכות כתובת בצינורות CI ובתהליכי אימות אצווה.

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## ציר זמן

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

## מה לעשות עכשיו

- לבצע ביקורת על איכות נתוני הכתובות הנוכחיים ברשומות חייב, נושה וסוכן.
- למפות שדות כתובת לא מובנים קיימים לפורמט המובנה (רחוב, בניין, מיקוד, עיר, מדינה).
- להוסיף אימות כתובת לצינור קדם-היצירה באמצעות pacs008.
- לבדוק עם נתוני תשלום מייצגים לפני המועד האחרון.

## הפניות

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

