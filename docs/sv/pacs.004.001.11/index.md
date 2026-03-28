---
title: "pacs.004.001.11 | Betalningsretur | pacs008"
description: Meddelandet pacs.004 returnerar en betalning som redan har avvecklats. Det skickar tillbaka medel när en betalning inte kan tillämpas.
lang: sv-SE
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Betalningsretur

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Fält</th>
        <th scope="col">Värde</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO-namn</strong></td>
          <td class="message-metadata-table__value">PaymentReturnV11</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registreringsstatus</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>År</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Översikt

Meddelandet pacs.004 returnerar en betalning som redan har avvecklats. Det skickar tillbaka medel när en betalning inte kan tillämpas.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Nyckeldataelement

- **GrpHdr** — Grupphuvud med meddelandeidentifiering och tidsstämpel för skapande
- **TxInf** — Transaktionsinformation med returbelopp och parter
- **OrgnlGrpInf** — Ursprunglig gruppinformation kopplad till källmeddelandet
- **RtrRsnInf** — Returorsaksinformation med strukturerade orsakskoder
- **OrgnlTxRef** — Ursprunglig transaktionsreferens för matchning och avstämning

## Affärskontext

- Hanterar returer efter avveckling när mottagarens konto inte kan krediteras
- Stöder återkallelsescenarier där avsändaren begär medel tillbaka
- Bär strukturerade returorsakskoder
- Gäller både kreditöverföringsreturer (pacs.008) och autogirorreturer (pacs.003)

<div class="operational-matrix-table" tabindex="0" aria-label="Nyckeldataelement Affärskontext">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Nyckeldataelement</th>
        <th>Affärskontext</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Grupphuvud med meddelandeidentifiering och tidsstämpel för skapande</td>
          <td class="operational-matrix-table__right">Hanterar returer efter avveckling när mottagarens konto inte kan krediteras</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaktionsinformation med returbelopp och parter</td>
          <td class="operational-matrix-table__right">Stöder återkallelsescenarier där avsändaren begär medel tillbaka</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Ursprunglig gruppinformation kopplad till källmeddelandet</td>
          <td class="operational-matrix-table__right">Bär strukturerade returorsakskoder</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Returorsaksinformation med strukturerade orsakskoder</td>
          <td class="operational-matrix-table__right">Gäller både kreditöverföringsreturer (pacs.008) och autogirorreturer (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Ursprunglig transaktionsreferens för matchning och avstämning</td>
          <td class="operational-matrix-table__right">Den instruerade agenten skickar pacs.004 tillbaka genom betalningskedjan för att returnera avvecklade medel. Varje agent i kedjan bearbetar returen och krediterar tillbaka till relevanta konton.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- och schemakontext

- Ersätter MT103 RETURN och returmeddelanden med cover-metoden
- Returorsakskoder är standardiserade och maskinläsbara under ISO 20022
- CBPR+ kräver fullständig ursprunglig transaktionsreferens för matchning
- SWIFT gpi-spårning täcker även returer

## Meddelandeflöde

Den instruerade agenten skickar pacs.004 tillbaka genom betalningskedjan för att returnera avvecklade medel. Varje agent i kedjan bearbetar returen och krediterar tillbaka till relevanta konton.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

## Relaterade meddelanden
<div class="related-messages-table" tabindex="0" aria-label="Relaterade meddelanden">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Meddelandetyp</th>
        <th>Beskrivning</th>
        <th>Översikt</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Kundkreditöverföring mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.008 är den huvudsakliga kundkreditöverföringsinstruktionen mellan banker. Det bär parti-, belopps- och remitteringsdata.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Autogiro för kund mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.003 överför ett kundautogiro mellan banker. Det låter borgenärsbanken inkassera medel från gäldenärsbanken.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Statusrapport för betalning mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades, avvisades, väntar eller avvecklades.</td>
        </tr>
    </tbody>
  </table>
</div>

