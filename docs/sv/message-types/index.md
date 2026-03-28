---
title: "Meddelandetyper | pacs008 ISO 20022"
description: ISO 20022 pacs-meddelandedefinitioner och versioner som stöds.
lang: sv-SE
lastUpdated: true
image: /logo.webp
---

# Meddelandetyper

pacs008 täcker den centrala pacs.008-meddelandedefinitionen och relaterade meddelanden som används i orkestrerings- och avstämningsflöden.

## Inkluderat stöd

<div class="message-coverage-table" tabindex="0" aria-label="Inkluderat stöd">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Message type</th>
        <th>Description</th>
        <th>År</th>
        <th>Översikt</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Statusrapport för betalning mellan finansinstitut</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Autogiro för kund mellan finansinstitut</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.003 message carries a customer direct debit between banks. It lets the creditor bank collect funds from the debtor bank.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Betalningsretur</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Betalningsåterföring mellan finansinstitut</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.007 message reverses an earlier payment instruction. Unlike pacs.004, it starts from the original sender.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Kundkreditöverföring mellan finansinstitut</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Kreditöverföring mellan finansinstitut</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Autogiro mellan finansinstitut</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/sv/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Statusförfrågan för betalning mellan finansinstitut</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

## Leveransmodell

Varje meddelandetyp som stöds har mallresurser och valideringslogik så att team kan standardisera generering och regressionstestning över flera nedströmskanaler.

## Marknadskontext 2026

- **SEPA SCT / SCT Inst**: pacs.008 förblir central för kreditöverföringar och direktbetalningar.
- **CBPR+**: pacs.008 fortsätter att ersätta gränsöverskridande nyttolaster i MT103-format med rikare strukturerade data.
- **Strukturerade adresser**: nuvarande marknadsriktlinjer pekar på ett skifte från helt ostrukturerade postadresser i november 2026.
- **Seriell metod och STP**: flerstegs bank-till-bank-kedjor förblir viktiga, och varianter av direktbehandling är avgörande för operativ effektivitet.

## Operativa funktioner

pacs008 tillhandahåller mallbaserad generering och validering över meddelandedefinitionsrevisioner som stöds:

- jämför versioner
- regressionstesta schemauppdateringar
- stärk data i utgående betalningsmeddelanden före release
- stöd produkt-, operations- och migreringsteam från en kodbas

