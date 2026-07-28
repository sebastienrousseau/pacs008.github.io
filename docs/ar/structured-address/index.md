---
title: "الموعد النهائي للعنوان المهيكل نوفمبر 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ar-SA
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
    text: "تدقيق جودة بيانات العناوين الحالية عبر سجلات المدين والدائن والوكيل."
  - name: "Step 2"
    text: "تعيين حقول العناوين غير المهيكلة الحالية إلى التنسيق المهيكل (الشارع، المبنى، الرمز البريدي، المدينة، البلد)."
  - name: "Step 3"
    text: "إضافة التحقق من العنوان إلى خط أنابيب ما قبل الإنشاء باستخدام pacs008."
  - name: "Step 4"
    text: "الاختبار ببيانات دفع تمثيلية قبل الموعد النهائي."
---

# الموعد النهائي للعنوان المهيكل نوفمبر 2026

يتطلب SWIFT عناوين بريدية مهيكلة في رسائل الدفع عبر الحدود اعتبارًا من نوفمبر 2026. ما الذي يتغير، وما الرسائل المتأثرة، وكيف يساعد pacs008 الفرق في الاستعداد.

## ما الذي يتغير

ينتقل SWIFT CBPR+ من العناوين البريدية غير المهيكلة إلى حقول عنوان مهيكلة في رسائل الدفع عبر الحدود. بعد الموعد النهائي في نوفمبر 2026، يجب أن تستخدم حقول عناوين الأطراف الرئيسية التنسيق المهيكل مع عناصر منفصلة لاسم الشارع ورقم المبنى والرمز البريدي والمدينة والبلد.

## لماذا هذا مهم

- تزيد العناوين غير المهيكلة من معدلات الإصلاح اليدوي وتؤخر المعالجة المباشرة.
- تُحسّن العناوين المهيكلة دقة فحص العقوبات من خلال فصل اسم الطرف عن بيانات الموقع.
- تفرض المتطلبات التنظيمية ومتطلبات الأنظمة بشكل متزايد بيانات مهيكلة للامتثال وإعداد التقارير.
- ترتفع معدلات رفض المدفوعات عبر الحدود عندما لا تلبي جودة العناوين توقعات الأطراف المقابلة.

## ما الرسائل المتأثرة

- **pacs.008** — العناوين البريدية للمدين والدائن في تحويلات ائتمان العملاء.
- **pacs.009** — عناوين المؤسسات في تحويلات الائتمان بين المؤسسات المالية ومدفوعات التغطية.
- **pacs.004** — عناوين الأطراف في مرتجعات الدفع.
- **pacs.003** — عناوين الدائن والمدين في الخصم المباشر للعملاء.

## كيف يساعد pacs008

- يتحقق من صحة حقول العنوان البريدي المهيكلة والمختلطة قبل إنشاء XML.
- يُحدّد بيانات العنوان غير المهيكلة التي ستفشل بعد الموعد النهائي.
- يدعم التنسيقات المختلطة قبل الموعد النهائي والتنسيقات المهيكلة فقط بعد الموعد النهائي.
- يدمج فحوصات جودة العنوان في خطوط أنابيب CI وسير عمل التحقق الدُفعي.

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

## الجدول الزمني

- **مارس 2023** — إطلاق SWIFT CBPR+ مع ISO 20022 للمدفوعات عبر الحدود.
- **نوفمبر 2025** — انتهاء فترة التعايش بين تعليمات الدفع MT و MX.
- **نوفمبر 2026** — دخول متطلبات العنوان البريدي المهيكل حيز التنفيذ لرسائل CBPR+.
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## ما يجب فعله الآن

- تدقيق جودة بيانات العناوين الحالية عبر سجلات المدين والدائن والوكيل.
- تعيين حقول العناوين غير المهيكلة الحالية إلى التنسيق المهيكل (الشارع، المبنى، الرمز البريدي، المدينة، البلد).
- إضافة التحقق من العنوان إلى خط أنابيب ما قبل الإنشاء باستخدام pacs008.
- الاختبار ببيانات دفع تمثيلية قبل الموعد النهائي.

## المراجع

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

