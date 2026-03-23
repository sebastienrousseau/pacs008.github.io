---
title: Ghid de selecție a mesajelor | pacs008
description: Alegeți mesajul pacs ISO 20022 potrivit pentru generare, raportare de status, retururi, reversări și interogări.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Ghid de selecție a mesajelor

Alegeți familia pacs mai întâi după evenimentul de business, apoi după schemă și modelul operațional.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026 folosind materiale publice ISO 20022, EPC și Swift menționate pe această pagină.

## Matrice rapidă de decizie

| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | Raport de stare a plății FI-la-FI | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |
| [`pacs.003.001.09`](/ro/pacs.003.001.09/) | Debit direct de client FI-la-FI | Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului. |
| [`pacs.004.001.11`](/ro/pacs.004.001.11/) | Retur de plată | Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare. |
| [`pacs.007.001.11`](/ro/pacs.007.001.11/) | Reversare de plată FI-la-FI | Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original. |
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | Transfer de credit client FI-la-FI | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.009.001.10`](/ro/pacs.009.001.10/) | Transfer de credit între instituții financiare | Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității. |
| [`pacs.010.001.05`](/ro/pacs.010.001.05/) | Debit direct între instituții financiare | Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții. |
| [`pacs.028.001.05`](/ro/pacs.028.001.05/) | Cerere de stare a plății FI-la-FI | Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat. |

## Puncte comune de comparație

| Comparație | Diferență cheie |
|---|---|
| `pacs.008` vs `pacs.009` | Plată de client versus mișcare instituțională sau de acoperire |
| `pacs.004` vs `pacs.007` | Retur din partea destinatarului versus reversare din partea inițiatorului |
| `pacs.002` vs `pacs.028` | Raport de status versus solicitare de status |

## Pagini de mesaje acceptate

- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — Raport de stare a plății FI-la-FI
- [`pacs.003.001.09`](/ro/pacs.003.001.09/) — Debit direct de client FI-la-FI
- [`pacs.004.001.11`](/ro/pacs.004.001.11/) — Retur de plată
- [`pacs.007.001.11`](/ro/pacs.007.001.11/) — Reversare de plată FI-la-FI
- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — Transfer de credit client FI-la-FI
- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Transfer de credit între instituții financiare
- [`pacs.010.001.05`](/ro/pacs.010.001.05/) — Debit direct între instituții financiare
- [`pacs.028.001.05`](/ro/pacs.028.001.05/) — Cerere de stare a plății FI-la-FI

