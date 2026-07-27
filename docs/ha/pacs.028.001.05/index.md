---
title: "pacs.028.001.05 | Neman matsayin biyan kuɗi tsakanin cibiyoyin kuɗi | pacs008"
description: The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment...
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — Neman matsayin biyan kuɗi tsakanin cibiyoyin kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Fili</th>
        <th scope="col">Ƙima</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Sunan ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Matsayin rajista</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Shekara</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Siga</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Bayyani

The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information identifying the payment to enquire about
- **OrgnlGrpInf** — Original Group Information referencing the source message
- **OrgnlInstrId** — Original Instruction Identification from the source payment
- **OrgnlEndToEndId** — Original End to End Identification for traceability

## Mahallin kasuwanci

- Lets teams ask for status on a payment that is still in flight
- Helps operations teams investigate delayed or missing payments
- Works with pacs.002 when a passive status update is not enough
- Fits exception handling and SLA monitoring

<div class="operational-matrix-table" tabindex="0" aria-label="Muhimman abubuwan bayanai Mahallin kasuwanci">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Muhimman abubuwan bayanai</th>
        <th>Mahallin kasuwanci</th>
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

## Mahallin CBPR+ da tsari

- Replaces older manual status-enquiry patterns
- Links the request to the original payment identifiers
- UETR and gpi tracking can reduce how often teams need to send it
- Often appears in automated payment-operations tooling

## Kwararar saƙo

The sending institution asks the receiving institution for the status of one payment. The answer usually comes back in pacs.002.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Saƙonnin da suka danganta
<div class="related-messages-table" tabindex="0" aria-label="Saƙonnin da suka danganta">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Nau&#39;in saƙo</th>
        <th>Bayani</th>
        <th>Bayyani</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.008 shine babban umarnin canja wurin kuɗi na abokin ciniki tsakanin bankuna. Yana ɗaukar bayanan ɓangare, adadi, da aiko kuɗi.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Canja wurin kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.009 yana matsar da kuɗi tsakanin bankuna a madadin kansu. Yana tallafawa tallafin kuɗi, biyan kuɗin rufewa, da sarrafa ruwa.</td>
        </tr>
    </tbody>
  </table>
</div>

