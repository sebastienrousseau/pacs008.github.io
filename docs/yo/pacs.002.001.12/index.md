---
title: "pacs.002.001.12 | Ìròyìn ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná | pacs008"
description: The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected...
lang: yo-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Ìròyìn ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Àkópọ̀

The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Àwọn ẹ̀ka dátà pàtàkì

- **GrpHdr** — Group Header with message identification and creation timestamp
- **OrgnlGrpInfAndSts** — Original Group Information and Status for bulk-level reporting
- **TxInfAndSts** — Transaction Information and Status for individual transaction outcomes
- **StsRsnInf** — Status Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference linking back to the source instruction

## Ìpò ìṣòwò

- Confirms settlement or rejection of credit transfers, direct debits, and returns
- Supports reconciliation between instructing and instructed agents
- Used in CBPR+ flows for pacs.008 and pacs.009 status reporting
- Supports group-level and transaction-level status reporting

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

## Ìpò CBPR+ àti ètò

- Replaces MT199 and field 79 status text in MT messages
- CBPR+ mandates pacs.002 for all payment status communication
- Structured reason codes replace free-text rejection explanations
- SWIFT gpi tracking integration requires pacs.002 for end-to-end transparency

## Ṣíṣàn ìfiránṣẹ́

The instructed agent sends pacs.002 back to the instructing agent to confirm acceptance, settlement, or rejection of a payment instruction such as pacs.008 or pacs.009.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/yo/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Gbígbé owó àṣẹ fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Gbígbé owó àṣẹ láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Ìbéèrè ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

