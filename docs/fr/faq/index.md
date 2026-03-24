---
title: "Questions fréquentes | pacs008"
description: "Questions courantes sur les messages pacs ISO 20022, la migration CBPR+, la sélection de messages, l'implémentation et le toolkit pacs008."
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# Questions fréquentes

Cette page répond aux questions courantes sur les messages pacs ISO 20022, leur fonctionnement conjoint et comment pacs008 aide les équipes à les implémenter.

## Généralités

### Qu'est-ce que ISO 20022 ?

ISO 20022 est une norme internationale de messagerie financière. Elle définit un langage et un modèle communs pour les messages de paiement échangés entre institutions financières. Contrairement aux anciens formats tels que SWIFT MT, ISO 20022 utilise XML et prend en charge des données plus riches et plus structurées pour les parties, les montants et les références.

### Que sont les messages pacs ?

La famille de messages pacs (payments clearing and settlement) couvre les instructions de paiement interbancaires, les rapports de statut, les retours, les annulations et les demandes de renseignements. Elle inclut pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 et pacs.028. Chaque message remplit un rôle spécifique dans le cycle de vie du paiement.

### En quoi les messages pacs diffèrent-ils des messages SWIFT MT ?

Les messages SWIFT MT utilisent un format plat à balises de champs (par ex. MT103 pour les virements de clientèle). Les messages pacs utilisent un XML hiérarchique avec des structures de données plus riches. Les différences principales incluent la prise en charge de plusieurs transactions par message, l'identification structurée des parties (LEI, identifiants multiples), les adresses postales structurées et les informations de remise structurées. MT103 correspond à pacs.008, MT202 correspond à pacs.009, et le texte de statut MT199 est remplacé par pacs.002.

### Quelle est la relation entre les messages pain et pacs ?

Les messages pain (payment initiation) circulent entre le client et sa banque. Les messages pacs circulent entre les banques. Un pain.001 d'initiation de virement de la banque du débiteur devient une instruction interbancaire pacs.008. Les deux domaines partagent des éléments de données communs mais desservent des parties différentes de la chaîne de paiement.

## Sélection des messages

### Quand dois-je utiliser pacs.008 ?

Utilisez pacs.008 pour les instructions de virement de clientèle entre banques. Il transporte les données des parties débiteur et créancier, les montants, les informations de remise et les détails de règlement. C'est le message principal pour l'envoi de paiements de clientèle sur le réseau interbancaire, que ce soit au niveau national (SEPA) ou transfrontalier (CBPR+).

### Quand dois-je utiliser pacs.009 au lieu de pacs.008 ?

Utilisez pacs.009 pour les transferts de compte propre entre institutions, les segments de financement et les paiements de couverture. Contrairement à pacs.008, qui transporte un paiement de clientèle pour le compte d'un débiteur, pacs.009 déplace des fonds entre banques pour leur propre compte. Dans les flux de couverture, pacs.009 assure le financement tandis que pacs.008 transporte l'instruction du client sur un chemin séparé.

### Quelle est la différence entre pacs.004 et pacs.007 ?

pacs.004 retourne les fonds réglés depuis le côté récepteur à travers la chaîne. pacs.007 annule un paiement depuis le côté émetteur d'origine vers l'avant de la chaîne. Utilisez pacs.004 lorsque la banque bénéficiaire ne peut pas appliquer le crédit après le règlement. Utilisez pacs.007 lorsque l'émetteur découvre une erreur, un doublon ou une fraude.

### Quand dois-je utiliser pacs.028 au lieu d'attendre pacs.002 ?

