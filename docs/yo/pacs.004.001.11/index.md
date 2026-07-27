---
title: "pacs.004.001.11 | Ìdápadà ìsanwó | pacs008"
description: The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied.
lang: yo-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Ìdápadà ìsanwó

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Àkópọ̀

The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Àwọn ẹ̀ka dátà pàtàkì

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information with return amount and parties
- **OrgnlGrpInf** — Original Group Information linking to the source message
- **RtrRsnInf** — Return Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference for matching and reconciliation

## Ìpò ìṣòwò

- Handles post-settlement returns when the beneficiary's account cannot be credited
- Supports recall scenarios where the originator requests funds back
- Carries structured return reason codes
- Applies to both credit transfer returns (pacs.008) and direct debit returns (pacs.003)

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
          <td class="operational-matrix-table__right">Handles post-settlement returns when the beneficiary&#39;s account cannot be credited</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaction Information with return amount and parties</td>
          <td class="operational-matrix-table__right">Supports recall scenarios where the originator requests funds back</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Original Group Information linking to the source message</td>
          <td class="operational-matrix-table__right">Carries structured return reason codes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Return Reason Information with structured reason codes</td>
          <td class="operational-matrix-table__right">Applies to both credit transfer returns (pacs.008) and direct debit returns (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Original Transaction Reference for matching and reconciliation</td>
          <td class="operational-matrix-table__right">The instructed agent sends pacs.004 back through the payment chain to return settled funds. Each agent in the chain processes the return and credits back the relevant accounts.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ìpò CBPR+ àti ètò

- Replaces MT103 RETURN and cover-method return messaging
- Return reason codes are standardised and machine-readable under ISO 20022
- CBPR+ requires the full original transaction reference for matching
- SWIFT gpi tracking also covers returns

## Ṣíṣàn ìfiránṣẹ́

The instructed agent sends pacs.004 back through the payment chain to return settled funds. Each agent in the chain processes the return and credits back the relevant accounts.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
        <th>Irú ìfiránṣẹ́</th>
        <th>Àlàyé</th>
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
          <td class="related-messages-table__id"><a href="/yo/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Gbígbà owó tààrà fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.003 message carries a customer direct debit between banks. It lets the creditor bank collect funds from the debtor bank.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ìròyìn ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
    </tbody>
  </table>
</div>

