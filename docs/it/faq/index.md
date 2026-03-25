---
title: "Domande frequenti | pacs008"
description: Domande comuni sui messaggi pacs ISO 20022, migrazione CBPR+, selezione dei messaggi, implementazione e toolkit pacs008.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Domande frequenti

Questa pagina risponde alle domande comuni sui messaggi pacs ISO 20022, su come funzionano insieme e su come pacs008 aiuta i team a implementarli.

## Generale

### Cos'è ISO 20022?

ISO 20022 è uno standard internazionale per la messaggistica finanziaria. Definisce un linguaggio e un modello comuni per i messaggi di pagamento scambiati tra istituzioni finanziarie. A differenza dei formati più vecchi come SWIFT MT, ISO 20022 utilizza XML e supporta dati più ricchi e strutturati per le parti, gli importi e i riferimenti.

### Cosa sono i messaggi pacs?

La famiglia di messaggi pacs (payments clearing and settlement) copre istruzioni di pagamento interbancario, rapporti sullo stato, restituzioni, storni e richieste di informazioni. Include pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 e pacs.028. Ogni messaggio svolge un ruolo specifico nel ciclo di vita del pagamento.

### In cosa differiscono i messaggi pacs dai messaggi SWIFT MT?

I messaggi SWIFT MT utilizzano un formato piatto con tag di campo (ad es. MT103 per i bonifici della clientela). I messaggi pacs utilizzano XML gerarchico con strutture dati più ricche. Le differenze principali includono il supporto per transazioni multiple per messaggio, identificazione strutturata delle parti (LEI, ID multipli), indirizzi postali strutturati e informazioni di rimessa strutturate. MT103 corrisponde a pacs.008, MT202 corrisponde a pacs.009 e il testo di stato MT199 è sostituito da pacs.002.

### Qual è la relazione tra i messaggi pain e pacs?

I messaggi pain (payment initiation) viaggiano tra il cliente e la sua banca. I messaggi pacs viaggiano tra le banche. Un'iniziativa di bonifico pain.001 dalla banca del debitore diventa un'istruzione interbancaria pacs.008. I due domini condividono elementi di dati comuni ma servono parti diverse della catena di pagamento.

## Selezione dei messaggi

### Quando dovrei usare pacs.008?

Utilizzare pacs.008 per le istruzioni di bonifico della clientela tra banche. Trasporta i dati delle parti debitore e creditore, gli importi, le informazioni di rimessa e i dettagli di regolamento. È il messaggio principale per l'invio di pagamenti della clientela attraverso la rete interbancaria, sia nazionale (SEPA) che transfrontaliero (CBPR+).

### Quando dovrei usare pacs.009 invece di pacs.008?

Utilizzare pacs.009 per trasferimenti di conto proprio dell'istituzione, segmenti di finanziamento e pagamenti di copertura. A differenza di pacs.008, che trasporta un pagamento della clientela per conto di un debitore, pacs.009 sposta fondi tra banche per proprio conto. Nei flussi con metodo di copertura, pacs.009 trasporta il finanziamento mentre pacs.008 trasporta l'istruzione del cliente su un percorso separato.

### Qual è la differenza tra pacs.004 e pacs.007?

pacs.004 restituisce i fondi regolati dal lato ricevente attraverso la catena. pacs.007 storna un pagamento dal lato istruttore originale in avanti attraverso la catena. Utilizzare pacs.004 quando la banca beneficiaria non può applicare il credito dopo il regolamento. Utilizzare pacs.007 quando l'originatore scopre un errore, un duplicato o una frode.

### Quando dovrei usare pacs.028 invece di attendere pacs.002?

Utilizzare pacs.028 quando è necessario richiedere attivamente lo stato di un pagamento che non ha ricevuto un aggiornamento pacs.002 tempestivo. pacs.002 è guidato dagli eventi (l'agente ricevente lo invia proattivamente), mentre pacs.028 è guidato dalle eccezioni (l'agente istruttore lo richiede). Utilizzare pacs.028 per aggiornamenti di pagamento ritardati, poco chiari o mancanti, non come traffico di routine.

### A cosa serve pacs.003?

pacs.003 trasporta le istruzioni di addebito diretto della clientela tra banche. L'agente del creditore lo invia all'agente del debitore per riscuotere i fondi. Richiede un riferimento di mandato valido e supporta gli schemi di addebito diretto SEPA Core e B2B. Non è utilizzato per i bonifici né per gli addebiti di conto proprio dell'istituzione.

### A cosa serve pacs.010?

pacs.010 gestisce gli addebiti diretti tra istituzioni finanziarie sui propri conti. È utilizzato per le riscossioni tra banche come commissioni, richiami di margine e obblighi simili nell'ambito di accordi bilaterali. Non è utilizzato per gli addebiti diretti della clientela né per i bonifici.

## Struttura dei messaggi

