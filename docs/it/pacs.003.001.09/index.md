---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Italiano
description: Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nome ISO** | FIToFICustomerDirectDebitV09 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 9 |

## Panoramica

Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo e parti coinvolte
- **Cdtr** — Identificazione del creditore e dettagli del conto
- **CdtrAgt** — Identificazione dell'agente del creditore (istituto di incasso)
- **DbtrAgt** — Identificazione dell'agente del debitore (istituto pagante)

## Contesto di business

- Supporta gli schemi di addebito diretto SEPA Core e B2B
- Utilizzato per la riscossione di pagamenti ricorrenti come abbonamenti, bollette e rimborsi di prestiti
- Richiede un riferimento di mandato valido tra debitore e creditore
- Consente la riscossione massiva di molteplici istruzioni di addebito diretto in un unico messaggio

## Contesto CBPR+ e schemi

- I requisiti di indirizzo strutturato e identificazione delle parti si applicano ugualmente agli addebiti diretti
- I dati relativi al mandato devono essere completamente strutturati da novembre 2026
- Sostituisce i formati di addebito diretto legacy in stile MT104 nei flussi transfrontalieri
- La validazione dell'identificazione dello schema del creditore è sempre più applicata

## Flusso del messaggio

L'agente del creditore avvia pacs.003 verso l'agente del debitore per raccogliere i fondi. L'agente del debitore convalida il mandato, verifica la copertura del conto e procede al regolamento o alla restituzione della transazione.

## Messaggi correlati

- [`pacs.004.001.11`](/it/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/it/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report

