---
title: pacs.007.001.11 — FI to FI Payment Reversal | English
description: The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO name** | FIToFIPaymentReversalV11 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 11 |

## Overview

The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information with reversal amount and parties
- **OrgnlGrpInf** — Original Group Information referencing the source message
- **RvslRsnInf** — Reversal Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference for end-to-end traceability

## Business context

- Initiated when the original sender identifies an error before or after settlement
- Used in fraud scenarios where rapid reversal is required
- Supports both full and partial reversal of original payment amounts
- Carries structured reversal reason codes for downstream processing

## CBPR+ and scheme context

- Distinguished from pacs.004 by direction — reversal flows forward from originator, return flows backward from beneficiary
- CBPR+ requires pairing with original message identifiers for automated matching
- Structured reason codes replace free-text narratives from legacy MT messages
- Increasingly used in instant payment recall and fraud prevention workflows

## Message flow

The instructing agent (original sender) sends pacs.007 forward through the payment chain to reverse a previously instructed payment. Each agent processes the reversal instruction and adjusts settlement accordingly.

## Related messages

- [`pacs.008.001.13`](/en/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/en/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report

