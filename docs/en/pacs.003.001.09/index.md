---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor's bank to collect...
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

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

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

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message identification and settlement information | Supports SEPA Core and B2B direct debit schemes |
| **DrctDbtTxInf** — Direct Debit Transaction Information with amount and parties | Used for recurring payment collection such as subscriptions, utility bills, and loan repayments |
| **Cdtr** — Creditor identification and account details | Requires a valid mandate reference between debtor and creditor |
| **CdtrAgt** — Creditor Agent (collecting institution) identification | Enables bulk collection of multiple direct debit instructions in a single message |
| **DbtrAgt** — Debtor Agent (paying institution) identification | The creditor agent initiates pacs.003 toward the debtor agent to collect funds. The debtor agent validates the mandate, checks account coverage, and either settles or returns the transaction. |

## CBPR+ and scheme context

- Structured address and party identification requirements apply equally to direct debits
- Mandate-related data must be fully structured from November 2026
- Replaces legacy MT104-style direct debit formats in cross-border flows
- Validation of creditor scheme identification is increasingly enforced

## Message flow

The creditor agent initiates pacs.003 toward the debtor agent to collect funds. The debtor agent validates the mandate, checks account coverage, and either settles or returns the transaction.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.003.001.09`, while the ISO 20022 catalogue lists `pacs.003.001.11` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.003.001.09 | Current implementation in pacs008 | Useful for direct-debit reference modelling in the current project. |
| pacs.003.001.10-11 | Later catalogue revisions | Check later revisions for mandate, status, and interoperability updates before greenfield use. |

## Scheme-specific notes

- This message is not part of the SCT or SCT Inst credit-transfer rulebooks, so teams should treat it as a separate direct-debit track rather than reusing credit-transfer assumptions. That is an implementation inference from the EPC credit-transfer rulebooks.
- This page is best used as a message-reference and implementation page, not as a stand-in for scheme rulebooks.

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.003 for customer direct-debit collection flows between financial institutions where the creditor bank initiates collection from the debtor bank.

## When not to use this message

Do not use pacs.003 for institution-own-account debits or for customer credit-transfer use cases.

## Implementation notes

- Mandate and debtor account data quality usually determines straight-through rates more than XML correctness alone.
- Collection timing windows, cutoff handling, and return rights vary by scheme, so keep scheme logic outside the generic message model.
- Store collection references separately from end-customer invoice references for downstream return and investigation handling.

## Common failure modes

- Treating mandate data as optional operational context.
- Failing to align debtor account checks with scheme-specific rules.
- Ignoring return and reversal flows when designing the original debit pipeline.

## Worked XML fragment

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Field commentary

- `EndToEndId`: Keep mandate and collection identifiers separate from business invoice references.
- `IntrBkSttlmAmt`: Validate debit amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Direct-debit success often depends more on account and mandate quality than on XML structure.

## Decision flow

```text
Need an FI-to-FI customer direct debit?
Yes -> Use pacs.003.
No -> Need a customer credit transfer?
Yes -> Use pacs.008 instead.
No -> Re-check whether the business case is a direct debit at all.
```

## Implementation FAQ

### Is pacs.003 the direct-debit mirror of pacs.008?

Not exactly. It serves customer direct-debit flows, which have different mandate, timing, and exception semantics.

### What matters most operationally?

Mandate quality, debtor-account rules, and return handling usually matter more than XML generation alone.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Related messages
| Message type | Description | Overview |
|---|---|---|
| [`pacs.004.001.11`](/en/pacs.004.001.11/) | Payment Return | The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution. |
| [`pacs.007.001.11`](/en/pacs.007.001.11/) | FI to FI Payment Reversal | The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent. |
| [`pacs.002.001.12`](/en/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |

