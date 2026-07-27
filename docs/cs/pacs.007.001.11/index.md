---
title: "pacs.007.001.11 | Storno platby mezi finančními institucemi | pacs008"
description: Zpráva pacs.007 stornuje dřívější platební instrukci. Na rozdíl od pacs.004 začíná od původního odesílatele.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Storno platby mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Přehled

Zpráva pacs.007 stornuje dřívější platební instrukci. Na rozdíl od pacs.004 začíná od původního odesílatele.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a časovým razítkem vytvoření
- **TxInf** — Informace o transakci s částkou storna a stranami
- **OrgnlGrpInf** — Původní informace o skupině odkazující na zdrojovou zprávu
- **RvslRsnInf** — Informace o důvodu storna se strukturovanými kódy důvodů
- **OrgnlTxRef** — Odkaz na původní transakci pro end-to-end sledovatelnost

## Obchodní kontext

- Používá se, když původní odesílatel najde chybu před nebo po vypořádání
- Používá se v případech podvodu vyžadujících rychlé storno
- Podporuje úplné i částečné storno původní částky platby
- Nese strukturované kódy důvodů storna

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Záhlaví skupiny s identifikací zprávy a časovým razítkem vytvoření</td>
          <td class="operational-matrix-table__right">Používá se, když původní odesílatel najde chybu před nebo po vypořádání</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informace o transakci s částkou storna a stranami</td>
          <td class="operational-matrix-table__right">Používá se v případech podvodu vyžadujících rychlé storno</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Původní informace o skupině odkazující na zdrojovou zprávu</td>
          <td class="operational-matrix-table__right">Podporuje úplné i částečné storno původní částky platby</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informace o důvodu storna se strukturovanými kódy důvodů</td>
          <td class="operational-matrix-table__right">Nese strukturované kódy důvodů storna</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Odkaz na původní transakci pro end-to-end sledovatelnost</td>
          <td class="operational-matrix-table__right">Zadávající agent odesílá pacs.007 dopředu přes platební řetězec ke stornování dřívější platby. Každý agent zpracuje storno a upraví vypořádání.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Odlišuje se od pacs.004 směrem: storna jdou dopředu, vratky jdou zpět
- CBPR+ vyžaduje spárování s identifikátory původní zprávy pro automatické párování
- Strukturované kódy důvodů nahrazují volný text ze starších zpráv MT
- Stále více se používá v pracovních postupech odvolání okamžitých plateb a boje proti podvodům

## Tok zpráv

Zadávající agent odesílá pacs.007 dopředu přes platební řetězec ke stornování dřívější platby. Každý agent zpracuje storno a upraví vypořádání.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/cs/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Úhrada zákazníka mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.008 je hlavní instrukce zákaznické úhrady mezi bankami. Nese data o stranách, částce a účelu platby.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Vrácení platby</td>
          <td class="related-messages-table__overview">Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
    </tbody>
  </table>
</div>

