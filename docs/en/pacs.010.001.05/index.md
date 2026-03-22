---
title: pacs.010.001.05 — Financial Institution Direct Debit | English
description: The pacs.010 message is used between financial institutions for direct debit transactions on the institution's own account. It enables one institution to collect funds directly from another institution's account.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO name** | FinancialInstitutionDirectDebitV05 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 5 |

## Overview

The pacs.010 message is used between financial institutions for direct debit transactions on the institution's own account. It enables one institution to collect funds directly from another institution's account.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information
- **DrctDbtTxInf** — Direct Debit Transaction Information with collection amount
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency

## Business context

- Supports interbank direct debit collection between financial institutions
- Used for fee collection, margin calls, and institutional settlement obligations
- Requires pre-agreed bilateral arrangements between participating institutions
- Critical for institutional cash management and interbank settlement cycles

## CBPR+ and scheme context

- Replaces elements of MT204 for interbank direct debit processing
- Structured party identification follows the same requirements as other pacs messages
- Validation of institutional identifiers (BIC, LEI) is mandatory
- Included in full ISO 20022 adoption roadmaps across market infrastructures

## Message flow

The creditor institution sends pacs.010 to the debtor institution to collect funds under a pre-agreed arrangement. The debtor institution validates the request and settles or rejects the direct debit.

## Related messages

- [`pacs.009.001.10`](/en/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/en/pacs.003.001.09/) — FI to FI Customer Direct Debit

