---
title: "pacs.008.001.13 | Gbígbé owó àṣẹ fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná | pacs008"
description: The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.
lang: yo-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Gbígbé owó àṣẹ fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ipò ìforúkọsílẹ̀</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ọdún</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ẹ̀dà</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Àkópọ̀

The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Àwọn ẹ̀ka dátà pàtàkì

- **GrpHdr** — Group Header with message ID, creation date, number of transactions, and settlement information
- **CdtTrfTxInf** — Credit Transfer Transaction Information with amount, charges, and purpose
- **Dbtr / DbtrAgt** — Debtor and Debtor Agent identification and account details
- **Cdtr / CdtrAgt** — Creditor and Creditor Agent identification and account details
- **RmtInf** — Remittance Information for structured or unstructured payment references

## Ìpò ìṣòwò

- Main message for customer credit transfers
- Used across SEPA, CBPR+, and national clearing systems
- Carries remittance data for reconciliation
- Supports serial, cover, and direct settlement methods

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message ID, creation date, number of transactions, and settlement information</td>
          <td class="operational-matrix-table__right">Main message for customer credit transfers</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Credit Transfer Transaction Information with amount, charges, and purpose</td>
          <td class="operational-matrix-table__right">Used across SEPA, CBPR+, and national clearing systems</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Debtor and Debtor Agent identification and account details</td>
          <td class="operational-matrix-table__right">Carries remittance data for reconciliation</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Creditor and Creditor Agent identification and account details</td>
          <td class="operational-matrix-table__right">Supports serial, cover, and direct settlement methods</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Remittance Information for structured or unstructured payment references</td>
          <td class="operational-matrix-table__right">The debtor agent sends pacs.008 to the creditor agent, either directly or through intermediaries. Each agent checks and forwards the instruction until the creditor agent credits the beneficiary.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ìpò CBPR+ àti ètò

- Replaces MT103 and MT103+ for cross-border customer credit transfers
- The November 2026 structured-address deadline applies to party addresses
- SWIFT gpi uses pacs.008 for UETR-based tracking
- Version 13 is the current catalogue revision

## Ṣíṣàn ìfiránṣẹ́

The debtor agent sends pacs.008 to the creditor agent, either directly or through intermediaries. Each agent checks and forwards the instruction until the creditor agent credits the beneficiary.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Àwọn ẹ̀dà tí a ń ṣe àtìlẹ́yìn fún

<div class="message-versions-table" tabindex="0" aria-label="Àwọn ẹ̀dà tí a ń ṣe àtìlẹ́yìn fún">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Ẹ̀dà</th>
        <th>Ipò</th>
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
          <td class="message-versions-table__status"><strong>Lọ́wọ́lọ́wọ́</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/yo/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Ìdápadà ìsanwó</td>
          <td class="related-messages-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Gbígbé owó àṣẹ láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
    </tbody>
  </table>
</div>

