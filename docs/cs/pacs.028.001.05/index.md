---
title: "pacs.028.001.05 | Dotaz na stav platby mezi finančními institucemi | pacs008"
description: Zpráva pacs.028 se používá k dotazu na stav dříve odeslané platební instrukce. Umožňuje aktivní sledování zpracování plateb bez čekání na stavové zprávy.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — Dotaz na stav platby mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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

Zpráva pacs.028 se používá k dotazu na stav dříve odeslané platební instrukce. Umožňuje aktivní sledování zpracování plateb bez čekání na stavové zprávy.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a časovým razítkem vytvoření
- **TxInf** — Informace o transakci identifikující dotazovanou platbu
- **OrgnlGrpInf** — Původní informace o skupině odkazující na zdrojovou zprávu
- **OrgnlInstrId** — Identifikátor původní instrukce ze zdrojové platby
- **OrgnlEndToEndId** — Původní identifikátor end-to-end pro sledovatelnost

## Obchodní kontext

- Podporuje aktivní dotazy na stav platebních instrukcí v přepravě
- Pomáhá provozním týmům vyšetřovat zpožděné nebo ztracené platby
- Doplňuje pacs.002 aktivním zahájením stavové komunikace namísto čekání
- Používá se v pracovních postupech zpracování výjimek a sledování SLA

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
          <td class="operational-matrix-table__right">Podporuje aktivní dotazy na stav platebních instrukcí v přepravě</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informace o transakci identifikující dotazovanou platbu</td>
          <td class="operational-matrix-table__right">Pomáhá provozním týmům vyšetřovat zpožděné nebo ztracené platby</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Původní informace o skupině odkazující na zdrojovou zprávu</td>
          <td class="operational-matrix-table__right">Doplňuje pacs.002 aktivním zahájením stavové komunikace namísto čekání</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Identifikátor původní instrukce ze zdrojové platby</td>
          <td class="operational-matrix-table__right">Používá se v pracovních postupech zpracování výjimek a sledování SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Původní identifikátor end-to-end pro sledovatelnost</td>
          <td class="operational-matrix-table__right">Zadávající agent odesílá pacs.028 provedenému agentovi s žádostí o stav konkrétní platby. Provedený agent odpovídá zprávou pacs.002 obsahující aktuální stav zpracování.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Nahrazuje vzory stavových dotazů MT199 a manuální dotazy na zprávy SWIFT
- CBPR+ podporuje strukturované stavové požadavky propojené s identifikátory původních zpráv
- Sledování založené na UETR prostřednictvím gpi snižuje potřebu manuálních dotazů
- Stále více se integruje do automatizovaných dashboardů platebních operací

## Tok zpráv

Zadávající agent odesílá pacs.028 provedenému agentovi s žádostí o stav konkrétní platby. Provedený agent odpovídá zprávou pacs.002 obsahující aktuální stav zpracování.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Úhrada zákazníka mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.008 je hlavní instrukce zákaznické úhrady mezi bankami. Nese data o stranách, částce a účelu platby.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Úhrada mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.</td>
        </tr>
    </tbody>
  </table>
</div>

