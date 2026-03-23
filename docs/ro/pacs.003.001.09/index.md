---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nume ISO** | FIToFICustomerDirectDebitV09 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 9 |

## Prezentare generală

Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 27 February 2025; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu sumă și părți implicate
- **Cdtr** — Identificarea creditorului și detaliile contului
- **CdtrAgt** — Identificarea agentului creditorului (instituția colectoare)
- **DbtrAgt** — Identificarea agentului debitorului (instituția plătitoare)

## Context de afaceri

- Suportă schemele de debitare directă SEPA Core și B2B
- Utilizat pentru colectarea plăților recurente precum abonamente, facturi de utilități și rambursări de împrumuturi
- Necesită o referință de mandat validă între debitor și creditor
- Permite colectarea în masă a mai multor instrucțiuni de debitare directă într-un singur mesaj

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare | Suportă schemele de debitare directă SEPA Core și B2B |
| **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu sumă și părți implicate | Utilizat pentru colectarea plăților recurente precum abonamente, facturi de utilități și rambursări de împrumuturi |
| **Cdtr** — Identificarea creditorului și detaliile contului | Necesită o referință de mandat validă între debitor și creditor |
| **CdtrAgt** — Identificarea agentului creditorului (instituția colectoare) | Permite colectarea în masă a mai multor instrucțiuni de debitare directă într-un singur mesaj |
| **DbtrAgt** — Identificarea agentului debitorului (instituția plătitoare) | Agentul creditorului inițiază pacs.003 către agentul debitorului pentru a colecta fonduri. Agentul debitorului validează mandatul, verifică acoperirea contului și decontează sau returnează tranzacția. |

## Context CBPR+ și scheme

- Cerințele de adresă structurată și identificare a părților se aplică în egală măsură debitărilor directe
- Datele legate de mandat trebuie să fie complet structurate din noiembrie 2026
- Înlocuiește formatele vechi de debitare directă în stil MT104 în fluxurile transfrontaliere
- Validarea identificării schemei creditorului este din ce în ce mai strict aplicată

## Fluxul mesajului

Agentul creditorului inițiază pacs.003 către agentul debitorului pentru a colecta fonduri. Agentul debitorului validează mandatul, verifică acoperirea contului și decontează sau returnează tranzacția.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.004.001.11`](/ro/pacs.004.001.11/) | Payment Return | Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare. |
| [`pacs.007.001.11`](/ro/pacs.007.001.11/) | FI to FI Payment Reversal | Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original. |
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | FI to FI Payment Status Report | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |

