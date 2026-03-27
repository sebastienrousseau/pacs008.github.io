---
title: "Politica editorială | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: ro-RO
lastUpdated: true
image: /logo.webp
---

# Politica editorială

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [Catalogul definițiilor de mesaje ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) pentru specificațiile mesajelor și istoricul versiunilor.
- [Ghidul de utilizare SWIFT CBPR+](https://www.swift.com/standards/iso-20022) pentru contextul plăților transfrontaliere.
- [Regulamentul SEPA de transferuri de credit al EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) pentru regulile transferurilor de credit în euro.
- [Regulamentul SEPA de transferuri de credit instantanee al EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) pentru regulile plăților instantanee.

## Procesul de revizuire a conținutului

Fiecare pagină de pe pacs008.com trece printr-o revizuire structurată înainte de publicare. Conținutul nou pornește de la o ciornă bazată pe surse primare. Ciorna este verificată din punct de vedere tehnic față de catalogul de mesaje ISO 20022 și documentația de schemă relevantă.

După revizuirea inițială, conținutul trece printr-un control structural pentru a asigura coerența cu paginile existente. Navigația, referințele încrucișate și terminologia sunt standardizate pe întreg site-ul. Data de revizuire afișată pe fiecare pagină de mesaj reflectă cea mai recentă verificare față de sursele primare.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Acuratețe tehnică

Conținutul tehnic respectă definițiile de mesaje ISO 20022 așa cum sunt publicate în catalogul oficial. Numele câmpurilor, tipurile de date și regulile de cardinalitate corespund schemelor XSD ale fiecărei versiuni de mesaj. Când utilizarea specifică schemei diferă de standardul de bază, documentația schemei relevante este citată direct.

Exemplele de cod din documentația API sunt testate cu versiunea curentă a toolkitului pacs008. Comenzile CLI, endpointurile API și metodele bibliotecii Python reflectă pachetul publicat pe PyPI. Exemplele sunt actualizate la fiecare nouă versiune pentru a rămâne sincronizate cu toolkitul.

## Metodologia de traducere

pacs008.com este disponibil în 22 de limbi. Tot conținutul este creat în limba engleză. Paginile traduse sunt generate din materialul sursă în limba engleză revizuit cu ajutorul unui script de construcție care păstrează structura paginii, ierarhia titlurilor și destinațiile linkurilor în toate versiunile lingvistice.

Termenii tehnici, identificatorii ISO și codurile standard nu sunt traduși pentru a evita ambiguitatea. Termeni precum pacs.008.001.13, BIC, IBAN și CBPR+ apar în forma lor standard în fiecare limbă. Conținutul non-tehnic este tradus pentru a suna natural în fiecare limbă țintă. Traducerile sunt verificate pentru coerență structurală și regenerate atunci când materialul sursă în limba engleză se modifică.

## Frecvența actualizărilor

Conținutul este actualizat ca răspuns la trei factori declanșatori. Primul, atunci când ISO 20022 publică o nouă versiune a catalogului de mesaje care afectează definițiile mesajelor pacs. Al doilea, atunci când SWIFT publică ghiduri CBPR+ actualizate sau noi termene de migrare. Al treilea, atunci când EPC actualizează regulamentele de transferuri de credit sau de transferuri de credit instantanee SEPA.

Toolkitul pacs008 respectă versionarea semantică. Fiecare nouă versiune este reflectată în documentația API și în jurnalul de modificări. Site-ul este reconstruit și redeploiat la fiecare actualizare de conținut sau a toolkitului.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
