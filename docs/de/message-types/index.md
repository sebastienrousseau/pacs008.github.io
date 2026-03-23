---
title: Nachrichtentypen | pacs008 ISO 20022
description: Unterstützte ISO 20022 pacs-Nachrichtendefinitionen und Versionen. Generierung, Validierung, API-Orchestrierung und Compliance-Unterstützung für...
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# Nachrichtentypen

pacs008 deckt die zentrale pacs.008-Nachrichtendefinition sowie verwandte Nachrichten für Orchestrierung und Abstimmung ab.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Öffentliche ISO-20022-, EPC- und Swift-Quellen sind auf dieser Seite verlinkt.

## Enthaltene Unterstützung

| Nachrichtentyp | Beschreibung | Version | Jahr | Überblick |
|---|---|---|---|---|
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | `pacs.002.001.12` | 2019 | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |
| [`pacs.003.001.09`](/de/pacs.003.001.09/) | FI to FI Customer Direct Debit | `pacs.003.001.09` | 2019 | Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen. |
| [`pacs.004.001.11`](/de/pacs.004.001.11/) | Payment Return | `pacs.004.001.11` | 2019 | Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird. |
| [`pacs.007.001.11`](/de/pacs.007.001.11/) | FI to FI Payment Reversal | `pacs.007.001.11` | 2019 | Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert. |
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer | `pacs.008.001.13` | 2023 | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Financial Institution Credit Transfer | `pacs.009.001.10` | 2019 | Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement. |
| [`pacs.010.001.05`](/de/pacs.010.001.05/) | Financial Institution Direct Debit | `pacs.010.001.05` | 2019 | Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen. |
| [`pacs.028.001.05`](/de/pacs.028.001.05/) | FI to FI Payment Status Request | `pacs.028.001.05` | 2019 | Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten. |

## Bereitstellungsmodell

Jeder unterstützte Nachrichtentyp basiert auf Vorlagen und Validierungslogik, damit Teams Generierung und Regressionstests standardisieren können.

## Die richtige Nachricht wählen

Der Nachrichtenkatalog ist besonders dann relevant, wenn Teams entscheiden müssen, welche Nachricht einen Vorgang startet, welche den Status meldet und welche den Ablauf korrigiert oder rückgängig macht.

Siehe den dedizierten [Leitfaden zur Nachrichtenauswahl](/de/message-selection/) für eine komprimierte Entscheidungsansicht über die unterstützten pacs-Abläufe.


## Marktkontext 2026

- **SEPA SCT / SCT Inst**: pacs.008 bleibt zentral für den Überweisungsaustausch und die Echtzeit-Zahlungsverarbeitung.
- **CBPR+**: pacs.008 ersetzt weiterhin MT103-artige grenzüberschreitende Nutzlasten durch reichhaltigere strukturierte Daten.
- **Strukturierte Adressen**: Aktuelle Marktleitlinien weisen auf die Umstellung im November 2026 weg von vollständig unstrukturierten Postanschriften hin.
- **Serielle Methode und STP**: Mehrstufige Bank-zu-Bank-Ketten bleiben wichtig, und Straight-Through-Varianten sind weiterhin entscheidend für die operative Effizienz.

## Operative Fähigkeiten

pacs008 bietet vorlagengestützte Generierung und Validierung über unterstützte Nachrichtendefinitions-Revisionen:

- Versionen vergleichen
- Regressionstests für Schema-Updates durchführen
- Ausgehende Zahlungsnachrichtendaten vor der Freigabe stärken
- Produkt-, Betriebs- und Migrationsteams aus einer einzigen Codebasis unterstützen

