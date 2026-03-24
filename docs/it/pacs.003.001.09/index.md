---
title: pacs.003.001.09 | Addebito diretto cliente tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Addebito diretto cliente tra istituzioni finanziarie

| | |
|---|---|
| **Nome ISO** | FIToFICustomerDirectDebitV09 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 9 |

## Panoramica

Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

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

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento | Supporta gli schemi di addebito diretto SEPA Core e B2B |
| **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo e parti coinvolte | Utilizzato per la riscossione di pagamenti ricorrenti come abbonamenti, bollette e rimborsi di prestiti |
| **Cdtr** — Identificazione del creditore e dettagli del conto | Richiede un riferimento di mandato valido tra debitore e creditore |
| **CdtrAgt** — Identificazione dell'agente del creditore (istituto di incasso) | Consente la riscossione massiva di molteplici istruzioni di addebito diretto in un unico messaggio |
| **DbtrAgt** — Identificazione dell'agente del debitore (istituto pagante) | L'agente del creditore avvia pacs.003 verso l'agente del debitore per raccogliere i fondi. L'agente del debitore convalida il mandato, verifica la copertura del conto e procede al regolamento o alla restituzione della transazione. |

## Contesto CBPR+ e schemi

- I requisiti di indirizzo strutturato e identificazione delle parti si applicano ugualmente agli addebiti diretti
- I dati relativi al mandato devono essere completamente strutturati da novembre 2026
- Sostituisce nei flussi transfrontalieri i precedenti formati di addebito diretto in stile MT104
- La validazione dell'identificazione dello schema del creditore è sempre più applicata

## Flusso del messaggio

L'agente del creditore avvia pacs.003 verso l'agente del debitore per raccogliere i fondi. L'agente del debitore convalida il mandato, verifica la copertura del conto e procede al regolamento o alla restituzione della transazione.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.003.001.09 | Implementazione attuale in pacs008 | Utile per la modellazione dei riferimenti di addebito diretto nel progetto corrente. |
| pacs.003.001.10-11 | Revisioni successive del catalogo | Periksa revisi yang lebih baru untuk pembaruan mandat, status, dan interoperabilitas sebelum dipakai dalam implementasi baru. |

## Esempio XML commentato

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Commenti sui campi

- `EndToEndId`: Mantieni separati gli identificatori di mandato e di incasso dai riferimenti delle fatture aziendali.
- `IntrBkSttlmAmt`: Valida la precisione dell'importo di addebito e le regole di valuta prima di generare l'XML.
- `Dbtr` / `Cdtr`: Il buon esito di un addebito diretto dipende spesso piu dalla qualita del conto e del mandato che dalla struttura XML.

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.004.001.11`](/it/pacs.004.001.11/) | Reso di pagamento | Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine. |
| [`pacs.007.001.11`](/it/pacs.007.001.11/) | Storno di pagamento tra istituzioni finanziarie | Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall'agente ordinante originale. |
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | Rapporto di stato del pagamento tra istituzioni finanziarie | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |

