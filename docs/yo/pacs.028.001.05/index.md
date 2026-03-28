---
title: "pacs.028.001.05 | Ìbéèrè ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná | pacs008"
description: The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment...
lang: yo-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — Ìbéèrè ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Pápá</th>
        <th scope="col">Iye</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Orúkọ ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ipò ìforúkọsílẹ̀</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ọdún</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ẹ̀dà</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Àkópọ̀

The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Àwọn ẹ̀ka dátà pàtàkì

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information identifying the payment to enquire about
- **OrgnlGrpInf** — Original Group Information referencing the source message
- **OrgnlInstrId** — Original Instruction Identification from the source payment
- **OrgnlEndToEndId** — Original End to End Identification for traceability

## Ìpò ìṣòwò

- Lets teams ask for status on a payment that is still in flight
- Helps operations teams investigate delayed or missing payments
- Works with pacs.002 when a passive status update is not enough
- Fits exception handling and SLA monitoring

<div class="operational-matrix-table" tabindex="0" aria-label="Àwọn ẹ̀ka dátà pàtàkì Ìpò ìṣòwò">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Àwọn ẹ̀ka dátà pàtàkì</th>
        <th>Ìpò ìṣòwò</th>
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

## Ìpò CBPR+ àti ètò

- Replaces older manual status-enquiry patterns
- Links the request to the original payment identifiers
- UETR and gpi tracking can reduce how often teams need to send it
- Often appears in automated payment-operations tooling

## Ṣíṣàn ìfiránṣẹ́

The sending institution asks the receiving institution for the status of one payment. The answer usually comes back in pacs.002.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Àwọn ìfiránṣẹ́ tí ó jọra
<div class="related-messages-table" tabindex="0" aria-label="Àwọn ìfiránṣẹ́ tí ó jọra">
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
        <th>Àkópọ̀</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ìròyìn ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Gbígbé owó àṣẹ fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Gbígbé owó àṣẹ láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
    </tbody>
  </table>
</div>

