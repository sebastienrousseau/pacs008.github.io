---
title: "pacs.002.001.12 | FI to FI Payment Status Report | pacs008"
description: The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected...
lang: en-GB
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — FI to FI Payment Status Report

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Overview

The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.

> Reviewed 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp.
- **OrgnlGrpInfAndSts** — Original Group Information and Status for bulk-level reporting.
- **TxInfAndSts** — Transaction Information and Status for individual transaction outcomes.
- **StsRsnInf** — Status Reason Information with structured reason codes.
- **OrgnlTxRef** — Original Transaction Reference linking back to the source instruction.

## Business context

- Confirms settlement or rejection of credit transfers, direct debits, and returns.
- Supports reconciliation between instructing and instructed agents.
- Used in CBPR+ flows for pacs.008 and pacs.009 status reporting.
- Supports group-level and transaction-level status reporting.

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
          <td class="operational-matrix-table__right">Confirms settlement or rejection of credit transfers, direct debits, and returns</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Original Group Information and Status for bulk-level reporting</td>
          <td class="operational-matrix-table__right">Supports reconciliation between instructing and instructed agents</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Transaction Information and Status for individual transaction outcomes</td>
          <td class="operational-matrix-table__right">Used in CBPR+ flows for pacs.008 and pacs.009 status reporting</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Status Reason Information with structured reason codes</td>
          <td class="operational-matrix-table__right">Supports group-level and transaction-level status reporting</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Original Transaction Reference linking back to the source instruction</td>
          <td class="operational-matrix-table__right">The instructed agent sends pacs.002 back to the instructing agent to confirm acceptance, settlement, or rejection of a payment instruction such as pacs.008 or pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Replaces MT199 and field 79 status text in MT messages.
- CBPR+ mandates pacs.002 for all payment status communication.
- Structured reason codes replace free-text rejection explanations.
- SWIFT gpi tracking integration requires pacs.002 for end-to-end transparency.

## Message flow

The instructed agent sends pacs.002 back to the instructing agent to confirm acceptance, settlement, or rejection of a payment instruction such as pacs.008 or pacs.009.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.002.001.12`. The latest catalogue version is `pacs.002.001.15`.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Use this when matching the current project templates and validation assets.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Later catalogue revisions</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- In SEPA credit-transfer and instant-payment flows, pacs.002 is the main companion status message. See the [EPC SCT rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) and [EPC SCT Inst rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook).
- In CBPR+, pacs.002 sits alongside pacs.008, pacs.009, and pacs.004 in the Swift rollout. See [Swift's CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released).

## When to use this message

Use pacs.002 when the receiving institution needs to report the status of an earlier payment instruction.

## When not to use this message

Do not use pacs.002 to alter settlement or reverse funds.

## Implementation notes

- Map external statuses into pacs.002 reason and status codes early.
- Keep original message identifiers intact.
- Treat pending and rejected outcomes differently downstream.

## Common failure modes

- Conflating technical acceptance with business acceptance.
- Dropping transaction-level status details when a group status exists.
- Using pacs.002 as a substitute for exception-management workflows.

## Worked XML fragment

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Field commentary

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Decision flow

```text
Need to communicate status of an earlier instruction?
Yes -> Use pacs.002.
No -> Need to ask another institution for status?
Yes -> Consider pacs.028 instead.
No -> Stay in the payment or exception flow.
```

## Compare pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Compare pacs.002 vs pacs.028">
  <table>
    <caption>Comparison of pacs.002.001.12 and pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.002.001.12</th>
        <th>Comparison message</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primary purpose</td>
          <td class="message-comparison-table__current">Report status</td>
          <td class="message-comparison-table__other">Request status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Who starts the interaction</td>
          <td class="message-comparison-table__current">The institution sending the status</td>
          <td class="message-comparison-table__other">The institution asking for status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operational posture</td>
          <td class="message-comparison-table__current">Event-driven reporting</td>
          <td class="message-comparison-table__other">Exception-driven enquiry</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wrong assumption to avoid</td>
          <td class="message-comparison-table__current">That status reporting replaces investigation workflows</td>
          <td class="message-comparison-table__other">That every payment needs an explicit status request</td>
        </tr>
    </tbody>
  </table>
</div>

## Implementation FAQ

### Is pacs.002 a payment message?

No. It reports status for an earlier instruction rather than moving value itself.

### Should pacs.002 replace internal workflow states?

No. It should inform them, but internal case states still need their own operational logic.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI to FI Customer Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Financial Institution Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Request</td>
          <td class="related-messages-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

