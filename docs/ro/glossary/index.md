---
title: "Glosar ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: ro-RO
lastUpdated: true
image: /logo.webp
---

# Glosar ISO 20022

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Casă de compensare automatizată. O rețea care procesează plăți electronice grupate între instituții financiare.

**AdrLine** — Linie de adresă. Un câmp de adresă cu text liber în structurile de adresă poștală ISO 20022. Până la 7 linii de 70 de caractere fiecare. În curs de înlocuire cu elemente de adresă structurate pentru CBPR+ până în noiembrie 2026.

**ACCP** — Profil client acceptat. Un cod de stare pacs.002 care indică că verificările anterioare (sintaxă, profil client) au fost trecute.

**ACSC** — Decontare acceptată finalizată. Un cod de stare pacs.002 care confirmă că decontarea pe contul debitorului a fost finalizată.

**ACSP** — Decontare acceptată în curs. Un cod de stare pacs.002 care indică că toate verificările au fost trecute și decontarea este în curs.

## B

**BAH** — Antet de aplicație de afaceri (head.001). Un plic standardizat care învelește mesajele de afaceri ISO 20022 pentru transport prin SWIFT. Conține informații de rutare, identificatorul definiției mesajului și BIC-urile expeditorului/destinatarului.

**BIC** — Cod de identificare a afacerii (ISO 9362). Un cod de 8 sau 11 caractere care identifică în mod unic o instituție financiară. Format: BBBBCCLL (cod bancă + țară + locație) cu cod de sucursală BBB opțional.

## C

**CBPR+** — Plăți și raportare transfrontalieră Plus. Programul SWIFT pentru migrarea mesageriei plăților transfrontaliere de la MT la ISO 20022. Lansat în martie 2023.

**CdtTrfTxInf** — Informații privind tranzacția de transfer de credit. Principalul bloc constructiv la nivel de tranzacție în pacs.008, conținând detaliile plății, părțile, sumele și informațiile de remitere.

**ChrgBr** — Purtător de costuri. Specifică cine plătește costurile tranzacției. Valori: DEBT (debitor), CRED (creditor), SHAR (partajat), SLEV (nivel de serviciu, doar SEPA).

**CLRG** — Decontare prin sistem de compensare. O metodă de decontare în care fondurile tranzitează printr-un sistem de compensare precum TARGET2, EURO1 sau CHIPS.

**COVE** — Decontare prin metoda de acoperire. O metodă de decontare în care o plată de acoperire pacs.009 separată gestionează finanțarea între corespondenți în timp ce pacs.008 transportă datele clientului direct.

**CSM** — Mecanism de compensare și decontare. O infrastructură care procesează și decontează instrucțiunile de plată între instituțiile participante.

## D

**Dbtr** — Debitor. Partea care datorează fonduri și inițiază plata. În pacs.008, elementul Dbtr conține numele debitorului, adresa poștală, identificarea și țara de reședință.

**DbtrAgt** — Agentul debitorului. Instituția financiară care gestionează contul debitorului și trimite instrucțiunea pacs.008.

## E

**E2E ID** — Identificare de la capăt la capăt (EndToEndId). O referință atribuită de inițiator care trebuie să rămână neschimbată prin toți agenții din lanțul de plăți. Utilizată pentru trasabilitatea la nivel de client.

**EPC** — Consiliul European al Plăților. Organismul care gestionează regulamentele schemelor de plată SEPA pentru transferuri de credit și debite directe.

## F

**FI** — Instituție financiară. O bancă sau altă instituție care participă la compensarea și decontarea plăților.

**FIToFI** — De la instituție financiară la instituție financiară. Descrie domeniul interbancar în care operează mesajele pacs.

## G

**gpi** — Inovație globală în plăți. Inițiativa SWIFT pentru plăți transfrontaliere mai rapide și transparente. Utilizează UETR pentru urmărirea de la capăt la capăt printr-un Tracker bazat pe cloud.

**GrpHdr** — Antet de grup. Blocul de metadate la nivel de mesaj în mesajele pacs. Conține MsgId, CreDtTm, NbOfTxs, informații de decontare și informații privind tipul de plată.

## H

**Hybrid address** — Un format de adresă poștală care combină elemente structurate (StrtNm, TwnNm, Ctry) cu elemente nestructurate AdrLine. Permis în perioada de tranziție înainte de termenul limită pentru adresa structurată din noiembrie 2026.

## I

**IBAN** — Număr de cont bancar internațional (ISO 13616). Un format de număr de cont standardizat utilizat pentru plăți transfrontaliere și interne. Validat utilizând suma de control ISO 7064 Mod 97-10.

**INDA** — Decontare prin agentul instruit. O metodă de decontare în care fondurile se decontează în registrele agentului instruit, unde agentul debitorului deține un cont nostro.

**INGA** — Decontare prin agentul instructor. O metodă de decontare în care fondurile se decontează în registrele agentului instructor, unde agentul instruit deține un cont nostro.

**InstrId** — Identificarea instrucțiunii. O referință punct la punct între agenți adiacenți din lanțul de plăți. Se poate schimba la fiecare pas.

**IntrBkSttlmAmt** — Suma de decontare interbancară. Suma care se decontează între agentul instructor și agentul instruit, în moneda de decontare.

**ISO 20022** — Un standard internațional pentru schimbul electronic de date între instituții financiare. Definește un model comun de date și formate de mesaje bazate pe XML pentru plăți, titluri de valoare, finanțare comercială și alte domenii financiare.

