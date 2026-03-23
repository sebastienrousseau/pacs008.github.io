---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO-Name** | FinancialInstitutionCreditTransferV10 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 10 |

## Überblick

Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 27 February 2025; Quellenlinks sind unten aufgeführt.

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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen | Wird für eigene Kontoüberweisungen zwischen Banken und Deckungszahlungen verwendet |
| **CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Interbanken-Abwicklungsbetrag | Unterstützt Liquiditätsmanagement zwischen Korrespondenzbankpartnern |
| **Dbtr / DbtrAgt** — Schuldnerinstitut und Agentenidentifikation | Trägt das Deckungsbein von Kundenüberweisungen, die über die Deckungsmethode abgewickelt werden |
| **Cdtr / CdtrAgt** — Gläubigerinstitut und Agentenidentifikation | Ermöglicht Treasury- und Finanzierungsoperationen zwischen Finanzinstituten |
| **IntrBkSttlmAmt** — Interbanken-Abwicklungsbetrag in der Abwicklungswährung | Das Schuldnerinstitut sendet pacs.009 an das Gläubigerinstitut, um eigene Mittel zu überweisen. Bei Deckungsmethoden-Zahlungen stellt pacs.009 das Finanzierungsbein bereit, während pacs.008 die Kundenanweisung über einen separaten Pfad trägt. |

## CBPR+- und Schema-Kontext

- Ersetzt MT202 und MT202COV für Überweisungen zwischen Instituten
- Deckungsmethoden-Abläufe koppeln pacs.009 mit der zugrunde liegenden pacs.008-Kundenanweisung
- Strukturierte Parteidaten und LEI-Identifikation werden zunehmend gefordert
- SWIFT gpi deckt pacs.009 für Korrespondenzbankentransparenz ab

## Nachrichtenfluss

Das Schuldnerinstitut sendet pacs.009 an das Gläubigerinstitut, um eigene Mittel zu überweisen. Bei Deckungsmethoden-Zahlungen stellt pacs.009 das Finanzierungsbein bereit, während pacs.008 die Kundenanweisung über einen separaten Pfad trägt.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.009.001.10 | Aktuelle Implementierung in pacs008 | Entspricht der aktuellen Projektunterstützung für FI-Kredittransferflüsse. |
| pacs.009.001.11-12 | Spätere Katalogversionen | Wichtig für die Roadmap-Planung in Korrespondenz- und Cover-Payment-Umgebungen. |

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

- `InstrId`: Verwenden Sie eine Kennung für den Funding-Leg, die weiterhin mit dem zugrunde liegenden Kundenfluss verknüpft werden kann.
- `IntrBkSttlmAmt`: Eigengeschäfts- und Cover-Flüsse benötigen häufig strengere Treasury-Kontrollen für Beträge und Wertstellungstermine.
- `Dbtr` / `Cdtr`: Dies sind Institutsparteien und keine Retail-Kundenrollen; modellieren Sie sie entsprechend.

## Vergleich pacs.009 vs pacs.008

| Dimension | pacs.009.001.10 | Vergleichsnachricht |
|---|---|---|
| Hauptzweck | Instituts-Eigengeschäftstransfer oder Cover-Leg | Kundenkredittransfer |
| Fachlicher Verantwortungsbereich | Treasury-, Korrespondenz- und Funding-Betrieb | Kundenzahlungsbetrieb |
| Typische Kombinationen | pacs.002, pacs.004 und verknüpfte pacs.008-Flüsse | pacs.002, pacs.004, pacs.007, pacs.028 |
| Zu vermeidende Fehlannahme | Dass dies nur eine technischere pacs.008 ist | Dass sich damit Instituts-Funding-Flüsse ohne Weiteres abbilden lassen |

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |
| [`pacs.010.001.05`](/de/pacs.010.001.05/) | Financial Institution Direct Debit | Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen. |

