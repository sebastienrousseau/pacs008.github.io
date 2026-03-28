---
title: "pacs.003.001.09 | Přímý inkaso zákazníka mezi finančními institucemi | pacs008"
description: Zpráva pacs.003 přenáší přímé inkaso zákazníka mezi bankami. Umožňuje bance věřitele inkasovat prostředky od banky dlužníka.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — Přímý inkaso zákazníka mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Přehled

Zpráva pacs.003 přenáší přímé inkaso zákazníka mezi bankami. Umožňuje bance věřitele inkasovat prostředky od banky dlužníka.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a informacemi o vypořádání
- **DrctDbtTxInf** — Informace o transakci přímého inkasa s částkou a stranami
- **Cdtr** — Identifikace věřitele a údaje o účtu
- **CdtrAgt** — Identifikace agenta věřitele (inkasní instituce)
- **DbtrAgt** — Identifikace agenta dlužníka (platící instituce)

## Obchodní kontext

- Podporuje schémata SEPA Core a B2B přímého inkasa
- Používá se pro opakované inkaso jako předplatné a účty
- Vyžaduje platný odkaz na mandát
- Může přenášet více přímých inkas v jedné zprávě

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
          <td class="operational-matrix-table__right">Podporuje schémata SEPA Core a B2B přímého inkasa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informace o transakci přímého inkasa s částkou a stranami</td>
          <td class="operational-matrix-table__right">Používá se pro opakované inkaso jako předplatné a účty</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identifikace věřitele a údaje o účtu</td>
          <td class="operational-matrix-table__right">Vyžaduje platný odkaz na mandát</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identifikace agenta věřitele (inkasní instituce)</td>
          <td class="operational-matrix-table__right">Může přenášet více přímých inkas v jedné zprávě</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identifikace agenta dlužníka (platící instituce)</td>
          <td class="operational-matrix-table__right">Agent věřitele odesílá pacs.003 agentovi dlužníka. Agent dlužníka ověří mandát a transakci vypořádá nebo vrátí.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Pravidla strukturovaných adres a dat o stranách platí i zde.
- Data mandátu musí být strukturována od listopadu 2026.
- Nahrazuje starší formáty přímého inkasa ve stylu MT104 v přeshraničních tocích.
- Identifikátory schémat věřitele vyžadují přísnější validaci.

## Tok zpráv

Agent věřitele odesílá pacs.003 agentovi dlužníka. Agent dlužníka ověří mandát a transakci vypořádá nebo vrátí.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/cs/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Vrácení platby</td>
          <td class="related-messages-table__overview">Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Storno platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.007 stornuje dřívější platební instrukci. Na rozdíl od pacs.004 začíná od původního odesílatele.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
    </tbody>
  </table>
</div>

