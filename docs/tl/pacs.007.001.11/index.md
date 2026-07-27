---
title: "pacs.007.001.11 | Pagbaligtad ng bayad sa pagitan ng mga institusyong pinansyal | pacs008"
description: Ang mensaheng pacs.007 ay nagre-reverse ng naunang instruksiyon sa pagbabayad. Hindi tulad ng pacs.004, nagsisimula ito mula sa orihinal na nagpadala.
lang: tl-PH
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Pagbaligtad ng bayad sa pagitan ng mga institusyong pinansyal

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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

Ang mensaheng pacs.007 ay nagre-reverse ng naunang instruksiyon sa pagbabayad. Hindi tulad ng pacs.004, nagsisimula ito mula sa orihinal na nagpadala.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Mga pangunahing elemento ng datos

- **GrpHdr** — Group Header na may pagkakakilanlan ng mensahe at timestamp ng paglikha
- **TxInf** — Impormasyon ng Transaksyon na may halaga ng reversal at mga partido
- **OrgnlGrpInf** — Orihinal na Impormasyon ng Grupo na tumutukoy sa pinagmulang mensahe
- **RvslRsnInf** — Impormasyon ng Dahilan ng Reversal na may mga structured na reason code
- **OrgnlTxRef** — Orihinal na Reperensya ng Transaksyon para sa traceability mula simula hanggang dulo

## Konteksto ng negosyo

- Ginagamit kapag nakahanap ang orihinal na nagpadala ng error bago o pagkatapos ng settlement
- Ginagamit sa mga kaso ng fraud na nangangailangan ng mabilis na reversal
- Sinusuportahan ang parehong buo at bahagyang reversal ng mga orihinal na halaga ng pagbabayad
- Nagdadala ng mga structured na reversal reason code

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
          <td class="operational-matrix-table__right">Ginagamit kapag nakahanap ang orihinal na nagpadala ng error bago o pagkatapos ng settlement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Impormasyon ng Transaksyon na may halaga ng reversal at mga partido</td>
          <td class="operational-matrix-table__right">Ginagamit sa mga kaso ng fraud na nangangailangan ng mabilis na reversal</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Orihinal na Impormasyon ng Grupo na tumutukoy sa pinagmulang mensahe</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang parehong buo at bahagyang reversal ng mga orihinal na halaga ng pagbabayad</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Impormasyon ng Dahilan ng Reversal na may mga structured na reason code</td>
          <td class="operational-matrix-table__right">Nagdadala ng mga structured na reversal reason code</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Orihinal na Reperensya ng Transaksyon para sa traceability mula simula hanggang dulo</td>
          <td class="operational-matrix-table__right">Nagpapadala ang instruerande agent ng pacs.007 pasulong sa payment chain upang i-reverse ang naunang pagbabayad. Pinoproseso ng bawat agent ang reversal at ina-adjust ang settlement.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteksto ng CBPR+ at schema

- Naiiba sa pacs.004 sa direksyon: ang mga reversal ay pasulong, ang mga return ay pabalik
- Kinakailangan ng CBPR+ ang pagpapares sa mga orihinal na identifier ng mensahe para sa automated na pagtutugma
- Pinapalitan ng mga structured na reason code ang mga free-text na salaysay mula sa mga legacy na mensaheng MT
- Mas madalas na ginagamit sa mga workflow ng recall ng instant payment at fraud

## Daloy ng mensahe

Nagpapadala ang instruerande agent ng pacs.007 pasulong sa payment chain upang i-reverse ang naunang pagbabayad. Pinoproseso ng bawat agent ang reversal at ina-adjust ang settlement.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/tl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.008 ang pangunahing instruksiyon ng customer credit transfer sa pagitan ng mga bangko. Nagdadala ito ng datos ng partido, halaga, at remittance.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Pagbabalik ng bayad</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.004 ay nagbabalik ng pagbabayad na na-settle na. Nagpapadala ito ng pondo pabalik kapag hindi maaaring ma-apply ang pagbabayad.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
    </tbody>
  </table>
</div>

