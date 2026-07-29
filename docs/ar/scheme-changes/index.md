---
title: "سجل تغييرات المخططات | pacs008"
description: "كل تغيير في قاعدة يحدد قبول الرسالة من عدمه، مجمَّعًا حسب تاريخ السريان."
lang: ar-SA
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ar/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# سجل تغييرات المخططات

كل تغيير في قاعدة يحدد قبول الرسالة من عدمه، مجمَّعًا حسب تاريخ السريان.

مُولَّد من سجل القواعد، مجموعة القواعد `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

اعتبارًا من نوفمبر 2026 تنتقل Swift إلى دورة سنوية لإصدار المعايير، لذا ستنمو هذه القائمة سنويًا بدل أن تنتهي عند الموعد النهائي.

اشترك: [Atom feed](/scheme-changes.xml).

## إصدارات مجموعة القواعد

معرّفات القواعد ثابتة عبر الإصدارات الفرعية. أي تغيير في نتيجة قاعدة يستلزم إصدارًا جديدًا للمجموعة، كي يظل التقرير قابلًا لإعادة الإنتاج.

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


## كيفية تثبيت مجموعة قواعد

تسجّل تقارير التحقق إصدار المجموعة وبصمتها. اذكرهما معًا عند الإبلاغ عن تباين، لإعادة بناء المجموعة بدقة.
