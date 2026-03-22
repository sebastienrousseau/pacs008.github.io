---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Italiano
description: Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nome ISO** | FIToFICustomerCreditTransferV13 |
| **Stato di registrazione** | Registered |
| **Anno** | 2023 |
| **Versione** | 13 |

## Panoramica

Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con ID messaggio, data di creazione, numero di transazioni e informazioni di regolamento
- **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo, commissioni e finalità
- **Dbtr / DbtrAgt** — Identificazione del debitore e dell'agente del debitore con dettagli del conto
- **Cdtr / CdtrAgt** — Identificazione del creditore e dell'agente del creditore con dettagli del conto
- **RmtInf** — Informazioni di rimessa per riferimenti di pagamento strutturati o non strutturati

## Contesto di business

- Il messaggio principale per bonifici transfrontalieri e domestici avviati dal cliente
- Utilizzato attraverso SEPA SCT, SEPA Instant, CBPR+ e i sistemi di compensazione nazionali
- Trasporta informazioni di rimessa strutturate per supportare la riconciliazione automatica
- Supporta metodi di regolamento seriale, copertura e diretto per catene di pagamento multi-tratta

## Contesto CBPR+ e schemi

- Sostituisce MT103 e MT103+ per i bonifici transfrontalieri della clientela
- La scadenza per gli indirizzi strutturati di novembre 2026 si applica a tutti gli indirizzi postali delle parti
- SWIFT gpi richiede pacs.008 per il tracciamento end-to-end basato su UETR
- 13 revisioni riflettono l'evoluzione continua dello schema attraverso le infrastrutture di mercato

## Flusso del messaggio

L'agente del debitore crea un pacs.008 e lo invia all'agente del creditore (direttamente o tramite intermediari). Ogni agente nella catena convalida, arricchisce e inoltra l'istruzione fino a quando l'agente del creditore accredita il conto del beneficiario.

## Versioni supportate

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Messaggi correlati

- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/it/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Financial Institution Credit Transfer

