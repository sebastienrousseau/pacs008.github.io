---
title: Message Types | English
description: Supported ISO 20022 pacs message definitions and versions.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# Message Types

pacs008 covers the core pacs.008 message definition and related messages used in orchestration and reconciliation flows.

## Included support

| Message type | Description |
|---|---|
| [`pacs.002.001.12`](/en/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/en/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/en/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/en/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/en/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/en/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/en/pacs.028.001.05/) | FI to FI Payment Status Request |

## Delivery model

Each supported message type is backed by template assets and validation logic so teams can standardise generation and regression testing across multiple downstream channels.

## 2026 market context

- **SEPA SCT / SCT Inst**: pacs.008 remains central for credit transfer exchange and instant-payment processing.
- **CBPR+**: pacs.008 continues to replace MT103-style cross-border payloads with richer structured data.
- **Structured addresses**: current market guidance and bank readiness material point to the November 2026 cutover away from fully unstructured postal addresses.
- **Serial method and STP**: multi-leg bank-to-bank chains still matter, and straight-through variants remain important for operational efficiency.

## Operational capabilities

pacs008 provides template-backed generation and validation across supported message definition revisions:

- compare versions
- regression-test scheme updates
- strengthen outbound payment message data before release
- support product, operations, and migration teams from one codebase

