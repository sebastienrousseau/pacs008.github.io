---
title: "Întrebări frecvente despre ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: ro-RO
lastUpdated: true
image: /logo.webp
---

# Întrebări frecvente despre ISO 20022

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## General

### Ce este ISO 20022?

ISO 20022 este un standard internațional pentru mesageria financiară. Definește un limbaj și un model comun pentru mesajele de plată schimbate între instituții financiare. Spre deosebire de formatele mai vechi precum SWIFT MT, ISO 20022 utilizează XML și suportă date mai bogate și structurate pentru părți, sume și referințe.

### Ce sunt mesajele pacs?

Familia de mesaje pacs (payments clearing and settlement) acoperă instrucțiunile de plată interbancară, rapoartele de stare, returnările, reversările și interogările. Include pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 și pacs.028. Fiecare mesaj îndeplinește un rol specific în ciclul de viață al plății.

### Cum diferă mesajele pacs de mesajele SWIFT MT?

Mesajele SWIFT MT utilizează un format plat cu etichete de câmp (de ex. MT103 pentru transferuri de credit ale clienților). Mesajele pacs utilizează XML ierarhic cu structuri de date mai bogate. Diferențele principale includ suportul pentru tranzacții multiple per mesaj, identificarea structurată a părților (LEI, identificatori multipli), adrese poștale structurate și informații de remitere structurate. MT103 corespunde cu pacs.008, MT202 corespunde cu pacs.009, iar textul de stare MT199 este înlocuit de pacs.002.

### Care este relația dintre mesajele pain și pacs?

Mesajele pain (payment initiation) circulă între client și banca sa. Mesajele pacs circulă între bănci. O inițiere de transfer de credit pain.001 de la banca debitorului devine o instrucțiune interbancară pacs.008. Cele două domenii partajează elemente de date comune, dar deservesc părți diferite ale lanțului de plăți.

## Selecția mesajului

### Când ar trebui să folosesc pacs.008?

Utilizați pacs.008 pentru instrucțiunile de transfer de credit al clienților între bănci. Transportă datele părților debitor și creditor, sumele, informațiile de remitere și detaliile de decontare. Este mesajul principal pentru trimiterea plăților clienților prin rețeaua interbancară, atât la nivel național (SEPA), cât și transfrontalier (CBPR+).

### Când ar trebui să folosesc pacs.009 în loc de pacs.008?

Utilizați pacs.009 pentru transferuri pe cont propriu al instituției, etape de finanțare și plăți de acoperire. Spre deosebire de pacs.008, care transportă o plată a clientului în numele unui debitor, pacs.009 mută fonduri între bănci în nume propriu. În fluxurile de acoperire, pacs.009 asigură finanțarea, în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată.

### Care este diferența dintre pacs.004 și pacs.007?

pacs.004 returnează fonduri decontate din partea receptoare înapoi prin lanț. pacs.007 reversează o plată din partea instructoare originală înainte prin lanț. Utilizați pacs.004 când banca beneficiară nu poate aplica creditul după decontare. Utilizați pacs.007 când emitentul descoperă o eroare, o duplicare sau o fraudă.

### Când ar trebui să folosesc pacs.028 în loc să aștept pacs.002?

Utilizați pacs.028 când trebuie să solicitați activ starea unei plăți care nu a primit o actualizare pacs.002 la timp. pacs.002 este orientat pe evenimente (agentul receptor îl trimite proactiv), în timp ce pacs.028 este orientat pe excepții (agentul instructor îl solicită). Utilizați pacs.028 pentru actualizări de plată întârziate, neclare sau lipsă, nu ca trafic de rutină.

### Pentru ce se folosește pacs.003?

pacs.003 transportă instrucțiuni de debit direct al clientului între bănci. Agentul creditorului îl trimite agentului debitorului pentru a colecta fonduri. Necesită o referință de mandat validă și suportă schemele de debit direct SEPA Core și B2B. Nu este utilizat pentru transferuri de credit sau debite directe pe cont propriu între instituții.

### Pentru ce se folosește pacs.010?

pacs.010 gestionează debitele directe între instituții financiare pe conturile proprii. Este utilizat pentru încasări între bănci precum comisioane, apeluri în marjă și obligații similare în cadrul acordurilor bilaterale. Nu este utilizat pentru debite directe ale clienților sau transferuri de credit.

## Structura mesajului

### Ce este antetul de grup (GrpHdr)?

Antetul de grup apare exact o dată per mesaj pacs. Conține identificatorul mesajului (MsgId), marca temporală de creare (CreDtTm), numărul de tranzacții (NbOfTxs), informațiile de decontare (SttlmInf), și opțional suma totală de decontare interbancară și informații despre tipul plății. Identifică plicul mesajului, nu tranzacțiile individuale de afaceri.

### Care sunt identificatorii de plată în pacs.008?

pacs.008 utilizează patru identificatori principali. MsgId identifică plicul mesajului și se schimbă la fiecare salt. InstrId este o referință punct-la-punct între agenți adiacenți și poate fi schimbat la fiecare salt. EndToEndId este stabilit de emitent și nu trebuie modificat de niciun agent din lanț. TxId este atribuit de primul agent instructor și rămâne constant în spațiul interbancar. UETR este un UUID care rămâne neschimbat pe toate segmentele pentru urmărirea de la un capăt la altul.

### Ce metode de decontare sunt disponibile?

Patru metode de decontare sunt definite. CLRG decontează printr-un sistem de compensare precum TARGET2, EURO1 sau CHIPS. INDA decontează în registrele agentului instruit unde agentul debitorului deține un cont. INGA decontează în registrele agentului instructor unde agentul instruit deține un cont. COVE decontează printr-o plată de acoperire separată transportată de pacs.009.

### Ce înseamnă codurile purtător de costuri?

DEBT înseamnă că toate costurile sunt suportate de debitor (echivalent MT103 OUR). CRED înseamnă că toate costurile sunt suportate de creditor (echivalent BEN). SHAR înseamnă că costurile sunt partajate între agenții debitorului și creditorului (echivalent SHA). SLEV înseamnă că costurile urmează regulile nivelului de serviciu și este obligatoriu pentru transferurile de credit SEPA.

## CBPR+ și migrare

### Ce este CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) este programul SWIFT pentru adoptarea ISO 20022 în mesageria plăților transfrontaliere. A fost lansat în martie 2023 și înlocuiește mesajele MT cu echivalentele pacs. CBPR+ impune pacs.002 pentru toată comunicarea de stare, suportă date mai bogate despre părți și adrese structurate, și utilizează urmărirea bazată pe UETR prin gpi.

### Ce s-a întâmplat cu perioada de coexistență MT/MX?

Perioada de coexistență pentru instrucțiunile de plată transfrontalieră s-a încheiat în noiembrie 2025. De atunci, mesajele CBPR+ trebuie să utilizeze formatul ISO 20022 (MX). Serviciile de traducere care converteau între MT și MX în timpul tranziției nu mai sunt disponibile pentru fluxuri noi. Băncile trebuie acum să trimită și să primească mesaje pacs native.

### Care este termenul limită pentru adresele structurate din noiembrie 2026?

Din noiembrie 2026, SWIFT CBPR+ necesită adrese poștale structurate în mesajele de plată transfrontalieră. Liniile de adresă nestructurate (doar AdrLine) nu vor mai fi acceptate pentru câmpurile cheie ale părților. Ca minim, TwnNm și Ctry sunt obligatorii, cu StrtNm și BldgNb sau PstBx recomandate. Aceasta îmbunătățește verificarea sancțiunilor și reduce repararea manuală.

### Cum înlocuiește pacs.008 pe MT103?

pacs.008 înlocuiește MT103 și MT103+ pentru transferurile de credit ale clienților. Corespondență principală: câmpul 20 din MT103 mapează pe MsgId sau InstrId; câmpul 32A se divide în IntrBkSttlmDt și IntrBkSttlmAmt; câmpul 50a mapează pe Dbtr și DbtrAcct; câmpul 59a mapează pe Cdtr și CdtrAcct; câmpul 70 mapează pe RmtInf; câmpul 71A mapează pe ChrgBr. pacs.008 adaugă UETR, remitere structurată, identificare LEI, și suportă tranzacții multiple per mesaj.

### Cum înlocuiește pacs.009 pe MT202?

pacs.009 înlocuiește MT202 și MT202COV pentru transferurile între instituții. În fluxurile de acoperire, MT202COV (care transporta atât finanțarea, cât și datele subiacente ale clientului) se divide curat: pacs.009 transportă segmentul de finanțare, în timp ce pacs.008 transportă instrucțiunea clientului direct. Această separare îmbunătățește calitatea datelor și reduce problemele de reconciliere.

## Detalii tehnice

### Ce sunt adresele structurate și nestructurate?

Adresele structurate utilizează elemente XML separate pentru fiecare componentă: StrtNm (stradă), BldgNb (număr clădire), PstCd (cod poștal), TwnNm (oraș), Ctry (țară), și elemente opționale precum Flr, Room și DstrctNm. Adresele nestructurate utilizează până la șapte elemente AdrLine cu text liber. Adresele hibride combină ambele formate în perioada de tranziție. După noiembrie 2026, CBPR+ necesită formatul structurat.

