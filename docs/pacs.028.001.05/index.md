---
title: pacs.028.001.05 | FI to FI Payment Status Request | pacs008
description: The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of...
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

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

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

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message identification and creation timestamp | Enables proactive status enquiry for payment instructions in transit |
| **TxInf** — Transaction Information identifying the payment to enquire about | Supports operations teams investigating delayed or missing payments |
| **OrgnlGrpInf** — Original Group Information referencing the source message | Complements pacs.002 by initiating status communication rather than waiting |
| **OrgnlInstrId** — Original Instruction Identification from the source payment | Used in exception-handling and SLA-monitoring workflows |
| **OrgnlEndToEndId** — Original End to End Identification for traceability | The instructing agent sends pacs.028 to the instructed agent to request status of a specific payment. The instructed agent responds with a pacs.002 containing the current processing status. |

## CBPR+ and scheme context

- Replaces MT199 status enquiry patterns and manual SWIFT message queries
- CBPR+ supports structured status requests linked to original message identifiers
- UETR-based tracking through gpi reduces the need for manual enquiries
- Increasingly integrated into automated payment operations dashboards

## Message flow

The instructing agent sends pacs.028 to the instructed agent to request status of a specific payment. The instructed agent responds with a pacs.002 containing the current processing status.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.028.001.05`, while the ISO 20022 catalogue lists `pacs.028.001.06` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.028.001.05 | Current implementation in pacs008 | Suitable for current status-request modelling. |
| pacs.028.001.06 | Later catalogue revision | Check the newer catalogue revision for future interoperability planning. |

## Scheme-specific notes

- pacs.028 is the proactive status-request counterpart to status-reporting flows such as pacs.002, and it becomes operationally relevant where institutions need explicit query behaviour rather than waiting for unsolicited updates.
- In practice, this message is most useful when paired with clear exception-management timing rules defined by a scheme, counterparty agreement, or internal operations model.

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.028 when an institution needs to actively request the status of an earlier payment instruction instead of waiting for an unsolicited status update.

## When not to use this message

Do not use pacs.028 as a replacement for routine event-driven status messaging when pacs.002 is already available and timely.

## Implementation notes

- Issue status requests selectively; overusing them can create duplicate operational traffic without improving resolution times.
- Pair pacs.028 with robust timeout and escalation rules so investigations do not stall after the request is sent.
- Store the reason for the request alongside the original payment identifiers for auditability and case handling.

## Common failure modes

- Sending status requests too early, before the receiving institution could reasonably have progressed the payment.
- Using pacs.028 without a clear exception-management workflow behind it.
- Not reconciling requested statuses back into the original case record.

## Worked XML fragment

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Field commentary

- `MsgId`: The request itself needs an auditable identifier distinct from the underlying payment.
- `OrgnlInstrId`: Use the exact source identifier from the original instruction to maximize matching accuracy.
- `OrgnlEndToEndId`: Including customer traceability helps operations teams reconcile the enquiry faster.

## Decision flow

```text
Need to ask for status because unsolicited updates are not enough?
Yes -> Use pacs.028.
No -> Need to send status instead of request it?
Yes -> Consider pacs.002 instead.
No -> Keep the case in normal operational monitoring.
```

## Compare pacs.028 vs pacs.002

| Dimension | pacs.028.001.05 | Comparison message |
|---|---|---|
| Primary purpose | Request status | Report status |
| Who starts the interaction | The institution asking for status | The institution sending the status |
| Operational posture | Exception-driven enquiry | Event-driven reporting |
| Wrong assumption to avoid | That it should be sent routinely for every payment | That it eliminates the need for proactive case management |

## Implementation FAQ

### Should pacs.028 be sent automatically after every payment?

Usually no. It is most effective as a targeted exception tool, not as blanket traffic.

### What makes pacs.028 valuable?

Clear timeout, escalation, and reconciliation rules around the original payment case.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Related messages
| Message type | Description | Overview |
|---|---|---|
| [`pacs.002.001.12`](/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |
| [`pacs.008.001.13`](/pacs.008.001.13/) | FI to FI Customer Credit Transfer | The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions. |
| [`pacs.009.001.10`](/pacs.009.001.10/) | Financial Institution Credit Transfer | The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management. |

