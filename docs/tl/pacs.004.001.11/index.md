---
title: "pacs.004.001.11 | Pagbabalik ng bayad | pacs008"
description: Ang mensaheng pacs.004 ay nagbabalik ng pagbabayad na na-settle na. Nagpapadala ito ng pondo pabalik kapag hindi maaaring ma-apply ang pagbabayad.
lang: tl-PH
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Pagbabalik ng bayad

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Pangkalahatang-ideya

Ang mensaheng pacs.004 ay nagbabalik ng pagbabayad na na-settle na. Nagpapadala ito ng pondo pabalik kapag hindi maaaring ma-apply ang pagbabayad.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Mga pangunahing elemento ng datos

- **GrpHdr** — Group Header na may pagkakakilanlan ng mensahe at timestamp ng paglikha
- **TxInf** — Impormasyon ng Transaksyon na may halaga ng pagbabalik at mga partido
- **OrgnlGrpInf** — Orihinal na Impormasyon ng Grupo na nag-uugnay sa pinagmulang mensahe
- **RtrRsnInf** — Impormasyon ng Dahilan ng Pagbabalik na may mga structured na reason code
- **OrgnlTxRef** — Orihinal na Reperensya ng Transaksyon para sa pagtutugma at reconciliation

## Konteksto ng negosyo

- Pinapangasiwaan ang mga pagbabalik pagkatapos ng settlement kapag hindi ma-credit ang account ng beneficiary
- Sinusuportahan ang mga senaryo ng recall kung saan hinihingi ng nagpadala ang pondo pabalik
- Nagdadala ng mga structured na return reason code
- Naaangkop sa parehong credit transfer return (pacs.008) at direct debit return (pacs.003)

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header na may pagkakakilanlan ng mensahe at timestamp ng paglikha</td>
          <td class="operational-matrix-table__right">Pinapangasiwaan ang mga pagbabalik pagkatapos ng settlement kapag hindi ma-credit ang account ng beneficiary</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Impormasyon ng Transaksyon na may halaga ng pagbabalik at mga partido</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang mga senaryo ng recall kung saan hinihingi ng nagpadala ang pondo pabalik</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Orihinal na Impormasyon ng Grupo na nag-uugnay sa pinagmulang mensahe</td>
          <td class="operational-matrix-table__right">Nagdadala ng mga structured na return reason code</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Impormasyon ng Dahilan ng Pagbabalik na may mga structured na reason code</td>
          <td class="operational-matrix-table__right">Naaangkop sa parehong credit transfer return (pacs.008) at direct debit return (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Orihinal na Reperensya ng Transaksyon para sa pagtutugma at reconciliation</td>
          <td class="operational-matrix-table__right">Nagpapadala ang instruktadong agent ng pacs.004 pabalik sa payment chain upang ibalik ang mga na-settle na pondo. Pinoproseso ng bawat agent sa chain ang pagbabalik at kini-credit pabalik sa mga kaugnay na account.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteksto ng CBPR+ at schema

- Pinapalitan ang MT103 RETURN at return messaging na may cover-method
- Ang mga return reason code ay naka-standardize at nababasa ng makina sa ilalim ng ISO 20022
- Kinakailangan ng CBPR+ ang kumpletong orihinal na reperensya ng transaksyon para sa pagtutugma
- Sinasaklaw din ng SWIFT gpi tracking ang mga pagbabalik

## Daloy ng mensahe

Nagpapadala ang instruktadong agent ng pacs.004 pabalik sa payment chain upang ibalik ang mga na-settle na pondo. Pinoproseso ng bawat agent sa chain ang pagbabalik at kini-credit pabalik sa mga kaugnay na account.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/tl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Direct debit ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.003 ay nagdadala ng customer direct debit sa pagitan ng mga bangko. Pinapayagan nito ang bangko ng creditor na mangolekta ng pondo mula sa bangko ng debtor.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
    </tbody>
  </table>
</div>

