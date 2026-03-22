---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Română
description: Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nume ISO** | FinancialInstitutionCreditTransferV10 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 10 |

## Prezentare generală

Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu suma de decontare interbancară
- **Dbtr / DbtrAgt** — Identificarea instituției debitoare și a agentului acesteia
- **Cdtr / CdtrAgt** — Identificarea instituției creditoare și a agentului acesteia
- **IntrBkSttlmAmt** — Suma de decontare interbancară în moneda de decontare

## Context de afaceri

- Utilizat pentru transferuri interbancare în cont propriu și plăți de acoperire
- Suportă gestionarea lichidității între partenerii de corespondență bancară
- Conține etapa de acoperire a transferurilor de credit ale clienților decontate prin metoda de acoperire
- Permite operațiuni de trezorerie și finanțare între instituții financiare

## Context CBPR+ și scheme

- Înlocuiește MT202 și MT202COV pentru transferurile între instituții
- Fluxurile prin metoda de acoperire asociază pacs.009 cu instrucțiunea de client pacs.008 subiacentă
- Datele structurate ale părților și identificarea LEI sunt din ce în ce mai solicitate
- SWIFT gpi acoperă pacs.009 pentru transparență în corespondența bancară

## Fluxul mesajului

Instituția debitoare trimite pacs.009 instituției creditoare pentru a transfera fonduri proprii. Pentru plățile prin metoda de acoperire, pacs.009 asigură etapa de finanțare în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată.

## Mesaje conexe

- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/ro/pacs.010.001.05/) — Financial Institution Direct Debit

