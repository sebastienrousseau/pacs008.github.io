---
title: Guide de sélection des messages | pacs008
description: Choisissez le message pacs ISO 20022 adapté à la génération, aux statuts, aux retours, aux annulations et aux demandes.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# Guide de sélection des messages

Choisissez la famille pacs d'abord selon l'événement métier, puis selon le schéma et le modèle d'exploitation.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026 à l'aide des documents publics ISO 20022, EPC et Swift référencés sur cette page.

## Matrice de décision rapide

| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | Rapport de statut de paiement FI à FI | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |
| [`pacs.003.001.09`](/fr/pacs.003.001.09/) | Prélèvement client FI à FI | Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier. |
| [`pacs.004.001.11`](/fr/pacs.004.001.11/) | Retour de paiement | Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine. |
| [`pacs.007.001.11`](/fr/pacs.007.001.11/) | Annulation de paiement FI à FI | Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation d'un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l'agent instructeur d'origine. |
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | Virement client FI à FI | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Virement entre institutions financières | Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité. |
| [`pacs.010.001.05`](/fr/pacs.010.001.05/) | Prélèvement entre institutions financières | Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une institution de collecter des fonds directement depuis le compte d'une autre institution. |
| [`pacs.028.001.05`](/fr/pacs.028.001.05/) | Demande de statut de paiement FI à FI | Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité. |

## Points de comparaison courants

| Comparer | Différence clé |
|---|---|
| `pacs.008` vs `pacs.009` | Paiement client versus mouvement d'institution ou de couverture |
| `pacs.004` vs `pacs.007` | Retour côté bénéficiaire versus annulation côté émetteur |
| `pacs.002` vs `pacs.028` | Rapport de statut versus demande de statut |

## Pages de messages prises en charge

- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — Rapport de statut de paiement FI à FI
- [`pacs.003.001.09`](/fr/pacs.003.001.09/) — Prélèvement client FI à FI
- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Retour de paiement
- [`pacs.007.001.11`](/fr/pacs.007.001.11/) — Annulation de paiement FI à FI
- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — Virement client FI à FI
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Virement entre institutions financières
- [`pacs.010.001.05`](/fr/pacs.010.001.05/) — Prélèvement entre institutions financières
- [`pacs.028.001.05`](/fr/pacs.028.001.05/) — Demande de statut de paiement FI à FI

