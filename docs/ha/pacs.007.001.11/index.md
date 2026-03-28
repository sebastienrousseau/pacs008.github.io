---
title: "pacs.007.001.11 | Soke biyan kuɗi tsakanin cibiyoyin kuɗi | pacs008"
description: Saƙon pacs.007 yana soke umarnin biyan kuɗi da ya gabata. Banbanci da pacs.004, yana farawa daga mai aika na asali.
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Soke biyan kuɗi tsakanin cibiyoyin kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Bayyani

Saƙon pacs.007 yana soke umarnin biyan kuɗi da ya gabata. Banbanci da pacs.004, yana farawa daga mai aika na asali.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Kan Ƙungiya tare da ganowa saƙo da tambarin lokaci ƙirƙira
- **TxInf** — Bayanan Ciniki tare da adadin sokewa da ɓangarori
- **OrgnlGrpInf** — Asalin Bayanan Ƙungiya da ke nuna saƙon tushe
- **RvslRsnInf** — Bayanan Dalilin Sokewa tare da lambobin dalili masu tsari
- **OrgnlTxRef** — Asalin Nassarin Ciniki don ganuwa daga farko zuwa ƙarshe

## Mahallin kasuwanci

- Ana amfani da shi lokacin da mai aika na asali ya sami kuskure kafin ko bayan biyan kuɗi
- Ana amfani da shi a cikin lamuran zamba da ke buƙatar saurin sokewa
- Yana tallafawa sokewar cikakken ko ɓangarori na adadin biyan kuɗi na asali
- Yana ɗaukar lambobin dalilin sokewa masu tsari

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
          <td class="operational-matrix-table__right">Ana amfani da shi lokacin da mai aika na asali ya sami kuskure kafin ko bayan biyan kuɗi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Bayanan Ciniki tare da adadin sokewa da ɓangarori</td>
          <td class="operational-matrix-table__right">Ana amfani da shi a cikin lamuran zamba da ke buƙatar saurin sokewa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Asalin Bayanan Ƙungiya da ke nuna saƙon tushe</td>
          <td class="operational-matrix-table__right">Yana tallafawa sokewar cikakken ko ɓangarori na adadin biyan kuɗi na asali</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Bayanan Dalilin Sokewa tare da lambobin dalili masu tsari</td>
          <td class="operational-matrix-table__right">Yana ɗaukar lambobin dalilin sokewa masu tsari</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Asalin Nassarin Ciniki don ganuwa daga farko zuwa ƙarshe</td>
          <td class="operational-matrix-table__right">Wakilin mai umarni yana aika pacs.007 gaba ta hanyar jerin biyan kuɗi don soke biyan kuɗin da ya gabata. Kowane wakili yana sarrafa sokewar kuma yana daidaita biyan kuɗi.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mahallin CBPR+ da tsari

- Ya bambanta da pacs.004 ta hanyar alkibla: sokewa na ci gaba, mayarwa na komawa baya
- CBPR+ yana buƙatar haɗawa da masu ganowa saƙon asali don dacewa ta atomatik
- Lambobin dalili masu tsari suna maye gurbin labarin da ba a tsara ba daga tsofaffin saƙonnin MT
- Ana amfani da shi sosai a cikin tuno biyan kuɗi nan take da ayyukan zamba

## Kwararar saƙo

Wakilin mai umarni yana aika pacs.007 gaba ta hanyar jerin biyan kuɗi don soke biyan kuɗin da ya gabata. Kowane wakili yana sarrafa sokewar kuma yana daidaita biyan kuɗi.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/ha/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Mayar da biyan kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.004 yana mayar da biyan kuɗi da aka riga aka biya. Yana aika kuɗi baya lokacin da ba za a iya amfani da biyan kuɗi ba.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
    </tbody>
  </table>
</div>

