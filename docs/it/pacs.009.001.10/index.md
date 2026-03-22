---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Italiano
description: Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionCreditTransferV10 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 10 |

## Panoramica

Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo di regolamento interbancario
- **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente
- **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente
- **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento

## Contesto di business

- Utilizzato per trasferimenti bancari su conto proprio e pagamenti di copertura
- Supporta la gestione della liquidità tra partner di corrispondenza bancaria
- Trasporta la tratta di copertura dei bonifici della clientela regolati con metodo copertura
- Consente operazioni di tesoreria e finanziamento tra istituti finanziari

## Contesto CBPR+ e schemi

- Sostituisce MT202 e MT202COV per i trasferimenti tra istituti
- I flussi con metodo copertura associano pacs.009 all'istruzione cliente pacs.008 sottostante
- Dati strutturati sulle parti e identificazione LEI sempre più richiesti
- SWIFT gpi copre pacs.009 per la trasparenza nella corrispondenza bancaria

## Flusso del messaggio

L'istituto debitore invia pacs.009 all'istituto creditore per trasferire i propri fondi. Per i pagamenti con metodo copertura, pacs.009 fornisce la tratta di finanziamento mentre pacs.008 trasporta l'istruzione del cliente attraverso un percorso separato.

## Messaggi correlati

- [`pacs.008.001.13`](/it/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/it/pacs.010.001.05/) — Financial Institution Direct Debit

