---
title: "pacs.002.001.12 | Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi | pacs008"
description: Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Bayyani

Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Kan Ƙungiya tare da ganowa saƙo da tambarin lokaci ƙirƙira
- **OrgnlGrpInfAndSts** — Asalin Bayanan Ƙungiya da Matsayi don rahoton matakin tari
- **TxInfAndSts** — Bayanan Ciniki da Matsayi don sakamakon ciniki ɗaya-ɗaya
- **StsRsnInf** — Bayanan Dalilin Matsayi tare da lambobin dalili masu tsari
- **OrgnlTxRef** — Asalin Nassarin Ciniki da ke haɗa zuwa umarnin tushe

## Mahallin kasuwanci

- Yana tabbatar da biyan kuɗi ko ƙi na canja wurin kuɗi, cire kuɗi kai tsaye, da mayarwa
- Yana tallafawa daidaitawa tsakanin wakilin mai umarni da wanda aka umarni
- Ana amfani da shi a cikin kwararar CBPR+ don rahoton matsayin pacs.008 da pacs.009
- Yana tallafawa rahoton matsayin matakin ƙungiya da matakin ciniki

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Kan Ƙungiya tare da ganowa saƙo da tambarin lokaci ƙirƙira</td>
          <td class="operational-matrix-table__right">Yana tabbatar da biyan kuɗi ko ƙi na canja wurin kuɗi, cire kuɗi kai tsaye, da mayarwa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Asalin Bayanan Ƙungiya da Matsayi don rahoton matakin tari</td>
          <td class="operational-matrix-table__right">Yana tallafawa daidaitawa tsakanin wakilin mai umarni da wanda aka umarni</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Bayanan Ciniki da Matsayi don sakamakon ciniki ɗaya-ɗaya</td>
          <td class="operational-matrix-table__right">Ana amfani da shi a cikin kwararar CBPR+ don rahoton matsayin pacs.008 da pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Bayanan Dalilin Matsayi tare da lambobin dalili masu tsari</td>
          <td class="operational-matrix-table__right">Yana tallafawa rahoton matsayin matakin ƙungiya da matakin ciniki</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Asalin Nassarin Ciniki da ke haɗa zuwa umarnin tushe</td>
          <td class="operational-matrix-table__right">Wakilin da aka umarni yana aika pacs.002 zuwa ga wakilin mai umarni don tabbatar da karɓa, biyan kuɗi, ko ƙin umarnin biyan kuɗi kamar pacs.008 ko pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mahallin CBPR+ da tsari

- Yana maye gurbin MT199 da rubutun matsayi na fili 79 a cikin saƙonnin MT
- CBPR+ ya tilasta pacs.002 don duk sadarwar matsayin biyan kuɗi
- Lambobin dalili masu tsari suna maye gurbin bayanin ƙin da ba a tsara ba
- Haɗin gwiwar bin diddigin SWIFT gpi yana buƙatar pacs.002 don ganuwa daga farko zuwa ƙarshe

## Kwararar saƙo

Wakilin da aka umarni yana aika pacs.002 zuwa ga wakilin mai umarni don tabbatar da karɓa, biyan kuɗi, ko ƙin umarnin biyan kuɗi kamar pacs.008 ko pacs.009.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/ha/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Canja wurin kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.009 yana matsar da kuɗi tsakanin bankuna a madadin kansu. Yana tallafawa tallafin kuɗi, biyan kuɗin rufewa, da sarrafa ruwa.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Neman matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

