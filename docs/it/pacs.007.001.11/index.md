---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo...
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

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 27 February 2025; i collegamenti alle fonti sono riportati di seguito.

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

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione | Avviato quando il mittente originale identifica un errore prima o dopo il regolamento |
| **TxInf** — Informazioni sulla transazione con importo dello storno e parti coinvolte | Utilizzato in scenari di frode in cui è richiesto uno storno rapido |
| **OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine | Supporta lo storno sia totale che parziale degli importi del pagamento originale |
| **RvslRsnInf** — Informazioni sul motivo dello storno con codici motivo strutturati | Trasporta codici motivo di storno strutturati per l'elaborazione a valle |
| **OrgnlTxRef** — Riferimento alla transazione originale per la tracciabilità end-to-end | L'agente ordinante (mittente originale) invia pacs.007 in avanti attraverso la catena di pagamento per stornare un pagamento precedentemente istruito. Ogni agente elabora l'istruzione di storno e adegua il regolamento di conseguenza. |

## Contesto CBPR+ e schemi

- Si distingue da pacs.004 per la direzione — lo storno procede in avanti dall'ordinante, la restituzione procede all'indietro dal beneficiario
- CBPR+ richiede l'associazione con gli identificativi del messaggio originale per l'abbinamento automatico
- I codici motivo strutturati sostituiscono le narrative in testo libero dei messaggi MT legacy
- Sempre più utilizzato nei flussi di lavoro di richiamo dei pagamenti istantanei e prevenzione delle frodi

## Flusso del messaggio

L'agente ordinante (mittente originale) invia pacs.007 in avanti attraverso la catena di pagamento per stornare un pagamento precedentemente istruito. Ogni agente elabora l'istruzione di storno e adegua il regolamento di conseguenza.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.007.001.11 | Implementazione attuale in pacs008 | Buona base per modellare i workflow di reversal. |
| pacs.007.001.12-13 | Revisioni successive del catalogo | Check later revisions for current market-infrastructure alignment. |

## Esempio XML commentato

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Commenti sui campi

- `MsgId`: The reversal itself needs its own audit-safe identifier.
- `OrgnlInstrId`: Preserve the original payment reference to avoid reconciliation breaks.
- `RvslRsnInf`: Use structured reversal reasons so fraud, error, and duplicate-payment cases can be routed differently.

## Confrontare pacs.007 vs pacs.004

| Dimensione | pacs.007.001.11 | Messaggio di confronto |
|---|---|---|
| Scopo principale | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| Best fit | Recall, error, or fraud-driven reversal handling | Post-settlement return handling |

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.004.001.11`](/it/pacs.004.001.11/) | Payment Return | Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine. |
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | FI to FI Payment Status Report | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |

