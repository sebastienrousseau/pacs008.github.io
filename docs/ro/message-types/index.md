---
title: Tipuri de mesaje | pacs008 ISO 20022
description: Definiții și versiuni de mesaje pacs ISO 20022 acceptate. Generare, validare, orchestrare API și suport de conformitate pentru fluxuri de transfer de...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Tipuri de mesaje

pacs008 acoperă definiția de mesaj pacs.008 principală și mesajele conexe utilizate în fluxurile de orchestrare și reconciliere.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026 folosind materiale publice ISO 20022, EPC și Swift menționate pe această pagină.

## Suport inclus

| Tip de mesaj | Descriere | Versiune | An | Prezentare generală |
|---|---|---|---|---|
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | FI to FI Payment Status Report | `pacs.002.001.12` | 2019 | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |
| [`pacs.003.001.09`](/ro/pacs.003.001.09/) | FI to FI Customer Direct Debit | `pacs.003.001.09` | 2019 | Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului. |
| [`pacs.004.001.11`](/ro/pacs.004.001.11/) | Payment Return | `pacs.004.001.11` | 2019 | Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare. |
| [`pacs.007.001.11`](/ro/pacs.007.001.11/) | FI to FI Payment Reversal | `pacs.007.001.11` | 2019 | Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original. |
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | FI to FI Customer Credit Transfer | `pacs.008.001.13` | 2023 | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.009.001.10`](/ro/pacs.009.001.10/) | Financial Institution Credit Transfer | `pacs.009.001.10` | 2019 | Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității. |
| [`pacs.010.001.05`](/ro/pacs.010.001.05/) | Financial Institution Direct Debit | `pacs.010.001.05` | 2019 | Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții. |
| [`pacs.028.001.05`](/ro/pacs.028.001.05/) | FI to FI Payment Status Request | `pacs.028.001.05` | 2019 | Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat. |

## Model de livrare

Fiecare tip de mesaj acceptat este susținut de active șablon și logică de validare, astfel încât echipele pot standardiza generarea și testele de regresie pe mai multe canale.


## Contextul pieței 2026

- **SEPA SCT / SCT Inst**: pacs.008 rămâne central pentru schimbul de transferuri de credit și procesarea plăților instantanee.
- **CBPR+**: pacs.008 continuă să înlocuiască sarcinile transfrontaliere în stil MT103 cu date structurate mai bogate.
- **Adrese structurate**: ghidul actual al pieței indică tranziția din noiembrie 2026 de la adresele poștale complet nestructurate.
- **Metoda serială și STP**: lanțurile bancă-la-bancă multi-etapă rămân importante, iar variantele de procesare directă rămân esențiale pentru eficiența operațională.

## Capacități operaționale

pacs008 oferă generare și validare bazate pe șabloane pe reviziile definițiilor de mesaje acceptate:

- compara versiunile
- testa regresiv actualizările de scheme
- consolida datele mesajelor de plată de ieșire înainte de lansare
- susține echipele de produs, operațiuni și migrare dintr-o singură bază de cod

