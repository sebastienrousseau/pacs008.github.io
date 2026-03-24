---
title: pacs.002.001.12 | FI-zu-FI-Zahlungsstatusbericht | pacs008
description: Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI-zu-FI-Zahlungsstatusbericht

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentStatusReportV12 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 12 |

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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel | Wird zur Bestätigung der Abwicklung oder Meldung der Ablehnung von Überweisungen, Lastschriften und Rückzahlungen verwendet |
| **OrgnlGrpInfAndSts** — Originalgruppendaten und Status für Massenberichterstattung | Ermöglicht die Abstimmung zwischen beauftragenden und beauftragten Agenten |
| **TxInfAndSts** — Transaktionsinformationen und Status für einzelne Transaktionsergebnisse | In CBPR+-Abläufen zur Bestätigung der Verarbeitung von pacs.008- und pacs.009-Nachrichten erforderlich |
| **StsRsnInf** — Statusgrundinformationen mit strukturierten Grundcodes | Unterstützt sowohl Gruppenebene als auch individuelle Transaktionsstatusberichte |
| **OrgnlTxRef** — Originaltransaktionsreferenz mit Verknüpfung zur Quellanweisung | Der beauftragte Agent (Empfänger) sendet pacs.002 an den beauftragenden Agent (Sender) zurück, um Annahme, Abwicklung oder Ablehnung einer empfangenen Zahlungsanweisung wie pacs.008 oder pacs.009 zu bestätigen. |

## CBPR+- und Schema-Kontext

- Ersetzt MT199- und Feld-79-Statusnarrative in MT-Nachrichten
- CBPR+ schreibt pacs.002 für alle Zahlungsstatuskommunikation vor
- Strukturierte Grundcodes ersetzen Freitextablehnungserklärungen
- Die SWIFT gpi-Tracking-Integration erfordert pacs.002 für End-to-End-Transparenz

## Nachrichtenfluss

Der beauftragte Agent (Empfänger) sendet pacs.002 an den beauftragenden Agent (Sender) zurück, um Annahme, Abwicklung oder Ablehnung einer empfangenen Zahlungsanweisung wie pacs.008 oder pacs.009 zu bestätigen.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.002.001.12 | Aktuelle Implementierung in pacs008 | Verwenden Sie dies, wenn Sie mit den aktuellen Projekt-Templates und Validierungsartefakten arbeiten. |
| pacs.002.001.13-15 | Spätere Katalogversionen | Spätere ISO-Versionen sollten vor neuer Interoperabilitätsarbeit oder der Anbindung neuer Infrastrukturen geprüft werden. |

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

- `MsgId`: Verwenden Sie eine neue Kennung für den Statusbericht selbst, nicht für die ursprüngliche Zahlungsanweisung.
- `OrgnlInstrId`: Belassen Sie die ursprüngliche Anweisungskennung unverändert, damit der Status automatisch zugeordnet werden kann.
- `TxSts`: Dies ist der operative Status; ordnen Sie ihn sorgfältig internen Workflow-Status zu, statt von einer Eins-zu-eins-Entsprechung auszugehen.
- `StsRsnInf`: Strukturierte Grundcodes sind für Repair-Prozesse und Analysen deutlich nützlicher als Freitext.

## Vergleich pacs.002 vs pacs.028

| Dimension | pacs.002.001.12 | Vergleichsnachricht |
|---|---|---|
| Hauptzweck | Status melden | Status anfragen |
| Wer die Interaktion startet | Das Institut, das den Status sendet | Das Institut, das den Status anfragt |
| Operative Einordnung | Ereignisgesteuerte Statusmeldung | Ausnahmegetriebene Anfrage |
| Zu vermeidende Fehlannahme | Dass Statusmeldungen Nachforschungsprozesse ersetzen | Dass jede Zahlung eine explizite Statusanfrage benötigt |

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI-zu-FI-Kundenkredittransfer | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Kredittransfer zwischen Finanzinstituten | Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement. |
| [`pacs.028.001.05`](/de/pacs.028.001.05/) | FI-zu-FI-Anfrage zum Zahlungsstatus | Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten. |

