---
title: pacs.010.001.05 | Lastschrift zwischen Finanzinstituten | pacs008
description: Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Lastschrift zwischen Finanzinstituten

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO-Name</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Überblick

Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen
- **DrctDbtTxInf** — Lastschrifttransaktionsinformationen mit Einzugsbetrag
- **Cdtr / CdtrAgt** — Gläubigerinstitut und Agentenidentifikation
- **Dbtr / DbtrAgt** — Schuldnerinstitut und Agentenidentifikation
- **IntrBkSttlmAmt** — Interbanken-Abwicklungsbetrag in der Abwicklungswährung

## Geschäftskontext

- Unterstützt Interbanken-Lastschrifteinzug zwischen Finanzinstituten
- Wird für Gebühreneinzug, Margin Calls und institutionelle Abwicklungsverpflichtungen verwendet
- Erfordert vorab vereinbarte bilaterale Vereinbarungen zwischen teilnehmenden Instituten
- Entscheidend für institutionelles Cash Management und Interbanken-Abwicklungszyklen

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen</td>
          <td class="operational-matrix-table__right">Unterstützt Interbanken-Lastschrifteinzug zwischen Finanzinstituten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Lastschrifttransaktionsinformationen mit Einzugsbetrag</td>
          <td class="operational-matrix-table__right">Wird für Gebühreneinzug, Margin Calls und institutionelle Abwicklungsverpflichtungen verwendet</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Gläubigerinstitut und Agentenidentifikation</td>
          <td class="operational-matrix-table__right">Erfordert vorab vereinbarte bilaterale Vereinbarungen zwischen teilnehmenden Instituten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Schuldnerinstitut und Agentenidentifikation</td>
          <td class="operational-matrix-table__right">Entscheidend für institutionelles Cash Management und Interbanken-Abwicklungszyklen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbanken-Abwicklungsbetrag in der Abwicklungswährung</td>
          <td class="operational-matrix-table__right">Das Gläubigerinstitut sendet pacs.010 an das Schuldnerinstitut, um Gelder im Rahmen einer vorab vereinbarten Regelung einzuziehen. Das Schuldnerinstitut validiert die Anforderung und wickelt die Lastschrift ab oder lehnt sie ab.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Ersetzt Elemente von MT204 für die Verarbeitung von Interbanken-Lastschriften
- Die strukturierte Parteienidentifikation folgt denselben Anforderungen wie andere pacs-Nachrichten
- Die Validierung institutioneller Kennungen (BIC, LEI) ist obligatorisch
- In vollständigen ISO 20022-Einführungsplänen über Marktinfrastrukturen enthalten

## Nachrichtenfluss

Das Gläubigerinstitut sendet pacs.010 an das Schuldnerinstitut, um Gelder im Rahmen einer vorab vereinbarten Regelung einzuziehen. Das Schuldnerinstitut validiert die Anforderung und wickelt die Lastschrift ab oder lehnt sie ab.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Referenzpunkt für die Unterstützung institutsbezogener Lastschriften im aktuellen Projekt.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Spätere Katalogversion</td>
          <td class="version-diff-table__takeaway">Vor der Übernahme neuer Infrastrukturanforderungen prüfen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Hinweise zu den Feldern

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/de/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredittransfer zwischen Finanzinstituten</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Kundenlastschrift</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.</td>
        </tr>
    </tbody>
  </table>
</div>

