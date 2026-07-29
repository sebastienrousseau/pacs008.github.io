---
title: "স্কিম পরিবর্তনের তালিকা | pacs008"
description: "বার্তা গৃহীত হবে কি না তা নির্ধারণকারী প্রতিটি নিয়ম পরিবর্তন, কার্যকর তারিখ অনুযায়ী গোষ্ঠীবদ্ধ।"
lang: bn-BD
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /bn/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# স্কিম পরিবর্তনের তালিকা

বার্তা গৃহীত হবে কি না তা নির্ধারণকারী প্রতিটি নিয়ম পরিবর্তন, কার্যকর তারিখ অনুযায়ী গোষ্ঠীবদ্ধ।

নিয়ম রেজিস্ট্রি থেকে উৎপন্ন, নিয়ম-সেট `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

নভেম্বর ২০২৬ থেকে Swift বার্ষিক Standards Release চক্রে যাচ্ছে, তাই এই তালিকা সময়সীমায় শেষ না হয়ে প্রতি বছর বাড়বে।

সাবস্ক্রাইব: [Atom feed](/scheme-changes.xml).

## নিয়ম-সেট সংস্করণ

নিয়মের শনাক্তকারী ছোট রিলিজে স্থিতিশীল থাকে। কোনো নিয়মের ফলাফল বদলালে নতুন সেট সংস্করণ দরকার, যাতে রিপোর্ট পুনরুৎপাদনযোগ্য থাকে।

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


## নিয়ম-সেট কীভাবে স্থির করবেন

যাচাই রিপোর্টে সেটের সংস্করণ ও হ্যাশ লেখা থাকে। অসঙ্গতি জানানোর সময় দুটোই উল্লেখ করুন, যাতে সঠিক সেট পুনর্গঠন করা যায়।
