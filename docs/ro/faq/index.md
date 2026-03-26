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

ISO 20022 este un standard internațional pentru mesageria financiară. Definește un limbaj și un model comun pentru mesajele de plată schimbate între instituții financiare. Spre deosebire de formatele mai vechi precum SWIFT MT, ISO 20022 utilizează XML și suportă date mai bogate și structurate.

### Ce sunt mesajele pacs?

Familia de mesaje pacs (payments clearing and settlement) acoperă instrucțiunile de plată interbancară, rapoartele de stare, returnările, reversările și interogările. Include pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 și pacs.028.

### Cum diferă mesajele pacs de mesajele SWIFT MT?

Mesajele SWIFT MT utilizează un format plat cu etichete de câmp. Mesajele pacs utilizează XML ierarhic cu structuri de date mai bogate.

### Care este relația dintre mesajele pain și pacs?

Mesajele pain (payment initiation) circulă între client și banca sa. Mesajele pacs circulă între bănci. O inițiere de transfer pain.001 devine o instrucțiune interbancară pacs.008.

## Selecția mesajului

### Când ar trebui să folosesc pacs.008?

Utilizați pacs.008 pentru instrucțiunile de transfer de credit al clienților între bănci. Transportă datele părților debitor și creditor, sumele, informațiile de remitere și detaliile de decontare.

### Când ar trebui să folosesc pacs.009 în loc de pacs.008?

Utilizați pacs.009 pentru transferuri pe cont propriu al instituției, etape de finanțare și plăți de acoperire.

### Care este diferența dintre pacs.004 și pacs.007?

pacs.004 returnează fonduri decontate din partea receptoare. pacs.007 reversează o plată din partea instructoare originală.

### Când ar trebui să folosesc pacs.028 în loc să aștept pacs.002?

Utilizați pacs.028 când trebuie să solicitați activ starea unei plăți care nu a primit o actualizare pacs.002 la timp.

### Pentru ce se folosește pacs.003?

pacs.003 transportă instrucțiuni de debit direct al clientului între bănci pentru colectarea de fonduri.

### Pentru ce se folosește pacs.010?

pacs.010 gestionează debitele directe între instituții financiare pe conturile proprii.

## Structura mesajului

### Ce este antetul de grup (GrpHdr)?

Antetul de grup apare exact o dată per mesaj pacs. Conține MsgId, CreDtTm, NbOfTxs și SttlmInf.

### Care sunt identificatorii de plată în pacs.008?

pacs.008 utilizează patru identificatori principali: MsgId, InstrId, EndToEndId, TxId și UETR. EndToEndId și TxId nu trebuie modificate de niciun agent.

### Ce metode de decontare sunt disponibile?

Patru metode: CLRG, INDA, INGA și COVE.

### Ce înseamnă codurile purtător de costuri?

DEBT — toate costurile sunt suportate de debitor. CRED — de creditor. SHAR — partajate. SLEV — obligatoriu pentru SEPA.

## CBPR+ și migrare

### Ce este CBPR+?

CBPR+ este programul SWIFT pentru adoptarea ISO 20022 în mesageria plăților transfrontaliere. A fost lansat în martie 2023.

### Ce s-a întâmplat cu perioada de coexistență MT/MX?

Perioada de coexistență s-a încheiat în noiembrie 2025. De atunci, mesajele CBPR+ trebuie să utilizeze formatul ISO 20022 (MX).

### Care este termenul limită pentru adresele structurate din noiembrie 2026?

Din noiembrie 2026, SWIFT CBPR+ necesită adrese poștale structurate. Ca minim, TwnNm și Ctry sunt obligatorii.

### Cum înlocuiește pacs.008 pe MT103?

pacs.008 înlocuiește MT103 și MT103+. Câmpul 20 mapează pe MsgId sau InstrId; câmpul 32A se divide în IntrBkSttlmDt și IntrBkSttlmAmt; câmpul 50a mapează pe Dbtr și DbtrAcct.

### Cum înlocuiește pacs.009 pe MT202?

pacs.009 înlocuiește MT202 și MT202COV. În fluxurile de acoperire, pacs.009 transportă etapa de finanțare, iar pacs.008 transportă instrucțiunea clientului direct.

## Detalii tehnice

### Ce sunt adresele structurate și nestructurate?

Adresele structurate utilizează elemente XML separate: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Adresele nestructurate utilizează până la șapte elemente AdrLine.

### Ce este UETR și cum funcționează urmărirea gpi?

UETR este un identificator UUID v4 generat de agentul debitorului și transportat neschimbat prin toate etapele unei plăți. SWIFT gpi utilizează UETR pentru urmărire.

### Care sunt codurile de stare pacs.002 comune?

ACCP (acceptat), ACSP (decontare în curs), ACSC (decontare finalizată), RJCT (respins), PDNG (în așteptare).

### Care sunt codurile de motiv de returnare comune în pacs.004?

AC01, AC04, AC06, AM04, BE04, CUST, DUPL, FOCR, FR01.

### Ce este informația de remitere structurată?

Remiterarea structurată în pacs.008 utilizează elementul RmtInf/Strd pentru referințe de documente, sume și referințe creditor.

### Ce este LEI și când se folosește?

LEI este un cod alfanumeric de 20 de caractere per ISO 17442. Apare în OrgId/LEI pentru părți și FinInstnId/LEI pentru agenți.

## Despre toolkit-ul pacs008

### Ce face pacs008?

pacs008 este un toolkit Python care generează, validează și livrează mesaje de plată ISO 20022.

### Ce tipuri de mesaje suportă pacs008?

Opt tipuri: pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05 și pacs.028.001.05.

### Cum ajută pacs008 cu termenul limită pentru adrese structurate din 2026?

pacs008 validează câmpurile de adresă poștală structurată și hibridă înainte de generarea XML.

### Poate pacs008 valida datele fără a genera XML?

Da. Utilizați flag-ul CLI `--dry-run` sau endpoint-ul API `POST /validate`.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

