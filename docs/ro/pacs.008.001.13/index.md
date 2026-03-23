---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nume ISO** | FIToFICustomerCreditTransferV13 |
| **Stare de înregistrare** | Registered |
| **An** | 2023 |
| **Versiune** | 13 |

## Prezentare generală

Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 27 February 2025; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu ID-ul mesajului, data creării, numărul de tranzacții și informații de decontare
- **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu sumă, comisioane și scop
- **Dbtr / DbtrAgt** — Identificarea debitorului și a agentului debitorului cu detaliile contului
- **Cdtr / CdtrAgt** — Identificarea creditorului și a agentului creditorului cu detaliile contului
- **RmtInf** — Informații de remitere pentru referințe de plată structurate sau nestructurate

## Context de afaceri

- Mesajul principal pentru transferurile de credit transfrontaliere și interne inițiate de client
- Utilizat în SEPA SCT, SEPA Instant, CBPR+ și sistemele de compensare naționale
- Conține informații de remitere structurate pentru a susține reconcilierea automată
- Suportă metode de decontare serială, prin acoperire și directă pentru lanțuri de plăți cu mai multe etape

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu ID-ul mesajului, data creării, numărul de tranzacții și informații de decontare | Mesajul principal pentru transferurile de credit transfrontaliere și interne inițiate de client |
| **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu sumă, comisioane și scop | Utilizat în SEPA SCT, SEPA Instant, CBPR+ și sistemele de compensare naționale |
| **Dbtr / DbtrAgt** — Identificarea debitorului și a agentului debitorului cu detaliile contului | Conține informații de remitere structurate pentru a susține reconcilierea automată |
| **Cdtr / CdtrAgt** — Identificarea creditorului și a agentului creditorului cu detaliile contului | Suportă metode de decontare serială, prin acoperire și directă pentru lanțuri de plăți cu mai multe etape |
| **RmtInf** — Informații de remitere pentru referințe de plată structurate sau nestructurate | Agentul debitorului creează un pacs.008 și îl trimite agentului creditorului (direct sau prin intermediari). Fiecare agent din lanț validează, îmbogățește și transmite instrucțiunea până când agentul creditorului creditează contul beneficiarului. |

## Context CBPR+ și scheme

- Înlocuiește MT103 și MT103+ pentru transferurile de credit transfrontaliere ale clienților
- Termenul limită pentru adresele structurate din noiembrie 2026 se aplică tuturor adreselor poștale ale părților
- SWIFT gpi necesită pacs.008 pentru urmărirea de la un capăt la altul bazată pe UETR
- 13 revizuiri reflectă evoluția continuă a schemei în infrastructurile de piață

## Fluxul mesajului

Agentul debitorului creează un pacs.008 și îl trimite agentului creditorului (direct sau prin intermediari). Fiecare agent din lanț validează, îmbogățește și transmite instrucțiunea până când agentul creditorului creditează contul beneficiarului.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Versiuni acceptate

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | FI to FI Payment Status Report | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |
| [`pacs.004.001.11`](/ro/pacs.004.001.11/) | Payment Return | Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare. |
| [`pacs.009.001.10`](/ro/pacs.009.001.10/) | Financial Institution Credit Transfer | Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității. |

