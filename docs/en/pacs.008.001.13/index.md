---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | English
description: The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO name** | FIToFICustomerCreditTransferV13 |
| **Registration status** | Registered |
| **Year** | 2023 |
| **Version** | 13 |

## Overview

The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.

## Key data elements

- **GrpHdr** — Group Header with message ID, creation date, number of transactions, and settlement information
- **CdtTrfTxInf** — Credit Transfer Transaction Information with amount, charges, and purpose
- **Dbtr / DbtrAgt** — Debtor and Debtor Agent identification and account details
- **Cdtr / CdtrAgt** — Creditor and Creditor Agent identification and account details
- **RmtInf** — Remittance Information for structured or unstructured payment references

## Business context

- The primary message for customer-initiated cross-border and domestic credit transfers
- Used across SEPA SCT, SEPA Instant, CBPR+, and national clearing systems
- Carries structured remittance information to support straight-through reconciliation
- Supports serial, cover, and direct settlement methods for multi-leg payment chains

## CBPR+ and scheme context

- Replaces MT103 and MT103+ for cross-border customer credit transfers
- Structured address deadline of November 2026 applies to all party postal addresses
- SWIFT gpi requires pacs.008 for UETR-based end-to-end tracking
- 13 revisions reflect ongoing schema evolution across market infrastructures

## Message flow

The debtor agent creates a pacs.008 and sends it to the creditor agent (directly or via intermediaries). Each agent in the chain validates, enriches, and forwards the instruction until the creditor agent credits the beneficiary's account.

## Supported versions

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Related messages

- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/en/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/en/pacs.009.001.10/) — Financial Institution Credit Transfer

