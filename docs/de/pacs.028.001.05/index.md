---
title: pacs.028.001.05 | FI to FI Payment Status Request | pacs008
description: Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentStatusRequestV05 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 5 |

## Überblick

Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 27 February 2025; Quellenlinks sind unten aufgeführt.

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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel | Ermöglicht proaktive Statusabfragen für in Bearbeitung befindliche Zahlungsanweisungen |
| **TxInf** — Transaktionsinformationen zur Identifizierung der abzufragenden Zahlung | Unterstützt Betriebsteams bei der Untersuchung verzögerter oder fehlender Zahlungen |
| **OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht | Ergänzt pacs.002, indem Statuskommunikation initiiert statt abgewartet wird |
| **OrgnlInstrId** — Originalanweisungskennung aus der Quellzahlung | Wird in Ausnahmebehandlungs- und SLA-Überwachungs-Workflows eingesetzt |
| **OrgnlEndToEndId** — Originale End-to-End-Kennung für die Nachverfolgbarkeit | Der beauftragende Agent sendet pacs.028 an den beauftragten Agent, um den Status einer bestimmten Zahlung abzufragen. Der beauftragte Agent antwortet mit einem pacs.002 mit dem aktuellen Verarbeitungsstatus. |

## CBPR+- und Schema-Kontext

- Ersetzt MT199-Statusabfragemuster und manuelle SWIFT-Nachrichtenabfragen
- CBPR+ unterstützt strukturierte Statusanfragen, die mit Originalnachrichtenkennungen verknüpft sind
- UETR-basiertes Tracking über gpi reduziert die Notwendigkeit manueller Abfragen
- Zunehmend in automatisierte Zahlungsoperations-Dashboards integriert

## Nachrichtenfluss

Der beauftragende Agent sendet pacs.028 an den beauftragten Agent, um den Status einer bestimmten Zahlung abzufragen. Der beauftragte Agent antwortet mit einem pacs.002 mit dem aktuellen Verarbeitungsstatus.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.028.001.05 | Aktuelle Implementierung in pacs008 | Geeignet für die aktuelle Modellierung von Statusanfragen. |
| pacs.028.001.06 | Spätere Katalogversion | Neuere Katalogversionen für die zukünftige Interoperabilitätsplanung prüfen. |

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

- `MsgId`: The request itself needs an auditable identifier distinct from the underlying payment.
- `OrgnlInstrId`: Use the exact source identifier from the original instruction to maximize matching accuracy.
- `OrgnlEndToEndId`: Including customer traceability helps operations teams reconcile the enquiry faster.

## Vergleich pacs.028 vs pacs.002

| Dimension | pacs.028.001.05 | Vergleichsnachricht |
|---|---|---|
| Hauptzweck | Status anfragen | Status melden |
| Wer die Interaktion startet | Das Institut, das den Status anfragt | Das Institut, das den Status sendet |
| Operative Einordnung | Ausnahmegetriebene Anfrage | Ereignisgesteuerte Statusmeldung |
| Zu vermeidende Fehlannahme | Dass sie routinemäßig für jede Zahlung gesendet werden sollte | Dass dadurch proaktives Fallmanagement überflüssig wird |

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Financial Institution Credit Transfer | Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement. |

