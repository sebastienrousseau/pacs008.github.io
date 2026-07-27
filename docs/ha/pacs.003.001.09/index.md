---
title: "pacs.003.001.09 | Cire kuɗi kai tsaye na abokin ciniki tsakanin cibiyoyin kuɗi | pacs008"
description: Saƙon pacs.003 yana ɗaukar cire kuɗi kai tsaye na abokin ciniki tsakanin bankuna. Yana ba bankin mai ba da bashi damar tattara kuɗi daga bankin mai bashi.
lang: ha-NG
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — Cire kuɗi kai tsaye na abokin ciniki tsakanin cibiyoyin kuɗi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Bayyani

Saƙon pacs.003 yana ɗaukar cire kuɗi kai tsaye na abokin ciniki tsakanin bankuna. Yana ba bankin mai ba da bashi damar tattara kuɗi daga bankin mai bashi.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Muhimman abubuwan bayanai

- **GrpHdr** — Kan Ƙungiya tare da ganowa saƙo da bayanan biyan kuɗi
- **DrctDbtTxInf** — Bayanan Ciniki na Cire Kuɗi Kai Tsaye tare da adadi da ɓangarori
- **Cdtr** — Ganowa da bayanan asusu na mai ba da bashi
- **CdtrAgt** — Ganowa na Wakilin Mai Ba da Bashi (cibiyar tattarawa)
- **DbtrAgt** — Ganowa na Wakilin Mai Bashi (cibiyar biyan kuɗi)

## Mahallin kasuwanci

- Yana tallafawa tsarin cire kuɗi kai tsaye na SEPA Core da B2B
- Ana amfani da shi don tattarawa akai-akai kamar biyan kuɗi da lasisi
- Yana buƙatar nassarin izini mai inganci
- Zai iya ɗaukar cire kuɗi kai tsaye da yawa a cikin saƙo guda

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
          <td class="operational-matrix-table__right">Yana tallafawa tsarin cire kuɗi kai tsaye na SEPA Core da B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Bayanan Ciniki na Cire Kuɗi Kai Tsaye tare da adadi da ɓangarori</td>
          <td class="operational-matrix-table__right">Ana amfani da shi don tattarawa akai-akai kamar biyan kuɗi da lasisi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Ganowa da bayanan asusu na mai ba da bashi</td>
          <td class="operational-matrix-table__right">Yana buƙatar nassarin izini mai inganci</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Ganowa na Wakilin Mai Ba da Bashi (cibiyar tattarawa)</td>
          <td class="operational-matrix-table__right">Zai iya ɗaukar cire kuɗi kai tsaye da yawa a cikin saƙo guda</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Ganowa na Wakilin Mai Bashi (cibiyar biyan kuɗi)</td>
          <td class="operational-matrix-table__right">Wakilin mai ba da bashi yana aika pacs.003 zuwa wakilin mai bashi. Wakilin mai bashi yana duba izinin kuma ya biya ko ya mayar da cinikin.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mahallin CBPR+ da tsari

- Ƙa'idodin adireshi mai tsari da bayanan ɓangare sun shafi nan ma.
- Bayanan izini dole ne su kasance masu tsari daga Nuwamba 2026.
- Yana maye gurbin tsofaffin tsarin cire kuɗi kai tsaye na MT104 a cikin kwararar ƙetare iyaka.
- Masu ganowa na tsarin mai ba da bashi suna buƙatar ƙarin tabbatarwa.

## Kwararar saƙo

Wakilin mai ba da bashi yana aika pacs.003 zuwa wakilin mai bashi. Wakilin mai bashi yana duba izinin kuma ya biya ko ya mayar da cinikin.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/ha/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Mayar da biyan kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.004 yana mayar da biyan kuɗi da aka riga aka biya. Yana aika kuɗi baya lokacin da ba za a iya amfani da biyan kuɗi ba.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Soke biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.007 yana soke umarnin biyan kuɗi da ya gabata. Banbanci da pacs.004, yana farawa daga mai aika na asali.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="related-messages-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
    </tbody>
  </table>
</div>

