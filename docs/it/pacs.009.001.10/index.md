---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionCreditTransferV10 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 10 |

## Panoramica

Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 27 February 2025; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo di regolamento interbancario
- **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente
- **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente
- **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento

## Contesto di business

- Utilizzato per trasferimenti bancari su conto proprio e pagamenti di copertura
- Supporta la gestione della liquidità tra partner di corrispondenza bancaria
- Trasporta la tratta di copertura dei bonifici della clientela regolati con metodo copertura
- Consente operazioni di tesoreria e finanziamento tra istituti finanziari

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento | Utilizzato per trasferimenti bancari su conto proprio e pagamenti di copertura |
| **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo di regolamento interbancario | Supporta la gestione della liquidità tra partner di corrispondenza bancaria |
| **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente | Trasporta la tratta di copertura dei bonifici della clientela regolati con metodo copertura |
| **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente | Consente operazioni di tesoreria e finanziamento tra istituti finanziari |
| **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento | L'istituto debitore invia pacs.009 all'istituto creditore per trasferire i propri fondi. Per i pagamenti con metodo copertura, pacs.009 fornisce la tratta di finanziamento mentre pacs.008 trasporta l'istruzione del cliente attraverso un percorso separato. |

## Contesto CBPR+ e schemi

- Sostituisce MT202 e MT202COV per i trasferimenti tra istituti
- I flussi con metodo copertura associano pacs.009 all'istruzione cliente pacs.008 sottostante
- Dati strutturati sulle parti e identificazione LEI sempre più richiesti
- SWIFT gpi copre pacs.009 per la trasparenza nella corrispondenza bancaria

## Flusso del messaggio

L'istituto debitore invia pacs.009 all'istituto creditore per trasferire i propri fondi. Per i pagamenti con metodo copertura, pacs.009 fornisce la tratta di finanziamento mentre pacs.008 trasporta l'istruzione del cliente attraverso un percorso separato.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.009.001.10 | Implementazione attuale in pacs008 | Corrisponde al supporto attuale del progetto per i flussi di trasferimento di credito FI. |
| pacs.009.001.11-12 | Revisioni successive del catalogo | Importante per la pianificazione della roadmap in ambienti di correspondent banking e pagamenti cover. |

## Esempio XML commentato

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Commenti sui campi

- `InstrId`: Usare un identificatore della gamba di funding che possa restare collegato al flusso cliente sottostante.
- `IntrBkSttlmAmt`: I flussi su conto proprio e di copertura richiedono spesso controlli di tesoreria più rigorosi su importi e date di regolamento.
- `Dbtr` / `Cdtr`: Si tratta di parti istituzionali, non di ruoli cliente retail; vanno modellate di conseguenza.

## Confrontare pacs.009 vs pacs.008

| Dimensione | pacs.009.001.10 | Messaggio di confronto |
|---|---|---|
| Scopo principale | Trasferimento di credito su conto proprio dell'istituto o gamba di copertura | Trasferimento di credito cliente |
| Responsabile di business | Operazioni di tesoreria, correspondent banking e funding | Operazioni di pagamenti clienti |
| Abbinamenti tipici | pacs.002, pacs.004 e flussi pacs.008 collegati | pacs.002, pacs.004, pacs.007, pacs.028 |
| Assunzione errata da evitare | Che sia semplicemente una pacs.008 più tecnica | Che possa gestire senza problemi flussi di funding tra istituti |

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | FI to FI Payment Status Report | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |
| [`pacs.010.001.05`](/it/pacs.010.001.05/) | Financial Institution Direct Debit | Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto. |

