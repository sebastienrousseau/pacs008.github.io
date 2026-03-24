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

<div class="operational-matrix-table" tabindex="0" aria-label="Key data elements Business context">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Key data elements</th>
        <th>Business context</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left">**GrpHdr** — Group Header with message identification and creation timestamp</td>
          <td class="operational-matrix-table__right">Enables proactive status enquiry for payment instructions in transit</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Transaction Information identifying the payment to enquire about</td>
          <td class="operational-matrix-table__right">Supports operations teams investigating delayed or missing payments</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Original Group Information referencing the source message</td>
          <td class="operational-matrix-table__right">Complements pacs.002 by initiating status communication rather than waiting</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlInstrId** — Original Instruction Identification from the source payment</td>
          <td class="operational-matrix-table__right">Used in exception-handling and SLA-monitoring workflows</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlEndToEndId** — Original End to End Identification for traceability</td>
          <td class="operational-matrix-table__right">The instructing agent sends pacs.028 to the instructed agent to request status of a specific payment. The instructed agent responds with a pacs.002 containing the current processing status.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="version-diff-table" tabindex="0" aria-label="Version-diff table">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Version range</th>
        <th>Why it matters</th>
        <th>Implementation takeaway</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Suitable for current status-request modelling.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Later catalogue revision</td>
          <td class="version-diff-table__takeaway">Check the newer catalogue revision for future interoperability planning.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-comparison-table" tabindex="0" aria-label="Compare pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.028.001.05</th>
        <th>Comparison message</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primary purpose</td>
          <td class="message-comparison-table__current">Request status</td>
          <td class="message-comparison-table__other">Report status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Who starts the interaction</td>
          <td class="message-comparison-table__current">The institution asking for status</td>
          <td class="message-comparison-table__other">The institution sending the status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operational posture</td>
          <td class="message-comparison-table__current">Exception-driven enquiry</td>
          <td class="message-comparison-table__other">Event-driven reporting</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wrong assumption to avoid</td>
          <td class="message-comparison-table__current">That it should be sent routinely for every payment</td>
          <td class="message-comparison-table__other">That it eliminates the need for proactive case management</td>
        </tr>
    </tbody>
  </table>
</div>

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
<div class="related-messages-table" tabindex="0" aria-label="Related messages">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Message type</th>
        <th>Description</th>
        <th>Overview</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI to FI Customer Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Financial Institution Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution&#39;s own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.</td>
        </tr>
    </tbody>
  </table>
</div>

