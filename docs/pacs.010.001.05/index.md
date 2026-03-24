---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: The pacs.010 message lets one financial institution debit another institution's own account. It is for bank-to-bank collections, not customer direct debits.
lang: en-GB
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Financial Institution Direct Debit

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

The pacs.010 message lets one financial institution debit another institution's own account. It is for bank-to-bank collections, not customer direct debits.

> Reviewed 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information.
- **DrctDbtTxInf** — Direct Debit Transaction Information with collection amount.
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification.
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification.
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency.

## Business context

- Supports bank-to-bank direct-debit collection.
- Used for fees, margin calls, and similar obligations.
- Needs a bilateral agreement between the banks.
- Often sits in treasury or liquidity operations.

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message identification and settlement information</td>
          <td class="operational-matrix-table__right">Supports bank-to-bank direct-debit collection</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Direct Debit Transaction Information with collection amount</td>
          <td class="operational-matrix-table__right">Used for fees, margin calls, and similar obligations</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Creditor institution and its agent identification</td>
          <td class="operational-matrix-table__right">Needs a bilateral agreement between the banks</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Debtor institution and its agent identification</td>
          <td class="operational-matrix-table__right">Often sits in treasury or liquidity operations</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbank Settlement Amount in the settlement currency</td>
          <td class="operational-matrix-table__right">The collecting bank sends pacs.010 under a bilateral agreement. The receiving bank checks the request and either settles or rejects it.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- It maps older interbank direct-debit processing into ISO 20022.
- It follows the same structured party-data rules as other pacs messages.
- Bank identifiers such as BIC and LEI still need validation.
- It appears in wider ISO 20022 migration plans.

## Message flow

The collecting bank sends pacs.010 under a bilateral agreement. The receiving bank checks the request and either settles or rejects it.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.010.001.05`. The latest catalogue version is `pacs.010.001.06`.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Reference point for institution direct-debit support in the current project.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Later catalogue revision</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- pacs.010 is not part of the SCT or SCT Inst credit-transfer rulebooks, so credit-transfer rules do not carry over here.
- Use this page as a guide for bank-to-bank direct-debit scenarios, not as a substitute for market-scheme documentation.

## When to use this message

Use pacs.010 when one bank must debit another bank's own account.

## When not to use this message

Do not use pacs.010 for customer direct debits or credit transfers.

## Implementation notes

- Keep bilateral approval rules outside the message.
- Treat own-account debits as high-control flows.
- Design status and exception handling with the collection flow.

## Common failure modes

- Treating pacs.010 as the debit mirror of pacs.009.
- Not storing the bilateral approval context.
- Ignoring downstream status and exception flows.

## Worked XML fragment

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Field commentary

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Decision flow

```text
Need a bank-to-bank direct-debit message?
Yes -> Use pacs.010.
No -> Need a customer direct-debit flow?
Yes -> Consider pacs.003 instead.
No -> Re-check whether the case is really a credit transfer.
```

## Implementation FAQ

### Is pacs.010 common in retail payment products?

Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products.

### What should teams design first?

Start with approval rules, bilateral controls, and exception handling before finalising XML templates.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Financial Institution Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI to FI Customer Direct Debit</td>
          <td class="related-messages-table__overview">The pacs.003 message carries a customer direct debit between banks. It lets the creditor bank collect funds from the debtor bank.</td>
        </tr>
    </tbody>
  </table>
</div>

