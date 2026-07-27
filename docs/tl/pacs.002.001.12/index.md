---
title: "pacs.002.001.12 | Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal | pacs008"
description: Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay...
lang: tl-PH
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Pangkalahatang-ideya

Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Mga pangunahing elemento ng datos

- **GrpHdr** — Group Header na may pagkakakilanlan ng mensahe at timestamp ng paglikha
- **OrgnlGrpInfAndSts** — Orihinal na Impormasyon ng Grupo at Katayuan para sa pag-uulat sa antas ng bulk
- **TxInfAndSts** — Impormasyon ng Transaksyon at Katayuan para sa mga indibidwal na resulta ng transaksyon
- **StsRsnInf** — Impormasyon ng Dahilan ng Katayuan na may mga structured na reason code
- **OrgnlTxRef** — Orihinal na Reperensya ng Transaksyon na nag-uugnay pabalik sa pinagmulang instruksiyon

## Konteksto ng negosyo

- Kinukumpirma ang settlement o pagtanggi ng mga credit transfer, direct debit, at return
- Sinusuportahan ang reconciliation sa pagitan ng instruerande at instruktadong agent
- Ginagamit sa mga daloy ng CBPR+ para sa pag-uulat ng katayuan ng pacs.008 at pacs.009
- Sinusuportahan ang pag-uulat ng katayuan sa antas ng grupo at transaksyon

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
          <td class="operational-matrix-table__right">Kinukumpirma ang settlement o pagtanggi ng mga credit transfer, direct debit, at return</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Orihinal na Impormasyon ng Grupo at Katayuan para sa pag-uulat sa antas ng bulk</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang reconciliation sa pagitan ng instruerande at instruktadong agent</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Impormasyon ng Transaksyon at Katayuan para sa mga indibidwal na resulta ng transaksyon</td>
          <td class="operational-matrix-table__right">Ginagamit sa mga daloy ng CBPR+ para sa pag-uulat ng katayuan ng pacs.008 at pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Impormasyon ng Dahilan ng Katayuan na may mga structured na reason code</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang pag-uulat ng katayuan sa antas ng grupo at transaksyon</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Orihinal na Reperensya ng Transaksyon na nag-uugnay pabalik sa pinagmulang instruksiyon</td>
          <td class="operational-matrix-table__right">Nagpapadala ang instruktadong agent ng pacs.002 pabalik sa instruerande agent upang kumpirmahin ang pagtanggap, settlement, o pagtanggi ng instruksiyon sa pagbabayad tulad ng pacs.008 o pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteksto ng CBPR+ at schema

- Pinapalitan ang MT199 at field 79 status text sa mga mensaheng MT
- Inoobliga ng CBPR+ ang pacs.002 para sa lahat ng komunikasyon ng katayuan ng pagbabayad
- Pinapalitan ng mga structured na reason code ang mga paliwanag ng pagtanggi sa free-text
- Nangangailangan ng pacs.002 ang SWIFT gpi tracking integration para sa transparency mula simula hanggang dulo

## Daloy ng mensahe

Nagpapadala ang instruktadong agent ng pacs.002 pabalik sa instruerande agent upang kumpirmahin ang pagtanggap, settlement, o pagtanggi ng instruksiyon sa pagbabayad tulad ng pacs.008 o pacs.009.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
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
          <td class="related-messages-table__id"><a href="/tl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Credit transfer sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover payment, at pamamahala ng liquidity.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Kahilingan ng kalagayan ng bayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

