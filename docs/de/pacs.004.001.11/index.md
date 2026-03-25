---
title: "pacs.004.001.11 | Zahlungsrückgabe | pacs008"
description: Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht...
lang: de-DE
lastUpdated: true
image: /logo.svg
faq:
  - question: "Was ist der Unterschied zwischen pacs.004 und pacs.007?"
    answer: "pacs.004 gibt abgerechnete Gelder von der Empfängerseite zurück, während pacs.007 die Stornierung von der ursprünglichen Auftragsgeberseite anfordert."
  - question: "Sollte jede fehlgeschlagene Begünstigten-Gutschrift zu pacs.004 werden?"
    answer: "Nicht automatisch. Der richtige Weg hängt von Schemaregeln, Abrechnungsphase und Gegenpartei-Handling ab."
---

# pacs.004.001.11 — Zahlungsrückgabe

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Feld</th>
        <th scope="col">Wert</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO-Name</strong></td>
          <td class="message-metadata-table__value">PaymentReturnV11</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registrierungsstatus</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Jahr</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Überblick

Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen mit Rückgabebetrag und Parteien
- **OrgnlGrpInf** — Originalgruppendaten mit Verknüpfung zur Quellnachricht
- **RtrRsnInf** — Rückgabegrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz für Zuordnung und Abstimmung

## Geschäftskontext

- Behandelt Rückgaben nach Abwicklung, wenn das Konto des Begünstigten nicht gutgeschrieben werden kann
- Unterstützt Rückrufszenarien, bei denen der Auftraggeber die Rückgabe der Mittel anfordert
- Trägt strukturierte Rückgabegrundcodes für regulatorische und operative Transparenz
- Gilt für Überweisungsrückgaben (pacs.008) und Lastschriftrückgaben (pacs.003)

<div class="operational-matrix-table" tabindex="0" aria-label="Wichtige Datenelemente Geschäftskontext">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Wichtige Datenelemente</th>
        <th>Geschäftskontext</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel</td>
          <td class="operational-matrix-table__right">Behandelt Rückgaben nach Abwicklung, wenn das Konto des Begünstigten nicht gutgeschrieben werden kann</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaktionsinformationen mit Rückgabebetrag und Parteien</td>
          <td class="operational-matrix-table__right">Unterstützt Rückrufszenarien, bei denen der Auftraggeber die Rückgabe der Mittel anfordert</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Originalgruppendaten mit Verknüpfung zur Quellnachricht</td>
          <td class="operational-matrix-table__right">Trägt strukturierte Rückgabegrundcodes für regulatorische und operative Transparenz</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Rückgabegrundinformationen mit strukturierten Grundcodes</td>
          <td class="operational-matrix-table__right">Gilt für Überweisungsrückgaben (pacs.008) und Lastschriftrückgaben (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Originaltransaktionsreferenz für Zuordnung und Abstimmung</td>
          <td class="operational-matrix-table__right">Der beauftragte Agent sendet pacs.004 durch die Zahlungskette zurück, um zuvor abgewickelte Gelder zurückzugeben. Jeder Agent in der Kette verarbeitet die Rückgabe und schreibt die entsprechenden Konten gut.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Ersetzt MT103 RETURN und Deckungsmethoden-Rückgabenachrichten
- Rückgabegrundcodes sind unter ISO 20022 standardisiert und maschinenlesbar
- CBPR+ erfordert vollständige Originaltransaktionsreferenzdaten für die Zuordnung
- SWIFT gpi-Tracking erstreckt sich auf Rückgabetransaktionen für End-to-End-Sichtbarkeit

## Nachrichtenfluss

Der beauftragte Agent sendet pacs.004 durch die Zahlungskette zurück, um zuvor abgewickelte Gelder zurückzugeben. Jeder Agent in der Kette verarbeitet die Rückgabe und schreibt die entsprechenden Konten gut.

## Tabelle der Versionsunterschiede

<div class="version-diff-table" tabindex="0" aria-label="Tabelle der Versionsunterschiede">
  <table>
    <caption>Tabelle der Versionsunterschiede</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Versionsbereich</th>
        <th>Warum es wichtig ist</th>
        <th>Praktische Konsequenz</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Passt zu den aktuellen Templates für Zahlungsrückgaben.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Spätere Katalogversionen</td>
          <td class="version-diff-table__takeaway">Spätere Rückgabenachrichten prüfen, wenn Schema-Upgrades oder neue Gegenparteien relevant werden.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Hinweise zu den Feldern

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Die Qualität der Grundcodes ist entscheidend für die nachgelagerte Kundenkommunikation und das operative Routing.

## Vergleich pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Vergleich pacs.004 vs pacs.007">
  <table>
    <caption>Vergleich pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.004.001.11</th>
        <th>Vergleichsnachricht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Hauptzweck</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Am besten geeignet für</td>
          <td class="message-comparison-table__current">Abwicklung von Rückgaben nach dem Settlement</td>
          <td class="message-comparison-table__other">Abwicklung von Rückabwicklungen wegen Recall, Fehler oder Betrug</td>
        </tr>
    </tbody>
  </table>
</div>

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

## Verwandte Nachrichten
<div class="related-messages-table" tabindex="0" aria-label="Verwandte Nachrichten">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
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
          <td class="related-messages-table__id"><a href="/de/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Kundenkredittransfer</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Kundenlastschrift</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
    </tbody>
  </table>
</div>

