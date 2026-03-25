---
title: "Glosar ISO 20022 | pacs008"
description: Definițiile termenilor cheie ISO 20022 și de mesagerie de plăți utilizați în pacs.008 și mesajele conexe.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Glosar ISO 20022

Acest glosar definește termenii cheie, abrevierile și conceptele tehnice utilizate în mesajele pacs ISO 20022 și pe acest site.

## A

**ACH** — Automated Clearing House (Casă de compensare automată). O rețea care procesează plăți electronice în loturi între instituții financiare.

**AdrLine** — Address Line (Linie de adresă). Un câmp de adresă cu text liber în structurile de adresă poștală ISO 20022. Până la 7 linii de câte 70 de caractere fiecare. În curs de înlocuire cu elemente de adresă structurată pentru CBPR+ până în noiembrie 2026.

**ACCP** — Accepted Customer Profile (Profil client acceptat). Un cod de stare pacs.002 care indică faptul că verificările anterioare (sintaxă, profil client) au fost trecute.

**ACSC** — Accepted Settlement Completed (Decontare finalizată). Un cod de stare pacs.002 care confirmă finalizarea decontării pe contul debitorului.

**ACSP** — Accepted Settlement in Process (Decontare în curs). Un cod de stare pacs.002 care indică faptul că toate verificările au fost trecute și decontarea este în curs.

## B

**BAH** — Business Application Header (head.001). Un plic standardizat care învelește mesajele de afaceri ISO 20022 pentru transport prin SWIFT. Conține informații de rutare, identificatorul definiției mesajului și BIC-urile expeditorului/destinatarului.

**BIC** — Business Identifier Code (ISO 9362). Un cod de 8 sau 11 caractere care identifică unic o instituție financiară. Format: BBBBCCLL (cod bancă + țară + locație) cu cod opțional de sucursală BBB.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Programul SWIFT pentru migrarea mesageriei de plăți transfrontaliere de la MT la ISO 20022. Operațional din martie 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information. Principalul bloc constructiv la nivel de tranzacție în pacs.008 care conține detalii de plată, părți, sume și informații de remitere.

**ChrgBr** — Charge Bearer (Suportor de costuri). Specifică cine plătește costurile tranzacției. Valori: DEBT (debitor), CRED (creditor), SHAR (partajat), SLEV (nivel de serviciu, doar SEPA).

**CLRG** — Decontare prin sistem de compensare. O metodă de decontare în care fondurile trec printr-un sistem de compensare precum TARGET2, EURO1 sau CHIPS.

**COVE** — Decontare prin metoda de acoperire. O metodă de decontare în care o plată de acoperire pacs.009 separată gestionează finanțarea între corespondenți, în timp ce pacs.008 transportă datele clientului direct.

**CSM** — Clearing and Settlement Mechanism (Mecanism de compensare și decontare). O infrastructură care procesează și decontează instrucțiunile de plată între instituțiile participante.

## D

**Dbtr** — Debtor (Debitor). Partea care datorează fonduri și inițiază plata. În pacs.008, elementul Dbtr conține numele, adresa poștală, identificarea și țara de reședință a debitorului.

**DbtrAgt** — Debtor Agent (Agentul debitorului). Instituția financiară care gestionează contul debitorului și trimite instrucțiunea pacs.008.

## E

**E2E ID** — End-to-End Identification (EndToEndId). O referință atribuită de inițiator care trebuie să rămână neschimbată la toți agenții din lanțul de plăți. Utilizată pentru trasabilitate la nivel de client.

**EPC** — European Payments Council (Consiliul European de Plăți). Organismul care gestionează regulamentele schemelor de plăți SEPA pentru transferuri de credit și debitări directe.

## F

**FI** — Financial Institution (Instituție financiară). O bancă sau altă instituție care participă la compensarea și decontarea plăților.

**FIToFI** — Financial Institution to Financial Institution. Descrie domeniul interbancar în care operează mesajele pacs.

## G

**gpi** — Global Payments Innovation. Inițiativa SWIFT pentru plăți transfrontaliere mai rapide și transparente. Utilizează UETR pentru urmărire end-to-end printr-un Tracker bazat pe cloud.

**GrpHdr** — Group Header (Antet de grup). Blocul de metadate la nivel de mesaj în mesajele pacs. Conține MsgId, CreDtTm, NbOfTxs, informații de decontare și informații despre tipul plății.

## H

**Adresă hibridă** — Un format de adresă poștală care combină elemente structurate (StrtNm, TwnNm, Ctry) cu elemente AdrLine nestructurate. Permisă în perioada de tranziție înainte de termenul limită pentru adresele structurate din noiembrie 2026.

## I

**IBAN** — International Bank Account Number (ISO 13616). Un format standardizat de număr de cont utilizat pentru plăți transfrontaliere și interne. Validat folosind suma de control ISO 7064 Mod 97-10.

**INDA** — Instructed Agent settlement. O metodă de decontare în care fondurile se decontează în registrele agentului instruit, unde agentul debitorului deține un cont nostro.

**INGA** — Instructing Agent settlement. O metodă de decontare în care fondurile se decontează în registrele agentului inițiator, unde agentul instruit deține un cont nostro.

**InstrId** — Instruction Identification. O referință punct-la-punct între agenții adiacenți din lanțul de plăți. Se poate schimba la fiecare hop.

**IntrBkSttlmAmt** — Interbank Settlement Amount. Suma care se decontează între agentul inițiator și agentul instruit, în moneda de decontare.

**ISO 20022** — Un standard internațional pentru schimbul electronic de date între instituții financiare. Definește un model de date comun și formate de mesaje bazate pe XML pentru plăți, valori mobiliare, finanțare comercială și alte domenii financiare.

## L

**LEI** — Legal Entity Identifier (ISO 17442). Un cod alfanumeric de 20 de caractere care identifică unic entitățile juridice participante la tranzacții financiare. Utilizat în OrgId/LEI pentru părți și FinInstnId/LEI pentru agenți.

## M

**MsgId** — Message Identification. Un identificator unic pentru plicul mesajului, atribuit de agentul expeditor. Se schimbă la fiecare hop din lanțul de plăți.

**MT** — Message Type. Formatul legacy de mesaje SWIFT (ex.: MT103 pentru transferuri de credit ale clienților, MT202 pentru transferuri ale instituțiilor financiare). Înlocuit de mesajele MX ISO 20022.

**MX** — Formatul de mesaj XML ISO 20022 utilizat de SWIFT. Mesajele MX înlocuiesc mesajele MT pentru plățile transfrontaliere sub CBPR+.

## N

**NbOfTxs** — Number of Transactions. Un element Group Header care indică câte tranzacții individuale conține mesajul.

## P

**pacs** — Payments Clearing and Settlement. Domeniul de afaceri ISO 20022 care acoperă mesajele de plată interbancară.

**pacs.002** — Raport de stare a plății FI-FI. Raportează starea de procesare (acceptat, respins, în așteptare, decontat) a unei instrucțiuni de plată anterioare.

**pacs.003** — Debitare directă client FI-FI. Transportă o instrucțiune de debitare directă a clientului între bănci pentru colectarea fondurilor.

**pacs.004** — Returnare plată. Returnează fondurile decontate prin lanțul de plăți când o plată nu poate fi aplicată.

**pacs.007** — Reversare plată FI-FI. Reversează o instrucțiune de plată de la expeditorul original înainte prin lanț.

**pacs.008** — Transfer de credit client FI-FI. Mesajul interbancar primar pentru transferurile de credit ale clienților. Înlocuiește MT103.

**pacs.009** — Transfer de credit al instituției financiare. Mută fonduri între bănci în numele propriu. Acoperă finanțare, plăți de acoperire și gestionarea lichidității. Înlocuiește MT202/MT202COV.

**pacs.010** — Debitare directă a instituției financiare. Permite unei bănci să debiteze contul propriu al altei bănci în cadrul unui acord bilateral.

**pacs.028** — Cerere de stare a plății FI-FI. Solicită activ starea unei plăți anterioare când nu a sosit nicio actualizare pacs.002.

**pain** — Payment Initiation. Domeniul de afaceri ISO 20022 care acoperă mesajele client-bancă (ex.: pain.001 pentru inițierea transferului de credit).

**PII** — Personally Identifiable Information. Date care pot identifica o persoană. pacs008 maschează PII în jurnalele structurate.

**PstlAdr** — Postal Address. Structura de adresă utilizată pentru părți în mesajele pacs. Suportă formate structurate (StrtNm, TwnNm, Ctry) și nestructurate (AdrLine).

## R

**RJCT** — Rejected (Respins). Un cod de stare pacs.002 care indică faptul că plata a fost respinsă.

**RmtInf** — Remittance Information. Date de referință ale plății transportate în pacs.008. Suportă formate nestructurate (text liber, max 140 caractere) și structurate (referințe documente, sume, referințe creditor).

**RTGS** — Real-Time Gross Settlement. Un sistem de plăți în care tranzacțiile se decontează individual și în timp real (ex.: TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. Schema de transfer de credit în euro gestionată de EPC, utilizând pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. Varianta de plată instantanee a SCT, decontare în mai puțin de 10 secunde.

**SDD** — SEPA Direct Debit. Schema de debitare directă în euro gestionată de EPC, utilizând pacs.003.

**SEPA** — Single Euro Payments Area. O inițiativă de integrare a plăților care acoperă transferuri de credit, debitări directe și plăți cu cardul în euro în 36 de țări europene.

**SLEV** — Service Level. Un cod obligatoriu de suportare a costurilor pentru SEPA. Înseamnă că costurile urmează regulile schemei fără deduceri din suma transferată.

**STP** — Straight-Through Processing. Procesare automată end-to-end a plăților fără intervenție manuală.

**SttlmMtd** — Settlement Method. Definește cum are loc decontarea interbancară: CLRG (sistem de compensare), INDA (agent instruit), INGA (agent inițiator) sau COVE (plată de acoperire).

## T

**TxId** — Transaction Identification. O referință interbancară atribuită de primul agent inițiator. Nu trebuie modificată de agenții ulteriori.

## U

**UETR** — Unique End-to-End Transaction Reference. Un identificator UUID v4 generat de agentul debitorului și transportat neschimbat pe toate segmentele unei plăți pentru urmărirea gpi.

## X

**XSD** — XML Schema Definition. Schema formală care definește structura, elementele și tipurile de date ale unui mesaj XML ISO 20022.

**XXE** — XML External Entity. O vulnerabilitate de securitate în parsarea XML. pacs008 previne atacurile XXE folosind defusedxml.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
