---
title: "pacs.009.001.10 | Credit transfer sa pagitan ng mga institusyong pinansyal | pacs008"
description: Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover...
lang: tl-PH
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Credit transfer sa pagitan ng mga institusyong pinansyal

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Pangkalahatang-ideya

Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover payment, at pamamahala ng liquidity.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Mga pangunahing elemento ng datos

- **GrpHdr** — Group Header na may pagkakakilanlan ng mensahe at impormasyon ng settlement
- **CdtTrfTxInf** — Impormasyon ng Transaksyon ng Credit Transfer na may interbank settlement amount
- **Dbtr / DbtrAgt** — Pagkakakilanlan ng institusyon ng debtor at ng agent nito
- **Cdtr / CdtrAgt** — Pagkakakilanlan ng institusyon ng creditor at ng agent nito
- **IntrBkSttlmAmt** — Interbank Settlement Amount sa settlement currency

## Konteksto ng negosyo

- Ginagamit para sa sariling-account na transfer sa pagitan ng mga bangko at cover payment
- Sinusuportahan ang pamamahala ng liquidity sa pagitan ng mga correspondent banking partner
- Nagdadala ng cover leg ng mga customer credit transfer
- Sinusuportahan ang mga treasury at financing operation

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header na may pagkakakilanlan ng mensahe at impormasyon ng settlement</td>
          <td class="operational-matrix-table__right">Ginagamit para sa sariling-account na transfer sa pagitan ng mga bangko at cover payment</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Impormasyon ng Transaksyon ng Credit Transfer na may interbank settlement amount</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang pamamahala ng liquidity sa pagitan ng mga correspondent banking partner</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Pagkakakilanlan ng institusyon ng debtor at ng agent nito</td>
          <td class="operational-matrix-table__right">Nagdadala ng cover leg ng mga customer credit transfer</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Pagkakakilanlan ng institusyon ng creditor at ng agent nito</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang mga treasury at financing operation</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbank Settlement Amount sa settlement currency</td>
          <td class="operational-matrix-table__right">Nagpapadala ang bangko ng debtor ng pacs.009 sa bangko ng creditor upang ilipat ang sarili nitong pondo. Sa mga cover flow, nagdadala ang pacs.009 ng financing leg habang nagdadala ang pacs.008 ng instruksiyon ng customer sa ibang landas.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteksto ng CBPR+ at schema

- Pinapalitan ang MT202 at MT202COV para sa mga institution-to-institution na transfer
- Ipinapares ng mga cover-method flow ang pacs.009 sa pinagbabatayan na instruksiyon ng pacs.008
- Lalong nagiging mahalaga ang structured na datos ng partido at pagkakakilanlan sa LEI
- Sinasaklaw din ng SWIFT gpi ang pacs.009

## Daloy ng mensahe

Nagpapadala ang bangko ng debtor ng pacs.009 sa bangko ng creditor upang ilipat ang sarili nitong pondo. Sa mga cover flow, nagdadala ang pacs.009 ng financing leg habang nagdadala ang pacs.008 ng instruksiyon ng customer sa ibang landas.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/tl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.008 ang pangunahing instruksiyon ng customer credit transfer sa pagitan ng mga bangko. Nagdadala ito ng datos ng partido, halaga, at remittance.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Direct debit sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
    </tbody>
  </table>
</div>

