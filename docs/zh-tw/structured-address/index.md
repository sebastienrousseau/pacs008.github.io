---
title: "November 2026 structured-address deadline | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: zh-TW
lastUpdated: true
image: /logo.svg
howtoName: "如何為2026年11月結構化郵政地址截止日期做準備"
howtoDescription: "在 SWIFT CBPR+ 2026年11月截止日期之前審計、映射、驗證和測試郵政地址資料的步驟。"
howto:
  - name: "步驟 1"
    text: "審計債務人、債權人和代理人記錄中當前地址資料的品質。"
  - name: "步驟 2"
    text: "將現有非結構化地址欄位映射到結構化格式（街道、建築、郵遞區號、城鎮、國家）。"
  - name: "步驟 3"
    text: "使用 pacs008 將地址驗證新增到您的預生成管線中。"
  - name: "步驟 4"
    text: "在截止日期前使用代表性支付資料進行測試。"
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

