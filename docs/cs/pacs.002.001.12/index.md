---
title: "pacs.002.001.12 | Zpráva o stavu platby mezi finančními institucemi | pacs008"
description: Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Zpráva o stavu platby mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Přehled

Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a časovým razítkem vytvoření
- **OrgnlGrpInfAndSts** — Původní informace o skupině a stav pro hromadné hlášení
- **TxInfAndSts** — Informace o transakci a stav pro výsledky jednotlivých transakcí
- **StsRsnInf** — Informace o důvodu stavu se strukturovanými kódy důvodů
- **OrgnlTxRef** — Odkaz na původní transakci propojující zpět ke zdrojové instrukci

## Obchodní kontext

- Potvrzuje vypořádání nebo hlásí zamítnutí úhrad, přímých inkas a vratek
- Podporuje rekonciliaci mezi zadávajícím a provedeným agentem
- Používá se v tocích CBPR+ pro hlášení stavu pacs.008 a pacs.009
- Podporuje hlášení stavu na úrovni skupiny i jednotlivých transakcí

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
          <td class="operational-matrix-table__right">Potvrzuje vypořádání nebo hlásí zamítnutí úhrad, přímých inkas a vratek</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Původní informace o skupině a stav pro hromadné hlášení</td>
          <td class="operational-matrix-table__right">Podporuje rekonciliaci mezi zadávajícím a provedeným agentem</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Informace o transakci a stav pro výsledky jednotlivých transakcí</td>
          <td class="operational-matrix-table__right">Používá se v tocích CBPR+ pro hlášení stavu pacs.008 a pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Informace o důvodu stavu se strukturovanými kódy důvodů</td>
          <td class="operational-matrix-table__right">Podporuje hlášení stavu na úrovni skupiny i jednotlivých transakcí</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Odkaz na původní transakci propojující zpět ke zdrojové instrukci</td>
          <td class="operational-matrix-table__right">Provedený agent odesílá pacs.002 zpět zadávajícímu agentovi k potvrzení přijetí, vypořádání nebo zamítnutí platební instrukce jako pacs.008 nebo pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Nahrazuje MT199 a stavový text pole 79 ve zprávách MT
- CBPR+ vyžaduje pacs.002 pro veškerou komunikaci o stavu plateb
- Strukturované kódy důvodů nahrazují volně textová vysvětlení zamítnutí
- Integrace sledování SWIFT gpi vyžaduje pacs.002 pro transparentnost end-to-end

## Tok zpráv

Provedený agent odesílá pacs.002 zpět zadávajícímu agentovi k potvrzení přijetí, vypořádání nebo zamítnutí platební instrukce jako pacs.008 nebo pacs.009.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/cs/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Úhrada mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Dotaz na stav platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.028 se používá k dotazu na stav dříve odeslané platební instrukce. Umožňuje aktivní sledování zpracování plateb bez čekání na stavové zprávy.</td>
        </tr>
    </tbody>
  </table>
</div>

