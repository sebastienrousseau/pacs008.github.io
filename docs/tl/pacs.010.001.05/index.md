---
title: "pacs.010.001.05 | Direct debit sa pagitan ng mga institusyong pinansyal | pacs008"
description: "The pacs.010 message lets one financial institution debit another institution's own account. It is for bank-to-bank collections, not customer direct debits."
lang: tl-PH
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Direct debit sa pagitan ng mga institusyong pinansyal

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Field</th>
        <th scope="col">Halaga</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Pangalang ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Katayuan ng rehistrasyon</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Taon</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Bersyon</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Pangkalahatang-ideya

The pacs.010 message lets one financial institution debit another institution's own account. It is for bank-to-bank collections, not customer direct debits.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Mga pangunahing elemento ng datos

- **GrpHdr** — Group Header with message identification and settlement information
- **DrctDbtTxInf** — Direct Debit Transaction Information with collection amount
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency

## Konteksto ng negosyo

- Supports bank-to-bank direct-debit collection
- Used for fees, margin calls, and similar obligations
- Needs a bilateral agreement between the banks
- Often sits in treasury or liquidity operations

<div class="operational-matrix-table" tabindex="0" aria-label="Mga pangunahing elemento ng datos Konteksto ng negosyo">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Mga pangunahing elemento ng datos</th>
        <th>Konteksto ng negosyo</th>
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

## Konteksto ng CBPR+ at schema

- It maps older interbank direct-debit processing into ISO 20022.
- It follows the same structured party-data rules as other pacs messages.
- Bank identifiers such as BIC and LEI still need validation.
- It appears in wider ISO 20022 migration plans.

## Daloy ng mensahe

The collecting bank sends pacs.010 under a bilateral agreement. The receiving bank checks the request and either settles or rejects it.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Mga kaugnay na mensahe
<div class="related-messages-table" tabindex="0" aria-label="Mga kaugnay na mensahe">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Uri ng mensahe</th>
        <th>Paglalarawan</th>
        <th>Pangkalahatang-ideya</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Credit transfer sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover payment, at pamamahala ng liquidity.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Direct debit ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.003 ay nagdadala ng customer direct debit sa pagitan ng mga bangko. Pinapayagan nito ang bangko ng creditor na mangolekta ng pondo mula sa bangko ng debtor.</td>
        </tr>
    </tbody>
  </table>
</div>

