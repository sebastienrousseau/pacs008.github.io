---
title: pacs.009.001.10 — Financial Institution Credit Transfer | English
description: The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO name** | FinancialInstitutionCreditTransferV10 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 10 |

## Overview

The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information
- **CdtTrfTxInf** — Credit Transfer Transaction Information with interbank settlement amount
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency

## Business context

- Used for bank-to-bank own-account transfers and cover payments
- Supports liquidity management between correspondent banking partners
- Carries the cover leg of customer credit transfers settled via cover method
- Enables treasury and funding operations between financial institutions

## CBPR+ and scheme context

- Replaces MT202 and MT202COV for institution-to-institution transfers
- Cover method flows pair pacs.009 with the underlying pacs.008 customer instruction
- Structured party data and LEI identification increasingly required
- SWIFT gpi covers pacs.009 for correspondent banking transparency

## Message flow

The debtor institution sends pacs.009 to the creditor institution to transfer its own funds. For cover-method payments, pacs.009 provides the funding leg while pacs.008 carries the customer instruction through a separate path.

## Related messages

- [`pacs.008.001.13`](/en/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/en/pacs.010.001.05/) — Financial Institution Direct Debit

