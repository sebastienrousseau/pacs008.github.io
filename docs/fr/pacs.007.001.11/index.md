---
title: pacs.007.001.11 — FI to FI Payment Reversal | Français
description: Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation d'un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l'agent instructeur d'origine.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nom ISO** | FIToFIPaymentReversalV11 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 11 |

## Présentation

Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation d'un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l'agent instructeur d'origine.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **TxInf** — Informations de transaction avec montant d'annulation et parties
- **OrgnlGrpInf** — Informations du groupe d'origine référençant le message source
- **RvslRsnInf** — Informations sur le motif d'annulation avec codes de raison structurés
- **OrgnlTxRef** — Référence de la transaction d'origine pour la traçabilité de bout en bout

## Contexte métier

- Initié lorsque l'expéditeur d'origine identifie une erreur avant ou après le règlement
- Utilisé dans les scénarios de fraude nécessitant une annulation rapide
- Prend en charge l'annulation totale et partielle des montants de paiement d'origine
- Porte des codes de raison d'annulation structurés pour le traitement en aval

## Contexte CBPR+ et schémas

- Se distingue du pacs.004 par la direction — l'annulation va de l'expéditeur vers le bénéficiaire, le retour va du bénéficiaire vers l'expéditeur
- CBPR+ exige l'appariement avec les identifiants du message d'origine pour le traitement automatisé
- Les codes de raison structurés remplacent les narratifs en texte libre des messages MT hérités
- De plus en plus utilisé dans les flux de rappel de paiement instantané et de prévention de la fraude

## Flux de message

L'agent instructeur (expéditeur d'origine) envoie pacs.007 à travers la chaîne de paiement pour annuler un paiement précédemment instruit. Chaque agent traite l'instruction d'annulation et ajuste le règlement en conséquence.

## Messages associés

- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report

