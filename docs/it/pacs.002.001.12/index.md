---
title: pacs.002.001.12 — FI to FI Payment Status Report | Italiano
description: Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusReportV12 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 12 |

## Panoramica

Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **OrgnlGrpInfAndSts** — Informazioni e stato del gruppo originale per la reportistica a livello aggregato
- **TxInfAndSts** — Informazioni e stato della transazione per gli esiti delle singole transazioni
- **StsRsnInf** — Informazioni sul motivo dello stato con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale che collega all'istruzione di origine

## Contesto di business

- Utilizzato per confermare il regolamento o segnalare il rifiuto di bonifici, addebiti diretti e restituzioni di pagamento
- Consente la riconciliazione tra agenti ordinanti e agenti incaricati
- Obbligatorio nei flussi CBPR+ per confermare l'elaborazione dei messaggi pacs.008 e pacs.009
- Supporta la reportistica di stato sia a livello di gruppo aggregato che a livello di singola transazione

## Contesto CBPR+ e schemi

- Sostituisce MT199 e le narrative di stato nel campo 79 dei messaggi MT
- CBPR+ rende obbligatorio pacs.002 per tutte le comunicazioni sullo stato dei pagamenti
- I codici motivo strutturati sostituiscono le spiegazioni di rifiuto in testo libero
- L'integrazione con il tracciamento SWIFT gpi richiede pacs.002 per la trasparenza end-to-end

## Flusso del messaggio

L'agente incaricato (destinatario) invia pacs.002 all'agente ordinante (mittente) per confermare l'accettazione, il regolamento o il rifiuto di un'istruzione di pagamento ricevuta come pacs.008 o pacs.009.

## Messaggi correlati

- [`pacs.008.001.13`](/it/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/it/pacs.028.001.05/) — FI to FI Payment Status Request

