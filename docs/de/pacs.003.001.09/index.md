---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO-Name** | FIToFICustomerDirectDebitV09 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 9 |

## Überblick

Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 27 February 2025; Quellenlinks sind unten aufgeführt.

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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen | Unterstützt SEPA Core- und B2B-Lastschriftverfahren |
| **DrctDbtTxInf** — Lastschrifttransaktionsinformationen mit Betrag und Parteien | Wird für wiederkehrende Zahlungseinzüge wie Abonnements, Rechnungen und Kreditrückzahlungen verwendet |
| **Cdtr** — Gläubigeridentifikation und Kontodaten | Erfordert eine gültige Mandatsreferenz zwischen Schuldner und Gläubiger |
| **CdtrAgt** — Gläubigeragent (einziehendes Institut) Identifikation | Ermöglicht den Sammeleinzug mehrerer Lastschriftanweisungen in einer Nachricht |
| **DbtrAgt** — Schuldneragent (zahlendes Institut) Identifikation | Der Gläubigeragent initiiert pacs.003 gegenüber dem Schuldneragent zum Einzug von Geldern. Der Schuldneragent validiert das Mandat, prüft die Kontodeckung und wickelt die Transaktion ab oder gibt sie zurück. |

## CBPR+- und Schema-Kontext

- Anforderungen an strukturierte Adressen und Parteienidentifikation gelten gleichermaßen für Lastschriften
- Mandatsbezogene Daten müssen ab November 2026 vollständig strukturiert sein
- Ersetzt MT104-artige Lastschriftformate im grenzüberschreitenden Verkehr
- Die Validierung der Gläubiger-Schema-Identifikation wird zunehmend durchgesetzt

## Nachrichtenfluss

Der Gläubigeragent initiiert pacs.003 gegenüber dem Schuldneragent zum Einzug von Geldern. Der Schuldneragent validiert das Mandat, prüft die Kontodeckung und wickelt die Transaktion ab oder gibt sie zurück.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.003.001.09 | Aktuelle Implementierung in pacs008 | Nützlich für die Modellierung von Lastschriftreferenzen im aktuellen Projekt. |
| pacs.003.001.10-11 | Spätere Katalogversionen | Vor einem Greenfield-Einsatz spätere Versionen auf Mandats-, Status- und Interoperabilitätsänderungen prüfen. |

## Kommentiertes XML-Beispiel

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Example Debtor</Nm></Dbtr>
    <Cdtr><Nm>Example Creditor</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Hinweise zu den Feldern

- `EndToEndId`: Keep mandate and collection identifiers separate from business invoice references.
- `IntrBkSttlmAmt`: Validate debit amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Direct-debit success often depends more on account and mandate quality than on XML structure.

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.004.001.11`](/de/pacs.004.001.11/) | Payment Return | Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird. |
| [`pacs.007.001.11`](/de/pacs.007.001.11/) | FI to FI Payment Reversal | Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert. |
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |

