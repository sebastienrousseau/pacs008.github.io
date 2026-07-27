---
title: "pacs.008.001.13 | Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal | pacs008"
description: Ang mensaheng pacs.008 ang pangunahing instruksiyon ng customer credit transfer sa pagitan ng mga bangko. Nagdadala ito ng datos ng partido, halaga, at...
lang: tl-PH
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Katayuan ng rehistrasyon</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Taon</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Bersyon</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Pangkalahatang-ideya

Ang mensaheng pacs.008 ang pangunahing instruksiyon ng customer credit transfer sa pagitan ng mga bangko. Nagdadala ito ng datos ng partido, halaga, at remittance.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Mga pangunahing elemento ng datos

- **GrpHdr** — Group Header na may message ID, petsa ng paglikha, bilang ng mga transaksyon, at impormasyon ng settlement
- **CdtTrfTxInf** — Impormasyon ng Transaksyon ng Credit Transfer na may halaga, mga singil, at layunin
- **Dbtr / DbtrAgt** — Pagkakakilanlan at mga detalye ng account ng Debtor at Debtor Agent
- **Cdtr / CdtrAgt** — Pagkakakilanlan at mga detalye ng account ng Creditor at Creditor Agent
- **RmtInf** — Impormasyon ng Remittance para sa mga structured o unstructured na reperensya ng pagbabayad

## Konteksto ng negosyo

- Pangunahing mensahe para sa mga customer credit transfer
- Ginagamit sa SEPA, CBPR+, at mga pambansang clearing system
- Nagdadala ng datos ng remittance para sa reconciliation
- Sinusuportahan ang serial, cover, at direktang mga paraan ng settlement

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header na may message ID, petsa ng paglikha, bilang ng mga transaksyon, at impormasyon ng settlement</td>
          <td class="operational-matrix-table__right">Pangunahing mensahe para sa mga customer credit transfer</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Impormasyon ng Transaksyon ng Credit Transfer na may halaga, mga singil, at layunin</td>
          <td class="operational-matrix-table__right">Ginagamit sa SEPA, CBPR+, at mga pambansang clearing system</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Pagkakakilanlan at mga detalye ng account ng Debtor at Debtor Agent</td>
          <td class="operational-matrix-table__right">Nagdadala ng datos ng remittance para sa reconciliation</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Pagkakakilanlan at mga detalye ng account ng Creditor at Creditor Agent</td>
          <td class="operational-matrix-table__right">Sinusuportahan ang serial, cover, at direktang mga paraan ng settlement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Impormasyon ng Remittance para sa mga structured o unstructured na reperensya ng pagbabayad</td>
          <td class="operational-matrix-table__right">Nagpapadala ang debtor agent ng pacs.008 sa creditor agent, direkta o sa pamamagitan ng mga intermediary. Sinusuri at ipinapasa ng bawat agent ang instruksiyon hanggang sa i-credit ng creditor agent ang beneficiary.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteksto ng CBPR+ at schema

- Pinapalitan ang MT103 at MT103+ para sa mga cross-border na customer credit transfer
- Naaangkop ang deadline ng structured address sa Nobyembre 2026 sa mga address ng partido
- Ginagamit ng SWIFT gpi ang pacs.008 para sa UETR-based na tracking
- Bersyon 13 ang kasalukuyang rebisyon ng katalogo

## Daloy ng mensahe

Nagpapadala ang debtor agent ng pacs.008 sa creditor agent, direkta o sa pamamagitan ng mga intermediary. Sinusuri at ipinapasa ng bawat agent ang instruksiyon hanggang sa i-credit ng creditor agent ang beneficiary.

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

## Mga sinusuportahang bersyon

<div class="message-versions-table" tabindex="0" aria-label="Mga sinusuportahang bersyon">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Bersyon</th>
        <th>Katayuan</th>
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
          <td class="message-versions-table__status"><strong>Kasalukuyan</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Pagbabalik ng bayad</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.004 ay nagbabalik ng pagbabayad na na-settle na. Nagpapadala ito ng pondo pabalik kapag hindi maaaring ma-apply ang pagbabayad.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Credit transfer sa pagitan ng mga institusyong pinansyal</td>
          <td class="related-messages-table__overview">Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover payment, at pamamahala ng liquidity.</td>
        </tr>
    </tbody>
  </table>
</div>

