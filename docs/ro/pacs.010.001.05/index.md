---
title: pacs.010.001.05 — Financial Institution Direct Debit | Română
description: Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nume ISO** | FinancialInstitutionDirectDebitV05 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 5 |

## Prezentare generală

Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu suma de colectare
- **Cdtr / CdtrAgt** — Identificarea instituției creditoare și a agentului acesteia
- **Dbtr / DbtrAgt** — Identificarea instituției debitoare și a agentului acesteia
- **IntrBkSttlmAmt** — Suma de decontare interbancară în moneda de decontare

## Context de afaceri

- Suportă colectarea interbancară prin debitare directă între instituții financiare
- Utilizat pentru colectarea comisioanelor, apelurile în marjă și obligațiile de decontare instituționale
- Necesită acorduri bilaterale prestabilite între instituțiile participante
- Esențial pentru gestionarea numerarului instituțional și ciclurile de decontare interbancară

## Context CBPR+ și scheme

- Înlocuiește elemente ale MT204 pentru procesarea debitărilor directe interbancare
- Identificarea structurată a părților urmează aceleași cerințe ca și celelalte mesaje pacs
- Validarea identificatorilor instituționali (BIC, LEI) este obligatorie
- Inclus în foile de parcurs pentru adoptarea completă a ISO 20022 în infrastructurile de piață

## Fluxul mesajului

Instituția creditoare trimite pacs.010 instituției debitoare pentru a colecta fonduri în baza unui acord prestabilit. Instituția debitoare validează cererea și decontează sau respinge debitarea directă.

## Mesaje conexe

- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/ro/pacs.003.001.09/) — FI to FI Customer Direct Debit

