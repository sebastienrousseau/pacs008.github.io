---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în...
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

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 27 February 2025; linkurile către surse sunt mai jos.

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

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare | Utilizat pentru transferuri interbancare în cont propriu și plăți de acoperire |
| **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu suma de decontare interbancară | Suportă gestionarea lichidității între partenerii de corespondență bancară |
| **Dbtr / DbtrAgt** — Identificarea instituției debitoare și a agentului acesteia | Conține etapa de acoperire a transferurilor de credit ale clienților decontate prin metoda de acoperire |
| **Cdtr / CdtrAgt** — Identificarea instituției creditoare și a agentului acesteia | Permite operațiuni de trezorerie și finanțare între instituții financiare |
| **IntrBkSttlmAmt** — Suma de decontare interbancară în moneda de decontare | Instituția debitoare trimite pacs.009 instituției creditoare pentru a transfera fonduri proprii. Pentru plățile prin metoda de acoperire, pacs.009 asigură etapa de finanțare în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată. |

## Context CBPR+ și scheme

- Înlocuiește MT202 și MT202COV pentru transferurile între instituții
- Fluxurile prin metoda de acoperire asociază pacs.009 cu instrucțiunea de client pacs.008 subiacentă
- Datele structurate ale părților și identificarea LEI sunt din ce în ce mai solicitate
- SWIFT gpi acoperă pacs.009 pentru transparență în corespondența bancară

## Fluxul mesajului

Instituția debitoare trimite pacs.009 instituției creditoare pentru a transfera fonduri proprii. Pentru plățile prin metoda de acoperire, pacs.009 asigură etapa de finanțare în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | FI to FI Payment Status Report | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |
| [`pacs.010.001.05`](/ro/pacs.010.001.05/) | Financial Institution Direct Debit | Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții. |

