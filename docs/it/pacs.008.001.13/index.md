---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nome ISO** | FIToFICustomerCreditTransferV13 |
| **Stato di registrazione** | Registered |
| **Anno** | 2023 |
| **Versione** | 13 |

## Panoramica

Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 27 February 2025; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con ID messaggio, data di creazione, numero di transazioni e informazioni di regolamento
- **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo, commissioni e finalità
- **Dbtr / DbtrAgt** — Identificazione del debitore e dell'agente del debitore con dettagli del conto
- **Cdtr / CdtrAgt** — Identificazione del creditore e dell'agente del creditore con dettagli del conto
- **RmtInf** — Informazioni di rimessa per riferimenti di pagamento strutturati o non strutturati

## Contesto di business

- Il messaggio principale per bonifici transfrontalieri e domestici avviati dal cliente
- Utilizzato attraverso SEPA SCT, SEPA Instant, CBPR+ e i sistemi di compensazione nazionali
- Trasporta informazioni di rimessa strutturate per supportare la riconciliazione automatica
- Supporta metodi di regolamento seriale, copertura e diretto per catene di pagamento multi-tratta

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con ID messaggio, data di creazione, numero di transazioni e informazioni di regolamento | Il messaggio principale per bonifici transfrontalieri e domestici avviati dal cliente |
| **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo, commissioni e finalità | Utilizzato attraverso SEPA SCT, SEPA Instant, CBPR+ e i sistemi di compensazione nazionali |
| **Dbtr / DbtrAgt** — Identificazione del debitore e dell'agente del debitore con dettagli del conto | Trasporta informazioni di rimessa strutturate per supportare la riconciliazione automatica |
| **Cdtr / CdtrAgt** — Identificazione del creditore e dell'agente del creditore con dettagli del conto | Supporta metodi di regolamento seriale, copertura e diretto per catene di pagamento multi-tratta |
| **RmtInf** — Informazioni di rimessa per riferimenti di pagamento strutturati o non strutturati | L'agente del debitore crea un pacs.008 e lo invia all'agente del creditore (direttamente o tramite intermediari). Ogni agente nella catena convalida, arricchisce e inoltra l'istruzione fino a quando l'agente del creditore accredita il conto del beneficiario. |

## Contesto CBPR+ e schemi

- Sostituisce MT103 e MT103+ per i bonifici transfrontalieri della clientela
- La scadenza per gli indirizzi strutturati di novembre 2026 si applica a tutti gli indirizzi postali delle parti
- SWIFT gpi richiede pacs.008 per il tracciamento end-to-end basato su UETR
- 13 revisioni riflettono l'evoluzione continua dello schema attraverso le infrastrutture di mercato

## Flusso del messaggio

L'agente del debitore crea un pacs.008 e lo invia all'agente del creditore (direttamente o tramite intermediari). Ogni agente nella catena convalida, arricchisce e inoltra l'istruzione fino a quando l'agente del creditore accredita il conto del beneficiario.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.008.001.01-07 | Revisioni iniziali | Utile soprattutto per l'analisi delle migrazioni legacy e per il contesto storico delle versioni. |
| pacs.008.001.08-12 | Revisioni moderne precedenti a quella attuale | Sono le revisioni che più probabilmente compariranno nei recenti progetti di migrazione o coesistenza. |
| pacs.008.001.13 | Revisione attuale del catalogo | Da usare per pianificare sulla versione corrente, continuando però a verificare regole di schema e prontezza delle controparti. |

## Esempio XML commentato

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Commenti sui campi

- `MsgId`: This should identify the message envelope, not the end-customer payment reference.
- `EndToEndId`: Keep customer-facing traceability stable across downstream systems where possible.
- `UETR`: Use this consistently in cross-border and tracking-heavy environments; do not generate it ad hoc in later workflow stages.
- `IntrBkSttlmAmt`: Validate amount and currency using business rules before schema validation.
- `Dbtr` / `Cdtr`: Party quality, address structure, and identifiers are usually the main determinants of repair rates.

## Confrontare pacs.008 vs pacs.009

| Dimensione | pacs.008.001.13 | Messaggio di confronto |
|---|---|---|
| Scopo principale | Trasferimento di credito cliente | Trasferimento di credito su conto proprio dell'istituto o gamba di copertura |
| Responsabile di business | Operazioni di pagamenti clienti | Operazioni di tesoreria, correspondent banking e funding |
| Abbinamenti tipici | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Assunzione errata da evitare | That all bank-to-bank transfers belong here | That it can replace customer credit-transfer instructions |

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Versioni supportate

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

## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | FI to FI Payment Status Report | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |
| [`pacs.004.001.11`](/it/pacs.004.001.11/) | Payment Return | Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine. |
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Financial Institution Credit Transfer | Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità. |

