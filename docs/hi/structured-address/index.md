---
title: "संरचित पता समय-सीमा नवंबर 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: hi-IN
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
    text: "देनदार, लेनदार और एजेंट रिकॉर्ड में वर्तमान पता डेटा गुणवत्ता का ऑडिट करें।"
  - name: "Step 2"
    text: "मौजूदा असंरचित पता फ़ील्ड को संरचित प्रारूप में मैप करें (सड़क, भवन, पिन कोड, शहर, देश)।"
  - name: "Step 3"
    text: "pacs008 का उपयोग करके प्री-जनरेशन पाइपलाइन में पता सत्यापन जोड़ें।"
  - name: "Step 4"
    text: "समय सीमा से पहले प्रतिनिधि भुगतान डेटा के साथ परीक्षण करें।"
---

# संरचित पता समय-सीमा नवंबर 2026

SWIFT को नवंबर 2026 से सीमा-पार भुगतान संदेशों में संरचित डाक पते की आवश्यकता है। क्या बदल रहा है, कौन से संदेश प्रभावित हैं, और pacs008 टीमों को तैयार होने में कैसे मदद करता है।

## क्या बदल रहा है

यह न्यूनतम आवश्यकता है, अधिकतम नहीं। 14 नवंबर 2026 से संबंधित पक्ष को शहर TwnNm में और देश Ctry में दो-अक्षरीय ISO 3166 कोड के रूप में देना होगा। सड़क, भवन संख्या और पिन कोड पता पंक्तियों में रह सकते हैं: यह एक हाइब्रिड पता है और यह स्वीकार्य है। केवल पूर्णतः असंरचित पता हटाया जा रहा है — अर्थात पूरा पता मुक्त पाठ में, बिना संरचित शहर और देश के। केवल BIC से पहचाने जाने वाले संस्थान इससे प्रभावित नहीं होते।

## यह क्यों महत्वपूर्ण है

- असंरचित पते मैनुअल मरम्मत दरों को बढ़ाते हैं और सीधे प्रसंस्करण में देरी करते हैं।
- संरचित पते पक्ष के नाम को स्थान डेटा से अलग करके प्रतिबंध जांच सटीकता में सुधार करते हैं।
- नियामक और योजना आवश्यकताएं अनुपालन और रिपोर्टिंग के लिए संरचित डेटा को तेजी से अनिवार्य बना रही हैं।
- जब पते की गुणवत्ता प्रतिपक्ष अपेक्षाओं को पूरा नहीं करती, तो सीमा-पार भुगतान अस्वीकृति दरें बढ़ती हैं।

## कौन से संदेश प्रभावित हैं

- **pacs.008** — ग्राहक क्रेडिट ट्रांसफर में देनदार और लेनदार के डाक पते।
- **pacs.009** — वित्तीय संस्थान क्रेडिट ट्रांसफर और कवर भुगतानों में संस्था के पते।
- **pacs.004** — भुगतान वापसी में पक्षों के पते।
- **pacs.003** — ग्राहक प्रत्यक्ष डेबिट में लेनदार और देनदार के पते।

## pacs008 कैसे मदद करता है

- XML जनरेशन से पहले संरचित और हाइब्रिड डाक पता फ़ील्ड को मान्य करता है।
- असंरचित पता डेटा को चिह्नित करता है जो समय सीमा के बाद विफल हो जाएगा।
- समय सीमा से पहले के हाइब्रिड प्रारूपों और समय सीमा के बाद के केवल-संरचित प्रारूपों दोनों का समर्थन करता है।
- CI पाइपलाइनों और बैच सत्यापन वर्कफ़्लो में पता गुणवत्ता जांच को एकीकृत करता है।

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

## समयरेखा

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

## अब क्या करें

- देनदार, लेनदार और एजेंट रिकॉर्ड में वर्तमान पता डेटा गुणवत्ता का ऑडिट करें।
- मौजूदा असंरचित पता फ़ील्ड को संरचित प्रारूप में मैप करें (सड़क, भवन, पिन कोड, शहर, देश)।
- pacs008 का उपयोग करके प्री-जनरेशन पाइपलाइन में पता सत्यापन जोड़ें।
- समय सीमा से पहले प्रतिनिधि भुगतान डेटा के साथ परीक्षण करें।

## संदर्भ

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

