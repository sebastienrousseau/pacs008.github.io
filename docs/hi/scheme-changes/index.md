---
title: "स्कीम परिवर्तन लॉग | pacs008"
description: "संदेश स्वीकार होगा या नहीं, यह तय करने वाला प्रत्येक नियम परिवर्तन, प्रभावी तिथि के अनुसार समूहित।"
lang: hi-IN
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /hi/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# स्कीम परिवर्तन लॉग

संदेश स्वीकार होगा या नहीं, यह तय करने वाला प्रत्येक नियम परिवर्तन, प्रभावी तिथि के अनुसार समूहित।

नियम रजिस्ट्री से उत्पन्न, नियम-सेट `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

नवंबर 2026 से Swift वार्षिक Standards Release चक्र अपनाता है, इसलिए यह सूची समय-सीमा पर समाप्त होने के बजाय हर वर्ष बढ़ेगी।

सदस्यता लें: [Atom feed](/scheme-changes.xml).

## नियम-सेट संस्करण

नियम पहचानकर्ता छोटे रिलीज़ों में स्थिर रहते हैं। किसी नियम के परिणाम में बदलाव के लिए नया नियम-सेट संस्करण आवश्यक है, ताकि रिपोर्ट पुनरुत्पाद्य बनी रहे।

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


## नियम-सेट कैसे स्थिर करें

सत्यापन रिपोर्ट नियम-सेट संस्करण और हैश दर्ज करती हैं। विसंगति बताते समय दोनों उद्धृत करें, ताकि सटीक सेट पुनर्निर्मित हो सके।
