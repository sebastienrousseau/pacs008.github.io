---
title: Types de messages | Français
description: Définitions et versions de messages pacs ISO 20022 prises en charge.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# Types de messages

Pacs008 couvre la définition de message pacs.008 principale et les messages liés utilisés dans les flux d'orchestration et de rapprochement.

## Prise en charge incluse

- `pacs.002.001.12`
- `pacs.003.001.09`
- `pacs.004.001.11`
- `pacs.007.001.11`
- `pacs.008.001.01`
- `pacs.008.001.02`
- `pacs.008.001.03`
- `pacs.008.001.04`
- `pacs.008.001.05`
- `pacs.008.001.06`
- `pacs.008.001.07`
- `pacs.008.001.08`
- `pacs.008.001.09`
- `pacs.008.001.10`
- `pacs.008.001.11`
- `pacs.008.001.12`
- `pacs.008.001.13`
- `pacs.009.001.10`
- `pacs.010.001.05`
- `pacs.028.001.05`

## Mode de livraison

Chaque type de message pris en charge repose sur des modèles et une logique de validation afin de normaliser la génération et les tests de régression.

## Contexte de marché 2026

- **SEPA SCT / SCT Inst** : pacs.008 reste central pour l'échange de virements et le traitement des paiements instantanés.
- **CBPR+** : pacs.008 continue de remplacer les charges MT103 transfrontalières par des données structurées plus riches.
- **Adresses structurées** : les orientations actuelles du marché indiquent la bascule de novembre 2026 abandonnant les adresses postales entièrement non structurées.
- **Méthode série et STP** : les chaînes banque à banque multi-étapes restent importantes, et les variantes de traitement direct demeurent essentielles pour l'efficacité opérationnelle.

## Capacités opérationnelles

Pacs008 fournit une génération et une validation appuyées par des modèles à travers les révisions de définitions de messages prises en charge :

- comparer les versions
- tester en régression les mises à jour de schémas
- renforcer les données de messages de paiement sortants avant publication
- accompagner les équipes produit, opérations et migration depuis une seule base de code

