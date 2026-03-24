---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: The pacs.008 message is the main customer credit-transfer instruction between financial institutions. It carries party, amount, and remittance data.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO name</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registration status</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Year</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Overview

The pacs.008 message is the main customer credit-transfer instruction between financial institutions. It carries party, amount, and remittance data.

> Reviewed against primary sources on 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message ID, creation date, number of transactions, and settlement information.
- **CdtTrfTxInf** — Credit Transfer Transaction Information with amount, charges, and purpose.
- **Dbtr / DbtrAgt** — Debtor and Debtor Agent identification and account details.
- **Cdtr / CdtrAgt** — Creditor and Creditor Agent identification and account details.
- **RmtInf** — Remittance Information for structured or unstructured payment references.

## Business context

- The primary message for customer-initiated cross-border and domestic credit transfers.
- Used across SEPA SCT, SEPA Instant, CBPR+, and national clearing systems.
- Carries structured remittance information to support straight-through reconciliation.
- Supports serial, cover, and direct settlement methods for multi-leg payment chains.

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message ID, creation date, number of transactions, and settlement information</td>
          <td class="operational-matrix-table__right">The primary message for customer-initiated cross-border and domestic credit transfers</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Credit Transfer Transaction Information with amount, charges, and purpose</td>
          <td class="operational-matrix-table__right">Used across SEPA SCT, SEPA Instant, CBPR+, and national clearing systems</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Debtor and Debtor Agent identification and account details</td>
          <td class="operational-matrix-table__right">Carries structured remittance information to support straight-through reconciliation</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Creditor and Creditor Agent identification and account details</td>
          <td class="operational-matrix-table__right">Supports serial, cover, and direct settlement methods for multi-leg payment chains</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Remittance Information for structured or unstructured payment references</td>
          <td class="operational-matrix-table__right">The debtor agent creates a pacs.008 and sends it to the creditor agent (directly or via intermediaries). Each agent in the chain validates, enriches, and forwards the instruction until the creditor agent credits the beneficiary&#39;s account.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Replaces MT103 and MT103+ for cross-border customer credit transfers.
- Structured address deadline of November 2026 applies to all party postal addresses.
- SWIFT gpi requires pacs.008 for UETR-based end-to-end tracking.
- 13 revisions reflect ongoing schema evolution across market infrastructures.

## Message flow

The debtor agent creates a pacs.008 and sends it to the creditor agent (directly or via intermediaries). Each agent in the chain validates, enriches, and forwards the instruction until the creditor agent credits the beneficiary's account.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.008.001.13`, which still matches the latest catalogue version.

Use this page for current implementation work, but still check scheme guidance before production use.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Early revisions</td>
          <td class="version-diff-table__takeaway">Useful mainly for legacy migration analysis and version-history context.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Pre-current modern revisions</td>
          <td class="version-diff-table__takeaway">These are the revisions most likely to appear in recent migration or coexistence projects.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Current catalogue revision</td>
          <td class="version-diff-table__takeaway">Use this for current-version planning, while still validating scheme usage guidelines and counterparty readiness.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- For SEPA credit transfers, pacs.008 is part of the SCT scheme messaging stack defined by the [EPC SCT rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and).
- For instant payments, pacs.008 is also central to SCT Inst flows under the [EPC SCT Inst rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook), where timing, rejection, and exception handling expectations are much tighter.
- For CBPR+, Swift positions pacs.008 as the ISO 20022 successor to MT103-style customer credit-transfer instructions. See [Swift CBPR+ pacs.008 training overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008), [serial method](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008), and [cover method](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009).
- Swift's CBPR+ roadmap also shows MT 103 moving to pacs.008 during the migration timeline, with coexistence ending in November 2025 and further end-state milestones extending beyond that period. See the [Swift roadmap PDF](https://www.swift.com/swift-resource/252463/download).
- Structured-address changes around November 2026 materially affect pacs.008 data quality and party modelling in cross-border usage. See the [Swift CBPR+ roadmap](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap).

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.008 for customer credit transfers moving between financial institutions, including domestic clearing, cross-border correspondent flows, and instant-payment contexts where the customer payment instruction is the primary object.

## When not to use this message

Do not use pacs.008 for institution-own-account funding transfers or as a generic envelope for status, return, or investigation messages.

## Implementation notes

- Address quality, party identifiers, and remittance structure typically determine downstream repair rates more than the XML skeleton itself.
- Model payment purpose, charge bearer, settlement method, and party roles explicitly in source data before template rendering.
- Treat version selection as a deployment concern tied to market infrastructure and bank counterparties, not just to the latest schema revision.

## Common failure modes

- Assuming one pacs.008 mapping works unchanged across CBPR+, SEPA, domestic RTGS, and instant-payment contexts.
- Using free text where structured remittance or address fields are expected.
- Leaving exception-handling design until after XML generation already works.

## Worked XML fragment

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Field commentary

- `MsgId`: This should identify the message envelope, not the end-customer payment reference.
- `EndToEndId`: Keep customer-facing traceability stable across downstream systems where possible.
- `UETR`: Use this consistently in cross-border and tracking-heavy environments; do not generate it ad hoc in later workflow stages.
- `IntrBkSttlmAmt`: Validate amount and currency using business rules before schema validation.
- `Dbtr` / `Cdtr`: Party quality, address structure, and identifiers are usually the main determinants of repair rates.

## Decision flow

```text
Is this a customer credit-transfer instruction between institutions?
Yes -> Use pacs.008.
No -> Is it an institution funding leg or cover payment?
Yes -> Consider pacs.009 instead.
No -> Re-check whether the business event is status, return, or reversal.
```

## Compare pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Compare pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.008.001.13</th>
        <th>Comparison message</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primary purpose</td>
          <td class="message-comparison-table__current">Customer credit transfer</td>
          <td class="message-comparison-table__other">Institution-own-account credit transfer or cover leg</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Business owner</td>
          <td class="message-comparison-table__current">Customer-payment operations</td>
          <td class="message-comparison-table__other">Treasury / correspondent / funding operations</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typical pairings</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, and sometimes linked pacs.008 flows</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wrong assumption to avoid</td>
          <td class="message-comparison-table__current">That all bank-to-bank transfers belong here</td>
          <td class="message-comparison-table__other">That it can replace customer credit-transfer instructions</td>
        </tr>
    </tbody>
  </table>
</div>

## Implementation FAQ

### Is pacs.008 enough on its own for production payments?

No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows.

### What causes the most repair work?

Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Supported versions

<div class="message-versions-table" tabindex="0" aria-label="Supported versions">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Version</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Current</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether processing was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Payment Return</td>
          <td class="related-messages-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied or must be sent back.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Financial Institution Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between financial institutions on their own behalf. It supports interbank funding, cover payments, and liquidity management.</td>
        </tr>
    </tbody>
  </table>
</div>

