---
title: "Questions fréquentes | pacs008"
description: "Questions courantes sur les messages pacs ISO 20022, la migration CBPR+, la sélection de messages, l'implémentation et le toolkit pacs008."
lang: fr-FR
lastUpdated: true
image: /logo.webp
---

# Questions fréquentes

Cette page répond aux questions courantes sur les messages pacs ISO 20022, leur fonctionnement conjoint et comment pacs008 aide les équipes à les implémenter.

## Generalites

### Qu'est-ce que ISO 20022 ?

ISO 20022 est la norme internationale de messagerie financiere. Elle definit un langage et un modele communs pour les messages de paiement echanges entre institutions financieres. Contrairement aux anciens formats tels que SWIFT MT, ISO 20022 repose sur XML et prend en charge des donnees plus riches et plus structurees pour les parties, les montants et les references.

### Que sont les messages pacs ?

La famille pacs (payments clearing and settlement) couvre l'ensemble des messages interbancaires de paiement :

- pacs.002 -- rapport de statut
- pacs.003 -- prelevement de clientele
- pacs.004 -- retour de paiement
- pacs.007 -- annulation de paiement
- pacs.008 -- virement de clientele
- pacs.009 -- virement entre institutions financieres
- pacs.010 -- prelevement entre institutions financieres
- pacs.028 -- demande de statut de paiement

Chaque message remplit un role precis dans le cycle de vie du paiement.

### En quoi les messages pacs different-ils des messages SWIFT MT ?

Les messages SWIFT MT utilisent un format plat a balises de champs (par ex. MT103 pour les virements de clientele). Les messages pacs utilisent un XML hierarchique avec des structures de donnees plus riches. Principales differences :

- Prise en charge de plusieurs transactions par message
- Identification structuree des parties (LEI, identifiants multiples)
- Adresses postales structurees
- Informations de remise structurees

Correspondance : MT103 equivaut a pacs.008, MT202 equivaut a pacs.009, et le texte de statut MT199 est remplace par pacs.002.

### Quelle est la relation entre les messages pain et pacs ?

Les messages pain (payment initiation) circulent entre le client et sa banque. Les messages pacs circulent entre les banques. Un pain.001 d'initiation de virement de la banque du debiteur devient une instruction interbancaire pacs.008. Les deux domaines partagent des elements de donnees communs mais desservent des parties differentes de la chaine de paiement.

## Selection des messages

### Quand utiliser pacs.008 ?

pacs.008 sert aux instructions de virement de clientele entre banques. Il transporte :

- les donnees des parties debiteur et creancier
- les montants et la devise
- les informations de remise
- les details de reglement

C'est le message principal pour l'envoi de paiements de clientele sur le reseau interbancaire, que ce soit au niveau national (SEPA) ou transfrontalier (CBPR+).

### Quand utiliser pacs.009 au lieu de pacs.008 ?

pacs.009 sert aux transferts de compte propre entre institutions, aux segments de financement et aux paiements de couverture. Contrairement a pacs.008, qui transporte un paiement de clientele pour le compte d'un debiteur, pacs.009 deplace des fonds entre banques pour leur propre compte. Dans les flux de couverture, pacs.009 assure le financement tandis que pacs.008 transporte l'instruction du client sur un chemin separe.

### Quelle est la difference entre pacs.004 et pacs.007 ?

- pacs.004 retourne les fonds regles depuis le cote recepteur a travers la chaine.
- pacs.007 annule un paiement depuis le cote emetteur d'origine vers l'avant de la chaine.

Utiliser pacs.004 lorsque la banque beneficiaire ne peut pas appliquer le credit apres le reglement. Utiliser pacs.007 lorsque l'emetteur decouvre une erreur, un doublon ou une fraude.

### Quand utiliser pacs.028 au lieu d'attendre pacs.002 ?

