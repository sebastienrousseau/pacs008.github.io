---
title: Leitfaden zur Nachrichtenauswahl | pacs008
description: Wählen Sie die passende ISO-20022-pacs-Nachricht für Erzeugung, Statusmeldungen, Returns, Reversals und Anfragen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# Leitfaden zur Nachrichtenauswahl

Wählen Sie die pacs-Familie zuerst nach dem Geschäftsvorfall und danach nach Schema und Betriebsmodell.

## Schnelle Entscheidungsmatrix

<div class="decision-matrix-table" tabindex="0" aria-label="Schnelle Entscheidungsmatrix">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Nachrichtentyp</th>
        <th>Beschreibung</th>
        <th>Überblick</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">FI-zu-FI-Kundenlastschrift</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Zahlungsrückgabe</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">FI-zu-FI-Zahlungsstornierung</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">FI-zu-FI-Kundenkredittransfer</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Kredittransfer zwischen Finanzinstituten</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Lastschrift zwischen Finanzinstituten</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/de/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">FI-zu-FI-Anfrage zum Zahlungsstatus</td>
          <td class="decision-matrix-table__overview">Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.</td>
        </tr>
    </tbody>
  </table>
</div>

## Häufige Vergleichspunkte

<div class="comparison-points-table" tabindex="0" aria-label="Häufige Vergleichspunkte">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Vergleich</th>
        <th>Wesentlicher Unterschied</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Kundenzahlung versus Institut- oder Cover-Bewegung</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Rückgabe von der Empfängerseite versus Reversal von der sendenden Seite</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Statusmeldung versus Statusanfrage</td>
        </tr>
    </tbody>
  </table>
</div>

## Unterstützte Nachrichtenseiten

- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI-zu-FI-Zahlungsstatusbericht
- [`pacs.003.001.09`](/de/pacs.003.001.09/) — FI-zu-FI-Kundenlastschrift
- [`pacs.004.001.11`](/de/pacs.004.001.11/) — Zahlungsrückgabe
- [`pacs.007.001.11`](/de/pacs.007.001.11/) — FI-zu-FI-Zahlungsstornierung
- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI-zu-FI-Kundenkredittransfer
- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Kredittransfer zwischen Finanzinstituten
- [`pacs.010.001.05`](/de/pacs.010.001.05/) — Lastschrift zwischen Finanzinstituten
- [`pacs.028.001.05`](/de/pacs.028.001.05/) — FI-zu-FI-Anfrage zum Zahlungsstatus

