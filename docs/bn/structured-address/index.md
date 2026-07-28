---
title: "নভেম্বর 2026 কাঠামোগত ঠিকানার সময়সীমা | pacs008"
description: SWIFT CBPR+ নভেম্বর 2026 কাঠামোগত ডাক ঠিকানার সময়সীমা কীভাবে pacs.008 এবং সম্পর্কিত পেমেন্ট বার্তাগুলিকে প্রভাবিত করে এবং pacs008 কীভাবে দলগুলিকে মেনে...
lang: bn-BD
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
    text: "ঋণগ্রহীতা, ঋণদাতা এবং এজেন্ট রেকর্ড জুড়ে বর্তমান ঠিকানা ডেটা মান নিরীক্ষা করুন।"
  - name: "Step 2"
    text: "বিদ্যমান অকাঠামোগত ঠিকানা ক্ষেত্রগুলি কাঠামোগত বিন্যাসে ম্যাপ করুন (রাস্তা, ভবন, পোস্ট কোড, শহর, দেশ)।"
  - name: "Step 3"
    text: "pacs008 ব্যবহার করে প্রি-জেনারেশন পাইপলাইনে ঠিকানা যাচাইকরণ যোগ করুন।"
  - name: "Step 4"
    text: "সময়সীমার আগে প্রতিনিধিত্বমূলক পেমেন্ট ডেটা দিয়ে পরীক্ষা করুন।"
---

# নভেম্বর 2026 কাঠামোগত ঠিকানার সময়সীমা

SWIFT ২০২৬ সালের নভেম্বর থেকে সীমান্ত-পার পেমেন্ট বার্তায় কাঠামোগত ডাক ঠিকানা বাধ্যতামূলক করছে। কী পরিবর্তন হচ্ছে, কোন বার্তাগুলি প্রভাবিত এবং pacs008 কীভাবে দলগুলিকে প্রস্তুত হতে সাহায্য করে।

## কী পরিবর্তন হচ্ছে

এটি সর্বনিম্ন প্রয়োজনীয়তা, সর্বোচ্চ নয়। ১৪ নভেম্বর ২০২৬ থেকে সংশ্লিষ্ট পক্ষকে শহর TwnNm-এ এবং দেশ Ctry-তে দুই-অক্ষরের ISO 3166 কোড হিসেবে দিতে হবে। রাস্তা, ভবন নম্বর ও পোস্ট কোড ঠিকানার লাইনে থাকতে পারে: এটি একটি হাইব্রিড ঠিকানা এবং এটি গ্রহণযোগ্য। কেবল সম্পূর্ণ অসংগঠিত ঠিকানা বাদ দেওয়া হচ্ছে — অর্থাৎ সম্পূর্ণ ঠিকানা মুক্ত পাঠ্যে, সংগঠিত শহর ও দেশ ছাড়া। কেবল BIC দ্বারা চিহ্নিত প্রতিষ্ঠান এতে প্রভাবিত হয় না।

## কেন এটি গুরুত্বপূর্ণ

- অকাঠামোগত ঠিকানা ম্যানুয়াল মেরামতের হার বাড়ায় এবং সরাসরি প্রক্রিয়াকরণে বিলম্ব ঘটায়।
- কাঠামোগত ঠিকানা পক্ষের নাম থেকে অবস্থান ডেটা আলাদা করে নিষেধাজ্ঞা স্ক্রিনিং নির্ভুলতা উন্নত করে।
- নিয়ন্ত্রক এবং স্কিম প্রয়োজনীয়তা সম্মতি এবং রিপোর্টিংয়ের জন্য ক্রমবর্ধমানভাবে কাঠামোগত ডেটা বাধ্যতামূলক করছে।
- ঠিকানার মান প্রতিপক্ষের প্রত্যাশা পূরণ না করলে সীমান্ত-পার পেমেন্ট প্রত্যাখ্যানের হার বৃদ্ধি পায়।

## কোন বার্তাগুলি প্রভাবিত

- **pacs.008** — গ্রাহক ক্রেডিট ট্রান্সফারে ঋণগ্রহীতা এবং ঋণদাতার ডাক ঠিকানা।
- **pacs.009** — আর্থিক প্রতিষ্ঠান ক্রেডিট ট্রান্সফার এবং কভার পেমেন্টে প্রতিষ্ঠানের ঠিকানা।
- **pacs.004** — পেমেন্ট রিটার্নে পক্ষের ঠিকানা।
- **pacs.003** — গ্রাহক সরাসরি ডেবিটে ঋণদাতা এবং ঋণগ্রহীতার ঠিকানা।

## pacs008 কীভাবে সাহায্য করে

- XML তৈরির আগে কাঠামোগত এবং হাইব্রিড ডাক ঠিকানা ক্ষেত্র যাচাই করে।
- সময়সীমার পরে ব্যর্থ হবে এমন অকাঠামোগত ঠিকানা ডেটা চিহ্নিত করে।
- সময়সীমার আগের হাইব্রিড বিন্যাস এবং সময়সীমার পরের শুধুমাত্র-কাঠামোগত বিন্যাস উভয়ই সমর্থন করে।
- CI পাইপলাইন এবং ব্যাচ যাচাইকরণ ওয়ার্কফ্লোতে ঠিকানা মান পরীক্ষা সংহত করে।

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

## সময়রেখা

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

## এখন কী করতে হবে

- ঋণগ্রহীতা, ঋণদাতা এবং এজেন্ট রেকর্ড জুড়ে বর্তমান ঠিকানা ডেটা মান নিরীক্ষা করুন।
- বিদ্যমান অকাঠামোগত ঠিকানা ক্ষেত্রগুলি কাঠামোগত বিন্যাসে ম্যাপ করুন (রাস্তা, ভবন, পোস্ট কোড, শহর, দেশ)।
- pacs008 ব্যবহার করে প্রি-জেনারেশন পাইপলাইনে ঠিকানা যাচাইকরণ যোগ করুন।
- সময়সীমার আগে প্রতিনিধিত্বমূলক পেমেন্ট ডেটা দিয়ে পরীক্ষা করুন।

## তথ্যসূত্র

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

