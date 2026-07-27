---
title: "pacs.004.001.11 | Vrácení platby | pacs008"
description: Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Vrácení platby

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a časovým razítkem vytvoření
- **TxInf** — Informace o transakci s částkou vratky a stranami
- **OrgnlGrpInf** — Původní informace o skupině propojující ke zdrojové zprávě
- **RtrRsnInf** — Informace o důvodu vratky se strukturovanými kódy důvodů
- **OrgnlTxRef** — Odkaz na původní transakci pro párování a rekonciliaci

## Obchodní kontext

- Zpracovává vratky po vypořádání, když účet příjemce nelze připsat
- Podporuje scénáře odvolání, kdy odesílatel žádá o vrácení prostředků
- Nese strukturované kódy důvodů vratky
- Platí pro vratky úhrad (pacs.008) i vratek přímých inkas (pacs.003)

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
          <td class="operational-matrix-table__right">Zpracovává vratky po vypořádání, když účet příjemce nelze připsat</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informace o transakci s částkou vratky a stranami</td>
          <td class="operational-matrix-table__right">Podporuje scénáře odvolání, kdy odesílatel žádá o vrácení prostředků</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Původní informace o skupině propojující ke zdrojové zprávě</td>
          <td class="operational-matrix-table__right">Nese strukturované kódy důvodů vratky</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informace o důvodu vratky se strukturovanými kódy důvodů</td>
          <td class="operational-matrix-table__right">Platí pro vratky úhrad (pacs.008) i vratek přímých inkas (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Odkaz na původní transakci pro párování a rekonciliaci</td>
          <td class="operational-matrix-table__right">Provedený agent odesílá pacs.004 zpět přes platební řetězec k vrácení vypořádaných prostředků. Každý agent v řetězci zpracuje vratku a připíše zpět na příslušné účty.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Nahrazuje MT103 RETURN a zprávy o vratkách metodou krytí
- Kódy důvodů vratek jsou standardizovány a strojově čitelné pod ISO 20022
- CBPR+ vyžaduje úplný odkaz na původní transakci pro párování
- Sledování SWIFT gpi pokrývá i vratky

## Tok zpráv

Provedený agent odesílá pacs.004 zpět přes platební řetězec k vrácení vypořádaných prostředků. Každý agent v řetězci zpracuje vratku a připíše zpět na příslušné účty.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/cs/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Přímý inkaso zákazníka mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.003 přenáší přímé inkaso zákazníka mezi bankami. Umožňuje bance věřitele inkasovat prostředky od banky dlužníka.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
    </tbody>
  </table>
</div>

