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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel | Wird initiiert, wenn der ursprüngliche Sender einen Fehler vor oder nach der Abwicklung feststellt |
| **TxInf** — Transaktionsinformationen mit Umkehrbetrag und Parteien | Wird in Betrugsfällen verwendet, bei denen eine schnelle Umkehrung erforderlich ist |
| **OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht | Unterstützt sowohl vollständige als auch teilweise Umkehrung von Originalzahlungsbeträgen |
| **RvslRsnInf** — Umkehrgrundinformationen mit strukturierten Grundcodes | Trägt strukturierte Umkehrgrundcodes für die nachgelagerte Verarbeitung |
| **OrgnlTxRef** — Originaltransaktionsreferenz für End-to-End-Nachverfolgbarkeit | Der beauftragende Agent (ursprünglicher Sender) sendet pacs.007 durch die Zahlungskette, um eine zuvor beauftragte Zahlung umzukehren. Jeder Agent verarbeitet die Umkehranweisung und passt die Abwicklung entsprechend an. |

## CBPR+- und Schema-Kontext

- Unterscheidet sich von pacs.004 durch die Richtung — Umkehrung fließt vorwärts vom Auftraggeber, Rückgabe fließt rückwärts vom Begünstigten
- CBPR+ erfordert die Kopplung mit Originalnachrichtenkennungen für automatisierte Zuordnung
- Strukturierte Grundcodes ersetzen Freitextnarrative aus MT-Altnachrichten
- Zunehmend in Sofortzahlungs-Rückruf- und Betrugspräventions-Workflows eingesetzt

## Nachrichtenfluss

Der beauftragende Agent (ursprünglicher Sender) sendet pacs.007 durch die Zahlungskette, um eine zuvor beauftragte Zahlung umzukehren. Jeder Agent verarbeitet die Umkehranweisung und passt die Abwicklung entsprechend an.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.007.001.11 | Aktuelle Implementierung in pacs008 | Gute Ausgangsbasis für die Modellierung von Stornoabläufen. |
| pacs.007.001.12-13 | Spätere Katalogversionen | Spätere Versionen auf aktuelle Marktinfrastruktur-Anforderungen prüfen. |

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

| Dimension | pacs.007.001.11 | Vergleichsnachricht |
|---|---|---|
| Hauptzweck | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| Am besten geeignet für | Abwicklung von Rückabwicklungen wegen Recall, Fehler oder Betrug | Abwicklung von Rückgaben nach dem Settlement |

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI-zu-FI-Kundenkredittransfer | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.004.001.11`](/de/pacs.004.001.11/) | Zahlungsrückgabe | Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird. |
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI-zu-FI-Zahlungsstatusbericht | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |

