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

### Cos'e ISO 20022?

ISO 20022 e lo standard internazionale per la messaggistica finanziaria. Definisce un linguaggio e un modello comuni per i messaggi di pagamento scambiati tra istituzioni finanziarie. A differenza dei formati precedenti come SWIFT MT, ISO 20022 si basa su XML e supporta dati piu ricchi e strutturati per le parti, gli importi e i riferimenti.

### Cosa sono i messaggi pacs?

La famiglia pacs (payments clearing and settlement) copre tutti i messaggi interbancari di pagamento:

- pacs.002 -- rapporto sullo stato
- pacs.003 -- addebito diretto cliente
- pacs.004 -- restituzione del pagamento
- pacs.007 -- storno del pagamento
- pacs.008 -- bonifico cliente
- pacs.009 -- bonifico tra istituzioni finanziarie
- pacs.010 -- addebito diretto tra istituzioni finanziarie
- pacs.028 -- richiesta stato pagamento

Ogni messaggio svolge un ruolo preciso nel ciclo di vita del pagamento.

### Come differiscono i messaggi pacs dai messaggi SWIFT MT?

I messaggi SWIFT MT utilizzano un formato piatto con etichette di campo (es. MT103 per i bonifici clienti). I messaggi pacs utilizzano XML gerarchico con strutture dati piu ricche. Differenze principali:

- Supporto per piu transazioni per messaggio
- Identificazione strutturata delle parti (LEI, ID multipli)
- Indirizzi postali strutturati
- Informazioni di rimessa strutturate

Corrispondenza: MT103 equivale a pacs.008, MT202 equivale a pacs.009, e il testo di stato MT199 e sostituito da pacs.002.

### Qual e la relazione tra i messaggi pain e pacs?

I messaggi pain (payment initiation) viaggiano tra il cliente e la sua banca. I messaggi pacs viaggiano tra le banche. Un'iniziazione di bonifico pain.001 dalla banca del debitore diventa un'istruzione interbancaria pacs.008. I due domini condividono elementi di dati comuni ma servono parti diverse della catena di pagamento.

## Selezione del messaggio

### Quando usare pacs.008?

pacs.008 serve per le istruzioni di bonifico cliente tra banche. Trasporta:

- Dati delle parti debitore e creditore
- Importi e valuta
- Informazioni di rimessa
- Dettagli di regolamento

E il messaggio principale per l'invio di pagamenti clienti attraverso la rete interbancaria, sia a livello nazionale (SEPA) che transfrontaliero (CBPR+).

### Quando usare pacs.009 invece di pacs.008?

pacs.009 serve per i trasferimenti su conto proprio dell'istituzione, le tratte di finanziamento e i pagamenti di copertura. A differenza di pacs.008, che trasporta un pagamento cliente per conto di un debitore, pacs.009 muove fondi tra banche per proprio conto. Nei flussi di copertura, pacs.009 gestisce il finanziamento mentre pacs.008 trasporta l'istruzione del cliente su un percorso separato.

### Qual e la differenza tra pacs.004 e pacs.007?

- pacs.004 restituisce i fondi regolati dal lato ricevente attraverso la catena.
- pacs.007 storna un pagamento dal lato istruttore originale in avanti attraverso la catena.

Usare pacs.004 quando la banca beneficiaria non puo applicare il credito dopo il regolamento. Usare pacs.007 quando l'originatore scopre un errore, un duplicato o una frode.

### Quando usare pacs.028 invece di aspettare pacs.002?

pacs.028 serve a richiedere attivamente lo stato di un pagamento che non ha ricevuto un aggiornamento pacs.002 tempestivo. pacs.002 e guidato dagli eventi (l'agente ricevente lo invia proattivamente), mentre pacs.028 e guidato dalle eccezioni (l'agente istruttore lo richiede). Usare pacs.028 per aggiornamenti di pagamento in ritardo, incerti o mancanti -- non come traffico di routine.

### A cosa serve pacs.003?

pacs.003 trasporta le istruzioni di addebito diretto del cliente tra banche. L'agente del creditore lo invia all'agente del debitore per raccogliere fondi. Caratteristiche:

- Riferimento di mandato valido obbligatorio
- Supporto degli schemi SEPA Core e B2B
- Non utilizzato per bonifici ne per addebiti diretti su conto proprio tra istituzioni

### A cosa serve pacs.010?

pacs.010 gestisce gli addebiti diretti tra istituzioni finanziarie sui propri conti. Casi d'uso:

- Commissioni banca-a-banca
- Margin call
- Obblighi simili nell'ambito di accordi bilaterali

Non utilizzato per addebiti diretti clienti ne per bonifici.

## Struttura del messaggio

### Cos'e il Group Header (GrpHdr)?

Il Group Header appare esattamente una volta per messaggio pacs. Contiene:

