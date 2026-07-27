---
title: "pacs.008.001.13 | Úhrada zákazníka mezi finančními institucemi | pacs008"
description: Zpráva pacs.008 je hlavní instrukce zákaznické úhrady mezi bankami. Nese data o stranách, částce a účelu platby.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Úhrada zákazníka mezi finančními institucemi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Stav registrace</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Rok</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Verze</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Přehled

Zpráva pacs.008 je hlavní instrukce zákaznické úhrady mezi bankami. Nese data o stranách, částce a účelu platby.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Klíčové datové prvky

- **GrpHdr** — Záhlaví skupiny s ID zprávy, datem vytvoření, počtem transakcí a informacemi o vypořádání
- **CdtTrfTxInf** — Informace o transakci úhrady s částkou, poplatky a účelem
- **Dbtr / DbtrAgt** — Identifikace a údaje o účtu dlužníka a agenta dlužníka
- **Cdtr / CdtrAgt** — Identifikace a údaje o účtu věřitele a agenta věřitele
- **RmtInf** — Informace o úhradě pro strukturované nebo nestrukturované platební reference

## Obchodní kontext

- Hlavní zpráva pro zákaznické úhrady
- Používá se napříč SEPA, CBPR+ a národními clearingovými systémy
- Nese data o úhradě pro rekonciliaci
- Podporuje sériové, krycí a přímé metody vypořádání

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Záhlaví skupiny s ID zprávy, datem vytvoření, počtem transakcí a informacemi o vypořádání</td>
          <td class="operational-matrix-table__right">Hlavní zpráva pro zákaznické úhrady</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informace o transakci úhrady s částkou, poplatky a účelem</td>
          <td class="operational-matrix-table__right">Používá se napříč SEPA, CBPR+ a národními clearingovými systémy</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identifikace a údaje o účtu dlužníka a agenta dlužníka</td>
          <td class="operational-matrix-table__right">Nese data o úhradě pro rekonciliaci</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identifikace a údaje o účtu věřitele a agenta věřitele</td>
          <td class="operational-matrix-table__right">Podporuje sériové, krycí a přímé metody vypořádání</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informace o úhradě pro strukturované nebo nestrukturované platební reference</td>
          <td class="operational-matrix-table__right">Agent dlužníka vytvoří pacs.008 a odešle agentovi věřitele (přímo nebo přes zprostředkovatele). Každý agent v řetězci validuje, obohacuje a předává instrukci, dokud agent věřitele nepřipíše prostředky na účet příjemce.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontext CBPR+ a schémat

- Nahrazuje MT103 a MT103+ pro přeshraniční zákaznické úhrady
- Termín strukturovaných adres v listopadu 2026 se vztahuje na všechny poštovní adresy stran
- SWIFT gpi vyžaduje pacs.008 pro end-to-end sledování založené na UETR
- 13 revizí odráží pokračující vývoj schématu napříč tržní infrastrukturou

## Tok zpráv

Agent dlužníka vytvoří pacs.008 a odešle agentovi věřitele (přímo nebo přes zprostředkovatele). Každý agent v řetězci validuje, obohacuje a předává instrukci, dokud agent věřitele nepřipíše prostředky na účet příjemce.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Podporované verze

<div class="message-versions-table" tabindex="0" aria-label="Podporované verze">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Verze</th>
        <th>Stav</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Aktuální</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/cs/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Vrácení platby</td>
          <td class="related-messages-table__overview">Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/cs/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Úhrada mezi finančními institucemi</td>
          <td class="related-messages-table__overview">Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.</td>
        </tr>
    </tbody>
  </table>
</div>

