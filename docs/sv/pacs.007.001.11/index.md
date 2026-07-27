---
title: "pacs.007.001.11 | Betalningsåterföring mellan finansinstitut | pacs008"
description: Meddelandet pacs.007 reverserar en tidigare betalningsinstruktion. Till skillnad från pacs.004 utgår det från den ursprungliga avsändaren.
lang: sv-SE
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Betalningsåterföring mellan finansinstitut

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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

Meddelandet pacs.007 reverserar en tidigare betalningsinstruktion. Till skillnad från pacs.004 utgår det från den ursprungliga avsändaren.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Nyckeldataelement

- **GrpHdr** — Grupphuvud med meddelandeidentifiering och tidsstämpel för skapande
- **TxInf** — Transaktionsinformation med reverseringsbelopp och parter
- **OrgnlGrpInf** — Ursprunglig gruppinformation som refererar till källmeddelandet
- **RvslRsnInf** — Reverseringsorsaksinformation med strukturerade orsakskoder
- **OrgnlTxRef** — Ursprunglig transaktionsreferens för spårbarhet från början till slut

## Affärskontext

- Används när den ursprungliga avsändaren hittar ett fel före eller efter avveckling
- Används i bedrägerifall som kräver snabb reversering
- Stöder både hel och delvis reversering av ursprungliga betalningsbelopp
- Bär strukturerade reverseringsorsakskoder

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
          <td class="operational-matrix-table__right">Används när den ursprungliga avsändaren hittar ett fel före eller efter avveckling</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaktionsinformation med reverseringsbelopp och parter</td>
          <td class="operational-matrix-table__right">Används i bedrägerifall som kräver snabb reversering</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Ursprunglig gruppinformation som refererar till källmeddelandet</td>
          <td class="operational-matrix-table__right">Stöder både hel och delvis reversering av ursprungliga betalningsbelopp</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Reverseringsorsaksinformation med strukturerade orsakskoder</td>
          <td class="operational-matrix-table__right">Bär strukturerade reverseringsorsakskoder</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Ursprunglig transaktionsreferens för spårbarhet från början till slut</td>
          <td class="operational-matrix-table__right">Den instruerande agenten skickar pacs.007 framåt genom betalningskedjan för att reversera en tidigare betalning. Varje agent bearbetar reverseringen och justerar avvecklingen.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- och schemakontext

- Skiljer sig från pacs.004 i riktning: reverseringar går framåt, returer går bakåt
- CBPR+ kräver koppling med ursprungliga meddelandeidentifierare för automatisk matchning
- Strukturerade orsakskoder ersätter fritextbeskrivningar från äldre MT-meddelanden
- Används oftare i arbetsflöden för snabbbetalningsåterkallelse och bedrägeri

## Meddelandeflöde

Den instruerande agenten skickar pacs.007 framåt genom betalningskedjan för att reversera en tidigare betalning. Varje agent bearbetar reverseringen och justerar avvecklingen.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/sv/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Betalningsretur</td>
          <td class="related-messages-table__overview">Meddelandet pacs.004 returnerar en betalning som redan har avvecklats. Det skickar tillbaka medel när en betalning inte kan tillämpas.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Statusrapport för betalning mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades, avvisades, väntar eller avvecklades.</td>
        </tr>
    </tbody>
  </table>
</div>

