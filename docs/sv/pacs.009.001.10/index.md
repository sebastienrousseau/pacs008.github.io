---
title: "pacs.009.001.10 | Kreditöverföring mellan finansinstitut | pacs008"
description: Meddelandet pacs.009 flyttar medel mellan banker för egen räkning. Det stöder finansiering, cover-betalningar och likviditetshantering.
lang: sv-SE
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Kreditöverföring mellan finansinstitut

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Översikt

Meddelandet pacs.009 flyttar medel mellan banker för egen räkning. Det stöder finansiering, cover-betalningar och likviditetshantering.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Nyckeldataelement

- **GrpHdr** — Grupphuvud med meddelandeidentifiering och avvecklingsinformation
- **CdtTrfTxInf** — Kreditöverföringstransaktionsinformation med interbankavvecklingsbelopp
- **Dbtr / DbtrAgt** — Gäldenärsinstitution och dess agentidentifiering
- **Cdtr / CdtrAgt** — Borgenärsinstitution och dess agentidentifiering
- **IntrBkSttlmAmt** — Interbankavvecklingsbelopp i avvecklingsvalutan

## Affärskontext

- Används för egenkontoöverföringar mellan banker och cover-betalningar
- Stöder likviditetshantering mellan korrespondentbankspartner
- Bär cover-benet av kundkreditöverföringar
- Stöder treasury- och finansieringsoperationer

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Grupphuvud med meddelandeidentifiering och avvecklingsinformation</td>
          <td class="operational-matrix-table__right">Används för egenkontoöverföringar mellan banker och cover-betalningar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Kreditöverföringstransaktionsinformation med interbankavvecklingsbelopp</td>
          <td class="operational-matrix-table__right">Stöder likviditetshantering mellan korrespondentbankspartner</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Gäldenärsinstitution och dess agentidentifiering</td>
          <td class="operational-matrix-table__right">Bär cover-benet av kundkreditöverföringar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Borgenärsinstitution och dess agentidentifiering</td>
          <td class="operational-matrix-table__right">Stöder treasury- och finansieringsoperationer</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbankavvecklingsbelopp i avvecklingsvalutan</td>
          <td class="operational-matrix-table__right">Gäldenärsbanken skickar pacs.009 till borgenärsbanken för att överföra egna medel. I cover-flöden bär pacs.009 finansieringsbenet medan pacs.008 bär kundinstruktionen på en separat väg.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- och schemakontext

- Ersätter MT202 och MT202COV för institution-till-institution-överföringar
- Cover-metodflöden kopplar pacs.009 med den underliggande pacs.008-instruktionen
- Strukturerad partdata och LEI-identifiering är allt viktigare
- SWIFT gpi täcker även pacs.009

## Meddelandeflöde

Gäldenärsbanken skickar pacs.009 till borgenärsbanken för att överföra egna medel. I cover-flöden bär pacs.009 finansieringsbenet medan pacs.008 bär kundinstruktionen på en separat väg.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/sv/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Statusrapport för betalning mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades, avvisades, väntar eller avvecklades.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Autogiro mellan finansinstitut</td>
          <td class="related-messages-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
    </tbody>
  </table>
</div>

