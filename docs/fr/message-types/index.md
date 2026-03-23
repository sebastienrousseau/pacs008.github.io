---
title: Types de messages | pacs008 ISO 20022
description: Définitions et versions de messages pacs ISO 20022 prises en charge. Génération, validation, orchestration d'API et conformité pour les flux de virement...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# Types de messages

pacs008 couvre la définition de message pacs.008 principale et les messages liés utilisés dans les flux d'orchestration et de rapprochement.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026 à l'aide des documents publics ISO 20022, EPC et Swift référencés sur cette page.

## Prise en charge incluse

| Type de message | Description | Version | Année | Présentation |
|---|---|---|---|---|
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | Rapport de statut de paiement FI à FI | `pacs.002.001.12` | 2019 | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |
| [`pacs.003.001.09`](/fr/pacs.003.001.09/) | Prélèvement client FI à FI | `pacs.003.001.09` | 2019 | Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier. |
| [`pacs.004.001.11`](/fr/pacs.004.001.11/) | Retour de paiement | `pacs.004.001.11` | 2019 | Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine. |
| [`pacs.007.001.11`](/fr/pacs.007.001.11/) | Annulation de paiement FI à FI | `pacs.007.001.11` | 2019 | Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation d'un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l'agent instructeur d'origine. |
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | Virement client FI à FI | `pacs.008.001.13` | 2023 | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Virement entre institutions financières | `pacs.009.001.10` | 2019 | Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité. |
| [`pacs.010.001.05`](/fr/pacs.010.001.05/) | Prélèvement entre institutions financières | `pacs.010.001.05` | 2019 | Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une institution de collecter des fonds directement depuis le compte d'une autre institution. |
| [`pacs.028.001.05`](/fr/pacs.028.001.05/) | Demande de statut de paiement FI à FI | `pacs.028.001.05` | 2019 | Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité. |

## Mode de livraison

Chaque type de message pris en charge repose sur des modèles et une logique de validation afin de normaliser la génération et les tests de régression.

## Choisir le bon message

Le catalogue de messages est surtout utile lorsque les équipes doivent décider quel message initie l'action, lequel rapporte le statut et lequel corrige ou annule le flux.

Voir le [guide de sélection des messages](/fr/message-selection/) pour une vue de décision synthétique sur les flux pacs pris en charge.


## Contexte de marché 2026

- **SEPA SCT / SCT Inst** : pacs.008 reste central pour l'échange de virements et le traitement des paiements instantanés.
- **CBPR+** : pacs.008 continue de remplacer les charges MT103 transfrontalières par des données structurées plus riches.
- **Adresses structurées** : les orientations actuelles du marché indiquent la bascule de novembre 2026 abandonnant les adresses postales entièrement non structurées.
- **Méthode série et STP** : les chaînes banque à banque multi-étapes restent importantes, et les variantes de traitement direct demeurent essentielles pour l'efficacité opérationnelle.

## Capacités opérationnelles

pacs008 fournit une génération et une validation appuyées par des modèles à travers les révisions de définitions de messages prises en charge :

- comparer les versions
- tester en régression les mises à jour de schémas
- renforcer les données de messages de paiement sortants avant publication
- accompagner les équipes produit, opérations et migration depuis une seule base de code

