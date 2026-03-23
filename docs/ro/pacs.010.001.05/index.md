---
title: pacs.010.001.05 | Debit direct între instituții financiare | pacs008
description: Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Debit direct între instituții financiare

| | |
|---|---|
| **Nume ISO** | FinancialInstitutionDirectDebitV05 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 5 |

## Prezentare generală

Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

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

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare | Suportă colectarea interbancară prin debitare directă între instituții financiare |
| **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu suma de colectare | Utilizat pentru colectarea comisioanelor, apelurile în marjă și obligațiile de decontare instituționale |
| **Cdtr / CdtrAgt** — Identificarea instituției creditoare și a agentului acesteia | Necesită acorduri bilaterale prestabilite între instituțiile participante |
| **Dbtr / DbtrAgt** — Identificarea instituției debitoare și a agentului acesteia | Esențial pentru gestionarea numerarului instituțional și ciclurile de decontare interbancară |
| **IntrBkSttlmAmt** — Suma de decontare interbancară în moneda de decontare | Instituția creditoare trimite pacs.010 instituției debitoare pentru a colecta fonduri în baza unui acord prestabilit. Instituția debitoare validează cererea și decontează sau respinge debitarea directă. |

## Context CBPR+ și scheme de plată

- Înlocuiește elemente ale MT204 pentru procesarea debitărilor directe interbancare
- Identificarea structurată a părților urmează aceleași cerințe ca și celelalte mesaje pacs
- Validarea identificatorilor instituționali (BIC, LEI) este obligatorie
- Inclus în foile de parcurs pentru adoptarea completă a ISO 20022 în infrastructurile de piață

## Fluxul mesajului

Instituția creditoare trimite pacs.010 instituției debitoare pentru a colecta fonduri în baza unui acord prestabilit. Instituția debitoare validează cererea și decontează sau respinge debitarea directă.

## Tabelul diferențelor de versiune

| Interval de versiuni | De ce contează | Concluzie de implementare |
|---|---|---|
| pacs.010.001.05 | Implementarea curentă în pacs008 | Punct de referință pentru suportul debitării directe între instituții în proiectul actual. |
| pacs.010.001.06 | Revizie ulterioară a catalogului | Revizuiește înainte de a adopta cerințe mai noi de infrastructură. |

## Exemplu XML comentat

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Comentarii pe câmpuri

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Sumele de debit direct între instituții necesită adesea controale bilaterale explicite de toleranță.
- `Cdtr` / `Dbtr`: Descrie clar rolurile instituționale; acesta nu este un model de debit pentru clienți retail.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.009.001.10`](/ro/pacs.009.001.10/) | Transfer de credit între instituții financiare | Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității. |
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | Raport de stare a plății FI-la-FI | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |
| [`pacs.003.001.09`](/ro/pacs.003.001.09/) | Debit direct de client FI-la-FI | Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului. |

