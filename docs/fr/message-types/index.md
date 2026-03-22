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

| Type de message | Description |
|---|---|
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/fr/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/fr/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/fr/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/fr/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/fr/pacs.028.001.05/) | FI to FI Payment Status Request |

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

