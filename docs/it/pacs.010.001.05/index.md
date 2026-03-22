---
title: pacs.010.001.05 — Financial Institution Direct Debit | Italiano
description: Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionDirectDebitV05 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 5 |

## Panoramica

Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo di riscossione
- **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente
- **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente
- **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento

## Contesto di business

- Supporta la riscossione interbancaria tramite addebito diretto tra istituti finanziari
- Utilizzato per la riscossione di commissioni, richieste di margine e obblighi di regolamento istituzionale
- Richiede accordi bilaterali prestabiliti tra gli istituti partecipanti
- Essenziale per la gestione della liquidità istituzionale e i cicli di regolamento interbancario

## Contesto CBPR+ e schemi

- Sostituisce elementi di MT204 per l'elaborazione degli addebiti diretti interbancari
- L'identificazione strutturata delle parti segue gli stessi requisiti degli altri messaggi pacs
- La validazione degli identificativi istituzionali (BIC, LEI) è obbligatoria
- Incluso nelle roadmap di adozione completa di ISO 20022 attraverso le infrastrutture di mercato

## Flusso del messaggio

L'istituto creditore invia pacs.010 all'istituto debitore per raccogliere fondi in base a un accordo prestabilito. L'istituto debitore convalida la richiesta e regola o rifiuta l'addebito diretto.

## Messaggi correlati

- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/it/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/it/pacs.003.001.09/) — FI to FI Customer Direct Debit

