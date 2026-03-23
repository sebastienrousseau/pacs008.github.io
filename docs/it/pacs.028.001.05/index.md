---
title: pacs.028.001.05 | Richiesta di stato del pagamento tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Richiesta di stato del pagamento tra istituzioni finanziarie

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusRequestV05 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 5 |

## Panoramica

Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

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

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione | Consente l'indagine proattiva sullo stato delle istruzioni di pagamento in transito |
| **TxInf** — Informazioni sulla transazione che identificano il pagamento oggetto dell'indagine | Supporta i team operativi nell'indagine su pagamenti ritardati o mancanti |
| **OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine | Integra pacs.002 avviando la comunicazione sullo stato anziché attendere |
| **OrgnlInstrId** — Identificazione dell'istruzione originale dal pagamento di origine | Utilizzato nei flussi di lavoro di gestione delle eccezioni e monitoraggio degli SLA |
| **OrgnlEndToEndId** — Identificazione end-to-end originale per la tracciabilità | L'agente ordinante invia pacs.028 all'agente incaricato per richiedere lo stato di un pagamento specifico. L'agente incaricato risponde con un pacs.002 contenente lo stato di elaborazione attuale. |

## Contesto CBPR+ e schemi

- Sostituisce i modelli di richiesta di stato MT199 e le interrogazioni manuali dei messaggi SWIFT
- CBPR+ supporta richieste di stato strutturate collegate agli identificativi del messaggio originale
- Il tracciamento basato su UETR tramite gpi riduce la necessità di indagini manuali
- Sempre più integrato nei cruscotti automatizzati per le operazioni di pagamento

## Flusso del messaggio

L'agente ordinante invia pacs.028 all'agente incaricato per richiedere lo stato di un pagamento specifico. L'agente incaricato risponde con un pacs.002 contenente lo stato di elaborazione attuale.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.028.001.05 | Implementazione attuale in pacs008 | Sesuai untuk pemodelan permintaan status saat ini. |
| pacs.028.001.06 | Revisione successiva del catalogo | Controlla la revisione di catalogo piu recente per la pianificazione futura dell'interoperabilita. |

## Esempio XML commentato

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Commenti sui campi

- `MsgId`: La richiesta stessa ha bisogno di un identificatore verificabile distinto dal pagamento sottostante.
- `OrgnlInstrId`: Usa l'identificatore sorgente esatto dell'istruzione originale per massimizzare la precisione dell'abbinamento.
- `OrgnlEndToEndId`: Including customer traceability helps operations teams reconcile the enquiry faster.

## Confrontare pacs.028 vs pacs.002

| Dimensione | pacs.028.001.05 | Messaggio di confronto |
|---|---|---|
| Scopo principale | Request status | Report status |
| Chi avvia l'interazione | L'istituzione che richiede lo stato | L'istituzione che invia lo stato |
| Operational posture | Exception-driven enquiry | Event-driven reporting |
| Asumsi keliru yang perlu dihindari | Che dovrebbe essere inviato di routine per ogni pagamento | Che elimina la necessita di una gestione proattiva dei casi |

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | Rapporto di stato del pagamento tra istituzioni finanziarie | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | Bonifico cliente tra istituzioni finanziarie | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Bonifico tra istituzioni finanziarie | Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità. |

