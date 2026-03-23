---
title: Guida alla selezione dei messaggi | pacs008
description: Scegli il messaggio pacs ISO 20022 corretto per generazione, stati, resi, reversal e richieste.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Guida alla selezione dei messaggi

Scegli la famiglia pacs prima in base all'evento operativo e poi in base allo schema e al modello operativo.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026 usando materiali pubblici ISO 20022, EPC e Swift collegati in questa pagina.

## Matrice decisionale rapida

| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | Rapporto di stato del pagamento tra istituzioni finanziarie | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |
| [`pacs.003.001.09`](/it/pacs.003.001.09/) | Addebito diretto cliente tra istituzioni finanziarie | Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore. |
| [`pacs.004.001.11`](/it/pacs.004.001.11/) | Reso di pagamento | Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine. |
| [`pacs.007.001.11`](/it/pacs.007.001.11/) | Storno di pagamento tra istituzioni finanziarie | Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall'agente ordinante originale. |
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | Bonifico cliente tra istituzioni finanziarie | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Bonifico tra istituzioni finanziarie | Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità. |
| [`pacs.010.001.05`](/it/pacs.010.001.05/) | Addebito diretto tra istituzioni finanziarie | Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto. |
| [`pacs.028.001.05`](/it/pacs.028.001.05/) | Richiesta di stato del pagamento tra istituzioni finanziarie | Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto. |

## Punti di confronto comuni

| Confronto | Distinzione chiave |
|---|---|
| `pacs.008` vs `pacs.009` | Pagamento cliente rispetto a movimento istituzionale o di copertura |
| `pacs.004` vs `pacs.007` | Reso dal lato ricevente rispetto a reversal dal lato ordinante |
| `pacs.002` vs `pacs.028` | Rapporto di stato rispetto a richiesta di stato |

## Pagine dei messaggi supportati

- [`pacs.002.001.12`](/it/pacs.002.001.12/) — Rapporto di stato del pagamento tra istituzioni finanziarie
- [`pacs.003.001.09`](/it/pacs.003.001.09/) — Addebito diretto cliente tra istituzioni finanziarie
- [`pacs.004.001.11`](/it/pacs.004.001.11/) — Reso di pagamento
- [`pacs.007.001.11`](/it/pacs.007.001.11/) — Storno di pagamento tra istituzioni finanziarie
- [`pacs.008.001.13`](/it/pacs.008.001.13/) — Bonifico cliente tra istituzioni finanziarie
- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Bonifico tra istituzioni finanziarie
- [`pacs.010.001.05`](/it/pacs.010.001.05/) — Addebito diretto tra istituzioni finanziarie
- [`pacs.028.001.05`](/it/pacs.028.001.05/) — Richiesta di stato del pagamento tra istituzioni finanziarie

