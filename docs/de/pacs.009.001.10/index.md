---
title: pacs.009.001.10 | Kredittransfer zwischen Finanzinstituten | pacs008
description: Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt...
lang: de-DE
lastUpdated: true
image: /logo.svg
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Kredittransfer zwischen Finanzinstituten

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Überblick

Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen
- **CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Interbanken-Abwicklungsbetrag
- **Dbtr / DbtrAgt** — Schuldnerinstitut und Agentenidentifikation
- **Cdtr / CdtrAgt** — Gläubigerinstitut und Agentenidentifikation
- **IntrBkSttlmAmt** — Interbanken-Abwicklungsbetrag in der Abwicklungswährung

## Geschäftskontext

- Wird für eigene Kontoüberweisungen zwischen Banken und Deckungszahlungen verwendet
- Unterstützt Liquiditätsmanagement zwischen Korrespondenzbankpartnern
- Trägt das Deckungsbein von Kundenüberweisungen, die über die Deckungsmethode abgewickelt werden
- Ermöglicht Treasury- und Finanzierungsoperationen zwischen Finanzinstituten

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen</td>
          <td class="operational-matrix-table__right">Wird für eigene Kontoüberweisungen zwischen Banken und Deckungszahlungen verwendet</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Überweisungstransaktionsinformationen mit Interbanken-Abwicklungsbetrag</td>
          <td class="operational-matrix-table__right">Unterstützt Liquiditätsmanagement zwischen Korrespondenzbankpartnern</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Schuldnerinstitut und Agentenidentifikation</td>
          <td class="operational-matrix-table__right">Trägt das Deckungsbein von Kundenüberweisungen, die über die Deckungsmethode abgewickelt werden</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Gläubigerinstitut und Agentenidentifikation</td>
          <td class="operational-matrix-table__right">Ermöglicht Treasury- und Finanzierungsoperationen zwischen Finanzinstituten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbanken-Abwicklungsbetrag in der Abwicklungswährung</td>
          <td class="operational-matrix-table__right">Das Schuldnerinstitut sendet pacs.009 an das Gläubigerinstitut, um eigene Mittel zu überweisen. Bei Deckungsmethoden-Zahlungen stellt pacs.009 das Finanzierungsbein bereit, während pacs.008 die Kundenanweisung über einen separaten Pfad trägt.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- und Schema-Kontext

- Ersetzt MT202 und MT202COV für Überweisungen zwischen Instituten
- Deckungsmethoden-Abläufe koppeln pacs.009 mit der zugrunde liegenden pacs.008-Kundenanweisung
- Strukturierte Parteidaten und LEI-Identifikation werden zunehmend gefordert
- SWIFT gpi deckt pacs.009 für Korrespondenzbankentransparenz ab

## Nachrichtenfluss

Das Schuldnerinstitut sendet pacs.009 an das Gläubigerinstitut, um eigene Mittel zu überweisen. Bei Deckungsmethoden-Zahlungen stellt pacs.009 das Finanzierungsbein bereit, während pacs.008 die Kundenanweisung über einen separaten Pfad trägt.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Aktuelle Implementierung in pacs008</td>
          <td class="version-diff-table__takeaway">Entspricht der aktuellen Projektunterstützung für FI-Kredittransferflüsse.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Spätere Katalogversionen</td>
          <td class="version-diff-table__takeaway">Wichtig für die Planung der Roadmap in Korrespondenzbank- und Deckungszahlungsumgebungen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kommentiertes XML-Beispiel

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Hinweise zu den Feldern

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Vergleich pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Vergleich pacs.009 vs pacs.008">
  <table>
    <caption>Vergleich pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.009.001.10</th>
        <th>Vergleichsnachricht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Hauptzweck</td>
          <td class="message-comparison-table__current">Instituts-Eigengeschäftstransfer oder Cover-Leg</td>
          <td class="message-comparison-table__other">Kundenkredittransfer</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Fachlicher Verantwortungsbereich</td>
          <td class="message-comparison-table__current">Treasury-, Korrespondenz- und Liquiditätsbetrieb</td>
          <td class="message-comparison-table__other">Kundenzahlungsbetrieb</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typische Kombinationen</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 und verknüpfte pacs.008-Flüsse</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Zu vermeidende Fehlannahme</td>
          <td class="message-comparison-table__current">Dass dies nur eine technischere pacs.008 ist</td>
          <td class="message-comparison-table__other">Dass sich damit institutsinterne Liquiditätsflüsse ohne Weiteres abbilden lassen</td>
        </tr>
    </tbody>
  </table>
</div>

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/de/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-zu-FI-Zahlungsstatusbericht</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/de/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Lastschrift zwischen Finanzinstituten</td>
          <td class="related-messages-table__overview">Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.</td>
        </tr>
    </tbody>
  </table>
</div>

