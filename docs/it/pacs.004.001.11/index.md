---
title: pacs.004.001.11 — Payment Return | Italiano
description: Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nome ISO** | PaymentReturnV11 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 11 |

## Panoramica

Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione con importo della restituzione e parti coinvolte
- **OrgnlGrpInf** — Informazioni sul gruppo originale con collegamento al messaggio di origine
- **RtrRsnInf** — Informazioni sul motivo della restituzione con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale per abbinamento e riconciliazione

## Contesto di business

- Gestisce le restituzioni post-regolamento quando il conto del beneficiario non può essere accreditato
- Supporta scenari di richiamo in cui l'ordinante richiede la restituzione dei fondi
- Trasporta codici motivo di restituzione strutturati per la trasparenza normativa e operativa
- Si applica sia alle restituzioni di bonifici (pacs.008) che alle restituzioni di addebiti diretti (pacs.003)

## Contesto CBPR+ e schemi

- Sostituisce MT103 RETURN e la messaggistica di restituzione con metodo copertura
- I codici motivo di restituzione sono standardizzati e leggibili automaticamente secondo ISO 20022
- CBPR+ richiede i dati completi di riferimento della transazione originale per l'abbinamento
- Il tracciamento SWIFT gpi si estende alle transazioni di restituzione per la visibilità end-to-end

## Flusso del messaggio

L'agente incaricato invia pacs.004 attraverso la catena di pagamento per restituire fondi precedentemente regolati. Ogni agente nella catena elabora la restituzione e riaccredita i conti pertinenti.

## Messaggi correlati

- [`pacs.008.001.13`](/it/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/it/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report

