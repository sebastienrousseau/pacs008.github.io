---
title: Tipi di messaggio | pacs008 ISO 20022
description: Definizioni e versioni di messaggi pacs ISO 20022 supportate. Generazione, validazione, orchestrazione API e conformità per i flussi di bonifico cliente...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Tipi di messaggio

pacs008 copre la definizione di messaggio pacs.008 principale e i messaggi correlati utilizzati nei flussi di orchestrazione e riconciliazione.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026 usando materiali pubblici ISO 20022, EPC e Swift collegati in questa pagina.

## Supporto incluso

| Tipo di messaggio | Descrizione | Versione | Anno | Panoramica |
|---|---|---|---|---|
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | Rapporto di stato del pagamento tra istituzioni finanziarie | `pacs.002.001.12` | 2019 | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |
| [`pacs.003.001.09`](/it/pacs.003.001.09/) | Addebito diretto cliente tra istituzioni finanziarie | `pacs.003.001.09` | 2019 | Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore. |
| [`pacs.004.001.11`](/it/pacs.004.001.11/) | Reso di pagamento | `pacs.004.001.11` | 2019 | Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine. |
| [`pacs.007.001.11`](/it/pacs.007.001.11/) | Storno di pagamento tra istituzioni finanziarie | `pacs.007.001.11` | 2019 | Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall'agente ordinante originale. |
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | Bonifico cliente tra istituzioni finanziarie | `pacs.008.001.13` | 2023 | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Bonifico tra istituzioni finanziarie | `pacs.009.001.10` | 2019 | Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità. |
| [`pacs.010.001.05`](/it/pacs.010.001.05/) | Addebito diretto tra istituzioni finanziarie | `pacs.010.001.05` | 2019 | Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto. |
| [`pacs.028.001.05`](/it/pacs.028.001.05/) | Richiesta di stato del pagamento tra istituzioni finanziarie | `pacs.028.001.05` | 2019 | Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto. |

## Modello di distribuzione

Ogni tipo di messaggio supportato è affiancato da modelli XML e logica di validazione affinché i team possano standardizzare la generazione e i test di regressione su più canali.

## Scegliere il messaggio corretto

Il catalogo dei messaggi è particolarmente utile quando i team devono decidere quale messaggio avvia il lavoro, quale riporta lo stato e quale corregge o annulla il flusso.

Vedere la [guida alla selezione dei messaggi](/it/message-selection/) per una vista decisionale sintetica sui flussi pacs supportati.


## Contesto di mercato 2026

- **SEPA SCT / SCT Inst**: pacs.008 rimane centrale per lo scambio di bonifici e l'elaborazione dei pagamenti istantanei.
- **CBPR+**: pacs.008 continua a sostituire i payload transfrontalieri in stile MT103 con dati strutturati più ricchi.
- **Indirizzi strutturati**: le attuali linee guida di mercato indicano la transizione di novembre 2026 dall'uso di indirizzi postali completamente non strutturati.
- **Metodo seriale e STP**: le catene banca-a-banca multi-tratta restano importanti, e le varianti straight-through rimangono essenziali per l'efficienza operativa.

## Capacità operative

pacs008 fornisce generazione e validazione basate su modelli attraverso le revisioni delle definizioni di messaggi supportate:

- confrontare le versioni
- eseguire test di regressione sugli aggiornamenti degli schemi
- rafforzare i dati dei messaggi di pagamento in uscita prima del rilascio
- supportare team di prodotto, operazioni e migrazione da un'unica base di codice

