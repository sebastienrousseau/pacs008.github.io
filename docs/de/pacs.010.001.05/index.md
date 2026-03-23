---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO-Name** | FinancialInstitutionDirectDebitV05 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 5 |

## Überblick

Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 27 February 2025; Quellenlinks sind unten aufgeführt.

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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen | Unterstützt Interbanken-Lastschrifteinzug zwischen Finanzinstituten |
| **DrctDbtTxInf** — Lastschrifttransaktionsinformationen mit Einzugsbetrag | Wird für Gebühreneinzug, Margin Calls und institutionelle Abwicklungsverpflichtungen verwendet |
| **Cdtr / CdtrAgt** — Gläubigerinstitut und Agentenidentifikation | Erfordert vorab vereinbarte bilaterale Vereinbarungen zwischen teilnehmenden Instituten |
| **Dbtr / DbtrAgt** — Schuldnerinstitut und Agentenidentifikation | Entscheidend für institutionelles Cash Management und Interbanken-Abwicklungszyklen |
| **IntrBkSttlmAmt** — Interbanken-Abwicklungsbetrag in der Abwicklungswährung | Das Gläubigerinstitut sendet pacs.010 an das Schuldnerinstitut, um Gelder im Rahmen einer vorab vereinbarten Regelung einzuziehen. Das Schuldnerinstitut validiert die Anforderung und wickelt die Lastschrift ab oder lehnt sie ab. |

## CBPR+- und Schema-Kontext

- Ersetzt Elemente von MT204 für die Verarbeitung von Interbanken-Lastschriften
- Die strukturierte Parteienidentifikation folgt denselben Anforderungen wie andere pacs-Nachrichten
- Die Validierung institutioneller Kennungen (BIC, LEI) ist obligatorisch
- In vollständigen ISO 20022-Einführungsplänen über Marktinfrastrukturen enthalten

## Nachrichtenfluss

Das Gläubigerinstitut sendet pacs.010 an das Schuldnerinstitut, um Gelder im Rahmen einer vorab vereinbarten Regelung einzuziehen. Das Schuldnerinstitut validiert die Anforderung und wickelt die Lastschrift ab oder lehnt sie ab.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.010.001.05 | Aktuelle Implementierung in pacs008 | Referenzpunkt für die Unterstützung institutsbezogener Lastschriften im aktuellen Projekt. |
| pacs.010.001.06 | Spätere Katalogversion | Vor der Übernahme neuer Infrastrukturanforderungen prüfen. |

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

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need explicit bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly; this is not a retail-customer debit model.

## Primärquellen

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Verwandte Nachrichten
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Financial Institution Credit Transfer | Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement. |
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |
| [`pacs.003.001.09`](/de/pacs.003.001.09/) | FI to FI Customer Direct Debit | Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen. |