### Cos'è il Group Header (GrpHdr)?

Il Group Header appare esattamente una volta per messaggio pacs. Contiene l'identificativo del messaggio (MsgId), il timestamp di creazione (CreDtTm), il numero di transazioni (NbOfTxs), le informazioni di regolamento (SttlmInf), e opzionalmente l'importo totale di regolamento interbancario e le informazioni sul tipo di pagamento. Identifica l'involucro del messaggio, non le singole transazioni commerciali.

### Quali sono gli identificativi di pagamento in pacs.008?

pacs.008 utilizza quattro identificativi principali. MsgId identifica l'involucro del messaggio e cambia ad ogni passaggio. InstrId è un riferimento punto-a-punto tra agenti adiacenti e può cambiare ad ogni passaggio. EndToEndId è impostato dall'originatore e non deve essere alterato da alcun agente nella catena. TxId è assegnato dal primo agente istruttore e rimane costante nello spazio interbancario. UETR è un UUID che rimane invariato attraverso tutti i segmenti per il tracciamento end-to-end.

### Quali metodi di regolamento sono disponibili?

Sono definiti quattro metodi di regolamento. CLRG regola attraverso un sistema di compensazione come TARGET2, EURO1 o CHIPS. INDA regola sui libri dell'agente istruito dove l'agente debitore detiene un conto. INGA regola sui libri dell'agente istruttore dove l'agente istruito detiene un conto. COVE regola attraverso un pagamento di copertura separato trasportato da pacs.009.

### Cosa significano i codici di addebito delle spese?

DEBT significa che tutte le spese sono a carico del debitore (equivalente a MT103 OUR). CRED significa che tutte le spese sono a carico del creditore (equivalente a BEN). SHAR significa che le spese sono condivise tra gli agenti del debitore e del creditore (equivalente a SHA). SLEV significa che le spese seguono le regole del livello di servizio ed è obbligatorio per i bonifici SEPA.

## CBPR+ e migrazione

### Cos'è CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) è il programma di SWIFT per l'adozione di ISO 20022 nella messaggistica dei pagamenti transfrontalieri. È entrato in funzione a marzo 2023 e sostituisce i messaggi MT con gli equivalenti pacs. CBPR+ rende obbligatorio pacs.002 per tutte le comunicazioni di stato, supporta dati delle parti più ricchi e indirizzi strutturati, e utilizza il tracciamento basato su UETR attraverso gpi.

### Cosa è successo al periodo di coesistenza MT/MX?

Il periodo di coesistenza per le istruzioni di pagamento transfrontaliere si è concluso a novembre 2025. Da allora, i messaggi CBPR+ devono utilizzare il formato ISO 20022 (MX). I servizi di traduzione che convertivano tra MT e MX durante la transizione non sono più disponibili per i nuovi flussi. Le banche devono ora inviare e ricevere messaggi pacs nativi.

### Cos'è la scadenza degli indirizzi strutturati di novembre 2026?

Da novembre 2026, SWIFT CBPR+ richiede indirizzi postali strutturati nei messaggi di pagamento transfrontalieri. Le righe di indirizzo non strutturate (solo AdrLine) non saranno più accettate per i campi chiave delle parti. Come minimo, sono richiesti TwnNm e Ctry, con StrtNm e BldgNb o PstBx raccomandati. Ciò migliora lo screening delle sanzioni e riduce le riparazioni manuali.

### Come sostituisce pacs.008 l'MT103?

pacs.008 sostituisce MT103 e MT103+ per i bonifici della clientela. Mappatura principale: il campo 20 di MT103 corrisponde a MsgId o InstrId; il campo 32A si divide in IntrBkSttlmDt e IntrBkSttlmAmt; il campo 50a corrisponde a Dbtr e DbtrAcct; il campo 59a corrisponde a Cdtr e CdtrAcct; il campo 70 corrisponde a RmtInf; il campo 71A corrisponde a ChrgBr. pacs.008 aggiunge UETR, rimessa strutturata, identificazione LEI e supporta transazioni multiple per messaggio.

### Come sostituisce pacs.009 l'MT202?

pacs.009 sostituisce MT202 e MT202COV per i trasferimenti interistituzionali. Nei flussi con metodo di copertura, l'MT202COV (che trasportava sia il finanziamento che i dati del cliente sottostante) si divide in modo pulito: pacs.009 trasporta il segmento di finanziamento mentre pacs.008 trasporta l'istruzione del cliente direttamente. Questa separazione migliora la qualità dei dati e riduce i problemi di riconciliazione.

## Dettagli tecnici

### Cosa sono gli indirizzi strutturati rispetto a quelli non strutturati?