## L

**LEI** — Identificator de entitate juridică (ISO 17442). Un cod alfanumeric de 20 de caractere care identifică în mod unic entitățile juridice participante la tranzacțiile financiare. Utilizat în OrgId/LEI pentru părți și FinInstnId/LEI pentru agenți.

## M

**MsgId** — Identificarea mesajului. Un identificator unic pentru plicul mesajului, atribuit de agentul expeditor. Se schimbă la fiecare pas din lanțul de plăți.

**MT** — Tip de mesaj. Formatul de mesaj legacy al SWIFT (de ex., MT103 pentru transferuri de credit ale clienților, MT202 pentru transferuri între instituții financiare). În curs de înlocuire cu mesaje MX ISO 20022.

**MX** — Formatul de mesaj XML ISO 20022 utilizat de SWIFT. Mesajele MX înlocuiesc mesajele MT pentru plățile transfrontaliere sub CBPR+.

## N

**NbOfTxs** — Număr de tranzacții. Un element al antetului de grup care indică câte tranzacții individuale sunt conținute în mesaj.

## P

**pacs** — Compensare și decontare a plăților. Domeniul de afaceri ISO 20022 care acoperă mesajele de plată interbancară.

**pacs.002** — Raport de stare a plății FI la FI. Raportează starea de procesare (acceptat, respins, în așteptare, decontat) a unei instrucțiuni de plată anterioare.

**pacs.003** — Debit direct al clientului FI la FI. Transportă o instrucțiune de debit direct al clientului între bănci pentru colectarea fondurilor.

**pacs.004** — Returnarea plății. Returnează fondurile decontate prin lanțul de plăți când o plată nu poate fi aplicată.

**pacs.007** — Reversarea plății FI la FI. Reversează o instrucțiune de plată de la expeditorul original prin lanț.

**pacs.008** — Transfer de credit al clientului FI la FI. Principalul mesaj interbancar pentru transferurile de credit ale clienților. Înlocuiește MT103.

**pacs.009** — Transfer de credit al instituției financiare. Mută fonduri între bănci în nume propriu. Acoperă finanțarea, plățile de acoperire și gestionarea lichidității. Înlocuiește MT202/MT202COV.

**pacs.010** — Debit direct al instituției financiare. Permite unei bănci să debiteze contul propriu al altei bănci în baza unui acord bilateral.

**pacs.028** — Cerere de stare a plății FI la FI. Solicită activ starea unei plăți anterioare când nicio actualizare pacs.002 nu a sosit.

**pain** — Inițierea plății. Domeniul de afaceri ISO 20022 care acoperă mesajele de la client la bancă (de ex., pain.001 pentru inițierea transferului de credit).

**PII** — Informații de identificare personală. Date care pot identifica o persoană. pacs008 maschează PII în jurnalele structurate.

**PstlAdr** — Adresă poștală. Structura de adresă utilizată pentru părți în mesajele pacs. Suportă formate structurate (StrtNm, TwnNm, Ctry) și nestructurate (AdrLine).

## R

**RJCT** — Respins. Un cod de stare pacs.002 care indică că plata a fost respinsă.

**RmtInf** — Informații de remitere. Date de referință ale plății transportate în pacs.008. Suportă formate nestructurate (text liber, max. 140 de caractere) și structurate (referințe la documente, sume, referințe creditor).

**RTGS** — Decontare brută în timp real. Un sistem de plăți în care tranzacțiile se decontează individual și în timp real (de ex., TARGET2, Fedwire, CHAPS).

## S

**SCT** — Transfer de credit SEPA. Schema de transfer de credit în euro gestionată de EPC, utilizând pacs.008.

**SCT Inst** — Transfer de credit instantaneu SEPA. Varianta de plată instantanee a SCT, decontată în mai puțin de 10 secunde.

**SDD** — Debit direct SEPA. Schema de debit direct în euro gestionată de EPC, utilizând pacs.003.

**SEPA** — Zona Unică de Plăți în Euro. O inițiativă de integrare a plăților care acoperă transferuri de credit, debite directe și plăți cu cardul în euro în 36 de țări europene.

**SLEV** — Nivel de serviciu. Un cod de purtător de costuri obligatoriu pentru SEPA. Înseamnă că costurile urmează regulile schemei fără deduceri din suma transferului.

**STP** — Procesare directă automatizată. Procesarea automatizată a plăților de la capăt la capăt fără intervenție manuală.

**SttlmMtd** — Metodă de decontare. Definește cum are loc decontarea interbancară: CLRG (sistem de compensare), INDA (agent instruit), INGA (agent instructor) sau COVE (plată de acoperire).

## T

**TxId** — Identificarea tranzacției. O referință interbancară atribuită de primul agent instructor. Nu trebuie modificată de agenții următori.

## U

**UETR** — Referință unică de tranzacție de la capăt la capăt. Un identificator UUID v4 generat de agentul debitorului și transportat neschimbat prin toate etapele unei plăți pentru urmărirea gpi.

## X

**XSD** — Definiție de schemă XML. Schema formală care definește structura, elementele și tipurile de date ale unui mesaj XML ISO 20022.

**XXE** — Entitate externă XML. O vulnerabilitate de securitate în analiza XML. pacs008 previne atacurile XXE utilizând defusedxml.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

