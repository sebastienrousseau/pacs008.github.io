---
title: "pacs.010.001.05 | Přímý inkaso mezi finančními institucemi | pacs008"
description: Zpráva pacs.010 se používá pro přímé inkaso mezi vlastními účty finančních institucí. Umožňuje jedné instituci inkasovat prostředky přímo z účtu druhé...
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Přímý inkaso mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Pole</th>
        <th scope="col">Hodnota</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO název</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Stav registrace</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Rok</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Verze</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Přehled

Zpráva pacs.010 se používá pro přímé inkaso mezi vlastními účty finančních institucí. Umožňuje jedné instituci inkasovat prostředky přímo z účtu druhé instituce.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a informacemi o vypořádání
- **DrctDbtTxInf** — Informace o transakci přímého inkasa s inkasní částkou
- **Cdtr / CdtrAgt** — Identifikace instituce věřitele a agenta
- **Dbtr / DbtrAgt** — Identifikace instituce dlužníka a agenta
- **IntrBkSttlmAmt** — Mezibankovní vypořádací částka v měně vypořádání

## Obchodní kontext

- Podporuje mezibankovní inkaso přímým inkasem mezi finančními institucemi
- Používá se pro inkaso poplatků, margin calls a institucionální vypořádací závazky
- Vyžaduje předem dohodnutá bilaterální ujednání mezi zúčastněnými institucemi
- Kritické pro institucionální řízení hotovosti a mezibankovní vypořádací cykly

<div class="operational-matrix-table" tabindex="0" aria-label="Klíčové datové prvky Obchodní kontext">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Klíčové datové prvky</th>
        <th>Obchodní kontext</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Záhlaví skupiny s identifikací zprávy a informacemi o vypořádání</td>
          <td class="operational-matrix-table__right">Podporuje mezibankovní inkaso přímým inkasem mezi finančními institucemi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informace o transakci přímého inkasa s inkasní částkou</td>
          <td class="operational-matrix-table__right">Používá se pro inkaso poplatků, margin calls a institucionální vypořádací závazky</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identifikace instituce věřitele a agenta</td>
          <td class="operational-matrix-table__right">Vyžaduje předem dohodnutá bilaterální ujednání mezi zúčastněnými institucemi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identifikace instituce dlužníka a agenta</td>
          <td class="operational-matrix-table__right">Kritické pro institucionální řízení hotovosti a mezibankovní vypořádací cykly</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Mezibankovní vypořádací částka v měně vypořádání</td>
          <td class="operational-matrix-table__right">Instituce věřitele odesílá pacs.010 instituci dlužníka k inkasu prostředků na základě předem dohodnutého ujednání. Instituce dlužníka ověří požadavek a přímé inkaso vypořádá nebo zamítne.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Nahrazuje prvky MT204 při mezibankovním zpracování přímého inkasa
- Strukturovaná identifikace stran podléhá stejným požadavkům jako ostatní zprávy pacs
- Validace identifikátorů institucí (BIC, LEI) je povinná
- Zahrnuto v plánu plného přijetí ISO 20022 v tržní infrastruktuře

## Tok zpráv

Instituce věřitele odesílá pacs.010 instituci dlužníka k inkasu prostředků na základě předem dohodnutého ujednání. Instituce dlužníka ověří požadavek a přímé inkaso vypořádá nebo zamítne.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Související zprávy
<div class="related-messages-table" tabindex="0" aria-label="Související zprávy">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Typ zprávy</th>
        <th>Popis</th>
        <th>Přehled</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Úhrada mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Přímý inkaso zákazníka mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.003 přenáší přímé inkaso zákazníka mezi bankami. Umožňuje bance věřitele inkasovat prostředky od banky dlužníka.</td>
        </tr>
    </tbody>
  </table>
</div>

