---
title: "ISO 20022 glossary | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# ISO 20022 glossary

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Casă de compensare automatizată. O rețea care procesează plăți electronice grupate între instituții financiare.

**AdrLine** — Linie de adresă. Un câmp de adresă cu text liber în structurile de adresă poștală ISO 20022.

**ACCP** — Profil client acceptat. Un cod de stare pacs.002 care indică că verificările anterioare au fost trecute.

**ACSC** — Decontare acceptată finalizată. Un cod de stare pacs.002 care confirmă că decontarea pe contul debitorului a fost finalizată.

**ACSP** — Decontare acceptată în curs. Un cod de stare pacs.002 care indică că toate verificările au fost trecute.

## B–N

**BAH** — Antet de aplicație de afaceri (head.001). Un plic standardizat care învelește mesajele de afaceri ISO 20022 pentru transport prin SWIFT.

**BIC** — Cod de identificare a afacerii (ISO 9362). Un cod de 8 sau 11 caractere care identifică în mod unic o instituție financiară.

**CBPR+** — Plăți și raportare transfrontalieră Plus. Programul SWIFT pentru migrarea de la MT la ISO 20022. Lansat în martie 2023.

**CdtTrfTxInf** — Informații privind tranzacția de transfer de credit. Principalul bloc constructiv la nivel de tranzacție în pacs.008.

**ChrgBr** — Purtător de costuri. Specifică cine plătește costurile tranzacției. Valori: DEBT, CRED, SHAR, SLEV.

**CLRG** — Decontare prin sistem de compensare. Fondurile tranzitează printr-un sistem de compensare precum TARGET2.

**COVE** — Decontare prin metoda de acoperire. O plată de acoperire pacs.009 separată gestionează finanțarea între corespondenți.

**CSM** — Mecanism de compensare și decontare.

**Dbtr** — Debitor. Partea care datorează fonduri și inițiază plata.

**DbtrAgt** — Agentul debitorului. Instituția financiară care gestionează contul debitorului.

**E2E ID** — Identificare de la capăt la capăt (EndToEndId). O referință care trebuie să rămână neschimbată prin toți agenții.

**EPC** — Consiliul European al Plăților. Organismul care gestionează regulamentele schemelor de plată SEPA.

**FI** — Instituție financiară. O bancă sau altă instituție care participă la compensarea și decontarea plăților.

**FIToFI** — De la instituție financiară la instituție financiară. Descrie domeniul interbancar.

**gpi** — Inovație globală în plăți. Inițiativa SWIFT pentru plăți transfrontaliere mai rapide și transparente.

**GrpHdr** — Antet de grup. Blocul de metadate la nivel de mesaj în mesajele pacs.

**Hybrid address** — Un format de adresă poștală care combină elemente structurate cu elemente nestructurate AdrLine.

**IBAN** — Număr de cont bancar internațional (ISO 13616). Validat utilizând suma de control ISO 7064 Mod 97-10.

**INDA** — Decontare prin agentul instruit. **INGA** — Decontare prin agentul instructor.

**InstrId** — Identificarea instrucțiunii. O referință punct la punct între agenți adiacenți.

**IntrBkSttlmAmt** — Suma de decontare interbancară.

**ISO 20022** — Un standard internațional pentru schimbul electronic de date între instituții financiare.

**LEI** — Identificator de entitate juridică (ISO 17442). Un cod alfanumeric de 20 de caractere.

**MsgId** — Identificarea mesajului. **MT** — Tip de mesaj (format legacy SWIFT). **MX** — Formatul de mesaj XML ISO 20022.

**NbOfTxs** — Număr de tranzacții.

## P

**pacs** — Compensare și decontare a plăților. Domeniul de afaceri ISO 20022 pentru mesajele de plată interbancară.

**pacs.002** — Raport de stare a plății FI la FI. **pacs.003** — Debit direct al clientului FI la FI.

**pacs.004** — Returnarea plății. **pacs.007** — Reversarea plății FI la FI.

**pacs.008** — Transfer de credit al clientului FI la FI. Înlocuiește MT103.

**pacs.009** — Transfer de credit al instituției financiare. Înlocuiește MT202/MT202COV.

**pacs.010** — Debit direct al instituției financiare. **pacs.028** — Cerere de stare a plății FI la FI.

**pain** — Inițierea plății. Domeniul ISO 20022 pentru mesajele de la client la bancă.

**PII** — Informații de identificare personală. pacs008 maschează PII în jurnalele structurate.

**PstlAdr** — Adresă poștală. Suportă formate structurate și nestructurate.

## R–U

**RJCT** — Respins. Un cod de stare pacs.002 care indică că plata a fost respinsă.

**RmtInf** — Informații de remitere. Date de referință ale plății transportate în pacs.008.

**RTGS** — Decontare brută în timp real.

**SCT** — Transfer de credit SEPA. **SCT Inst** — Transfer de credit instantaneu SEPA.

**SDD** — Debit direct SEPA. **SEPA** — Zona Unică de Plăți în Euro.

**SLEV** — Nivel de serviciu. Obligatoriu pentru SEPA. **STP** — Procesare directă automatizată.

**SttlmMtd** — Metodă de decontare. Definește cum are loc decontarea interbancară: CLRG, INDA, INGA sau COVE.

**TxId** — Identificarea tranzacției. O referință interbancară atribuită de primul agent instructor.

**UETR** — Referință unică de tranzacție de la capăt la capăt. Un identificator UUID v4 pentru urmărirea gpi.

## X

**XSD** — Definiție de schemă XML. Schema formală care definește structura unui mesaj XML ISO 20022.

**XXE** — Entitate externă XML. O vulnerabilitate de securitate în analiza XML. pacs008 previne atacurile XXE utilizând defusedxml.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

