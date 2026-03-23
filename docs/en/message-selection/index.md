---
title: Message Selection Guide | pacs008
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and enquiries.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# Message Selection Guide

Choose the pacs family by business event first, then by scheme and operating model.

> Last reviewed against primary sources on 23 March 2026 using ISO 20022, EPC, and Swift public materials referenced on this page.

## Quick decision matrix

| Message type | Description | Overview |
|---|---|---|
| [`pacs.002.001.12`](/en/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |
| [`pacs.003.001.09`](/en/pacs.003.001.09/) | FI to FI Customer Direct Debit | The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor's bank to collect funds from the debtor's bank on behalf of the creditor. |
| [`pacs.004.001.11`](/en/pacs.004.001.11/) | Payment Return | The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution. |
| [`pacs.007.001.11`](/en/pacs.007.001.11/) | FI to FI Payment Reversal | The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent. |
| [`pacs.008.001.13`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer | The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions. |
| [`pacs.009.001.10`](/en/pacs.009.001.10/) | Financial Institution Credit Transfer | The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management. |
| [`pacs.010.001.05`](/en/pacs.010.001.05/) | Financial Institution Direct Debit | The pacs.010 message is used between financial institutions for direct debit transactions on the institution's own account. It enables one institution to collect funds directly from another institution's account. |
| [`pacs.028.001.05`](/en/pacs.028.001.05/) | FI to FI Payment Status Request | The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of payment processing without waiting for an unsolicited status report. |

## Common comparison points

| Compare | Key distinction |
|---|---|
| `pacs.008` vs `pacs.009` | Customer payment versus institution / cover movement |
| `pacs.004` vs `pacs.007` | Return from receiving side versus reversal from instructing side |
| `pacs.002` vs `pacs.028` | Status report versus status request |

## Supported message pages

- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/en/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/en/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/en/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/en/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/en/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/en/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/en/pacs.028.001.05/) — FI to FI Payment Status Request