Utilisez pacs.028 lorsque vous devez demander activement le statut d'un paiement qui n'a pas reçu de mise à jour pacs.002 dans les délais. pacs.002 est déclenché par un événement (l'agent récepteur l'envoie de manière proactive), tandis que pacs.028 est déclenché par une exception (l'agent instructeur le demande). Utilisez pacs.028 pour les mises à jour de paiement retardées, incertaines ou manquantes, pas comme trafic de routine.

### À quoi sert pacs.003 ?

pacs.003 transporte les instructions de prélèvement de clientèle entre banques. L'agent du créancier l'envoie à l'agent du débiteur pour collecter les fonds. Il nécessite une référence de mandat valide et prend en charge les schémas de prélèvement SEPA Core et B2B. Il n'est pas utilisé pour les virements ni pour les prélèvements de compte propre entre institutions.

### À quoi sert pacs.010 ?

pacs.010 gère les prélèvements entre institutions financières sur leurs propres comptes. Il est utilisé pour les encaissements de banque à banque tels que les frais, les appels de marge et les obligations similaires dans le cadre d'accords bilatéraux. Il n'est pas utilisé pour les prélèvements de clientèle ni pour les virements.

## Structure des messages

### Qu'est-ce que le Group Header (GrpHdr) ?

Le Group Header apparaît exactement une fois par message pacs. Il contient l'identifiant du message (MsgId), l'horodatage de création (CreDtTm), le nombre de transactions (NbOfTxs), les informations de règlement (SttlmInf), et éventuellement le montant total de règlement interbancaire et les informations sur le type de paiement. Il identifie l'enveloppe du message, pas les transactions métier individuelles.

### Quels sont les identifiants de paiement dans pacs.008 ?

pacs.008 utilise quatre identifiants principaux. MsgId identifie l'enveloppe du message et change à chaque saut. InstrId est une référence point à point entre agents adjacents et peut changer à chaque saut. EndToEndId est défini par l'émetteur et ne doit être modifié par aucun agent de la chaîne. TxId est attribué par le premier agent instructeur et reste constant dans l'espace interbancaire. UETR est un UUID qui reste inchangé sur tous les segments pour le suivi de bout en bout.

### Quelles méthodes de règlement sont disponibles ?

Quatre méthodes de règlement sont définies. CLRG règle via un système de compensation tel que TARGET2, EURO1 ou CHIPS. INDA règle dans les livres de l'agent instruit où l'agent du débiteur détient un compte. INGA règle dans les livres de l'agent instructeur où l'agent instruit détient un compte. COVE règle via un paiement de couverture séparé porté par pacs.009.

### Que signifient les codes de prise en charge des frais ?

DEBT signifie que tous les frais sont à la charge du débiteur (équivalent MT103 OUR). CRED signifie que tous les frais sont à la charge du créancier (équivalent BEN). SHAR signifie que les frais sont partagés entre les agents du débiteur et du créancier (équivalent SHA). SLEV signifie que les frais suivent les règles du niveau de service et est obligatoire pour les virements SEPA.

## CBPR+ et migration

### Qu'est-ce que CBPR+ ?

CBPR+ (Cross-Border Payments and Reporting Plus) est le programme de SWIFT pour l'adoption de ISO 20022 dans la messagerie de paiement transfrontalière. Il est entré en service en mars 2023 et remplace les messages MT par leurs équivalents pacs. CBPR+ impose pacs.002 pour toute communication de statut, prend en charge des données de parties plus riches et des adresses structurées, et utilise le suivi basé sur UETR via gpi.

### Qu'est-il advenu de la période de coexistence MT/MX ?

La période de coexistence pour les instructions de paiement transfrontalières s'est terminée en novembre 2025. Depuis lors, les messages CBPR+ doivent utiliser le format ISO 20022 (MX). Les services de traduction qui convertissaient entre MT et MX pendant la transition ne sont plus disponibles pour les nouveaux flux. Les banques doivent désormais envoyer et recevoir des messages pacs natifs.

### Quelle est l'échéance de novembre 2026 pour les adresses structurées ?

À partir de novembre 2026, SWIFT CBPR+ exige des adresses postales structurées dans les messages de paiement transfrontaliers. Les lignes d'adresse non structurées (AdrLine seul) ne seront plus acceptées pour les champs de parties clés. Au minimum, TwnNm et Ctry sont requis, avec StrtNm et BldgNb ou PstBx recommandés. Cela améliore le filtrage des sanctions et réduit les réparations manuelles.

### Comment pacs.008 remplace-t-il MT103 ?

pacs.008 remplace MT103 et MT103+ pour les virements de clientèle. Correspondance principale : le champ 20 de MT103 correspond à MsgId ou InstrId ; le champ 32A se divise en IntrBkSttlmDt et IntrBkSttlmAmt ; le champ 50a correspond à Dbtr et DbtrAcct ; le champ 59a correspond à Cdtr et CdtrAcct ; le champ 70 correspond à RmtInf ; le champ 71A correspond à ChrgBr. pacs.008 ajoute UETR, la remise structurée, l'identification LEI, et prend en charge plusieurs transactions par message.

### Comment pacs.009 remplace-t-il MT202 ?

pacs.009 remplace MT202 et MT202COV pour les transferts entre institutions. Dans les flux de couverture, le MT202COV (qui transportait à la fois le financement et les données du client sous-jacent) se divise proprement : pacs.009 transporte le segment de financement tandis que pacs.008 transporte directement l'instruction du client. Cette séparation améliore la qualité des données et réduit les problèmes de rapprochement.

## Détails techniques

### Que sont les adresses structurées et non structurées ?

Les adresses structurées utilisent des éléments XML distincts pour chaque composant : StrtNm (rue), BldgNb (numéro de bâtiment), PstCd (code postal), TwnNm (ville), Ctry (pays), et des éléments optionnels comme Flr, Room et DstrctNm. Les adresses non structurées utilisent jusqu'à sept éléments AdrLine en texte libre. Les adresses hybrides combinent les deux pendant la période de transition. Après novembre 2026, CBPR+ exige le format structuré.

### Qu'est-ce que UETR et comment fonctionne le suivi gpi ?

UETR (Unique End-to-End Transaction Reference) est un identifiant UUID v4 généré par l'agent du débiteur et transporté sans modification sur tous les segments d'un paiement. Il apparaît dans pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 et pacs.028. SWIFT gpi utilise le UETR pour suivre les paiements via une base de données Tracker dans le cloud. Chaque agent confirme la réception et le traitement, permettant une visibilité de bout en bout et un suivi des SLA.

### Quels sont les codes de statut courants dans pacs.002 ?

ACCP signifie accepté après vérifications du profil client. ACSP signifie accepté et le règlement est en cours. ACSC signifie que le règlement sur le compte du débiteur est terminé. RJCT signifie rejeté (avec un code de motif dans StsRsnInf). PDNG signifie en attente de traitement ultérieur. RCVD signifie reçu mais pas encore traité. Chaque statut peut inclure un code de motif structuré tel que AC01 (numéro de compte incorrect), AM04 (fonds insuffisants) ou RC01 (BIC incorrect).

### Quels sont les codes de motif de retour courants dans pacs.004 ?

Les codes de motif de retour fréquents incluent AC01 (numéro de compte incorrect), AC04 (compte clôturé), AC06 (compte bloqué), AM04 (fonds insuffisants), BE04 (adresse du créancier manquante), CUST (demandé par le client), DUPL (paiement en double), FOCR (suite à une demande d'annulation) et FR01 (fraude). La liste complète est définie dans les External Code Sets de ISO 20022.

### Qu'est-ce que l'information de remise structurée ?

La remise structurée dans pacs.008 utilise l'élément RmtInf/Strd pour transporter des références de documents (numéros de facture, notes de crédit), des montants (dû, remis, taxe, remise), et des références créancier (références RF selon ISO 11649). Cela permet la correspondance automatisée des factures et le rapprochement. Les codes de type de document courants incluent CINV (facture commerciale), CREN (note de crédit) et SOAC (relevé de compte).

### Qu'est-ce que LEI et quand est-il utilisé ?

LEI (Legal Entity Identifier) est un code alphanumérique de 20 caractères selon ISO 17442. Il identifie de manière unique les entités juridiques participant aux transactions financières. Dans les messages pacs, LEI apparaît dans OrgId/LEI pour les parties et FinInstnId/LEI pour les agents. CBPR+ encourage de plus en plus l'utilisation de LEI pour l'identification des parties et des agents. Il améliore la désambiguïsation des entités et répond aux exigences de reporting réglementaire.

## À propos du toolkit pacs008

### Que fait pacs008 ?

pacs008 est un toolkit Python qui génère, valide et expédie des messages de paiement ISO 20022. Il lit les données de paiement à partir de sources CSV, JSON, JSONL, SQLite et Parquet, valide selon JSON Schema et XSD, vérifie les identifiants IBAN et BIC, nettoie les données pour la conformité aux caractères SWIFT, et produit des fichiers XML. Il fournit une API REST, un CLI et une bibliothèque Python.

### Quels types de messages pacs008 prend-il en charge ?

pacs008 prend en charge huit types de messages : pacs.002.001.12 (rapport de statut), pacs.003.001.09 (prélèvement de clientèle), pacs.004.001.11 (retour de paiement), pacs.007.001.11 (annulation de paiement), pacs.008.001.13 (virement de clientèle), pacs.009.001.10 (virement entre institutions financières), pacs.010.001.05 (prélèvement entre institutions financières) et pacs.028.001.05 (demande de statut de paiement).

### Comment pacs008 aide-t-il avec l'échéance de novembre 2026 pour les adresses structurées ?

pacs008 valide les champs d'adresse postale structurée et hybride avant la génération XML. Il signale les données d'adresse non structurées qui échoueraient après l'échéance de novembre 2026, prend en charge les formats hybrides avant l'échéance et les formats exclusivement structurés après l'échéance, et intègre les contrôles de qualité d'adresse dans les pipelines CI et les workflows de validation par lots.

### pacs008 peut-il valider les données sans générer de XML ?

Oui. Utilisez le flag CLI `--dry-run` ou le point de terminaison API `POST /validate` pour valider les données de paiement sans générer de XML. Le pipeline de validation vérifie la conformité JSON Schema, le format et la somme de contrôle IBAN, la structure BIC et la conformité aux caractères SWIFT. Le code de sortie ou la réponse API indique si la validation a réussi ou échoué.

## Références

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

