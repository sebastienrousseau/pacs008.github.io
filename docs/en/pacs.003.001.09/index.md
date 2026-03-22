---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | English
description: The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor's bank to collect funds from the debtor's bank on behalf of the creditor.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO name** | FIToFICustomerDirectDebitV09 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 9 |

## Overview

The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor's bank to collect funds from the debtor's bank on behalf of the creditor.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information
- **DrctDbtTxInf** — Direct Debit Transaction Information with amount and parties
- **Cdtr** — Creditor identification and account details
- **CdtrAgt** — Creditor Agent (collecting institution) identification
- **DbtrAgt** — Debtor Agent (paying institution) identification

## Business context

- Supports SEPA Core and B2B direct debit schemes
- Used for recurring payment collection such as subscriptions, utility bills, and loan repayments
- Requires a valid mandate reference between debtor and creditor
- Enables bulk collection of multiple direct debit instructions in a single message

## CBPR+ and scheme context

- Structured address and party identification requirements apply equally to direct debits
- Mandate-related data must be fully structured from November 2026
- Replaces legacy MT104-style direct debit formats in cross-border flows
- Validation of creditor scheme identification is increasingly enforced

## Message flow

The creditor agent initiates pacs.003 toward the debtor agent to collect funds. The debtor agent validates the mandate, checks account coverage, and either settles or returns the transaction.

## Related messages

- [`pacs.004.001.11`](/en/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/en/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report

