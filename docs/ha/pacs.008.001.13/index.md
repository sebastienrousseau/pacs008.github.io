---
title: "pacs.008.001.13 | Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi | pacs008"
description: Saƙon pacs.008 shine babban umarnin canja wurin kuɗi na abokin ciniki tsakanin bankuna. Yana ɗaukar bayanan ɓangare, adadi, da aiko kuɗi.
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Fili</th>
        <th scope="col">Ƙima</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Sunan ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Matsayin rajista</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Shekara</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Siga</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Bayyani

Saƙon pacs.008 shine babban umarnin canja wurin kuɗi na abokin ciniki tsakanin bankuna. Yana ɗaukar bayanan ɓangare, adadi, da aiko kuɗi.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Kan Ƙungiya tare da ID saƙo, ranar ƙirƙira, adadin ciniki, da bayanan biyan kuɗi
- **CdtTrfTxInf** — Bayanan Ciniki na Canja Wurin Kuɗi tare da adadi, cajoji, da manufa
- **Dbtr / DbtrAgt** — Ganowa da bayanan asusu na Mai Bashi da Wakilin Mai Bashi
- **Cdtr / CdtrAgt** — Ganowa da bayanan asusu na Mai Ba da Bashi da Wakilin Mai Ba da Bashi
- **RmtInf** — Bayanan Aiko Kuɗi don nassarori na biyan kuɗi masu tsari ko marasa tsari

## Mahallin kasuwanci

- Babban saƙo don canja wurin kuɗi na abokin ciniki
- Ana amfani da shi a cikin SEPA, CBPR+, da tsarin ƙasa na biyan kuɗi
- Yana ɗaukar bayanan aiko kuɗi don daidaitawa
- Yana tallafawa hanyoyin biyan kuɗi na jeri, rufewa, da kai tsaye

<div class="operational-matrix-table" tabindex="0" aria-label="Muhimman abubuwan bayanai Mahallin kasuwanci">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Muhimman abubuwan bayanai</th>
        <th>Mahallin kasuwanci</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Kan Ƙungiya tare da ID saƙo, ranar ƙirƙira, adadin ciniki, da bayanan biyan kuɗi</td>
          <td class="operational-matrix-table__right">Babban saƙo don canja wurin kuɗi na abokin ciniki</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Bayanan Ciniki na Canja Wurin Kuɗi tare da adadi, cajoji, da manufa</td>
          <td class="operational-matrix-table__right">Ana amfani da shi a cikin SEPA, CBPR+, da tsarin ƙasa na biyan kuɗi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Ganowa da bayanan asusu na Mai Bashi da Wakilin Mai Bashi</td>
          <td class="operational-matrix-table__right">Yana ɗaukar bayanan aiko kuɗi don daidaitawa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Ganowa da bayanan asusu na Mai Ba da Bashi da Wakilin Mai Ba da Bashi</td>
          <td class="operational-matrix-table__right">Yana tallafawa hanyoyin biyan kuɗi na jeri, rufewa, da kai tsaye</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Bayanan Aiko Kuɗi don nassarori na biyan kuɗi masu tsari ko marasa tsari</td>
          <td class="operational-matrix-table__right">Wakilin mai bashi yana aika pacs.008 zuwa wakilin mai ba da bashi, ko kai tsaye ko ta hanyar masu shiga tsakani. Kowane wakili yana duba kuma yana tura umarnin har sai wakilin mai ba da bashi ya tura kuɗi zuwa asusun mai amfana.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mahallin CBPR+ da tsari

- Yana maye gurbin MT103 da MT103+ don canja wurin kuɗi na ƙetare iyaka na abokin ciniki
- Ƙarshen wa'adin adireshi mai tsari na Nuwamba 2026 ya shafi adireshin gidan waya na ɓangare
- SWIFT gpi yana amfani da pacs.008 don bin diddigin bisa UETR
- Siga ta 13 ita ce bugu na yanzu na kundin

## Kwararar saƙo

Wakilin mai bashi yana aika pacs.008 zuwa wakilin mai ba da bashi, ko kai tsaye ko ta hanyar masu shiga tsakani. Kowane wakili yana duba kuma yana tura umarnin har sai wakilin mai ba da bashi ya tura kuɗi zuwa asusun mai amfana.

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

## Sigogi da ake tallafawa

<div class="message-versions-table" tabindex="0" aria-label="Sigogi da ake tallafawa">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Siga</th>
        <th>Matsayi</th>
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
          <td class="message-versions-table__status"><strong>Na yanzu</strong></td>
        </tr>
    </tbody>
  </table>
</div>

## Saƙonnin da suka danganta
<div class="related-messages-table" tabindex="0" aria-label="Saƙonnin da suka danganta">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Nau&#39;in saƙo</th>
        <th>Bayani</th>
        <th>Bayyani</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Mayar da biyan kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.004 yana mayar da biyan kuɗi da aka riga aka biya. Yana aika kuɗi baya lokacin da ba za a iya amfani da biyan kuɗi ba.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Canja wurin kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.009 yana matsar da kuɗi tsakanin bankuna a madadin kansu. Yana tallafawa tallafin kuɗi, biyan kuɗin rufewa, da sarrafa ruwa.</td>
        </tr>
    </tbody>
  </table>
</div>

