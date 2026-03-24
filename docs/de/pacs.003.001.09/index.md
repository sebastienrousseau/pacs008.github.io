---
title: pacs.003.001.09 | FI-zu-FI-Kundenlastschrift | pacs008
description: Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI-zu-FI-Kundenlastschrift

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Überblick

Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen
- **DrctDbtTxInf** — Lastschrifttransaktionsinformationen mit Betrag und Parteien
- **Cdtr** — Gläubigeridentifikation und Kontodaten
- **CdtrAgt** — Gläubigeragent (einziehendes Institut) Identifikation
- **DbtrAgt** — Schuldneragent (zahlendes Institut) Identifikation

## Geschäftskontext

- Unterstützt SEPA Core- und B2B-Lastschriftverfahren
- Wird für wiederkehrende Zahlungseinzüge wie Abonnements, Rechnungen und Kreditrückzahlungen verwendet
- Erfordert eine gültige Mandatsreferenz zwischen Schuldner und Gläubiger
- Ermöglicht den Sammeleinzug mehrerer Lastschriftanweisungen in einer Nachricht

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
          <td class="operational-matrix-table__right">Unterstützt SEPA Core- und B2B-Lastschriftverfahren</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Lastschrifttransaktionsinformationen mit Betrag und Parteien</td>
          <td class="operational-matrix-table__right">Wird für wiederkehrende Zahlungseinzüge wie Abonnements, Rechnungen und Kreditrückzahlungen verwendet</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Gläubigeridentifikation und Kontodaten</td>
          <td class="operational-matrix-table__right">Erfordert eine gültige Mandatsreferenz zwischen Schuldner und Gläubiger</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Gläubigeragent (einziehendes Institut) Identifikation</td>
          <td class="operational-matrix-table__right">Ermöglicht den Sammeleinzug mehrerer Lastschriftanweisungen in einer Nachricht</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Schuldneragent (zahlendes Institut) Identifikation</td>
          <td class="operational-matrix-table__right">Der Gläubigeragent initiiert pacs.003 gegenüber dem Schuldneragent zum Einzug von Geldern. Der Schuldneragent validiert das Mandat, prüft die Kontodeckung und wickelt die Transaktion ab oder gibt sie zurück.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Anforderungen an strukturierte Adressen und Parteienidentifikation gelten gleichermaßen für Lastschriften
- Mandatsbezogene Daten müssen ab November 2026 vollständig strukturiert sein
- Ersetzt MT104-artige Lastschriftformate im grenzüberschreitenden Verkehr
- Die Validierung der Gläubiger-Schema-Identifikation wird zunehmend durchgesetzt

## Nachrichtenfluss

Der Gläubigeragent initiiert pacs.003 gegenüber dem Schuldneragent zum Einzug von Geldern. Der Schuldneragent validiert das Mandat, prüft die Kontodeckung und wickelt die Transaktion ab oder gibt sie zurück.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Nützlich für die Referenzmodellierung von Lastschriften im aktuellen Projekt.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Spätere Katalogversionen</td>
          <td class="version-diff-table__takeaway">Vor einem Greenfield-Einsatz spätere Versionen auf Mandats-, Status- und Interoperabilitätsänderungen prüfen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Hinweise zu den Feldern

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Der Erfolg einer Lastschrift hängt oft stärker von Konto- und Mandatsqualität als von der XML-Struktur ab.

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/de/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Zahlungsrückgabe</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstornierung</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
    </tbody>
  </table>
</div>

