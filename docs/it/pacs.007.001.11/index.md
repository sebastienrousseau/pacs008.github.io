---
title: pacs.007.001.11 — FI to FI Payment Reversal | Italiano
description: Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall'agente ordinante originale.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentReversalV11 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 11 |

## Panoramica

Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall'agente ordinante originale.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione con importo dello storno e parti coinvolte
- **OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine
- **RvslRsnInf** — Informazioni sul motivo dello storno con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale per la tracciabilità end-to-end

## Contesto di business

- Avviato quando il mittente originale identifica un errore prima o dopo il regolamento
- Utilizzato in scenari di frode in cui è richiesto uno storno rapido
- Supporta lo storno sia totale che parziale degli importi del pagamento originale
- Trasporta codici motivo di storno strutturati per l'elaborazione a valle

## Contesto CBPR+ e schemi

- Si distingue da pacs.004 per la direzione — lo storno procede in avanti dall'ordinante, la restituzione procede all'indietro dal beneficiario
- CBPR+ richiede l'associazione con gli identificativi del messaggio originale per l'abbinamento automatico
- I codici motivo strutturati sostituiscono le narrative in testo libero dei messaggi MT legacy
- Sempre più utilizzato nei flussi di lavoro di richiamo dei pagamenti istantanei e prevenzione delle frodi

## Flusso del messaggio

L'agente ordinante (mittente originale) invia pacs.007 in avanti attraverso la catena di pagamento per stornare un pagamento precedentemente istruito. Ogni agente elabora l'istruzione di storno e adegua il regolamento di conseguenza.

## Messaggi correlati

- [`pacs.008.001.13`](/it/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/it/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report