- MsgId -- identificatore del messaggio
- CreDtTm -- timestamp di creazione
- NbOfTxs -- numero di transazioni
- SttlmInf -- informazioni di regolamento
- Importo totale del regolamento interbancario (facoltativo)
- Informazioni sul tipo di pagamento (facoltativo)

Identifica la busta del messaggio, non le singole transazioni commerciali.

### Quali sono gli identificatori di pagamento in pacs.008?

pacs.008 utilizza cinque identificatori:

- MsgId -- identifica la busta del messaggio, cambia ad ogni passaggio
- InstrId -- riferimento punto a punto tra agenti adiacenti, puo cambiare ad ogni passaggio
- EndToEndId -- impostato dall'originatore, non deve essere alterato da nessun agente nella catena
- TxId -- assegnato dal primo agente istruttore, rimane costante nello spazio interbancario
- UETR -- UUID che rimane invariato su tutte le tratte per il tracciamento end-to-end

### Quali metodi di regolamento sono disponibili?

Quattro metodi di regolamento sono definiti:

- CLRG -- regolamento attraverso un sistema di compensazione (TARGET2, EURO1, CHIPS)
- INDA -- regolamento nei libri dell'agente istruito, dove l'agente del debitore detiene un conto
- INGA -- regolamento nei libri dell'agente istruttore, dove l'agente istruito detiene un conto
- COVE -- regolamento attraverso un pagamento di copertura separato portato da pacs.009

### Cosa significano i codici portatore delle spese?

Quattro codici definiscono chi sostiene le spese:

- DEBT -- tutte le spese a carico del debitore (equivalente MT103 OUR)
- CRED -- tutte le spese a carico del creditore (equivalente BEN)
- SHAR -- spese condivise tra gli agenti del debitore e del creditore (equivalente SHA)
- SLEV -- spese secondo le regole del livello di servizio, obbligatorio per i bonifici SEPA

## CBPR+ e migrazione

### Cos'e CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) e il programma SWIFT per l'adozione di ISO 20022 nella messaggistica dei pagamenti transfrontalieri. In funzione da marzo 2023, sostituisce i messaggi MT con gli equivalenti pacs. Punti chiave:

- pacs.002 obbligatorio per tutta la comunicazione di stato
- Dati delle parti piu ricchi e indirizzi strutturati
- Tracciamento basato su UETR tramite gpi

### Cos'e successo al periodo di coesistenza MT/MX?

Il periodo di coesistenza per le istruzioni di pagamento transfrontaliere si e concluso a novembre 2025. Da allora:

- I messaggi CBPR+ devono utilizzare il formato ISO 20022 (MX)
- I servizi di traduzione MT/MX non sono piu disponibili per i nuovi flussi
- Le banche devono inviare e ricevere messaggi pacs nativi

### Qual e la scadenza degli indirizzi strutturati di novembre 2026?

Da novembre 2026, SWIFT CBPR+ richiede indirizzi postali strutturati nei messaggi di pagamento transfrontalieri. Le righe di indirizzo non strutturate (solo AdrLine) non saranno piu accettate per i campi delle parti chiave. Requisiti minimi:

- TwnNm e Ctry obbligatori
- StrtNm e BldgNb o PstBx raccomandati

Questo migliora lo screening delle sanzioni e riduce le riparazioni manuali.

### Come pacs.008 sostituisce MT103?

pacs.008 sostituisce MT103 e MT103+ per i bonifici clienti. Corrispondenza principale:

- Campo 20 → MsgId o InstrId
- Campo 32A → IntrBkSttlmDt e IntrBkSttlmAmt
- Campo 50a → Dbtr e DbtrAcct
- Campo 59a → Cdtr e CdtrAcct
- Campo 70 → RmtInf
- Campo 71A → ChrgBr

pacs.008 aggiunge UETR, rimessa strutturata, identificazione LEI, e supporta piu transazioni per messaggio.

### Come pacs.009 sostituisce MT202?

pacs.009 sostituisce MT202 e MT202COV per i trasferimenti tra istituzioni. Nei flussi con metodo di copertura, il MT202COV (che trasportava sia il finanziamento che i dati del cliente sottostante) si divide in modo netto:

- pacs.009 trasporta la tratta di finanziamento
- pacs.008 trasporta direttamente l'istruzione del cliente

Questa separazione migliora la qualita dei dati e riduce i problemi di riconciliazione.

## Dettagli tecnici

### Cosa sono gli indirizzi strutturati e non strutturati?

Gli indirizzi strutturati utilizzano elementi XML separati per ogni componente:

- StrtNm -- via
- BldgNb -- numero civico
- PstCd -- codice postale
- TwnNm -- citta
- Ctry -- paese
- Elementi facoltativi: Flr, Room, DstrctNm

Gli indirizzi non strutturati utilizzano fino a sette elementi AdrLine con testo libero. Gli indirizzi ibridi combinano entrambi durante il periodo di transizione. Dopo novembre 2026, CBPR+ richiede il formato strutturato.

### Cos'e l'UETR e come funziona il tracciamento gpi?

