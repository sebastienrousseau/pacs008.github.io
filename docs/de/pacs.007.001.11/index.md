---
title: pacs.007.001.11 | FI-zu-FI-Zahlungsstornierung | pacs008
description: Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI-zu-FI-Zahlungsstornierung

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentReversalV11 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 11 |

## Überblick

Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen mit Umkehrbetrag und Parteien
- **OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht
- **RvslRsnInf** — Umkehrgrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz für End-to-End-Nachverfolgbarkeit

## Geschäftskontext

- Wird initiiert, wenn der ursprüngliche Sender einen Fehler vor oder nach der Abwicklung feststellt
- Wird in Betrugsfällen verwendet, bei denen eine schnelle Umkehrung erforderlich ist
- Unterstützt sowohl vollständige als auch teilweise Umkehrung von Originalzahlungsbeträgen
- Trägt strukturierte Umkehrgrundcodes für die nachgelagerte Verarbeitung

<div class="operational-matrix-table" tabindex="0" aria-label="Wichtige Datenelemente Geschäftskontext">
  <table>
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
          <td class="operational-matrix-table__left">**GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel</td>
          <td class="operational-matrix-table__right">Wird initiiert, wenn der ursprüngliche Sender einen Fehler vor oder nach der Abwicklung feststellt</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Transaktionsinformationen mit Umkehrbetrag und Parteien</td>
          <td class="operational-matrix-table__right">Wird in Betrugsfällen verwendet, bei denen eine schnelle Umkehrung erforderlich ist</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht</td>
          <td class="operational-matrix-table__right">Unterstützt sowohl vollständige als auch teilweise Umkehrung von Originalzahlungsbeträgen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**RvslRsnInf** — Umkehrgrundinformationen mit strukturierten Grundcodes</td>
          <td class="operational-matrix-table__right">Trägt strukturierte Umkehrgrundcodes für die nachgelagerte Verarbeitung</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlTxRef** — Originaltransaktionsreferenz für End-to-End-Nachverfolgbarkeit</td>
          <td class="operational-matrix-table__right">Der beauftragende Agent (ursprünglicher Sender) sendet pacs.007 durch die Zahlungskette, um eine zuvor beauftragte Zahlung umzukehren. Jeder Agent verarbeitet die Umkehranweisung und passt die Abwicklung entsprechend an.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Unterscheidet sich von pacs.004 durch die Richtung — Umkehrung fließt vorwärts vom Auftraggeber, Rückgabe fließt rückwärts vom Begünstigten
- CBPR+ erfordert die Kopplung mit Originalnachrichtenkennungen für automatisierte Zuordnung
- Strukturierte Grundcodes ersetzen Freitextnarrative aus MT-Altnachrichten
- Zunehmend in Sofortzahlungs-Rückruf- und Betrugspräventions-Workflows eingesetzt

## Nachrichtenfluss

Der beauftragende Agent (ursprünglicher Sender) sendet pacs.007 durch die Zahlungskette, um eine zuvor beauftragte Zahlung umzukehren. Jeder Agent verarbeitet die Umkehranweisung und passt die Abwicklung entsprechend an.

## Tabelle der Versionsunterschiede

<div class="version-diff-table" tabindex="0" aria-label="Tabelle der Versionsunterschiede">
  <table>
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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Gute Ausgangsbasis für die Modellierung von Stornoabläufen.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Spätere Katalogversionen</td>
          <td class="version-diff-table__takeaway">Spätere Versionen auf aktuelle Marktinfrastruktur-Anforderungen prüfen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Hinweise zu den Feldern

- `MsgId`: Die Rückabwicklung selbst benötigt eine eigene revisionssichere Kennung.
- `OrgnlInstrId`: Bewahren Sie die ursprüngliche Zahlungsreferenz auf, um Brüche bei der Abstimmung zu vermeiden.
- `RvslRsnInf`: Verwenden Sie strukturierte Rückabwicklungsgründe, damit Betrugs-, Fehler- und Doppelzahlungsfälle unterschiedlich geroutet werden können.

## Vergleich pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Vergleich pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.007.001.11</th>
        <th>Vergleichsnachricht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Hauptzweck</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Am besten geeignet für</td>
          <td class="message-comparison-table__current">Abwicklung von Rückabwicklungen wegen Recall, Fehler oder Betrug</td>
          <td class="message-comparison-table__other">Abwicklung von Rückgaben nach dem Settlement</td>
        </tr>
    </tbody>
  </table>
</div>

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/de/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Zahlungsrückgabe</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
    </tbody>
  </table>
</div>

