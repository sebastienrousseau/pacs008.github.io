---
title: "pacs.028.001.05 | FI to FI Payment Status Request | pacs008"
description: The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment...
lang: en-GB
lastUpdated: true
image: /logo.webp
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — FI to FI Payment Status Request

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Field</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO name</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registration status</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Year</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Overview

The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.

> Reviewed 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp.
- **TxInf** — Transaction Information identifying the payment to enquire about.
- **OrgnlGrpInf** — Original Group Information referencing the source message.
- **OrgnlInstrId** — Original Instruction Identification from the source payment.
- **OrgnlEndToEndId** — Original End to End Identification for traceability.

## Business context

- Lets teams ask for status on a payment that is still in flight.
- Helps operations teams investigate delayed or missing payments.
- Works with pacs.002 when a passive status update is not enough.
- Fits exception handling and SLA monitoring.

<div class="operational-matrix-table" tabindex="0" aria-label="Key data elements Business context">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message identification and creation timestamp</td>
          <td class="operational-matrix-table__right">Lets teams ask for status on a payment that is still in flight</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaction Information identifying the payment to enquire about</td>
          <td class="operational-matrix-table__right">Helps operations teams investigate delayed or missing payments</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Original Group Information referencing the source message</td>
          <td class="operational-matrix-table__right">Works with pacs.002 when a passive status update is not enough</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Original Instruction Identification from the source payment</td>
          <td class="operational-matrix-table__right">Fits exception handling and SLA monitoring</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Original End to End Identification for traceability</td>
          <td class="operational-matrix-table__right">The sending institution asks the receiving institution for the status of one payment. The answer usually comes back in pacs.002.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Replaces older manual status-enquiry patterns.
- Links the request to the original payment identifiers.
- UETR and gpi tracking can reduce how often teams need to send it.
- Often appears in automated payment-operations tooling.

## Message flow

The sending institution asks the receiving institution for the status of one payment. The answer usually comes back in pacs.002.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.028.001.05`. The latest catalogue version is `pacs.028.001.06`.

Use this page for the version that pacs008 implements today, and review the newer catalogue version for roadmap planning.

## Version-diff table

<div class="version-diff-table" tabindex="0" aria-label="Version-diff table">
  <table>
    <caption>Version history and implementation guidance</caption>
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

- pacs.028 is the active status-request partner to pacs.002. Use it when a team must ask for status instead of waiting for an update.
- It works best when the scheme, counterparty agreement, or internal operations model defines clear timing and escalation rules.

## When to use this message

Use pacs.028 when a team must ask another institution for the current status of an earlier payment.

## When not to use this message

Do not use pacs.028 as a routine substitute for pacs.002 status reporting.

## Implementation notes

- Send status requests only when operations needs them. Too many requests add traffic without helping resolution.
- Set timeout and escalation rules so investigations do not stall after the request is sent.
- Store the reason for the request with the original payment identifiers so the case stays auditable.

## Common failure modes

- Sending the request too early.
- Using pacs.028 without a clear exception workflow.
- Not linking the answer back to the original case record.

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
    <caption>Comparison of pacs.028.001.05 and pacs.002</caption>
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

### Should pacs.028 be sent after every payment?

Usually no. It works best as a targeted exception tool, not as blanket traffic.

### What makes pacs.028 useful?

Clear timeout, escalation, and reconciliation rules around the original payment case.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI to FI Customer Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Financial Institution Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
    </tbody>
  </table>
</div>

