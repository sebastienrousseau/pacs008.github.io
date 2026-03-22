---
title: pacs.028.001.05 — FI to FI Payment Status Request | Italiano
description: Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusRequestV05 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 5 |

## Panoramica

Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione che identificano il pagamento oggetto dell'indagine
- **OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine
- **OrgnlInstrId** — Identificazione dell'istruzione originale dal pagamento di origine
- **OrgnlEndToEndId** — Identificazione end-to-end originale per la tracciabilità

## Contesto di business

- Consente l'indagine proattiva sullo stato delle istruzioni di pagamento in transito
- Supporta i team operativi nell'indagine su pagamenti ritardati o mancanti
- Integra pacs.002 avviando la comunicazione sullo stato anziché attendere
- Utilizzato nei flussi di lavoro di gestione delle eccezioni e monitoraggio degli SLA

## Contesto CBPR+ e schemi

- Sostituisce i modelli di richiesta di stato MT199 e le interrogazioni manuali dei messaggi SWIFT
- CBPR+ supporta richieste di stato strutturate collegate agli identificativi del messaggio originale
- Il tracciamento basato su UETR tramite gpi riduce la necessità di indagini manuali
- Sempre più integrato nei cruscotti automatizzati per le operazioni di pagamento

## Flusso del messaggio

L'agente ordinante invia pacs.028 all'agente incaricato per richiedere lo stato di un pagamento specifico. L'agente incaricato risponde con un pacs.002 contenente lo stato di elaborazione attuale.

## Messaggi correlati

- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/it/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Financial Institution Credit Transfer

