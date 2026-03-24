---
title: Nachrichtentypen | pacs008 ISO 20022
description: Unterstützte ISO 20022 pacs-Nachrichtendefinitionen und Versionen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# Nachrichtentypen

pacs008 deckt die zentrale pacs.008-Nachrichtendefinition sowie verwandte Nachrichten für Orchestrierung und Abstimmung ab.

## Enthaltene Unterstützung

<div class="message-coverage-table" tabindex="0" aria-label="Enthaltene Unterstützung">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Nachrichtentyp</th>
        <th>Beschreibung</th>
        <th>Jahr</th>
        <th>Überblick</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">FI-zu-FI-Kundenlastschrift</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Zahlungsrückgabe</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">FI-zu-FI-Zahlungsstornierung</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">FI-zu-FI-Kundenkredittransfer</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Kredittransfer zwischen Finanzinstituten</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Lastschrift zwischen Finanzinstituten</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/de/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">FI-zu-FI-Anfrage zum Zahlungsstatus</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bereitstellungsmodell

Jeder unterstützte Nachrichtentyp basiert auf Vorlagen und Validierungslogik, damit Teams Generierung und Regressionstests standardisieren können.

## Die richtige Nachricht wählen

Der Nachrichtenkatalog ist besonders dann relevant, wenn Teams entscheiden müssen, welche Nachricht einen Vorgang startet, welche den Status meldet und welche den Ablauf korrigiert oder rückgängig macht.

Siehe den dedizierten [Leitfaden zur Nachrichtenauswahl](/de/message-selection/) für eine komprimierte Entscheidungsansicht über die unterstützten pacs-Abläufe.

## Marktkontext 2026

- **SEPA SCT / SCT Inst**: pacs.008 bleibt zentral für den Überweisungsaustausch und die Echtzeit-Zahlungsverarbeitung.
- **CBPR+**: pacs.008 ersetzt weiterhin MT103-artige grenzüberschreitende Nutzlasten durch reichhaltigere strukturierte Daten.
- **Strukturierte Adressen**: Aktuelle Marktleitlinien weisen auf die Umstellung im November 2026 weg von vollständig unstrukturierten Postanschriften hin.
- **Serielle Methode und STP**: Mehrstufige Bank-zu-Bank-Ketten bleiben wichtig, und Straight-Through-Varianten sind weiterhin entscheidend für die operative Effizienz.

## Operative Fähigkeiten

pacs008 bietet vorlagengestützte Generierung und Validierung über unterstützte Nachrichtendefinitions-Revisionen:

- Versionen vergleichen
- Regressionstests für Schema-Updates durchführen
- Ausgehende Zahlungsnachrichtendaten vor der Freigabe stärken
- Produkt-, Betriebs- und Migrationsteams aus einer einzigen Codebasis unterstützen

