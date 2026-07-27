---
title: "pacs.009.001.10 | Úhrada mezi finančními institucemi | pacs008"
description: Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Úhrada mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Přehled

Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s identifikací zprávy a informacemi o vypořádání
- **CdtTrfTxInf** — Informace o transakci úhrady s mezibankovní vypořádací částkou
- **Dbtr / DbtrAgt** — Identifikace instituce dlužníka a agenta
- **Cdtr / CdtrAgt** — Identifikace instituce věřitele a agenta
- **IntrBkSttlmAmt** — Mezibankovní vypořádací částka v měně vypořádání

## Obchodní kontext

- Používá se pro převody z vlastních účtů mezi bankami a krycí platby
- Podporuje řízení likvidity mezi korespondenčními bankami
- Nese krycí úsek zákaznických úhrad vypořádaných krycí metodou
- Podporuje treasury a financování mezi finančními institucemi

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
          <td class="operational-matrix-table__right">Používá se pro převody z vlastních účtů mezi bankami a krycí platby</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informace o transakci úhrady s mezibankovní vypořádací částkou</td>
          <td class="operational-matrix-table__right">Podporuje řízení likvidity mezi korespondenčními bankami</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identifikace instituce dlužníka a agenta</td>
          <td class="operational-matrix-table__right">Nese krycí úsek zákaznických úhrad vypořádaných krycí metodou</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identifikace instituce věřitele a agenta</td>
          <td class="operational-matrix-table__right">Podporuje treasury a financování mezi finančními institucemi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Mezibankovní vypořádací částka v měně vypořádání</td>
          <td class="operational-matrix-table__right">Instituce dlužníka odesílá pacs.009 instituci věřitele k převodu vlastních prostředků. Pro krycí platby pacs.009 poskytuje financovací úsek, zatímco pacs.008 nese zákaznickou instrukci jinou cestou.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Nahrazuje MT202 a MT202COV pro institucionální převody
- Toky krycí metody párují pacs.009 s podkladovou zákaznickou instrukcí pacs.008
- Požadavky na strukturovaná data o stranách a identifikaci LEI rostou
- SWIFT gpi pokrývá pacs.009 pro transparentnost korespondenčního bankovnictví

## Tok zpráv

Instituce dlužníka odesílá pacs.009 instituci věřitele k převodu vlastních prostředků. Pro krycí platby pacs.009 poskytuje financovací úsek, zatímco pacs.008 nese zákaznickou instrukci jinou cestou.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Přímý inkaso mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.010 se používá pro přímé inkaso mezi vlastními účty finančních institucí. Umožňuje jedné instituci inkasovat prostředky přímo z účtu druhé instituce.</td>
        </tr>
    </tbody>
  </table>
</div>

