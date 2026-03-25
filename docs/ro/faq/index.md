---
title: "Întrebări frecvente | pacs008"
description: Întrebări comune despre mesajele pacs ISO 20022, migrarea CBPR+, selectarea mesajelor, implementare și toolkit-ul pacs008.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Întrebări frecvente

Această pagină răspunde la întrebări comune despre mesajele pacs ISO 20022, cum funcționează împreună și cum pacs008 ajută echipele să le implementeze.

## General

### Ce este ISO 20022?

ISO 20022 este un standard internațional pentru mesageria financiară. Definește un limbaj și un model comun pentru mesajele de plată schimbate între instituțiile financiare. Spre deosebire de formatele mai vechi precum SWIFT MT, ISO 20022 utilizează XML și suportă date mai bogate și mai structurate pentru părți, sume și referințe.

### Ce sunt mesajele pacs?

Familia de mesaje pacs (payments clearing and settlement) acoperă instrucțiuni de plată interbancară, rapoarte de stare, returnări, reversări și interogări. Include pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 și pacs.028. Fiecare mesaj îndeplinește un rol specific în ciclul de viață al plății.

### Cum diferă mesajele pacs de mesajele SWIFT MT?

Mesajele SWIFT MT utilizează un format plat cu etichete de câmp (de ex. MT103 pentru transferuri de credit ale clienților). Mesajele pacs utilizează XML ierarhic cu structuri de date mai bogate. Diferențele cheie includ suportul pentru tranzacții multiple per mesaj, identificarea structurată a părților (LEI, ID-uri multiple), adrese poștale structurate și informații de remitere structurate. MT103 corespunde la pacs.008, MT202 la pacs.009, iar textul de stare MT199 este înlocuit de pacs.002.

### Care este relația dintre mesajele pain și pacs?

Mesajele pain (payment initiation) circulă între client și banca sa. Mesajele pacs circulă între bănci. O inițiere de transfer de credit pain.001 de la banca debitorului devine o instrucțiune interbancară pacs.008. Cele două domenii împărtășesc elemente de date comune, dar deservesc părți diferite ale lanțului de plăți.

## Selectarea mesajelor

### Când ar trebui să folosesc pacs.008?

Utilizați pacs.008 pentru instrucțiuni de transfer de credit ale clienților între bănci. Transportă datele părților debitor și creditor, sumele, informațiile de remitere și detaliile de decontare. Este mesajul principal pentru trimiterea plăților clienților prin rețeaua interbancară, fie intern (SEPA), fie transfrontalier (CBPR+).

### Când ar trebui să folosesc pacs.009 în loc de pacs.008?

Utilizați pacs.009 pentru transferuri pe cont propriu al instituției, segmente de finanțare și plăți de acoperire. Spre deosebire de pacs.008, care transportă o plată a clientului în numele unui debitor, pacs.009 mută fonduri între bănci în nume propriu. În fluxurile cu metoda de acoperire, pacs.009 transportă finanțarea, în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată.

### Care este diferența dintre pacs.004 și pacs.007?

pacs.004 returnează fondurile decontate din partea receptoare înapoi prin lanț. pacs.007 reversează o plată din partea inițiatoare originală înainte prin lanț. Utilizați pacs.004 când banca beneficiară nu poate aplica creditul după decontare. Utilizați pacs.007 când inițiatorul descoperă o eroare, un duplicat sau o fraudă.

### Când ar trebui să folosesc pacs.028 în loc să aștept pacs.002?

Utilizați pacs.028 când trebuie să solicitați activ starea unei plăți care nu a primit o actualizare pacs.002 la timp. pacs.002 este bazat pe evenimente (agentul receptor îl trimite proactiv), în timp ce pacs.028 este bazat pe excepții (agentul inițiator îl solicită). Utilizați pacs.028 pentru actualizări de plăți întârziate, neclare sau lipsă, nu ca trafic de rutină.

### Pentru ce se folosește pacs.003?

pacs.003 transportă instrucțiuni de debitare directă a clienților între bănci. Agentul creditorului îl trimite agentului debitorului pentru a colecta fonduri. Necesită o referință de mandat validă și suportă schemele de debitare directă SEPA Core și B2B. Nu este utilizat pentru transferuri de credit sau debitări pe cont propriu al instituției.

### Pentru ce se folosește pacs.010?

pacs.010 gestionează debitările directe între instituțiile financiare pe conturile proprii. Este utilizat pentru colectări între bănci, cum ar fi comisioane, apeluri de marjă și obligații similare în cadrul acordurilor bilaterale. Nu este utilizat pentru debitări directe ale clienților sau transferuri de credit.

## Structura mesajului

### Ce este Group Header (GrpHdr)?

Group Header apare exact o dată per mesaj pacs. Conține identificatorul mesajului (MsgId), marca temporală de creare (CreDtTm), numărul de tranzacții (NbOfTxs), informațiile de decontare (SttlmInf) și opțional suma totală de decontare interbancară și informațiile despre tipul plății. Identifică plicul mesajului, nu tranzacțiile comerciale individuale.

### Care sunt identificatorii de plată în pacs.008?

pacs.008 utilizează patru identificatori principali. MsgId identifică plicul mesajului și se schimbă la fiecare hop. InstrId este o referință punct-la-punct între agenții adiacenți și se poate schimba per hop. EndToEndId este setat de inițiator și nu trebuie modificat de niciun agent din lanț. TxId este atribuit de primul agent inițiator și rămâne constant în spațiul interbancar. UETR este un UUID care rămâne neschimbat pe toate segmentele pentru urmărirea end-to-end.

### Ce metode de decontare sunt disponibile?

Sunt definite patru metode de decontare. CLRG decontează printr-un sistem de compensare precum TARGET2, EURO1 sau CHIPS. INDA decontează în registrele agentului instruit unde agentul debitorului deține un cont. INGA decontează în registrele agentului inițiator unde agentul instruit deține un cont. COVE decontează printr-o plată de acoperire separată transportată de pacs.009.

### Ce înseamnă codurile de suportare a costurilor?

DEBT înseamnă că toate costurile sunt suportate de debitor (echivalent MT103 OUR). CRED înseamnă că toate costurile sunt suportate de creditor (echivalent BEN). SHAR înseamnă că costurile sunt împărțite între agenții debitorului și creditorului (echivalent SHA). SLEV înseamnă că costurile urmează regulile nivelului de serviciu și este obligatoriu pentru transferurile de credit SEPA.

## CBPR+ și migrare

### Ce este CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) este programul SWIFT pentru adoptarea ISO 20022 în mesageria plăților transfrontaliere. A devenit operațional în martie 2023 și înlocuiește mesajele MT cu echivalente pacs. CBPR+ impune pacs.002 pentru toată comunicarea de stare, suportă date mai bogate ale părților și adrese structurate și utilizează urmărirea bazată pe UETR prin gpi.

### Ce s-a întâmplat cu perioada de coexistență MT/MX?

Perioada de coexistență pentru instrucțiunile de plată transfrontaliere s-a încheiat în noiembrie 2025. De atunci, mesajele CBPR+ trebuie să utilizeze formatul ISO 20022 (MX). Serviciile de traducere care convertau între MT și MX în timpul tranziției nu mai sunt disponibile pentru fluxuri noi. Băncile trebuie acum să trimită și să primească mesaje pacs native.

### Ce este termenul limită pentru adresele structurate din noiembrie 2026?

Din noiembrie 2026, SWIFT CBPR+ necesită adrese poștale structurate în mesajele de plată transfrontaliere. Liniile de adresă nestructurate (doar AdrLine) nu vor mai fi acceptate pentru câmpurile cheie ale părților. Cel puțin, TwnNm și Ctry sunt necesare, cu StrtNm și BldgNb sau PstBx recomandate. Aceasta îmbunătățește verificarea sancțiunilor și reduce reparațiile manuale.

### Cum înlocuiește pacs.008 pe MT103?

pacs.008 înlocuiește MT103 și MT103+ pentru transferurile de credit ale clienților. Mapare principală: câmpul 20 MT103 corespunde MsgId sau InstrId; câmpul 32A se împarte în IntrBkSttlmDt și IntrBkSttlmAmt; câmpul 50a corespunde Dbtr și DbtrAcct; câmpul 59a corespunde Cdtr și CdtrAcct; câmpul 70 corespunde RmtInf; câmpul 71A corespunde ChrgBr. pacs.008 adaugă UETR, remitere structurată, identificare LEI și suportă tranzacții multiple per mesaj.

### Cum înlocuiește pacs.009 pe MT202?

pacs.009 înlocuiește MT202 și MT202COV pentru transferurile între instituții. În fluxurile cu metoda de acoperire, MT202COV (care transporta atât finanțarea, cât și datele clientului) se împarte clar: pacs.009 transportă segmentul de finanțare, în timp ce pacs.008 transportă instrucțiunea clientului direct. Această separare îmbunătățește calitatea datelor și reduce problemele de reconciliere.

## Detalii tehnice

### Ce sunt adresele structurate față de cele nestructurate?

