---
title: pacs.028.001.05 | FI-zu-FI-Anfrage zum Zahlungsstatus | pacs008
description: Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI-zu-FI-Anfrage zum Zahlungsstatus

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentStatusRequestV05 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 5 |

## Überblick

Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen zur Identifizierung der abzufragenden Zahlung
- **OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht
- **OrgnlInstrId** — Originalanweisungskennung aus der Quellzahlung
- **OrgnlEndToEndId** — Originale End-to-End-Kennung für die Nachverfolgbarkeit

## Geschäftskontext

- Ermöglicht proaktive Statusabfragen für in Bearbeitung befindliche Zahlungsanweisungen
- Unterstützt Betriebsteams bei der Untersuchung verzögerter oder fehlender Zahlungen
- Ergänzt pacs.002, indem Statuskommunikation initiiert statt abgewartet wird
- Wird in Ausnahmebehandlungs- und SLA-Überwachungs-Workflows eingesetzt

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel</td>
          <td class="operational-matrix-table__right">Ermöglicht proaktive Statusabfragen für in Bearbeitung befindliche Zahlungsanweisungen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaktionsinformationen zur Identifizierung der abzufragenden Zahlung</td>
          <td class="operational-matrix-table__right">Unterstützt Betriebsteams bei der Untersuchung verzögerter oder fehlender Zahlungen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Originalgruppendaten mit Bezug auf die Quellnachricht</td>
          <td class="operational-matrix-table__right">Ergänzt pacs.002, indem Statuskommunikation initiiert statt abgewartet wird</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Originalanweisungskennung aus der Quellzahlung</td>
          <td class="operational-matrix-table__right">Wird in Ausnahmebehandlungs- und SLA-Überwachungs-Workflows eingesetzt</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Originale End-to-End-Kennung für die Nachverfolgbarkeit</td>
          <td class="operational-matrix-table__right">Der beauftragende Agent sendet pacs.028 an den beauftragten Agent, um den Status einer bestimmten Zahlung abzufragen. Der beauftragte Agent antwortet mit einem pacs.002 mit dem aktuellen Verarbeitungsstatus.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Ersetzt MT199-Statusabfragemuster und manuelle SWIFT-Nachrichtenabfragen
- CBPR+ unterstützt strukturierte Statusanfragen, die mit Originalnachrichtenkennungen verknüpft sind
- UETR-basiertes Tracking über gpi reduziert die Notwendigkeit manueller Abfragen
- Zunehmend in automatisierte Zahlungsoperations-Dashboards integriert

## Nachrichtenfluss

Der beauftragende Agent sendet pacs.028 an den beauftragten Agent, um den Status einer bestimmten Zahlung abzufragen. Der beauftragte Agent antwortet mit einem pacs.002 mit dem aktuellen Verarbeitungsstatus.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Geeignet für die aktuelle Modellierung von Statusanfragen.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Spätere Katalogversion</td>
          <td class="version-diff-table__takeaway">Neuere Katalogversionen für die zukünftige Interoperabilitätsplanung prüfen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Hinweise zu den Feldern

- `MsgId`: Die Anfrage selbst benötigt eine prüfbare Kennung, die sich von der zugrunde liegenden Zahlung unterscheidet.
- `OrgnlInstrId`: Verwenden Sie die exakte Quellkennung aus der ursprünglichen Anweisung, um die Zuordnungsgenauigkeit zu maximieren.
- `OrgnlEndToEndId`: Die Einbeziehung kundenbezogener Nachverfolgbarkeit hilft den Betriebsteams, die Anfrage schneller abzustimmen.

## Vergleich pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Vergleich pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.028.001.05</th>
        <th>Vergleichsnachricht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Hauptzweck</td>
          <td class="message-comparison-table__current">Status anfragen</td>
          <td class="message-comparison-table__other">Status melden</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wer die Interaktion startet</td>
          <td class="message-comparison-table__current">Das Institut, das den Status anfragt</td>
          <td class="message-comparison-table__other">Das Institut, das den Status sendet</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operative Einordnung</td>
          <td class="message-comparison-table__current">Ausnahmegetriebene Anfrage</td>
          <td class="message-comparison-table__other">Ereignisgesteuerte Statusmeldung</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Zu vermeidende Fehlannahme</td>
          <td class="message-comparison-table__current">Dass sie routinemäßig für jede Zahlung gesendet werden sollte</td>
          <td class="message-comparison-table__other">Dass dadurch proaktives Fallmanagement überflüssig wird</td>
        </tr>
    </tbody>
  </table>
</div>

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Kundenkredittransfer</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredittransfer zwischen Finanzinstituten</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.</td>
        </tr>
    </tbody>
  </table>
</div>

