---
title: "Politica editoriale | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: it-IT
lastUpdated: true
image: /logo.webp
---

# Politica editoriale

This page explains how content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [Catalogo delle definizioni dei messaggi ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) per le specifiche dei messaggi e la cronologia delle versioni.
- [Linee guida sull'utilizzo SWIFT CBPR+](https://www.swift.com/standards/iso-20022) per il contesto dei pagamenti transfrontalieri.
- [Regolamento SEPA bonifici del EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) per le regole sui bonifici in euro.
- [Regolamento SEPA bonifici istantanei del EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) per le regole sui pagamenti istantanei.

## Processo di revisione dei contenuti

Ogni pagina di pacs008.com è sottoposta a una revisione strutturata prima della pubblicazione. I nuovi contenuti partono da una bozza basata sulle fonti primarie. La bozza viene verificata dal punto di vista tecnico rispetto al catalogo dei messaggi ISO 20022 e alla documentazione dello schema pertinente. Numeri di versione, identificativi di registrazione e definizioni dei campi vengono confrontati con le voci ufficiali del catalogo.

Dopo la revisione iniziale, il contenuto viene sottoposto a un controllo strutturale per garantire la coerenza con le pagine esistenti. Navigazione, riferimenti incrociati e terminologia sono standardizzati su tutto il sito. La data di revisione mostrata in ogni pagina di messaggio riflette la verifica più recente rispetto alle fonti primarie.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Accuratezza tecnica

Il contenuto tecnico segue le definizioni dei messaggi ISO 20022 pubblicate nel catalogo ufficiale. Nomi dei campi, tipi di dati e regole di cardinalità corrispondono agli schemi XSD di ciascuna versione di messaggio. Quando l'utilizzo specifico dello schema differisce dallo standard di base, la documentazione dello schema pertinente viene citata direttamente.

Gli esempi di codice nella documentazione dell'API sono testati rispetto alla versione corrente del toolkit pacs008. Comandi CLI, endpoint dell'API e metodi della libreria Python riflettono il pacchetto pubblicato su PyPI. Gli esempi vengono aggiornati a ogni nuova versione per restare sincronizzati con il toolkit.

## Metodologia di traduzione

pacs008.com è disponibile in 22 lingue. Tutti i contenuti vengono creati in inglese. Le pagine tradotte sono generate dal materiale sorgente inglese revisionato tramite uno script di build che preserva struttura della pagina, gerarchia dei titoli e destinazioni dei link in tutte le versioni linguistiche.

I termini tecnici, gli identificativi ISO e i codici standard non vengono tradotti per evitare ambiguità. Termini quali pacs.008.001.13, BIC, IBAN e CBPR+ compaiono nella loro forma standard in ogni lingua. Il contenuto non tecnico viene tradotto per risultare naturale in ciascuna lingua di destinazione. Le traduzioni vengono controllate per coerenza strutturale e rigenerate quando il materiale sorgente in inglese cambia.

## Frequenza di aggiornamento

I contenuti vengono aggiornati in risposta a tre fattori. Primo, quando ISO 20022 pubblica una nuova versione del catalogo dei messaggi che influisce sulle definizioni dei messaggi pacs. Secondo, quando SWIFT rilascia linee guida CBPR+ aggiornate o nuove scadenze di migrazione. Terzo, quando il EPC aggiorna i regolamenti dei bonifici o dei bonifici istantanei SEPA.

Il toolkit pacs008 segue il versionamento semantico. Ogni nuova versione si riflette nella documentazione dell'API e nel registro delle modifiche. Il sito viene ricostruito e ridistribuito a ogni aggiornamento dei contenuti o del toolkit.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
