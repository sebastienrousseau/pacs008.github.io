---
title: pacs.004.001.11 — Payment Return | English
description: The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO name** | PaymentReturnV11 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 11 |

## Overview

The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information with return amount and parties
- **OrgnlGrpInf** — Original Group Information linking to the source message
- **RtrRsnInf** — Return Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference for matching and reconciliation

## Business context

- Handles post-settlement returns when the beneficiary's account cannot be credited
- Supports recall scenarios where the originator requests return of funds
- Carries structured return reason codes for regulatory and operational transparency
- Applies to both credit transfer returns (pacs.008) and direct debit returns (pacs.003)

## CBPR+ and scheme context

- Replaces MT103 RETURN and cover-method return messaging
- Return reason codes are standardised and machine-readable under ISO 20022
- CBPR+ requires full original transaction reference data for matching
- SWIFT gpi tracking extends to return transactions for end-to-end visibility

## Message flow

The instructed agent sends pacs.004 back through the payment chain to return previously settled funds. Each agent in the chain processes the return and credits back the relevant accounts.

## Related messages

- [`pacs.008.001.13`](/en/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/en/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/en/pacs.002.001.12/) — FI to FI Payment Status Report