Gli indirizzi strutturati utilizzano elementi XML separati per ogni componente: StrtNm (via), BldgNb (numero civico), PstCd (codice postale), TwnNm (città), Ctry (paese) e elementi opzionali come Flr, Room e DstrctNm. Gli indirizzi non strutturati utilizzano fino a sette elementi AdrLine con testo libero. Gli indirizzi ibridi combinano entrambi durante il periodo di transizione. Dopo novembre 2026, CBPR+ richiede il formato strutturato.

### Cos'è UETR e come funziona il tracciamento gpi?

UETR (Unique End-to-End Transaction Reference) è un identificatore UUID v4 generato dall'agente debitore e trasportato invariato attraverso tutti i segmenti di un pagamento. Appare in pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 e pacs.028. SWIFT gpi utilizza UETR per tracciare i pagamenti attraverso un database Tracker basato su cloud. Ogni agente conferma la ricezione e l'elaborazione, consentendo visibilità end-to-end e monitoraggio SLA.

### Quali sono i codici di stato comuni di pacs.002?

ACCP significa accettato dopo i controlli del profilo cliente. ACSP significa accettato e il regolamento è in corso. ACSC significa che il regolamento sul conto del debitore è completato. RJCT significa rifiutato (con un codice motivo in StsRsnInf). PDNG significa in attesa di ulteriore elaborazione. RCVD significa ricevuto ma non ancora elaborato. Ogni stato può includere un codice motivo strutturato come AC01 (conto errato), AM04 (fondi insufficienti) o RC01 (BIC errato).

### Quali sono i codici motivo di restituzione comuni in pacs.004?

I codici motivo di restituzione frequenti includono AC01 (numero di conto errato), AC04 (conto chiuso), AC06 (conto bloccato), AM04 (fondi insufficienti), BE04 (indirizzo creditore mancante), CUST (richiesto dal cliente), DUPL (pagamento duplicato), FOCR (a seguito di richiesta di cancellazione) e FR01 (frode). L'elenco completo è definito nei Set di Codici Esterni ISO 20022.

### Cos'è l'informazione di rimessa strutturata?

La rimessa strutturata in pacs.008 utilizza l'elemento RmtInf/Strd per trasportare riferimenti di documenti (numeri di fattura, note di credito), importi (dovuti, rimessi, tasse, sconti) e riferimenti del creditore (riferimenti RF ISO 11649). Ciò consente la corrispondenza automatica delle fatture e la riconciliazione. I codici tipo documento comuni includono CINV (fattura commerciale), CREN (nota di credito) e SOAC (estratto conto).

### Cos'è il LEI e quando viene utilizzato?

LEI (Legal Entity Identifier) è un codice alfanumerico di 20 caratteri secondo ISO 17442. Identifica univocamente le entità giuridiche che partecipano alle transazioni finanziarie. Nei messaggi pacs, LEI appare in OrgId/LEI per le parti e FinInstnId/LEI per gli agenti. CBPR+ incoraggia sempre più l'uso del LEI per l'identificazione delle parti e degli agenti. Migliora la disambiguazione delle entità e supporta i requisiti di reporting regolamentare.

## Informazioni sul toolkit pacs008

### Cosa fa pacs008?

pacs008 è un toolkit Python che genera, valida e invia messaggi di pagamento ISO 20022. Legge i dati di pagamento da fonti CSV, JSON, JSONL, SQLite e Parquet, valida rispetto a JSON Schema e XSD, verifica gli identificatori IBAN e BIC, pulisce i dati per la conformità ai caratteri SWIFT e produce file XML. Fornisce una REST API, CLI e libreria Python.

### Quali tipi di messaggio supporta pacs008?

pacs008 supporta otto tipi di messaggio: pacs.002.001.12 (rapporto sullo stato), pacs.003.001.09 (addebito diretto clientela), pacs.004.001.11 (restituzione pagamento), pacs.007.001.11 (storno pagamento), pacs.008.001.13 (bonifico clientela), pacs.009.001.10 (bonifico istituzione finanziaria), pacs.010.001.05 (addebito diretto istituzione finanziaria) e pacs.028.001.05 (richiesta stato pagamento).

### Come aiuta pacs008 con la scadenza degli indirizzi strutturati del 2026?

pacs008 valida i campi degli indirizzi postali strutturati e ibridi prima della generazione XML. Segnala i dati di indirizzo non strutturati che fallirebbero dopo la scadenza di novembre 2026, supporta sia i formati ibridi pre-scadenza che quelli solo strutturati post-scadenza, e integra i controlli di qualità degli indirizzi nelle pipeline CI e nei flussi di lavoro di validazione batch.

### pacs008 può validare i dati senza generare XML?

Sì. Utilizzare il flag CLI `--dry-run` o l'endpoint API `POST /validate` per validare i dati di pagamento senza generare XML. La pipeline di validazione verifica la conformità JSON Schema, il formato e il checksum IBAN, la struttura BIC e la conformità ai caratteri SWIFT. Il codice di uscita o la risposta API indica se la validazione è passata o fallita.

## Riferimenti

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