pacs.028 sert a demander activement le statut d'un paiement qui n'a pas recu de mise a jour pacs.002 dans les delais. pacs.002 est declenche par un evenement (l'agent recepteur l'envoie de maniere proactive), tandis que pacs.028 est declenche par une exception (l'agent instructeur le demande). Utiliser pacs.028 pour les mises a jour de paiement retardees, incertaines ou manquantes -- pas comme trafic de routine.

### A quoi sert pacs.003 ?

pacs.003 transporte les instructions de prelevement de clientele entre banques. L'agent du creancier l'envoie a l'agent du debiteur pour collecter les fonds. Caracteristiques :

- Reference de mandat obligatoire
- Prise en charge des schemas SEPA Core et B2B
- Non utilise pour les virements ni pour les prelevements de compte propre entre institutions

### A quoi sert pacs.010 ?

pacs.010 gere les prelevements entre institutions financieres sur leurs propres comptes. Cas d'usage :

- Frais de banque a banque
- Appels de marge
- Obligations similaires dans le cadre d'accords bilateraux

Non utilise pour les prelevements de clientele ni pour les virements.

## Structure des messages

### Qu'est-ce que le Group Header (GrpHdr) ?

Le Group Header apparait exactement une fois par message pacs. Il contient :

- MsgId -- identifiant du message
- CreDtTm -- horodatage de creation
- NbOfTxs -- nombre de transactions
- SttlmInf -- informations de reglement
- Montant total de reglement interbancaire (optionnel)
- Informations sur le type de paiement (optionnel)

Il identifie l'enveloppe du message, pas les transactions metier individuelles.

### Quels sont les identifiants de paiement dans pacs.008 ?

pacs.008 utilise cinq identifiants :

- MsgId -- identifie l'enveloppe du message, change a chaque saut
- InstrId -- reference point a point entre agents adjacents, peut changer a chaque saut
- EndToEndId -- defini par l'emetteur, ne doit etre modifie par aucun agent de la chaine
- TxId -- attribue par le premier agent instructeur, reste constant dans l'espace interbancaire
- UETR -- UUID qui reste inchange sur tous les segments pour le suivi de bout en bout

### Quelles methodes de reglement sont disponibles ?

Quatre methodes de reglement sont definies :

- CLRG -- reglement via un systeme de compensation (TARGET2, EURO1, CHIPS)
- INDA -- reglement dans les livres de l'agent instruit ou l'agent du debiteur detient un compte
- INGA -- reglement dans les livres de l'agent instructeur ou l'agent instruit detient un compte
- COVE -- reglement via un paiement de couverture separe porte par pacs.009

### Que signifient les codes de prise en charge des frais ?

Quatre codes definissent qui supporte les frais :

- DEBT -- tous les frais a la charge du debiteur (equivalent MT103 OUR)
- CRED -- tous les frais a la charge du creancier (equivalent BEN)
- SHAR -- frais partages entre les agents du debiteur et du creancier (equivalent SHA)
- SLEV -- frais selon les regles du niveau de service, obligatoire pour les virements SEPA

## CBPR+ et migration

### Qu'est-ce que CBPR+ ?

CBPR+ (Cross-Border Payments and Reporting Plus) est le programme de SWIFT pour l'adoption de ISO 20022 dans la messagerie de paiement transfrontaliere. En service depuis mars 2023, il remplace les messages MT par leurs equivalents pacs. Points cles :

- pacs.002 obligatoire pour toute communication de statut
- Donnees de parties plus riches et adresses structurees
- Suivi base sur UETR via gpi

### Qu'est-il advenu de la periode de coexistence MT/MX ?

La periode de coexistence pour les instructions de paiement transfrontalieres s'est terminee en novembre 2025. Depuis lors :

- Les messages CBPR+ doivent utiliser le format ISO 20022 (MX)
- Les services de traduction MT/MX ne sont plus disponibles pour les nouveaux flux
- Les banques doivent envoyer et recevoir des messages pacs natifs

### Quelle est l'echeance de novembre 2026 pour les adresses structurees ?

A partir de novembre 2026, SWIFT CBPR+ exige des adresses postales structurees dans les messages de paiement transfrontaliers. Les lignes d'adresse non structurees (AdrLine seul) ne seront plus acceptees pour les champs de parties cles. Exigences minimales :

- TwnNm et Ctry obligatoires
- StrtNm et BldgNb ou PstBx recommandes

Cela ameliore le filtrage des sanctions et reduit les reparations manuelles.

### Comment pacs.008 remplace-t-il MT103 ?

pacs.008 remplace MT103 et MT103+ pour les virements de clientele. Correspondance principale :

- Champ 20 → MsgId ou InstrId
- Champ 32A → IntrBkSttlmDt et IntrBkSttlmAmt
- Champ 50a → Dbtr et DbtrAcct
- Champ 59a → Cdtr et CdtrAcct
- Champ 70 → RmtInf
- Champ 71A → ChrgBr

pacs.008 ajoute UETR, la remise structuree, l'identification LEI, et prend en charge plusieurs transactions par message.

### Comment pacs.009 remplace-t-il MT202 ?

pacs.009 remplace MT202 et MT202COV pour les transferts entre institutions. Dans les flux de couverture, le MT202COV (qui transportait a la fois le financement et les donnees du client sous-jacent) se divise proprement :

- pacs.009 transporte le segment de financement
- pacs.008 transporte directement l'instruction du client

Cette separation ameliore la qualite des donnees et reduit les problemes de rapprochement.

## Details techniques

### Que sont les adresses structurees et non structurees ?

Les adresses structurees utilisent des elements XML distincts pour chaque composant :

- StrtNm -- rue
- BldgNb -- numero de batiment
- PstCd -- code postal
- TwnNm -- ville
- Ctry -- pays
- Elements optionnels : Flr, Room, DstrctNm

Les adresses non structurees utilisent jusqu'a sept elements AdrLine en texte libre. Les adresses hybrides combinent les deux pendant la periode de transition. Apres novembre 2026, CBPR+ exige le format structure.

### Qu'est-ce que UETR et comment fonctionne le suivi gpi ?

UETR (Unique End-to-End Transaction Reference) est un identifiant UUID v4 genere par l'agent du debiteur et transporte sans modification sur tous les segments d'un paiement. Il apparait dans :

- pacs.008, pacs.009, pacs.002
- pacs.004, pacs.007, pacs.028

SWIFT gpi utilise le UETR pour suivre les paiements via une base de donnees Tracker dans le cloud. Chaque agent confirme la reception et le traitement, permettant une visibilite de bout en bout et un suivi des SLA.

### Quels sont les codes de statut courants dans pacs.002 ?

Codes de statut principaux :

- ACCP -- accepte apres verifications du profil client
- ACSP -- accepte, reglement en cours
- ACSC -- reglement sur le compte du debiteur termine
- RJCT -- rejete (avec un code de motif dans StsRsnInf)
- PDNG -- en attente de traitement ulterieur
- RCVD -- recu mais pas encore traite

Chaque statut peut inclure un code de motif structure tel que AC01 (numero de compte incorrect), AM04 (fonds insuffisants) ou RC01 (BIC incorrect).

### Quels sont les codes de motif de retour courants dans pacs.004 ?

Codes de motif de retour frequents :

- AC01 -- numero de compte incorrect
- AC04 -- compte cloture
- AC06 -- compte bloque
- AM04 -- fonds insuffisants
- BE04 -- adresse du creancier manquante
- CUST -- demande par le client
- DUPL -- paiement en double
- FOCR -- suite a une demande d'annulation
- FR01 -- fraude

La liste complete est definie dans les External Code Sets de ISO 20022.

### Qu'est-ce que l'information de remise structuree ?

La remise structuree dans pacs.008 utilise l'element RmtInf/Strd pour transporter :

- References de documents (numeros de facture, notes de credit)
- Montants (du, remis, taxe, remise)
- References creancier (references RF selon ISO 11649)

Cela permet la correspondance automatisee des factures et le rapprochement. Codes de type de document courants :

- CINV -- facture commerciale
- CREN -- note de credit
- SOAC -- releve de compte

### Qu'est-ce que LEI et quand est-il utilise ?

LEI (Legal Entity Identifier) est un code alphanumerique de 20 caracteres selon ISO 17442. Il identifie de maniere unique les entites juridiques participant aux transactions financieres. Dans les messages pacs :

- OrgId/LEI -- identification des parties
- FinInstnId/LEI -- identification des agents

CBPR+ encourage de plus en plus l'utilisation de LEI pour l'identification des parties et des agents. Il ameliore la desambiguisation des entites et repond aux exigences de reporting reglementaire.

## A propos du toolkit pacs008

### Que fait pacs008 ?

pacs008 est un toolkit Python qui genere, valide et expedie des messages de paiement ISO 20022. Fonctionnalites :

- Lecture des donnees de paiement a partir de sources CSV, JSON, JSONL, SQLite et Parquet
- Validation selon JSON Schema et XSD
- Verification des identifiants IBAN et BIC
- Nettoyage des donnees pour la conformite aux caracteres SWIFT
- Production de fichiers XML

Trois interfaces disponibles : API REST, CLI et bibliotheque Python.

### Quels types de messages pacs008 prend-il en charge ?

pacs008 prend en charge huit types de messages :

- pacs.002.001.12 -- rapport de statut
- pacs.003.001.09 -- prelevement de clientele
- pacs.004.001.11 -- retour de paiement
- pacs.007.001.11 -- annulation de paiement
- pacs.008.001.13 -- virement de clientele
- pacs.009.001.10 -- virement entre institutions financieres
- pacs.010.001.05 -- prelevement entre institutions financieres
- pacs.028.001.05 -- demande de statut de paiement

### Comment pacs008 aide-t-il avec l'echeance de novembre 2026 pour les adresses structurees ?

pacs008 valide les champs d'adresse postale structuree et hybride avant la generation XML :

- Signalement des donnees d'adresse non structurees qui echoueraient apres l'echeance de novembre 2026
- Prise en charge des formats hybrides avant l'echeance et des formats exclusivement structures apres l'echeance
- Integration des controles de qualite d'adresse dans les pipelines CI et les workflows de validation par lots

### pacs008 peut-il valider les donnees sans generer de XML ?

Oui. Utiliser le flag CLI `--dry-run` ou le point de terminaison API `POST /validate` pour valider les donnees de paiement sans generer de XML. Le pipeline de validation verifie :

- Conformite JSON Schema
- Format et somme de controle IBAN
- Structure BIC
- Conformite aux caracteres SWIFT

Le code de sortie ou la reponse API indique si la validation a reussi ou echoue.

## References

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

