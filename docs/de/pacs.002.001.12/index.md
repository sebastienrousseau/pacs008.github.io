---
title: "pacs.002.001.12 | FI-zu-FI-Zahlungsstatusbericht | pacs008"
description: Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert...
lang: de-DE
lastUpdated: true
image: /logo.svg
faq:
  - question: "Ist pacs.002 eine Zahlungsnachricht?"
    answer: "Nein. Sie meldet den Status einer früheren Anweisung, anstatt selbst Werte zu bewegen."
  - question: "Sollte pacs.002 interne Workflow-Status ersetzen?"
    answer: "Nein. Sie sollte sie informieren, aber interne Fallstatus benötigen weiterhin ihre eigene operationelle Logik."
---

# pacs.002.001.12 — FI-zu-FI-Zahlungsstatusbericht

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Überblick

Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **OrgnlGrpInfAndSts** — Originalgruppendaten und Status für Massenberichterstattung
- **TxInfAndSts** — Transaktionsinformationen und Status für einzelne Transaktionsergebnisse
- **StsRsnInf** — Statusgrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz mit Verknüpfung zur Quellanweisung

## Geschäftskontext

- Wird zur Bestätigung der Abwicklung oder Meldung der Ablehnung von Überweisungen, Lastschriften und Rückzahlungen verwendet
- Ermöglicht die Abstimmung zwischen beauftragenden und beauftragten Agenten
- In CBPR+-Abläufen zur Bestätigung der Verarbeitung von pacs.008- und pacs.009-Nachrichten erforderlich
- Unterstützt sowohl Gruppenebene als auch individuelle Transaktionsstatusberichte

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
          <td class="operational-matrix-table__right">Wird zur Bestätigung der Abwicklung oder Meldung der Ablehnung von Überweisungen, Lastschriften und Rückzahlungen verwendet</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Originalgruppendaten und Status für Massenberichterstattung</td>
          <td class="operational-matrix-table__right">Ermöglicht die Abstimmung zwischen beauftragenden und beauftragten Agenten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Transaktionsinformationen und Status für einzelne Transaktionsergebnisse</td>
          <td class="operational-matrix-table__right">In CBPR+-Abläufen zur Bestätigung der Verarbeitung von pacs.008- und pacs.009-Nachrichten erforderlich</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Statusgrundinformationen mit strukturierten Grundcodes</td>
          <td class="operational-matrix-table__right">Unterstützt sowohl Gruppenebene als auch individuelle Transaktionsstatusberichte</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Originaltransaktionsreferenz mit Verknüpfung zur Quellanweisung</td>
          <td class="operational-matrix-table__right">Der beauftragte Agent (Empfänger) sendet pacs.002 an den beauftragenden Agent (Sender) zurück, um Annahme, Abwicklung oder Ablehnung einer empfangenen Zahlungsanweisung wie pacs.008 oder pacs.009 zu bestätigen.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Ersetzt MT199- und Feld-79-Statusnarrative in MT-Nachrichten
- CBPR+ schreibt pacs.002 für alle Zahlungsstatuskommunikation vor
- Strukturierte Grundcodes ersetzen Freitextablehnungserklärungen
- Die SWIFT gpi-Tracking-Integration erfordert pacs.002 für End-to-End-Transparenz

## Nachrichtenfluss

Der beauftragte Agent (Empfänger) sendet pacs.002 an den beauftragenden Agent (Sender) zurück, um Annahme, Abwicklung oder Ablehnung einer empfangenen Zahlungsanweisung wie pacs.008 oder pacs.009 zu bestätigen.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Verwenden Sie dies, wenn Sie mit den aktuellen Projekt-Templates und Validierungsartefakten arbeiten.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Spätere Katalogversionen</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Hinweise zu den Feldern

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Vergleich pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Vergleich pacs.002 vs pacs.028">
  <table>
    <caption>Vergleich pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.002.001.12</th>
        <th>Vergleichsnachricht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Hauptzweck</td>
          <td class="message-comparison-table__current">Status melden</td>
          <td class="message-comparison-table__other">Status anfragen</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wer die Interaktion startet</td>
          <td class="message-comparison-table__current">Das Institut, das den Status sendet</td>
          <td class="message-comparison-table__other">Das Institut, das den Status anfragt</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operative Einordnung</td>
          <td class="message-comparison-table__current">Ereignisgesteuerte Statusmeldung</td>
          <td class="message-comparison-table__other">Ausnahmegetriebene Anfrage</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Zu vermeidende Fehlannahme</td>
          <td class="message-comparison-table__current">Dass Statusmeldungen Nachforschungsprozesse ersetzen</td>
          <td class="message-comparison-table__other">Dass jede Zahlung eine explizite Statusanfrage benötigt</td>
        </tr>
    </tbody>
  </table>
</div>

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
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
          <td class="related-messages-table__id"><a href="/de/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredittransfer zwischen Finanzinstituten</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Anfrage zum Zahlungsstatus</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.</td>
        </tr>
    </tbody>
  </table>
</div>

