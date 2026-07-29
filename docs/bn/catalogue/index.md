---
title: "বার্তা ও নিয়মের তালিকা | pacs008"
description: "কভারেজ প্যাকেজে থাকা টেমপ্লেট প্রতিফলিত করে, তাই এটি সফটওয়্যারের চেয়ে বেশি দাবি করতে পারে না।"
lang: bn-BD
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /bn/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# বার্তা ও নিয়মের তালিকা

pacs008 রেজিস্ট্রি থেকে উৎপন্ন, নিয়ম-সেট `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
কভারেজ প্যাকেজে থাকা টেমপ্লেট প্রতিফলিত করে, তাই এটি সফটওয়্যারের চেয়ে বেশি দাবি করতে পারে না।

## বার্তা পরিবার

| পরিবার | নাম | সংস্করণ | সংখ্যা | প্রযোজ্য নিয়ম |
|---|---|---|---|---|
| [`pacs.008`](/bn/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/bn/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/bn/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/bn/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/bn/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/bn/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/bn/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/bn/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### বাস্তবায়িত নয়

এগুলো তালিকাভুক্ত করা হয়েছে কারণ এদের অনুপস্থিতি ধরে নেওয়া সহজ।

| পরিবার | অবস্থা | নোট |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## স্কিম প্রোফাইল

| প্রোফাইল | নাম | অবস্থা | কার্যকর |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## নিয়ম

প্রতিটি নিয়মের একটি স্থিতিশীল শনাক্তকারী আছে যা ছোট রিলিজে বদলায় না। ফলাফল বদলালে নতুন নিয়ম-সেট সংস্করণ লাগে।

*নিয়মের সারসংক্ষেপ ও সংশোধন পাঠ ইংরেজিতে দেখানো হয়: এগুলো নিয়মের বিধিবদ্ধ বিষয়বস্তু, প্রতিটি ইন্টারফেস শনাক্তকারী দিয়ে উল্লেখ করে।*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| প্রোফাইল | cbpr-plus |
| স্তর | scheme |
| গুরুত্ব | error |
| কার্যকর তারিখ | 2026-11-14 |
| বার্তা | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| পথ | `{party}/PstlAdr` |
| সূত্র | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (উত্তীর্ণ) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (উত্তীর্ণ) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (ব্যর্থ) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**সংশোধন.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| প্রোফাইল | cbpr-plus |
| স্তর | scheme |
| গুরুত্ব | error |
| কার্যকর তারিখ | 2026-11-14 |
| বার্তা | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| পথ | `{party}/PstlAdr/TwnNm` |
| সূত্র | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (উত্তীর্ণ) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (ব্যর্থ) |

Town Name must be carried in TwnNm, not in an address line.

**সংশোধন.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| প্রোফাইল | cbpr-plus |
| স্তর | scheme |
| গুরুত্ব | error |
| কার্যকর তারিখ | 2026-11-14 |
| বার্তা | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| পথ | `{party}/PstlAdr/Ctry` |
| সূত্র | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (উত্তীর্ণ) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (ব্যর্থ) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**সংশোধন.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| প্রোফাইল | cbpr-plus |
| স্তর | scheme |
| গুরুত্ব | info |
| কার্যকর তারিখ | 2025-11-22 |
| বার্তা | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| পথ | `{party}/PstlAdr` |
| সূত্র | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (উত্তীর্ণ) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**সংশোধন.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| প্রোফাইল | cbpr-plus |
| স্তর | scheme |
| গুরুত্ব | info |
| কার্যকর তারিখ | 2026-11-14 |
| বার্তা | `pacs.008`, `pacs.009` |
| পথ | `{agent}/FinInstnId/BICFI` |
| সূত্র | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (উত্তীর্ণ) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**সংশোধন.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| প্রোফাইল | cbpr-plus |
| স্তর | scheme |
| গুরুত্ব | info |
| কার্যকর তারিখ | 2026-11-14 |
| বার্তা | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| পথ | — |
| সূত্র | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**সংশোধন.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| প্রোফাইল | chaps-uk |
| স্তর | scheme |
| গুরুত্ব | error |
| কার্যকর তারিখ | 2026-11-14 |
| বার্তা | `pacs.008`, `pacs.009` |
| পথ | `{party}/PstlAdr` |
| সূত্র | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (উত্তীর্ণ) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (ব্যর্থ) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**সংশোধন.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **ঘোষিত, এখনও প্রযোজ্য নয়**

| | |
|---|---|
| প্রোফাইল | chaps-uk |
| স্তর | scheme |
| গুরুত্ব | error |
| কার্যকর তারিখ | 2027-11-01 |
| বার্তা | `pacs.008`, `pacs.009` |
| পথ | `CdtTrfTxInf/Purp/Cd` |
| সূত্র | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**সংশোধন.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **ঘোষিত, এখনও প্রযোজ্য নয়**

| | |
|---|---|
| প্রোফাইল | chaps-uk |
| স্তর | scheme |
| গুরুত্ব | error |
| কার্যকর তারিখ | 2027-11-01 |
| বার্তা | `pacs.008` |
| পথ | `CdtTrfTxInf/RmtInf/Strd` |
| সূত্র | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), যাচাইকৃত 2026-07-28 |
| পরীক্ষার ফাইল | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**সংশোধন.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## সূত্র

| সূত্র | প্রকাশক | নথি | কার্যকর | যাচাইকৃত |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022 স্বীকৃতি

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

এই পৃষ্ঠার বার্তা সংজ্ঞা ও শনাক্তকারী ISO 20022 উপকরণ থেকে নেওয়া, ব্যবহৃত হয়েছে এর আওতায়: [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