### Ce este UETR și cum funcționează urmărirea gpi?

UETR (Unique End-to-End Transaction Reference) este un identificator UUID v4 generat de agentul debitorului și transportat neschimbat prin toate etapele unei plăți. Apare în pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 și pacs.028. SWIFT gpi utilizează UETR pentru a urmări plățile printr-o bază de date Tracker în cloud. Fiecare agent confirmă primirea și procesarea, permițând vizibilitate de la un capăt la altul și monitorizarea SLA.

### Care sunt codurile de stare pacs.002 comune?

ACCP înseamnă acceptat după verificările profilului clientului. ACSP înseamnă acceptat și decontarea este în curs. ACSC înseamnă că decontarea în contul debitorului este finalizată. RJCT înseamnă respins (cu un cod de motiv în StsRsnInf). PDNG înseamnă în așteptarea procesării ulterioare. RCVD înseamnă primit dar încă neprocesat. Fiecare stare poate include un cod de motiv structurat precum AC01 (număr de cont incorect), AM04 (fonduri insuficiente) sau RC01 (BIC incorect).

### Care sunt codurile de motiv de returnare comune în pacs.004?

Codurile frecvente de motiv de returnare includ AC01 (număr de cont incorect), AC04 (cont închis), AC06 (cont blocat), AM04 (fonduri insuficiente), BE04 (adresa creditorului lipsă), CUST (solicitat de client), DUPL (plată duplicată), FOCR (în urma cererii de anulare) și FR01 (fraudă). Lista completă este definită în External Code Sets ale ISO 20022.

### Ce este informația de remitere structurată?

Remiterarea structurată în pacs.008 utilizează elementul RmtInf/Strd pentru a transporta referințe de documente (numere de factură, note de credit), sume (datorate, remise, taxe, reduceri) și referințe creditor (referințe RF ISO 11649). Aceasta permite potrivirea automată a facturilor și reconcilierea. Codurile comune de tip document includ CINV (factură comercială), CREN (notă de credit) și SOAC (extras de cont).

### Ce este LEI și când se folosește?

LEI (Legal Entity Identifier) este un cod alfanumeric de 20 de caractere conform ISO 17442. Identifică în mod unic entitățile juridice care participă la tranzacții financiare. În mesajele pacs, LEI apare în OrgId/LEI pentru părți și FinInstnId/LEI pentru agenți. CBPR+ încurajează din ce în ce mai mult LEI pentru identificarea părților și agenților. Îmbunătățește dezambiguizarea entităților și sprijină cerințele de raportare reglementară.

## Despre toolkit-ul pacs008

### Ce face pacs008?

pacs008 este un toolkit Python care generează, validează și livrează mesaje de plată ISO 20022. Citește date de plată din surse CSV, JSON, JSONL, SQLite și Parquet, validează contra JSON Schema și XSD, verifică identificatorii IBAN și BIC, curăță datele pentru conformitatea cu caracterele SWIFT, și produce fișiere XML. Oferă un API REST, un CLI și o bibliotecă Python.

### Ce tipuri de mesaje suportă pacs008?

pacs008 suportă opt tipuri de mesaje: pacs.002.001.12 (raport de stare), pacs.003.001.09 (debit direct al clientului), pacs.004.001.11 (returnare plată), pacs.007.001.11 (reversare plată), pacs.008.001.13 (transfer de credit al clientului), pacs.009.001.10 (transfer de credit între instituții financiare), pacs.010.001.05 (debit direct între instituții financiare) și pacs.028.001.05 (cerere de stare a plății).

### Cum ajută pacs008 cu termenul limită pentru adrese structurate din 2026?

pacs008 validează câmpurile de adresă poștală structurată și hibridă înainte de generarea XML. Semnalează datele de adresă nestructurate care ar eșua după termenul limită din noiembrie 2026, suportă formatele hibride înainte de termen și formatele exclusiv structurate după termen, și integrează verificările de calitate a adreselor în pipeline-urile CI și fluxurile de validare în lot.

### Poate pacs008 valida datele fără a genera XML?

Da. Utilizați flag-ul CLI `--dry-run` sau endpoint-ul API `POST /validate` pentru a valida datele de plată fără a genera XML. Pipeline-ul de validare verifică conformitatea JSON Schema, formatul și suma de control IBAN, structura BIC și conformitatea cu caracterele SWIFT. Codul de ieșire sau răspunsul API indică dacă validarea a reușit sau a eșuat.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

