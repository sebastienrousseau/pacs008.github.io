---
title: "Glossario ISO 20022 | pacs008"
description: Definizioni dei principali termini ISO 20022 e di messaggistica dei pagamenti utilizzati in pacs.008 e messaggi correlati.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Glossario ISO 20022

Questo glossario definisce i termini chiave, le abbreviazioni e i concetti tecnici utilizzati nei messaggi pacs ISO 20022 e in questo sito.

## A

**ACH** — Automated Clearing House. Una rete che elabora pagamenti elettronici raggruppati tra istituzioni finanziarie.

**AdrLine** — Riga di indirizzo. Un campo di indirizzo in testo libero nelle strutture di indirizzo postale ISO 20022. Fino a 7 righe di 70 caratteri ciascuna. In fase di sostituzione con elementi di indirizzo strutturati per CBPR+ entro novembre 2026.

**ACCP** — Profilo cliente accettato. Un codice di stato pacs.002 che indica che i controlli precedenti (sintassi, profilo cliente) sono stati superati.

**ACSC** — Regolamento accettato completato. Un codice di stato pacs.002 che conferma il completamento del regolamento sul conto del debitore.

**ACSP** — Regolamento accettato in corso. Un codice di stato pacs.002 che indica che tutti i controlli sono stati superati e il regolamento è in corso.

## B

**BAH** — Business Application Header (head.001). Un involucro standardizzato che avvolge i messaggi commerciali ISO 20022 per il trasporto tramite SWIFT. Contiene informazioni di instradamento, identificatore della definizione del messaggio e BIC mittente/destinatario.

**BIC** — Business Identifier Code (ISO 9362). Un codice di 8 o 11 caratteri che identifica univocamente un'istituzione finanziaria. Formato: BBBBCCLL (codice banca + paese + località) con codice filiale BBB opzionale.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Il programma di SWIFT per la migrazione della messaggistica dei pagamenti transfrontalieri da MT a ISO 20022. Operativo da marzo 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information. Il principale blocco costruttivo a livello di transazione in pacs.008 contenente dettagli di pagamento, parti, importi e informazioni di rimessa.

**ChrgBr** — Charge Bearer. Specifica chi paga le spese della transazione. Valori: DEBT (debitore), CRED (creditore), SHAR (condivise), SLEV (livello di servizio, solo SEPA).

**CLRG** — Regolamento tramite sistema di compensazione. Un metodo di regolamento in cui i fondi transitano attraverso un sistema di compensazione come TARGET2, EURO1 o CHIPS.

**COVE** — Regolamento con metodo di copertura. Un metodo di regolamento in cui un pagamento di copertura pacs.009 separato gestisce il finanziamento tra corrispondenti mentre pacs.008 trasporta direttamente i dati del cliente.

**CSM** — Meccanismo di compensazione e regolamento. Un'infrastruttura che elabora e regola le istruzioni di pagamento tra istituzioni partecipanti.

## D

**Dbtr** — Debitore. La parte che deve i fondi e avvia il pagamento. In pacs.008, l'elemento Dbtr contiene nome, indirizzo postale, identificazione e paese di residenza del debitore.

**DbtrAgt** — Agente del debitore. L'istituzione finanziaria che gestisce il conto del debitore e invia l'istruzione pacs.008.

## E

**E2E ID** — Identificazione End-to-End (EndToEndId). Un riferimento assegnato dall'originatore che deve rimanere invariato attraverso tutti gli agenti nella catena di pagamento. Utilizzato per la tracciabilità a livello cliente.

**EPC** — European Payments Council. L'organismo che gestisce i regolamenti degli schemi di pagamento SEPA per bonifici e addebiti diretti.

## F

**FI** — Istituzione finanziaria. Una banca o altra istituzione che partecipa alla compensazione e al regolamento dei pagamenti.

**FIToFI** — Da istituzione finanziaria a istituzione finanziaria. Descrive il dominio interbancario in cui operano i messaggi pacs.

## G

**gpi** — Global Payments Innovation. L'iniziativa di SWIFT per pagamenti transfrontalieri più veloci e trasparenti. Utilizza UETR per il tracciamento end-to-end tramite un Tracker basato su cloud.

**GrpHdr** — Group Header. Il blocco di metadati a livello di messaggio nei messaggi pacs. Contiene MsgId, CreDtTm, NbOfTxs, informazioni di regolamento e informazioni sul tipo di pagamento.

## H

**Indirizzo ibrido** — Un formato di indirizzo postale che combina elementi strutturati (StrtNm, TwnNm, Ctry) con elementi AdrLine non strutturati. Consentito durante il periodo di transizione prima della scadenza degli indirizzi strutturati di novembre 2026.

## I

**IBAN** — International Bank Account Number (ISO 13616). Un formato standardizzato di numero di conto utilizzato per pagamenti transfrontalieri e nazionali. Validato utilizzando il checksum ISO 7064 Mod 97-10.

**INDA** — Regolamento tramite agente istruito. Un metodo di regolamento in cui i fondi si regolano sui libri dell'agente istruito, dove l'agente debitore detiene un conto nostro.

**INGA** — Regolamento tramite agente istruttore. Un metodo di regolamento in cui i fondi si regolano sui libri dell'agente istruttore, dove l'agente istruito detiene un conto nostro.

**InstrId** — Identificazione dell'istruzione. Un riferimento punto-a-punto tra agenti adiacenti nella catena di pagamento. Può cambiare ad ogni passaggio.

**IntrBkSttlmAmt** — Importo di regolamento interbancario. L'importo che si regola tra l'agente istruttore e l'agente istruito, nella valuta di regolamento.

