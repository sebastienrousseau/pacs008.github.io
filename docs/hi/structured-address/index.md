---
title: "November 2026 structured-address deadline | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: hi-IN
lastUpdated: true
image: /logo.svg
howtoName: "नवंबर 2026 संरचित डाक पता समय सीमा के लिए कैसे तैयारी करें"
howtoDescription: "SWIFT CBPR+ नवंबर 2026 की समय सीमा से पहले डाक पता डेटा का ऑडिट, मैपिंग, सत्यापन और परीक्षण करने के चरण।"
howto:
  - name: "चरण 1"
    text: "देनदार, लेनदार और एजेंट रिकॉर्ड में वर्तमान पता डेटा गुणवत्ता का ऑडिट करें।"
  - name: "चरण 2"
    text: "मौजूदा असंरचित पता फ़ील्ड को संरचित प्रारूप में मैप करें (सड़क, भवन, पिन कोड, शहर, देश)।"
  - name: "चरण 3"
    text: "pacs008 का उपयोग करके अपनी प्री-जेनरेशन पाइपलाइन में पता सत्यापन जोड़ें।"
  - name: "चरण 4"
    text: "समय सीमा से पहले प्रतिनिधि भुगतान डेटा के साथ परीक्षण करें।"
---

# November 2026 structured-address deadline

SWIFT requires structured postal addresses in cross-border payment messages from November 2026. This page explains what changes, which messages are affected, and how pacs008 helps teams prepare.

## What is changing

SWIFT CBPR+ is moving from unstructured postal addresses to structured address fields in cross-border payment messages. After the November 2026 deadline, key party address fields must use the structured format with separate elements for street name, building number, post code, town, and country.

## Why it matters

- Unstructured addresses increase manual repair rates and delay straight-through processing.
- Structured addresses improve sanctions screening accuracy by separating party name from location data.
- Regulatory and scheme requirements increasingly mandate structured data for compliance and reporting.
- Cross-border payment rejection rates rise when address quality does not meet counterparty expectations.

## Which messages are affected

- **pacs.008** — debtor and creditor postal addresses in customer credit transfers.
- **pacs.009** — institution addresses in financial institution credit transfers and cover payments.
- **pacs.004** — party addresses in payment returns.
- **pacs.003** — creditor and debtor addresses in customer direct debits.

## How pacs008 helps

- Validates structured and hybrid postal address fields before XML generation.
- Flags unstructured address data that would fail after the deadline.
- Supports both pre-deadline hybrid formats and post-deadline structured-only formats.
- Integrates address quality checks into CI pipelines and batch validation workflows.

## Timeline

- **March 2023** — SWIFT CBPR+ goes live with ISO 20022 for cross-border payments.
- **November 2025** — coexistence period for MT and MX payment instructions ends.
- **November 2026** — structured postal address requirement takes effect for CBPR+ messages.

## What to do now

- Audit current address data quality across debtor, creditor, and agent records.
- Map existing unstructured address fields to the structured format (street, building, post code, town, country).
- Add address validation to your pre-generation pipeline using pacs008.
- Test with representative payment data before the deadline.

## References

- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

