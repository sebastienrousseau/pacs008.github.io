---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: The pacs.009 message moves funds between financial institutions on their own behalf. It supports funding, cover payments, and liquidity management.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Overview

The pacs.009 message moves funds between financial institutions on their own behalf. It supports funding, cover payments, and liquidity management.

> Reviewed 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information.
- **CdtTrfTxInf** — Credit Transfer Transaction Information with interbank settlement amount.
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification.
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification.
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency.

## Business context

- Used for bank-to-bank own-account transfers and cover payments.
- Supports liquidity management between correspondent banks.
- Carries the cover leg of customer credit transfers.
- Supports treasury and funding operations.

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message identification and settlement information</td>
          <td class="operational-matrix-table__right">Used for bank-to-bank own-account transfers and cover payments</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Credit Transfer Transaction Information with interbank settlement amount</td>
          <td class="operational-matrix-table__right">Supports liquidity management between correspondent banks</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Debtor institution and its agent identification</td>
          <td class="operational-matrix-table__right">Carries the cover leg of customer credit transfers</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Creditor institution and its agent identification</td>
          <td class="operational-matrix-table__right">Supports treasury and funding operations</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbank Settlement Amount in the settlement currency</td>
          <td class="operational-matrix-table__right">The debtor institution sends pacs.009 to the creditor institution to transfer its own funds. In cover flows, pacs.009 carries the funding leg while pacs.008 carries the customer instruction on a separate path.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Replaces MT202 and MT202COV for institution-to-institution transfers.
- Cover-method flows pair pacs.009 with the underlying pacs.008 instruction.
- Structured party data and LEI identification are used more often.
- SWIFT gpi covers pacs.009 for correspondent-banking transparency.

## Message flow

The debtor institution sends pacs.009 to the creditor institution to transfer its own funds. In cover flows, pacs.009 carries the funding leg while pacs.008 carries the customer instruction on a separate path.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.009.001.10`. The latest catalogue version is `pacs.009.001.12`.

Use this page for the version that pacs008 implements today, and review the newer catalogue version for roadmap planning.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Matches the current project support for FI credit transfer flows.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Later catalogue revisions</td>
          <td class="version-diff-table__takeaway">Important for roadmap planning in correspondent and cover-payment environments.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- In CBPR+, pacs.009 carries institution-to-institution credit transfers and cover-payment legs. See the [roadmap PDF](https://www.swift.com/swift-resource/252463/download) and [CBPR+ pacs.009 material](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009).
- For cover method, analyse pacs.009 together with the related customer leg in pacs.008. See [Swift's pacs.008/pacs.009 cover-method training page](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009).
- This message is outside the SCT and SCT Inst customer credit-transfer rulebooks, so SEPA customer-payment rules do not carry over unchanged.

## When to use this message

Use pacs.009 for institution-to-institution credit transfers, especially treasury, funding, and cover-payment legs.

## When not to use this message

Do not use pacs.009 when the business transaction still belongs in pacs.008.

## Implementation notes

- Separate cover-payment logic from customer-payment logic.
- Apply strict controls to value date, settlement amount, and liquidity booking.
- Prioritise institution identifiers and chain transparency.

## Common failure modes

- Confusing own-account transfers with customer transfers.
- Losing the relationship between cover and underlying customer flows.
- Underestimating the impact of correspondent chain changes on settlement behavior.

## Worked XML fragment

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Field commentary

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Decision flow

```text
Is this own-account bank movement or a cover leg?
Yes -> Use pacs.009.
No -> Is it a customer payment instruction?
Yes -> Consider pacs.008 instead.
No -> Validate whether treasury or settlement operations own the case.
```

## Compare pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Compare pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.009.001.10</th>
        <th>Comparison message</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primary purpose</td>
          <td class="message-comparison-table__current">Institution-own-account credit transfer or cover leg</td>
          <td class="message-comparison-table__other">Customer credit transfer</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Business owner</td>
          <td class="message-comparison-table__current">Treasury / correspondent / funding operations</td>
          <td class="message-comparison-table__other">Customer-payment operations</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typical pairings</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, and linked pacs.008 flows</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wrong assumption to avoid</td>
          <td class="message-comparison-table__current">That it is just a more technical pacs.008</td>
          <td class="message-comparison-table__other">That it can carry institution funding flows cleanly</td>
        </tr>
    </tbody>
  </table>
</div>

## Implementation FAQ

### When should I choose pacs.009 over pacs.008?

Choose pacs.009 for institution-own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions.

### Why is pacs.009 often harder to reconcile than expected?

Because institutions must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__overview">The pacs.008 message is the main customer credit-transfer instruction between financial institutions. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Financial Institution Direct Debit</td>
          <td class="related-messages-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for institution-to-institution collections, not customer direct debits.</td>
        </tr>
    </tbody>
  </table>
</div>

