---
title: pacs.002.001.12 — FI to FI Payment Status Report | English
description: The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO name** | FIToFIPaymentStatusReportV12 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 12 |

## Overview

The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **OrgnlGrpInfAndSts** — Original Group Information and Status for bulk-level reporting
- **TxInfAndSts** — Transaction Information and Status for individual transaction outcomes
- **StsRsnInf** — Status Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference linking back to the source instruction

## Business context

- Used to confirm settlement or report rejection of credit transfers, direct debits, and payment returns
- Enables reconciliation between instructing and instructed agents
- Required in CBPR+ flows to acknowledge processing of pacs.008 and pacs.009 messages
- Supports both bulk group-level and individual transaction-level status reporting

## CBPR+ and scheme context

- Replaces MT199 and field 79 status narratives in MT messages
- CBPR+ mandates pacs.002 for all payment status communication
- Structured reason codes replace free-text rejection explanations
- SWIFT gpi tracking integration requires pacs.002 for end-to-end transparency

## Message flow

The instructed agent (receiver) sends pacs.002 back to the instructing agent (sender) to confirm acceptance, settlement, or rejection of a received payment instruction such as pacs.008 or pacs.009.

## Related messages

- [`pacs.008.001.13`](/en/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/en/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/en/pacs.028.001.05/) — FI to FI Payment Status Request

