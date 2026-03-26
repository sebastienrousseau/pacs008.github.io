---
title: "편집 방침 | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: ko-KR
lastUpdated: true
image: /logo.webp
---

# 편집 방침

This page explains how content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions) for message specifications and version history.
- [SWIFT CBPR+ usage guidelines](https://www.swift.com/standards/iso-20022) for cross-border payment context.
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) for euro credit transfer rules.
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) for instant payment rules.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
