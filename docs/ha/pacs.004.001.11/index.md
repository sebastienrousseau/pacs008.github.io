---
title: "pacs.004.001.11 | Mayar da biyan kuɗi | pacs008"
description: Saƙon pacs.004 yana mayar da biyan kuɗi da aka riga aka biya. Yana aika kuɗi baya lokacin da ba za a iya amfani da biyan kuɗi ba.
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Mayar da biyan kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Saƙon pacs.004 yana mayar da biyan kuɗi da aka riga aka biya. Yana aika kuɗi baya lokacin da ba za a iya amfani da biyan kuɗi ba.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Kan Ƙungiya tare da ganowa saƙo da tambarin lokaci ƙirƙira
- **TxInf** — Bayanan Ciniki tare da adadin mayarwa da ɓangarori
- **OrgnlGrpInf** — Asalin Bayanan Ƙungiya da ke haɗa zuwa saƙon tushe
- **RtrRsnInf** — Bayanan Dalilin Mayarwa tare da lambobin dalili masu tsari
- **OrgnlTxRef** — Asalin Nassarin Ciniki don dacewa da daidaitawa

## Mahallin kasuwanci

- Yana sarrafa mayarwa bayan biyan kuɗi lokacin da ba za a iya tura kuɗi zuwa asusun mai amfana ba
- Yana tallafawa yanayin tuno inda mai aika ke neman kuɗi baya
- Yana ɗaukar lambobin dalilin mayarwa masu tsari
- Ya shafi mayar da canja wurin kuɗi (pacs.008) da mayar da cire kuɗi kai tsaye (pacs.003)

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
          <td class="operational-matrix-table__right">Yana sarrafa mayarwa bayan biyan kuɗi lokacin da ba za a iya tura kuɗi zuwa asusun mai amfana ba</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Bayanan Ciniki tare da adadin mayarwa da ɓangarori</td>
          <td class="operational-matrix-table__right">Yana tallafawa yanayin tuno inda mai aika ke neman kuɗi baya</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Asalin Bayanan Ƙungiya da ke haɗa zuwa saƙon tushe</td>
          <td class="operational-matrix-table__right">Yana ɗaukar lambobin dalilin mayarwa masu tsari</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Bayanan Dalilin Mayarwa tare da lambobin dalili masu tsari</td>
          <td class="operational-matrix-table__right">Ya shafi mayar da canja wurin kuɗi (pacs.008) da mayar da cire kuɗi kai tsaye (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Asalin Nassarin Ciniki don dacewa da daidaitawa</td>
          <td class="operational-matrix-table__right">Wakilin da aka umarni yana aika pacs.004 baya ta hanyar jerin biyan kuɗi don mayar da kuɗin da aka biya. Kowane wakili a cikin jerin yana sarrafa mayarwa kuma yana tura kuɗi zuwa asusun da suka dace.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mahallin CBPR+ da tsari

- Yana maye gurbin MT103 RETURN da saƙonnin mayar da hanyar rufewa
- Lambobin dalilin mayarwa sun daidaitu kuma injuna za su iya karanta su a ƙarƙashin ISO 20022
- CBPR+ yana buƙatar cikakken nassarin asalin ciniki don dacewa
- Bin diddigin SWIFT gpi kuma ya ƙunshi mayarwa

## Kwararar saƙo

Wakilin da aka umarni yana aika pacs.004 baya ta hanyar jerin biyan kuɗi don mayar da kuɗin da aka biya. Kowane wakili a cikin jerin yana sarrafa mayarwa kuma yana tura kuɗi zuwa asusun da suka dace.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/ha/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Cire kuɗi kai tsaye na abokin ciniki tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.003 yana ɗaukar cire kuɗi kai tsaye na abokin ciniki tsakanin bankuna. Yana ba bankin mai ba da bashi damar tattara kuɗi daga bankin mai bashi.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
    </tbody>
  </table>
</div>

