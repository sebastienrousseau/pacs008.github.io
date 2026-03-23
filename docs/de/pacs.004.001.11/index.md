---
title: pacs.004.001.11 | Zahlungsrückgabe | pacs008
description: Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Zahlungsrückgabe

| | |
|---|---|
| **ISO-Name** | PaymentReturnV11 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 11 |

## Überblick

Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 2025-02-27; Quellenlinks sind unten aufgeführt.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen mit Rückgabebetrag und Parteien
- **OrgnlGrpInf** — Originalgruppendaten mit Verknüpfung zur Quellnachricht
- **RtrRsnInf** — Rückgabegrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz für Zuordnung und Abstimmung

## Geschäftskontext

- Behandelt Rückgaben nach Abwicklung, wenn das Konto des Begünstigten nicht gutgeschrieben werden kann
- Unterstützt Rückrufszenarien, bei denen der Auftraggeber die Rückgabe der Mittel anfordert
- Trägt strukturierte Rückgabegrundcodes für regulatorische und operative Transparenz
- Gilt für Überweisungsrückgaben (pacs.008) und Lastschriftrückgaben (pacs.003)

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel | Behandelt Rückgaben nach Abwicklung, wenn das Konto des Begünstigten nicht gutgeschrieben werden kann |
| **TxInf** — Transaktionsinformationen mit Rückgabebetrag und Parteien | Unterstützt Rückrufszenarien, bei denen der Auftraggeber die Rückgabe der Mittel anfordert |
| **OrgnlGrpInf** — Originalgruppendaten mit Verknüpfung zur Quellnachricht | Trägt strukturierte Rückgabegrundcodes für regulatorische und operative Transparenz |
| **RtrRsnInf** — Rückgabegrundinformationen mit strukturierten Grundcodes | Gilt für Überweisungsrückgaben (pacs.008) und Lastschriftrückgaben (pacs.003) |
| **OrgnlTxRef** — Originaltransaktionsreferenz für Zuordnung und Abstimmung | Der beauftragte Agent sendet pacs.004 durch die Zahlungskette zurück, um zuvor abgewickelte Gelder zurückzugeben. Jeder Agent in der Kette verarbeitet die Rückgabe und schreibt die entsprechenden Konten gut. |

## CBPR+- und Schema-Kontext

- Ersetzt MT103 RETURN und Deckungsmethoden-Rückgabenachrichten
- Rückgabegrundcodes sind unter ISO 20022 standardisiert und maschinenlesbar
- CBPR+ erfordert vollständige Originaltransaktionsreferenzdaten für die Zuordnung
- SWIFT gpi-Tracking erstreckt sich auf Rückgabetransaktionen für End-to-End-Sichtbarkeit

## Nachrichtenfluss

Der beauftragte Agent sendet pacs.004 durch die Zahlungskette zurück, um zuvor abgewickelte Gelder zurückzugeben. Jeder Agent in der Kette verarbeitet die Rückgabe und schreibt die entsprechenden Konten gut.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.004.001.11 | Aktuelle Implementierung in pacs008 | Passt zu den aktuellen Templates für Zahlungsrückgaben. |
| pacs.004.001.12-14 | Spätere Katalogversionen | Spätere Rückgabenachrichten prüfen, wenn Schema-Upgrades oder neue Gegenparteien relevant werden. |

## Kommentiertes XML-Beispiel

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Hinweise zu den Feldern

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Reason-code quality is critical for downstream customer communication and operational routing.

## Vergleich pacs.004 vs pacs.007

| Dimension | pacs.004.001.11 | Vergleichsnachricht |
|---|---|---|
| Hauptzweck | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Am besten geeignet für | Abwicklung von Rückgaben nach dem Settlement | Abwicklung von Rückabwicklungen wegen Recall, Fehler oder Betrug |

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI-zu-FI-Kundenkredittransfer | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.003.001.09`](/de/pacs.003.001.09/) | FI-zu-FI-Kundenlastschrift | Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen. |
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI-zu-FI-Zahlungsstatusbericht | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |

