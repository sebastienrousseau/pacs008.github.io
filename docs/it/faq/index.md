---
title: "Domande frequenti su ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: it-IT
lastUpdated: true
image: /logo.webp
---

# Domande frequenti su ISO 20022

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Generale

### Cos'è ISO 20022?

ISO 20022 è uno standard internazionale per la messaggistica finanziaria. Definisce un linguaggio e un modello comuni per i messaggi di pagamento scambiati tra istituzioni finanziarie. A differenza dei formati precedenti come SWIFT MT, ISO 20022 utilizza XML e supporta dati più ricchi e strutturati per le parti, gli importi e i riferimenti.

### Cosa sono i messaggi pacs?

La famiglia di messaggi pacs (payments clearing and settlement) copre le istruzioni di pagamento interbancarie, i rapporti sullo stato, le restituzioni, gli storni e le richieste. Include pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 e pacs.028. Ogni messaggio svolge un ruolo specifico nel ciclo di vita del pagamento.

### Come differiscono i messaggi pacs dai messaggi SWIFT MT?

I messaggi SWIFT MT utilizzano un formato piatto con etichette di campo (es. MT103 per i bonifici clienti). I messaggi pacs utilizzano XML gerarchico con strutture dati più ricche. Le differenze principali includono il supporto per più transazioni per messaggio, l'identificazione strutturata delle parti (LEI, ID multipli), gli indirizzi postali strutturati e le informazioni di rimessa strutturate.

### Qual è la relazione tra i messaggi pain e pacs?

I messaggi pain (payment initiation) viaggiano tra il cliente e la sua banca. I messaggi pacs viaggiano tra le banche. Un'iniziazione di bonifico pain.001 dalla banca del debitore diventa un'istruzione interbancaria pacs.008. I due domini condividono elementi di dati comuni ma servono parti diverse della catena di pagamento.

## Selezione del messaggio

### Quando dovrei usare pacs.008?

Usare pacs.008 per le istruzioni di bonifico cliente tra banche. Trasporta i dati delle parti debitore e creditore, gli importi, le informazioni di rimessa e i dettagli del regolamento. È il messaggio principale per l'invio di pagamenti clienti attraverso la rete interbancaria.

### Quando dovrei usare pacs.009 invece di pacs.008?

Usare pacs.009 per i trasferimenti su conto proprio dell'istituzione, le tratte di finanziamento e i pagamenti di copertura. A differenza di pacs.008, che trasporta un pagamento cliente per conto di un debitore, pacs.009 muove fondi tra banche per proprio conto.

### Qual è la differenza tra pacs.004 e pacs.007?

pacs.004 restituisce i fondi regolati dal lato ricevente attraverso la catena. pacs.007 storna un pagamento dal lato istruttore originale in avanti attraverso la catena. Usare pacs.004 quando la banca beneficiaria non può applicare il credito dopo il regolamento. Usare pacs.007 quando l'originatore scopre un errore, un duplicato o una frode.

### Quando dovrei usare pacs.028 invece di aspettare pacs.002?

Usare pacs.028 quando è necessario richiedere attivamente lo stato di un pagamento che non ha ricevuto un aggiornamento pacs.002 tempestivo. pacs.002 è guidato dagli eventi, mentre pacs.028 è guidato dalle eccezioni.

### A cosa serve pacs.003?

pacs.003 trasporta le istruzioni di addebito diretto del cliente tra banche. L'agente del creditore lo invia all'agente del debitore per raccogliere fondi. Richiede un riferimento di mandato valido e supporta gli schemi SEPA Core e B2B.

### A cosa serve pacs.010?

pacs.010 gestisce gli addebiti diretti tra istituzioni finanziarie sui propri conti. È utilizzato per le raccolte banca-a-banca come commissioni, margin call e obblighi simili nell'ambito di accordi bilaterali.

## Struttura del messaggio

### Cos'è l'intestazione di gruppo (GrpHdr)?

L'intestazione di gruppo appare esattamente una volta per messaggio pacs. Contiene l'identificatore del messaggio (MsgId), il timestamp di creazione (CreDtTm), il numero di transazioni (NbOfTxs), le informazioni di regolamento (SttlmInf) e facoltativamente l'importo totale del regolamento interbancario.

### Quali sono gli identificatori di pagamento in pacs.008?

pacs.008 utilizza quattro identificatori principali. MsgId identifica la busta del messaggio e cambia ad ogni passaggio. InstrId è un riferimento punto a punto tra agenti adiacenti. EndToEndId è impostato dall'originatore e non deve essere alterato. TxId è assegnato dal primo agente istruttore e rimane costante. UETR è un UUID che rimane invariato per il tracciamento end-to-end.

### Quali metodi di regolamento sono disponibili?

Sono definiti quattro metodi: CLRG regola attraverso un sistema di compensazione. INDA regola nei libri dell'agente istruito. INGA regola nei libri dell'agente istruttore. COVE regola attraverso un pagamento di copertura separato pacs.009.

### Cosa significano i codici portatore delle spese?

DEBT significa che tutte le spese sono a carico del debitore. CRED significa che tutte le spese sono a carico del creditore. SHAR significa che le spese sono condivise. SLEV significa che le spese seguono le regole del livello di servizio ed è obbligatorio per SEPA.

## CBPR+ e migrazione

### Cos'è CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) è il programma SWIFT per l'adozione di ISO 20022 nella messaggistica dei pagamenti transfrontalieri. È entrato in funzione a marzo 2023 e sostituisce i messaggi MT con gli equivalenti pacs.

### Cos'è successo al periodo di coesistenza MT/MX?

Il periodo di coesistenza per le istruzioni di pagamento transfrontaliere si è concluso a novembre 2025. Da allora, i messaggi CBPR+ devono utilizzare il formato ISO 20022 (MX).

### Qual è la scadenza degli indirizzi strutturati di novembre 2026?

Da novembre 2026, SWIFT CBPR+ richiede indirizzi postali strutturati nei messaggi di pagamento transfrontalieri. Le righe di indirizzo non strutturate (solo AdrLine) non saranno più accettate. Come minimo, sono richiesti TwnNm e Ctry.

### Come pacs.008 sostituisce MT103?

pacs.008 sostituisce MT103 e MT103+ per i bonifici clienti. Il campo 20 di MT103 mappa su MsgId o InstrId; il campo 32A si divide in IntrBkSttlmDt e IntrBkSttlmAmt; il campo 50a mappa su Dbtr e DbtrAcct; il campo 59a mappa su Cdtr e CdtrAcct; il campo 70 mappa su RmtInf; il campo 71A mappa su ChrgBr.

### Come pacs.009 sostituisce MT202?

pacs.009 sostituisce MT202 e MT202COV per i trasferimenti tra istituzioni. Nei flussi con metodo di copertura, il MT202COV si divide: pacs.009 trasporta la tratta di finanziamento mentre pacs.008 trasporta l'istruzione cliente direttamente.

## Dettagli tecnici

### Cosa sono gli indirizzi strutturati e non strutturati?

Gli indirizzi strutturati utilizzano elementi XML separati per ogni componente: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Gli indirizzi non strutturati utilizzano fino a sette elementi AdrLine con testo libero. Dopo novembre 2026, CBPR+ richiede il formato strutturato.

### Cos'è l'UETR e come funziona il tracciamento gpi?

UETR (Unique End-to-End Transaction Reference) è un identificatore UUID v4 generato dall'agente del debitore e trasportato invariato attraverso tutte le tratte di un pagamento. SWIFT gpi utilizza l'UETR per tracciare i pagamenti attraverso un database Tracker basato su cloud.

### Quali sono i codici di stato pacs.002 comuni?

ACCP significa accettato dopo i controlli del profilo cliente. ACSP significa accettato e regolamento in corso. ACSC significa regolamento completato. RJCT significa rifiutato. PDNG significa in attesa di ulteriore elaborazione.

### Quali sono i codici di motivo di restituzione comuni in pacs.004?

I codici frequenti includono AC01 (numero di conto errato), AC04 (conto chiuso), AC06 (conto bloccato), AM04 (fondi insufficienti), BE04 (indirizzo creditore mancante), CUST (richiesto dal cliente), DUPL (pagamento duplicato), FOCR (a seguito di richiesta di annullamento) e FR01 (frode).

### Cosa sono le informazioni di rimessa strutturate?

La rimessa strutturata in pacs.008 utilizza l'elemento RmtInf/Strd per trasportare riferimenti di documenti, importi e riferimenti creditore. Consente la riconciliazione automatizzata delle fatture.

### Cos'è il LEI e quando viene utilizzato?

LEI (Legal Entity Identifier) è un codice alfanumerico di 20 caratteri per ISO 17442. Nei messaggi pacs, LEI appare in OrgId/LEI per le parti e FinInstnId/LEI per gli agenti. CBPR+ incoraggia sempre più l'uso del LEI.

## Informazioni sul toolkit pacs008

### Cosa fa pacs008?

pacs008 è un toolkit Python che genera, valida e distribuisce messaggi di pagamento ISO 20022. Legge i dati di pagamento da sorgenti CSV, JSON, JSONL, SQLite e Parquet, valida contro JSON Schema e XSD, controlla gli identificatori IBAN e BIC e produce file XML.

### Quali tipi di messaggio supporta pacs008?

pacs008 supporta otto tipi di messaggio: pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05 e pacs.028.001.05.

### Come aiuta pacs008 con la scadenza degli indirizzi strutturati del 2026?

pacs008 valida i campi degli indirizzi postali strutturati e ibridi prima della generazione XML. Segnala i dati di indirizzo non strutturati che fallirebbero dopo la scadenza di novembre 2026.

### pacs008 può validare i dati senza generare XML?

Sì. Utilizzare il flag CLI `--dry-run` o l'endpoint API `POST /validate` per validare i dati di pagamento senza generare XML.

## Riferimenti

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

