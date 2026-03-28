---
title: "pacs.010.001.05 | Gbígbà owó tààrà láàárín àwọn ilé-iṣẹ́ ìṣúná | pacs008"
description: "The pacs.010 message lets one financial institution debit another institution's own account. It is for bank-to-bank collections, not customer direct debits."
lang: yo-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Gbígbà owó tààrà láàárín àwọn ilé-iṣẹ́ ìṣúná

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

The pacs.010 message lets one financial institution debit another institution's own account. It is for bank-to-bank collections, not customer direct debits.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Àwọn ẹ̀ka dátà pàtàkì

- **GrpHdr** — Group Header with message identification and settlement information
- **DrctDbtTxInf** — Direct Debit Transaction Information with collection amount
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency

## Ìpò ìṣòwò

- Supports bank-to-bank direct-debit collection
- Used for fees, margin calls, and similar obligations
- Needs a bilateral agreement between the banks
- Often sits in treasury or liquidity operations

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

## Ìpò CBPR+ àti ètò

- It maps older interbank direct-debit processing into ISO 20022.
- It follows the same structured party-data rules as other pacs messages.
- Bank identifiers such as BIC and LEI still need validation.
- It appears in wider ISO 20022 migration plans.

## Ṣíṣàn ìfiránṣẹ́

The collecting bank sends pacs.010 under a bilateral agreement. The receiving bank checks the request and either settles or rejects it.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
        <th>Irú ìfiránṣẹ́</th>
        <th>Àlàyé</th>
        <th>Àkópọ̀</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Gbígbé owó àṣẹ láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ìròyìn ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/yo/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Gbígbà owó tààrà fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná</td>
          <td class="related-messages-table__overview">The pacs.003 message carries a customer direct debit between banks. It lets the creditor bank collect funds from the debtor bank.</td>
        </tr>
    </tbody>
  </table>
</div>