UETR (Unique End-to-End Transaction Reference) e un identificatore UUID v4 generato dall'agente del debitore e trasportato invariato attraverso tutte le tratte di un pagamento. Appare in:

- pacs.008, pacs.009, pacs.002
- pacs.004, pacs.007, pacs.028

SWIFT gpi utilizza l'UETR per tracciare i pagamenti attraverso un database Tracker basato su cloud. Ogni agente conferma la ricezione e l'elaborazione, consentendo la visibilita end-to-end e il monitoraggio degli SLA.

### Quali sono i codici di stato pacs.002 comuni?

Codici di stato principali:

- ACCP -- accettato dopo i controlli del profilo cliente
- ACSP -- accettato, regolamento in corso
- ACSC -- regolamento sul conto del debitore completato
- RJCT -- rifiutato (con un codice di motivo in StsRsnInf)
- PDNG -- in attesa di ulteriore elaborazione
- RCVD -- ricevuto ma non ancora elaborato

Ogni stato puo includere un codice di motivo strutturato come AC01 (numero di conto errato), AM04 (fondi insufficienti) o RC01 (BIC errato).

### Quali sono i codici di motivo di restituzione comuni in pacs.004?

Codici di motivo di restituzione frequenti:

- AC01 -- numero di conto errato
- AC04 -- conto chiuso
- AC06 -- conto bloccato
- AM04 -- fondi insufficienti
- BE04 -- indirizzo creditore mancante
- CUST -- richiesto dal cliente
- DUPL -- pagamento duplicato
- FOCR -- a seguito di richiesta di annullamento
- FR01 -- frode

La lista completa e definita negli External Code Sets di ISO 20022.

### Cosa sono le informazioni di rimessa strutturate?

La rimessa strutturata in pacs.008 utilizza l'elemento RmtInf/Strd per trasportare:

- Riferimenti di documenti (numeri di fattura, note di credito)
- Importi (dovuto, rimesso, imposta, sconto)
- Riferimenti creditore (riferimenti RF secondo ISO 11649)

Questo consente la corrispondenza automatizzata delle fatture e la riconciliazione. Codici di tipo documento comuni:

- CINV -- fattura commerciale
- CREN -- nota di credito
- SOAC -- estratto conto

### Cos'e il LEI e quando viene utilizzato?

LEI (Legal Entity Identifier) e un codice alfanumerico di 20 caratteri secondo ISO 17442. Identifica in modo univoco le entita giuridiche che partecipano a transazioni finanziarie. Nei messaggi pacs:

- OrgId/LEI -- identificazione delle parti
- FinInstnId/LEI -- identificazione degli agenti

CBPR+ incoraggia sempre piu l'uso del LEI per l'identificazione delle parti e degli agenti. Migliora la disambiguazione delle entita e supporta i requisiti di rendicontazione normativa.

## Informazioni sul toolkit pacs008

### Cosa fa pacs008?

pacs008 e un toolkit Python che genera, valida e distribuisce messaggi di pagamento ISO 20022. Funzionalita:

- Lettura dei dati di pagamento da sorgenti CSV, JSON, JSONL, SQLite e Parquet
- Validazione contro JSON Schema e XSD
- Controllo degli identificatori IBAN e BIC
- Pulizia dei dati per la conformita ai caratteri SWIFT
- Produzione di file XML

Tre interfacce disponibili: API REST, CLI e libreria Python.

### Quali tipi di messaggio supporta pacs008?

pacs008 supporta otto tipi di messaggio:

- pacs.002.001.12 -- rapporto sullo stato
- pacs.003.001.09 -- addebito diretto cliente
- pacs.004.001.11 -- restituzione del pagamento
- pacs.007.001.11 -- storno del pagamento
- pacs.008.001.13 -- bonifico cliente
- pacs.009.001.10 -- bonifico tra istituzioni finanziarie
- pacs.010.001.05 -- addebito diretto tra istituzioni finanziarie
- pacs.028.001.05 -- richiesta stato pagamento

### Come aiuta pacs008 con la scadenza degli indirizzi strutturati di novembre 2026?

pacs008 valida i campi degli indirizzi postali strutturati e ibridi prima della generazione XML:

- Segnalazione dei dati di indirizzo non strutturati che fallirebbero dopo la scadenza di novembre 2026
- Supporto dei formati ibridi prima della scadenza e dei formati esclusivamente strutturati dopo la scadenza
- Integrazione dei controlli di qualita degli indirizzi nei pipeline CI e nei flussi di lavoro di validazione batch

### pacs008 puo validare i dati senza generare XML?

Si. Utilizzare il flag CLI `--dry-run` o l'endpoint API `POST /validate` per validare i dati di pagamento senza generare XML. Il pipeline di validazione verifica:

- Conformita JSON Schema
- Formato e checksum IBAN
- Struttura BIC
- Conformita ai caratteri SWIFT

Il codice di uscita o la risposta API indica se la validazione e riuscita o fallita.

## Riferimenti

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