**ISO 20022** — Uno standard internazionale per lo scambio elettronico di dati tra istituzioni finanziarie. Definisce un modello di dati comune e formati di messaggi basati su XML per pagamenti, titoli, finanza commerciale e altri ambiti finanziari.

## L

**LEI** — Legal Entity Identifier (ISO 17442). Un codice alfanumerico di 20 caratteri che identifica univocamente le entità giuridiche che partecipano alle transazioni finanziarie. Utilizzato in OrgId/LEI per le parti e FinInstnId/LEI per gli agenti.

## M

**MsgId** — Identificazione del messaggio. Un identificatore univoco per l'involucro del messaggio, assegnato dall'agente mittente. Cambia ad ogni passaggio nella catena di pagamento.

**MT** — Message Type. Il formato di messaggio legacy di SWIFT (ad es. MT103 per i bonifici della clientela, MT202 per i trasferimenti tra istituzioni finanziarie). In fase di sostituzione con i messaggi MX ISO 20022.

**MX** — Il formato di messaggio XML ISO 20022 utilizzato da SWIFT. I messaggi MX sostituiscono i messaggi MT per i pagamenti transfrontalieri nell'ambito di CBPR+.

## N

**NbOfTxs** — Numero di transazioni. Un elemento del Group Header che indica quante transazioni individuali sono contenute nel messaggio.

## P

**pacs** — Payments Clearing and Settlement. Il dominio commerciale ISO 20022 che copre i messaggi di pagamento interbancari.

**pacs.002** — Rapporto sullo stato del pagamento FI a FI. Riporta lo stato di elaborazione (accettato, rifiutato, in attesa, regolato) di una precedente istruzione di pagamento.

**pacs.003** — Addebito diretto clientela FI a FI. Trasporta un'istruzione di addebito diretto della clientela tra banche per la riscossione dei fondi.

**pacs.004** — Restituzione del pagamento. Restituisce i fondi regolati attraverso la catena di pagamento quando un pagamento non può essere applicato.

**pacs.007** — Storno del pagamento FI a FI. Storna un'istruzione di pagamento dal mittente originale in avanti attraverso la catena.

**pacs.008** — Bonifico clientela FI a FI. Il messaggio interbancario principale per i bonifici della clientela. Sostituisce MT103.

**pacs.009** — Bonifico istituzione finanziaria. Sposta fondi tra banche per proprio conto. Copre finanziamento, pagamenti di copertura e gestione della liquidità. Sostituisce MT202/MT202COV.

**pacs.010** — Addebito diretto istituzione finanziaria. Permette a una banca di addebitare il conto proprio di un'altra banca nell'ambito di un accordo bilaterale.

**pacs.028** — Richiesta stato pagamento FI a FI. Richiede attivamente lo stato di un pagamento precedente quando non è arrivato alcun aggiornamento pacs.002.

**pain** — Payment Initiation. Il dominio commerciale ISO 20022 che copre i messaggi da cliente a banca (ad es. pain.001 per l'iniziazione del bonifico).

**PII** — Informazioni di identificazione personale. Dati che possono identificare un individuo. pacs008 maschera le PII nei log strutturati.

**PstlAdr** — Indirizzo postale. La struttura di indirizzo utilizzata per le parti nei messaggi pacs. Supporta formati strutturati (StrtNm, TwnNm, Ctry) e non strutturati (AdrLine).

## R

**RJCT** — Rifiutato. Un codice di stato pacs.002 che indica che il pagamento è stato rifiutato.

**RmtInf** — Informazioni di rimessa. Dati di riferimento del pagamento trasportati in pacs.008. Supporta formati non strutturati (testo libero, max 140 caratteri) e strutturati (riferimenti di documenti, importi, riferimenti del creditore).

**RTGS** — Real-Time Gross Settlement. Un sistema di pagamento in cui le transazioni si regolano individualmente e in tempo reale (ad es. TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. Lo schema di bonifico in euro gestito dall'EPC, che utilizza pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. La variante di pagamento istantaneo di SCT, che si regola in meno di 10 secondi.

**SDD** — SEPA Direct Debit. Lo schema di addebito diretto in euro gestito dall'EPC, che utilizza pacs.003.

**SEPA** — Single Euro Payments Area. Un'iniziativa di integrazione dei pagamenti che copre bonifici, addebiti diretti e pagamenti con carta in euro in 36 paesi europei.

**SLEV** — Service Level. Un codice di addebito delle spese obbligatorio per SEPA. Significa che le spese seguono le regole dello schema senza deduzioni dall'importo del trasferimento.

**STP** — Straight-Through Processing. Elaborazione dei pagamenti automatizzata end-to-end senza intervento manuale.

**SttlmMtd** — Metodo di regolamento. Definisce come avviene il regolamento interbancario: CLRG (sistema di compensazione), INDA (agente istruito), INGA (agente istruttore) o COVE (pagamento di copertura).

## T

**TxId** — Identificazione della transazione. Un riferimento interbancario assegnato dal primo agente istruttore. Non deve essere alterato dagli agenti successivi.

## U

**UETR** — Unique End-to-End Transaction Reference. Un identificatore UUID v4 generato dall'agente debitore e trasportato invariato attraverso tutti i segmenti di un pagamento per il tracciamento gpi.

## X

**XSD** — XML Schema Definition. Lo schema formale che definisce la struttura, gli elementi e i tipi di dati di un messaggio XML ISO 20022.

**XXE** — XML External Entity. Una vulnerabilità di sicurezza nell'analisi XML. pacs008 previene gli attacchi XXE utilizzando defusedxml.

## Riferimenti

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
