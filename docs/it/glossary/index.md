---
title: "Glossario ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: it-IT
lastUpdated: true
image: /logo.webp
---

# Glossario ISO 20022

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Stanza di compensazione automatizzata. Una rete che elabora pagamenti elettronici raggruppati tra istituzioni finanziarie.

**AdrLine** — Riga di indirizzo. Un campo di indirizzo a testo libero nelle strutture di indirizzo postale ISO 20022. Fino a 7 righe di 70 caratteri ciascuna. In fase di sostituzione con elementi di indirizzo strutturati per CBPR+ entro novembre 2026.

**ACCP** — Profilo cliente accettato. Un codice di stato pacs.002 che indica che i controlli precedenti (sintassi, profilo cliente) sono stati superati.

**ACSC** — Regolamento accettato completato. Un codice di stato pacs.002 che conferma che il regolamento sul conto del debitore è stato completato.

**ACSP** — Regolamento accettato in corso. Un codice di stato pacs.002 che indica che tutti i controlli sono stati superati e il regolamento è in corso.

## B

**BAH** — Intestazione dell'applicazione aziendale (head.001). Una busta standardizzata che avvolge i messaggi aziendali ISO 20022 per il trasporto tramite SWIFT.

**BIC** — Codice identificativo aziendale (ISO 9362). Un codice di 8 o 11 caratteri che identifica univocamente un'istituzione finanziaria.

## C

**CBPR+** — Pagamenti e reporting transfrontalieri Plus. Il programma SWIFT per la migrazione della messaggistica dei pagamenti transfrontalieri da MT a ISO 20022. Entrato in funzione a marzo 2023.

**CdtTrfTxInf** — Informazioni sulla transazione di bonifico. Il principale blocco costruttivo a livello di transazione in pacs.008.

**ChrgBr** — Portatore delle spese. Specifica chi paga le spese della transazione. Valori: DEBT (debitore), CRED (creditore), SHAR (condiviso), SLEV (livello di servizio, solo SEPA).

**CLRG** — Regolamento tramite sistema di compensazione. Un metodo di regolamento in cui i fondi transitano attraverso un sistema di compensazione come TARGET2, EURO1 o CHIPS.

**COVE** — Regolamento con metodo di copertura. Un metodo di regolamento in cui un pagamento di copertura pacs.009 separato gestisce il finanziamento tra corrispondenti.

**CSM** — Meccanismo di compensazione e regolamento. Un'infrastruttura che elabora e regola le istruzioni di pagamento tra le istituzioni partecipanti.

## D

**Dbtr** — Debitore. La parte che deve fondi e inizia il pagamento. In pacs.008, l'elemento Dbtr contiene il nome del debitore, l'indirizzo postale, l'identificazione e il paese di residenza.

**DbtrAgt** — Agente del debitore. L'istituzione finanziaria che gestisce il conto del debitore e invia l'istruzione pacs.008.

## E

**E2E ID** — Identificazione end-to-end (EndToEndId). Un riferimento assegnato dall'originatore che deve rimanere invariato attraverso tutti gli agenti nella catena di pagamento.

**EPC** — Consiglio europeo dei pagamenti. L'organismo che gestisce i regolamenti degli schemi di pagamento SEPA.

## F–G

**FI** — Istituzione finanziaria. Una banca o altra istituzione che partecipa alla compensazione e al regolamento dei pagamenti.

**FIToFI** — Da istituzione finanziaria a istituzione finanziaria. Descrive il dominio interbancario in cui operano i messaggi pacs.

**gpi** — Innovazione globale dei pagamenti. L'iniziativa SWIFT per pagamenti transfrontalieri più rapidi e trasparenti. Utilizza l'UETR per il tracciamento end-to-end.

**GrpHdr** — Intestazione di gruppo. Il blocco di metadati a livello di messaggio nei messaggi pacs.

## H–I

**Hybrid address** — Un formato di indirizzo postale che combina elementi strutturati (StrtNm, TwnNm, Ctry) con elementi non strutturati AdrLine. Consentito durante il periodo di transizione prima della scadenza di novembre 2026.

**IBAN** — Numero di conto bancario internazionale (ISO 13616). Un formato di numero di conto standardizzato. Validato tramite checksum ISO 7064 Mod 97-10.

**INDA** — Regolamento tramite agente istruito. I fondi si regolano nei libri dell'agente istruito, dove l'agente del debitore detiene un conto nostro.

**INGA** — Regolamento tramite agente istruttore. I fondi si regolano nei libri dell'agente istruttore, dove l'agente istruito detiene un conto nostro.

**InstrId** — Identificazione dell'istruzione. Un riferimento punto a punto tra agenti adiacenti nella catena di pagamento.

**IntrBkSttlmAmt** — Importo del regolamento interbancario. L'importo che si regola tra l'agente istruttore e l'agente istruito.

**ISO 20022** — Uno standard internazionale per lo scambio elettronico di dati tra istituzioni finanziarie.

## L–N

**LEI** — Identificativo dell'entità giuridica (ISO 17442). Un codice alfanumerico di 20 caratteri che identifica univocamente le entità giuridiche.

**MsgId** — Identificazione del messaggio. Un identificatore univoco per la busta del messaggio, assegnato dall'agente mittente.

**MT** — Tipo di messaggio. Il formato di messaggio legacy di SWIFT (es. MT103, MT202). In fase di sostituzione con messaggi MX ISO 20022.

**MX** — Il formato di messaggio XML ISO 20022 utilizzato da SWIFT. I messaggi MX sostituiscono i messaggi MT sotto CBPR+.

**NbOfTxs** — Numero di transazioni. Un elemento dell'intestazione di gruppo che indica quante transazioni individuali sono contenute nel messaggio.

## P

**pacs** — Compensazione e regolamento dei pagamenti. Il dominio aziendale ISO 20022 che copre i messaggi di pagamento interbancari.

**pacs.002** — Rapporto sullo stato del pagamento da FI a FI. Riporta lo stato di elaborazione di un'istruzione di pagamento precedente.

**pacs.003** — Addebito diretto del cliente da FI a FI. Trasporta un'istruzione di addebito diretto del cliente tra banche.

**pacs.004** — Restituzione del pagamento. Restituisce i fondi regolati quando un pagamento non può essere applicato.

**pacs.007** — Storno del pagamento da FI a FI. Storna un'istruzione di pagamento dal mittente originale.

**pacs.008** — Bonifico del cliente da FI a FI. Il principale messaggio interbancario per i bonifici dei clienti. Sostituisce MT103.

**pacs.009** — Bonifico tra istituzioni finanziarie. Trasferisce fondi tra banche per proprio conto. Sostituisce MT202/MT202COV.

**pacs.010** — Addebito diretto tra istituzioni finanziarie. Consente a una banca di addebitare il conto proprio di un'altra banca.

**pacs.028** — Richiesta di stato del pagamento da FI a FI. Richiede attivamente lo stato di un pagamento precedente.

**pain** — Iniziazione del pagamento. Il dominio aziendale ISO 20022 che copre i messaggi da cliente a banca.

**PII** — Informazioni di identificazione personale. Dati che possono identificare un individuo. pacs008 maschera i PII nei log strutturati.

**PstlAdr** — Indirizzo postale. La struttura di indirizzo utilizzata per le parti nei messaggi pacs.

## R–U

**RJCT** — Rifiutato. Un codice di stato pacs.002 che indica che il pagamento è stato rifiutato.

**RmtInf** — Informazioni di rimessa. Dati di riferimento del pagamento trasportati in pacs.008.

**RTGS** — Regolamento lordo in tempo reale. Un sistema di pagamento in cui le transazioni si regolano individualmente e in tempo reale.

**SCT** — Bonifico SEPA. Lo schema di bonifico in euro gestito dall'EPC, utilizzando pacs.008.

**SCT Inst** — Bonifico istantaneo SEPA. La variante di pagamento istantaneo del SCT, regolata in meno di 10 secondi.

**SDD** — Addebito diretto SEPA. Lo schema di addebito diretto in euro gestito dall'EPC, utilizzando pacs.003.

**SEPA** — Area unica dei pagamenti in euro. Un'iniziativa di integrazione dei pagamenti in 36 paesi europei.

**SLEV** — Livello di servizio. Un codice di portatore delle spese obbligatorio per SEPA.

**STP** — Elaborazione diretta automatizzata. Elaborazione automatizzata end-to-end dei pagamenti senza intervento manuale.

**SttlmMtd** — Metodo di regolamento. Definisce come avviene il regolamento interbancario: CLRG, INDA, INGA o COVE.

**TxId** — Identificazione della transazione. Un riferimento interbancario assegnato dal primo agente istruttore.

**UETR** — Riferimento univoco della transazione end-to-end. Un identificatore UUID v4 generato dall'agente del debitore per il tracciamento gpi.

## X

**XSD** — Definizione dello schema XML. Lo schema formale che definisce la struttura di un messaggio XML ISO 20022.

**XXE** — Entità esterna XML. Una vulnerabilità di sicurezza nell'analisi XML. pacs008 previene gli attacchi XXE utilizzando defusedxml.

## Riferimenti

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

