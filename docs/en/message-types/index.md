---
title: Message Types | English
description: Supported ISO 20022 pacs message definitions and versions.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# Message Types

Pacs008 covers the core pacs.008 message definition and related messages used in orchestration and reconciliation flows.

## Included support

- `pacs.002.001.12`
- `pacs.003.001.09`
- `pacs.004.001.11`
- `pacs.007.001.11`
- `pacs.008.001.01`
- `pacs.008.001.02`
- `pacs.008.001.03`
- `pacs.008.001.04`
- `pacs.008.001.05`
- `pacs.008.001.06`
- `pacs.008.001.07`
- `pacs.008.001.08`
- `pacs.008.001.09`
- `pacs.008.001.10`
- `pacs.008.001.11`
- `pacs.008.001.12`
- `pacs.008.001.13`
- `pacs.009.001.10`
- `pacs.010.001.05`
- `pacs.028.001.05`

## Delivery model

Each supported message type is backed by template assets and validation logic so teams can standardise generation and regression testing across multiple downstream channels.

## 2026 market context

- **SEPA SCT / SCT Inst**: pacs.008 remains central for credit transfer exchange and instant-payment processing.
- **CBPR+**: pacs.008 continues to replace MT103-style cross-border payloads with richer structured data.
- **Structured addresses**: current market guidance and bank readiness material point to the November 2026 cutover away from fully unstructured postal addresses.
- **Serial method and STP**: multi-leg bank-to-bank chains still matter, and straight-through variants remain important for operational efficiency.

## Operational capabilities

Pacs008 provides template-backed generation and validation across supported message definition revisions:

- compare versions
- regression-test scheme updates
- strengthen outbound payment message data before release
- support product, operations, and migration teams from one codebase

