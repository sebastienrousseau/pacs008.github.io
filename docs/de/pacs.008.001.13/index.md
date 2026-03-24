---
title: pacs.008.001.13 | FI-zu-FI-Kundenkredittransfer | pacs008
description: Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI-zu-FI-Kundenkredittransfer

| | |
|---|---|
| **ISO-Name** | FIToFICustomerCreditTransferV13 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2023 |
| **Version** | 13 |

## Überblick

Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichten-ID, Erstellungsdatum, Transaktionsanzahl und Abwicklungsinformationen
- **CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Betrag, Gebühren und Zweck
- **Dbtr / DbtrAgt** — Identifikation und Kontodaten von Schuldner und Schuldneragent
- **Cdtr / CdtrAgt** — Identifikation und Kontodaten von Gläubiger und Gläubigeragent
- **RmtInf** — Überweisungsinformationen für strukturierte oder unstrukturierte Zahlungsreferenzen

## Geschäftskontext

- Die primäre Nachricht für kundeninitiierte grenzüberschreitende und inländische Überweisungen
- Wird in SEPA SCT, SEPA Instant, CBPR+ und nationalen Clearingsystemen verwendet
- Trägt strukturierte Überweisungsinformationen für automatische Abstimmung
- Unterstützt serielle, Deckungs- und Direktabwicklungsmethoden für mehrstufige Zahlungsketten

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
          <td class="operational-matrix-table__left">**GrpHdr** — Gruppenkopf mit Nachrichten-ID, Erstellungsdatum, Transaktionsanzahl und Abwicklungsinformationen</td>
          <td class="operational-matrix-table__right">Die primäre Nachricht für kundeninitiierte grenzüberschreitende und inländische Überweisungen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Betrag, Gebühren und Zweck</td>
          <td class="operational-matrix-table__right">Wird in SEPA SCT, SEPA Instant, CBPR+ und nationalen Clearingsystemen verwendet</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Dbtr / DbtrAgt** — Identifikation und Kontodaten von Schuldner und Schuldneragent</td>
          <td class="operational-matrix-table__right">Trägt strukturierte Überweisungsinformationen für automatische Abstimmung</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Cdtr / CdtrAgt** — Identifikation und Kontodaten von Gläubiger und Gläubigeragent</td>
          <td class="operational-matrix-table__right">Unterstützt serielle, Deckungs- und Direktabwicklungsmethoden für mehrstufige Zahlungsketten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**RmtInf** — Überweisungsinformationen für strukturierte oder unstrukturierte Zahlungsreferenzen</td>
          <td class="operational-matrix-table__right">Der Schuldneragent erstellt einen pacs.008 und sendet ihn an den Gläubigeragent (direkt oder über Vermittler). Jeder Agent in der Kette validiert, ergänzt und leitet die Anweisung weiter, bis der Gläubigeragent das Konto des Begünstigten gutschreibt.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Ersetzt MT103 und MT103+ für grenzüberschreitende Kundenüberweisungen
- Die Frist für strukturierte Adressen im November 2026 gilt für alle Postanschriften der Parteien
- SWIFT gpi erfordert pacs.008 für UETR-basiertes End-to-End-Tracking
- 13 Revisionen spiegeln die fortlaufende Schema-Evolution über Marktinfrastrukturen wider

## Nachrichtenfluss

Der Schuldneragent erstellt einen pacs.008 und sendet ihn an den Gläubigeragent (direkt oder über Vermittler). Jeder Agent in der Kette validiert, ergänzt und leitet die Anweisung weiter, bis der Gläubigeragent das Konto des Begünstigten gutschreibt.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Frühe Versionen</td>
          <td class="version-diff-table__takeaway">Vor allem für die Analyse von Alt-Migrationen und den Versionsverlauf relevant.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Moderne Vorversionen</td>
          <td class="version-diff-table__takeaway">Diese Versionen treten am ehesten in jüngeren Migrations- oder Koexistenzprojekten auf.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Aktuelle Katalogversion</td>
          <td class="version-diff-table__takeaway">Für die Planung mit der aktuellen Version geeignet, wobei Schema-Vorgaben und Gegenparteibereitschaft weiterhin geprüft werden sollten.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Hinweise zu den Feldern

- `MsgId`: Dies sollte den Nachrichtenumschlag identifizieren, nicht die Referenz des Endkunden.
- `EndToEndId`: Halten Sie die kundenseitige Nachverfolgbarkeit möglichst stabil über nachgelagerte Systeme hinweg.
- `UETR`: Verwenden Sie dies konsistent in grenzüberschreitenden und stark nachverfolgten Umgebungen; erzeugen Sie es nicht ad hoc in späteren Verarbeitungsschritten.
- `IntrBkSttlmAmt`: Prüfen Sie Betrag und Währung anhand von Geschäftsregeln vor der Schemaprüfung.
- `Dbtr` / `Cdtr`: Datenqualität der Parteien, Adressstruktur und Identifikatoren sind meist die wichtigsten Treiber für Nachbearbeitungsquoten.

## Vergleich pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Vergleich pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.008.001.13</th>
        <th>Vergleichsnachricht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Hauptzweck</td>
          <td class="message-comparison-table__current">Kundenkredittransfer</td>
          <td class="message-comparison-table__other">Instituts-Eigengeschäftstransfer oder Cover-Leg</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Fachlicher Verantwortungsbereich</td>
          <td class="message-comparison-table__current">Kundenzahlungsbetrieb</td>
          <td class="message-comparison-table__other">Treasury-, Korrespondenz- und Liquiditätsbetrieb</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typische Kombinationen</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, and sometimes linked pacs.008 flows</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Zu vermeidende Fehlannahme</td>
          <td class="message-comparison-table__current">Dass alle Bank-zu-Bank-Transfers hier eingeordnet werden sollten</td>
          <td class="message-comparison-table__other">Dass diese Nachricht Kundenkredittransfer-Anweisungen ersetzen kann</td>
        </tr>
    </tbody>
  </table>
</div>

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Unterstützte Versionen

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

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
          <td class="related-messages-table__id"><a href="/de/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Zahlungsrückgabe</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredittransfer zwischen Finanzinstituten</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.</td>
        </tr>
    </tbody>
  </table>
</div>

