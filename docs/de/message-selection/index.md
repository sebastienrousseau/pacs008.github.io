---
title: Leitfaden zur Nachrichtenauswahl | pacs008
description: Wählen Sie die passende ISO-20022-pacs-Nachricht für Erzeugung, Statusmeldungen, Returns, Reversals und Anfragen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# Leitfaden zur Nachrichtenauswahl

Wählen Sie die pacs-Familie zuerst nach dem Geschäftsvorfall und danach nach Schema und Betriebsmodell.

> Zuletzt anhand von Primärquellen am 23. März 2026 geprüft. Öffentliche ISO-20022-, EPC- und Swift-Quellen sind auf dieser Seite verlinkt.

## Schnelle Entscheidungsmatrix

| Nachrichtentyp | Beschreibung | Überblick |
|---|---|---|
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report | Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht. |
| [`pacs.003.001.09`](/de/pacs.003.001.09/) | FI to FI Customer Direct Debit | Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen. |
| [`pacs.004.001.11`](/de/pacs.004.001.11/) | Payment Return | Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird. |
| [`pacs.007.001.11`](/de/pacs.007.001.11/) | FI to FI Payment Reversal | Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert. |
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen. |
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Financial Institution Credit Transfer | Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement. |
| [`pacs.010.001.05`](/de/pacs.010.001.05/) | Financial Institution Direct Debit | Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen. |
| [`pacs.028.001.05`](/de/pacs.028.001.05/) | FI to FI Payment Status Request | Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten. |

## Häufige Vergleichspunkte

| Vergleich | Wesentlicher Unterschied |
|---|---|
| `pacs.008` vs `pacs.009` | Kundenzahlung versus Institut- oder Cover-Bewegung |
| `pacs.004` vs `pacs.007` | Rückgabe von der Empfängerseite versus Reversal von der sendenden Seite |
| `pacs.002` vs `pacs.028` | Statusmeldung versus Statusanfrage |

## Unterstützte Nachrichtenseiten

- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/de/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/de/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/de/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/de/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/de/pacs.028.001.05/) — FI to FI Payment Status Request

