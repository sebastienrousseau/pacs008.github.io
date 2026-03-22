---
title: Tipi di messaggio | Italiano
description: Definizioni e versioni di messaggi pacs ISO 20022 supportate.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Tipi di messaggio

Pacs008 copre la definizione di messaggio pacs.008 principale e i messaggi correlati utilizzati nei flussi di orchestrazione e riconciliazione.

## Supporto incluso

| Tipo di messaggio | Descrizione |
|---|---|
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/it/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/it/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/it/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/it/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/it/pacs.028.001.05/) | FI to FI Payment Status Request |

## Modello di distribuzione

Ogni tipo di messaggio supportato è affiancato da risorse template e logica di validazione affinché i team possano standardizzare la generazione e i test di regressione su più canali.

## Contesto di mercato 2026

- **SEPA SCT / SCT Inst**: pacs.008 rimane centrale per lo scambio di bonifici e l'elaborazione dei pagamenti istantanei.
- **CBPR+**: pacs.008 continua a sostituire i payload transfrontalieri in stile MT103 con dati strutturati più ricchi.
- **Indirizzi strutturati**: le attuali linee guida di mercato indicano la transizione di novembre 2026 dall'uso di indirizzi postali completamente non strutturati.
- **Metodo seriale e STP**: le catene banca-a-banca multi-tratta restano importanti, e le varianti straight-through rimangono essenziali per l'efficienza operativa.

## Capacità operative

Pacs008 fornisce generazione e validazione basate su template attraverso le revisioni delle definizioni di messaggi supportate:

- confrontare le versioni
- eseguire test di regressione sugli aggiornamenti degli schemi
- rafforzare i dati dei messaggi di pagamento in uscita prima del rilascio
- supportare team di prodotto, operazioni e migrazione da un'unica base di codice

