---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO-Name** | FIToFICustomerCreditTransferV13 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2023 |
| **Version** | 13 |

## Überblick

Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Referenzdatum des ISO-20022-Katalogs: 27 February 2025; Quellenlinks sind unten aufgeführt.

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

| Wichtige Datenelemente | Geschäftskontext |
|---|---|
| **GrpHdr** — Gruppenkopf mit Nachrichten-ID, Erstellungsdatum, Transaktionsanzahl und Abwicklungsinformationen | Die primäre Nachricht für kundeninitiierte grenzüberschreitende und inländische Überweisungen |
| **CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Betrag, Gebühren und Zweck | Wird in SEPA SCT, SEPA Instant, CBPR+ und nationalen Clearingsystemen verwendet |
| **Dbtr / DbtrAgt** — Identifikation und Kontodaten von Schuldner und Schuldneragent | Trägt strukturierte Überweisungsinformationen für automatische Abstimmung |
| **Cdtr / CdtrAgt** — Identifikation und Kontodaten von Gläubiger und Gläubigeragent | Unterstützt serielle, Deckungs- und Direktabwicklungsmethoden für mehrstufige Zahlungsketten |
| **RmtInf** — Überweisungsinformationen für strukturierte oder unstrukturierte Zahlungsreferenzen | Der Schuldneragent erstellt einen pacs.008 und sendet ihn an den Gläubigeragent (direkt oder über Vermittler). Jeder Agent in der Kette validiert, ergänzt und leitet die Anweisung weiter, bis der Gläubigeragent das Konto des Begünstigten gutschreibt. |

## CBPR+- und Schema-Kontext

- Ersetzt MT103 und MT103+ für grenzüberschreitende Kundenüberweisungen
- Die Frist für strukturierte Adressen im November 2026 gilt für alle Postanschriften der Parteien
- SWIFT gpi erfordert pacs.008 für UETR-basiertes End-to-End-Tracking
- 13 Revisionen spiegeln die fortlaufende Schema-Evolution über Marktinfrastrukturen wider

## Nachrichtenfluss

Der Schuldneragent erstellt einen pacs.008 und sendet ihn an den Gläubigeragent (direkt oder über Vermittler). Jeder Agent in der Kette validiert, ergänzt und leitet die Anweisung weiter, bis der Gläubigeragent das Konto des Begünstigten gutschreibt.

## Tabelle der Versionsunterschiede

| Versionsbereich | Warum es wichtig ist | Praktische Konsequenz |
|---|---|---|
| pacs.008.001.01-07 | Frühe Versionen | Vor allem für die Analyse von Alt-Migrationen und den Versionsverlauf relevant. |
| pacs.008.001.08-12 | Moderne Vorversionen | Diese Versionen treten am ehesten in jüngeren Migrations- oder Koexistenzprojekten auf. |
| pacs.008.001.13 | Aktuelle Katalogversion | Für die Planung mit der aktuellen Version geeignet, wobei Schema-Vorgaben und Gegenparteibereitschaft weiterhin geprüft werden sollten. |

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
- `UETR`: Verwenden Sie dies konsistent in grenzüberschreitenden und tracking-intensiven Umgebungen; erzeugen Sie es nicht ad hoc in späteren Workflow-Schritten.
- `IntrBkSttlmAmt`: Prüfen Sie Betrag und Währung anhand von Geschäftsregeln vor der Schemaprüfung.
- `Dbtr` / `Cdtr`: Parteienqualität, Adressstruktur und Identifikatoren sind meist die Haupttreiber für Repair-Raten.

## Vergleich pacs.008 vs pacs.009

| Dimension | pacs.008.001.13 | Vergleichsnachricht |
|---|---|---|
| Hauptzweck | Kundenkredittransfer | Instituts-Eigengeschäftstransfer oder Cover-Leg |
| Fachlicher Verantwortungsbereich | Kundenzahlungsbetrieb | Treasury-, Korrespondenz- und Funding-Betrieb |
| Typische Kombinationen | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Zu vermeidende Fehlannahme | Dass alle Bank-zu-Bank-Transfers hier eingeordnet werden sollten | Dass diese Nachricht Kundenkredittransfer-Anweisungen ersetzen kann |

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
| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |
| [`pacs.004.001.11`](/de/pacs.004.001.11/) | Payment Return | Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird. |
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Financial Institution Credit Transfer | Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement. |