Adresele structurate utilizează elemente XML separate pentru fiecare componentă: StrtNm (stradă), BldgNb (număr clădire), PstCd (cod poștal), TwnNm (localitate), Ctry (țară) și elemente opționale precum Flr, Room și DstrctNm. Adresele nestructurate utilizează până la șapte elemente AdrLine cu text liber. Adresele hibride combină ambele în perioada de tranziție. După noiembrie 2026, CBPR+ necesită formatul structurat.

### Ce este UETR și cum funcționează urmărirea gpi?

UETR (Unique End-to-End Transaction Reference) este un identificator UUID v4 generat de agentul debitorului și transportat neschimbat pe toate segmentele unei plăți. Apare în pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 și pacs.028. SWIFT gpi utilizează UETR pentru a urmări plățile printr-o bază de date Tracker bazată pe cloud. Fiecare agent confirmă primirea și procesarea, permițând vizibilitate end-to-end și monitorizarea SLA.

### Care sunt codurile de stare comune pacs.002?

ACCP înseamnă acceptat după verificările profilului clientului. ACSP înseamnă acceptat și decontarea este în curs. ACSC înseamnă că decontarea pe contul debitorului este completă. RJCT înseamnă respins (cu un cod de motiv în StsRsnInf). PDNG înseamnă în așteptare pentru procesare ulterioară. RCVD înseamnă primit dar încă neprocesat. Fiecare stare poate include un cod de motiv structurat precum AC01 (cont incorect), AM04 (fonduri insuficiente) sau RC01 (BIC incorect).

### Care sunt codurile de motiv de returnare comune în pacs.004?

Codurile de motiv de returnare frecvente includ AC01 (număr de cont incorect), AC04 (cont închis), AC06 (cont blocat), AM04 (fonduri insuficiente), BE04 (adresa creditorului lipsă), CUST (solicitat de client), DUPL (plată duplicat), FOCR (în urma cererii de anulare) și FR01 (fraudă). Lista completă este definită în Seturile de Coduri Externe ISO 20022.

### Ce sunt informațiile de remitere structurate?

Remiterea structurată în pacs.008 utilizează elementul RmtInf/Strd pentru a transporta referințe de documente (numere de factură, note de credit), sume (scadente, remise, taxe, reduceri) și referințe ale creditorului (referințe RF ISO 11649). Aceasta permite potrivirea automatizată a facturilor și reconcilierea. Codurile comune de tip document includ CINV (factură comercială), CREN (notă de credit) și SOAC (extras de cont).

### Ce este LEI și când este utilizat?

LEI (Legal Entity Identifier) este un cod alfanumeric de 20 de caractere conform ISO 17442. Identifică unic entitățile juridice care participă la tranzacții financiare. În mesajele pacs, LEI apare în OrgId/LEI pentru părți și FinInstnId/LEI pentru agenți. CBPR+ încurajează din ce în ce mai mult LEI pentru identificarea părților și agenților. Îmbunătățește dezambiguizarea entităților și suportă cerințele de raportare regulamentară.

## Despre toolkit-ul pacs008

### Ce face pacs008?

pacs008 este un toolkit Python care generează, validează și trimite mesaje de plată ISO 20022. Citește date de plată din surse CSV, JSON, JSONL, SQLite și Parquet, validează față de JSON Schema și XSD, verifică identificatorii IBAN și BIC, curăță datele pentru conformitatea cu caracterele SWIFT și produce fișiere XML. Oferă un REST API, CLI și bibliotecă Python.

### Ce tipuri de mesaje suportă pacs008?

pacs008 suportă opt tipuri de mesaje: pacs.002.001.12 (raport de stare), pacs.003.001.09 (debitare directă client), pacs.004.001.11 (returnare plată), pacs.007.001.11 (reversare plată), pacs.008.001.13 (transfer credit client), pacs.009.001.10 (transfer credit instituție financiară), pacs.010.001.05 (debitare directă instituție financiară) și pacs.028.001.05 (cerere stare plată).

### Cum ajută pacs008 cu termenul limită pentru adresele structurate din 2026?

pacs008 validează câmpurile de adresă poștală structurate și hibride înainte de generarea XML. Marchează datele de adresă nestructurate care ar eșua după termenul limită din noiembrie 2026, suportă atât formatele hibride pre-termen, cât și formatele doar structurate post-termen și integrează verificările de calitate a adreselor în pipeline-uri CI și fluxuri de lucru de validare în lot.

### Poate pacs008 să valideze date fără a genera XML?

Da. Utilizați flag-ul CLI `--dry-run` sau endpoint-ul API `POST /validate` pentru a valida datele de plată fără a genera XML. Pipeline-ul de validare verifică conformitatea JSON Schema, formatul și suma de control IBAN, structura BIC și conformitatea cu caracterele SWIFT. Codul de ieșire sau răspunsul API indică dacă validarea a trecut sau a eșuat.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
