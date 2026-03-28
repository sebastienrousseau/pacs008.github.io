---
title: "pacs.009.001.10 | Canja wurin kuɗi tsakanin cibiyoyin kuɗi | pacs008"
description: Saƙon pacs.009 yana matsar da kuɗi tsakanin bankuna a madadin kansu. Yana tallafawa tallafin kuɗi, biyan kuɗin rufewa, da sarrafa ruwa.
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Canja wurin kuɗi tsakanin cibiyoyin kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Matsayin rajista</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Shekara</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Siga</strong></td>
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Bayyani

Saƙon pacs.009 yana matsar da kuɗi tsakanin bankuna a madadin kansu. Yana tallafawa tallafin kuɗi, biyan kuɗin rufewa, da sarrafa ruwa.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Kan Ƙungiya tare da ganowa saƙo da bayanan biyan kuɗi
- **CdtTrfTxInf** — Bayanan Ciniki na Canja Wurin Kuɗi tare da adadin biyan kuɗi tsakanin bankuna
- **Dbtr / DbtrAgt** — Ganowa na cibiyar mai bashi da wakilinta
- **Cdtr / CdtrAgt** — Ganowa na cibiyar mai ba da bashi da wakilinta
- **IntrBkSttlmAmt** — Adadin Biyan Kuɗi Tsakanin Bankuna a cikin kuɗin biyan kuɗi

## Mahallin kasuwanci

- Ana amfani da shi don canja wurin asusun nasu tsakanin bankuna da biyan kuɗin rufewa
- Yana tallafawa sarrafa ruwa tsakanin abokan ciniki na wakilci
- Yana ɗaukar ɓangaren rufewa na canja wurin kuɗi na abokin ciniki
- Yana tallafawa ayyukan baitulmali da tallafin kuɗi

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Kan Ƙungiya tare da ganowa saƙo da bayanan biyan kuɗi</td>
          <td class="operational-matrix-table__right">Ana amfani da shi don canja wurin asusun nasu tsakanin bankuna da biyan kuɗin rufewa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Bayanan Ciniki na Canja Wurin Kuɗi tare da adadin biyan kuɗi tsakanin bankuna</td>
          <td class="operational-matrix-table__right">Yana tallafawa sarrafa ruwa tsakanin abokan ciniki na wakilci</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Ganowa na cibiyar mai bashi da wakilinta</td>
          <td class="operational-matrix-table__right">Yana ɗaukar ɓangaren rufewa na canja wurin kuɗi na abokin ciniki</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Ganowa na cibiyar mai ba da bashi da wakilinta</td>
          <td class="operational-matrix-table__right">Yana tallafawa ayyukan baitulmali da tallafin kuɗi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Adadin Biyan Kuɗi Tsakanin Bankuna a cikin kuɗin biyan kuɗi</td>
          <td class="operational-matrix-table__right">Bankin mai bashi yana aika pacs.009 zuwa bankin mai ba da bashi don matsar da kuɗinsa. A cikin kwararar rufewa, pacs.009 yana ɗaukar ɓangaren tallafin kuɗi yayin da pacs.008 yana ɗaukar umarnin abokin ciniki a wata hanya daban.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mahallin CBPR+ da tsari

- Yana maye gurbin MT202 da MT202COV don canja wurin tsakanin cibiyoyi
- Kwararar hanyar rufewa tana haɗa pacs.009 da umarnin pacs.008 na abokin ciniki
- Bayanan ɓangare masu tsari da ganowa ta LEI suna da mahimmanci
- SWIFT gpi kuma ya ƙunshi pacs.009

## Kwararar saƙo

Bankin mai bashi yana aika pacs.009 zuwa bankin mai ba da bashi don matsar da kuɗinsa. A cikin kwararar rufewa, pacs.009 yana ɗaukar ɓangaren tallafin kuɗi yayin da pacs.008 yana ɗaukar umarnin abokin ciniki a wata hanya daban.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/ha/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.008 shine babban umarnin canja wurin kuɗi na abokin ciniki tsakanin bankuna. Yana ɗaukar bayanan ɓangare, adadi, da aiko kuɗi.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Cire kuɗi kai tsaye tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
    </tbody>
  </table>
</div>

