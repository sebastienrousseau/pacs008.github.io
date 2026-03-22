---
title: pacs.028.001.05 — FI to FI Payment Status Request | English
description: The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of payment processing without waiting for an unsolicited status report.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO name** | FIToFIPaymentStatusRequestV05 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 5 |

## Overview

The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of payment processing without waiting for an unsolicited status report.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information identifying the payment to enquire about
- **OrgnlGrpInf** — Original Group Information referencing the source message
- **OrgnlInstrId** — Original Instruction Identification from the source payment
- **OrgnlEndToEndId** — Original End to End Identification for traceability

## Business context

- Enables proactive status enquiry for payment instructions in transit
- Supports operations teams investigating delayed or missing payments
- Complements pacs.002 by initiating status communication rather than waiting
- Used in exception-handling and SLA-monitoring workflows

## CBPR+ and scheme context

- Replaces MT199 status enquiry patterns and manual SWIFT message queries
- CBPR+ supports structured status requests linked to original message identifiers
- UETR-based tracking through gpi reduces the need for manual enquiries
- Increasingly integrated into automated payment operations dashboards

## Message flow

The instructing agent sends pacs.028 to the instructed agent to request status of a specific payment. The instructed agent responds with a pacs.002 containing the current processing status.

## Related messages

- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/en/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/en/pacs.009.001.10/) — Financial Institution Credit Transfer

