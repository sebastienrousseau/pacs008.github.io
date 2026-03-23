---
title: pacs.028.001.05 | Demande de statut de paiement FI à FI | pacs008
description: Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Demande de statut de paiement FI à FI

| | |
|---|---|
| **Nom ISO** | FIToFIPaymentStatusRequestV05 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 5 |

## Présentation

Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **TxInf** — Informations de transaction identifiant le paiement à interroger
- **OrgnlGrpInf** — Informations du groupe d'origine référençant le message source
- **OrgnlInstrId** — Identification de l'instruction d'origine du paiement source
- **OrgnlEndToEndId** — Identification de bout en bout d'origine pour la traçabilité

## Contexte métier

- Permet l'interrogation proactive du statut pour les instructions de paiement en transit
- Aide les équipes d'opérations à enquêter sur les paiements retardés ou manquants
- Complète pacs.002 en initiant la communication de statut plutôt que d'attendre
- Utilisé dans les flux de gestion d'exceptions et de surveillance des SLA

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création | Permet l'interrogation proactive du statut pour les instructions de paiement en transit |
| **TxInf** — Informations de transaction identifiant le paiement à interroger | Aide les équipes d'opérations à enquêter sur les paiements retardés ou manquants |
| **OrgnlGrpInf** — Informations du groupe d'origine référençant le message source | Complète pacs.002 en initiant la communication de statut plutôt que d'attendre |
| **OrgnlInstrId** — Identification de l'instruction d'origine du paiement source | Utilisé dans les flux de gestion d'exceptions et de surveillance des SLA |
| **OrgnlEndToEndId** — Identification de bout en bout d'origine pour la traçabilité | L'agent instructeur envoie pacs.028 à l'agent instruit pour demander le statut d'un paiement spécifique. L'agent instruit répond avec un pacs.002 contenant le statut de traitement actuel. |

## Contexte CBPR+ et schémas

- Remplace les modèles d'interrogation de statut MT199 et les requêtes manuelles de messages SWIFT
- CBPR+ prend en charge les demandes de statut structurées liées aux identifiants de message d'origine
- Le suivi basé sur l'UETR via gpi réduit le besoin d'interrogations manuelles
- De plus en plus intégré dans les tableaux de bord automatisés d'opérations de paiement

## Flux de message

L'agent instructeur envoie pacs.028 à l'agent instruit pour demander le statut d'un paiement spécifique. L'agent instruit répond avec un pacs.002 contenant le statut de traitement actuel.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.028.001.05 | Implémentation actuelle dans pacs008 | Adapté à la modélisation actuelle des demandes de statut. |
| pacs.028.001.06 | Révision ultérieure du catalogue | Consultez la version plus récente du catalogue pour la planification future de l'interopérabilité. |

## Exemple XML commenté

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Commentaires sur les champs

- `MsgId`: La demande elle-même a besoin d'un identifiant traçable distinct du paiement sous-jacent.
- `OrgnlInstrId`: Utilisez l'identifiant source exact de l'instruction d'origine afin de maximiser la précision du rapprochement.
- `OrgnlEndToEndId`: Inclure une traçabilité côté client aide les équipes opérations à rapprocher la demande plus rapidement.

## Comparer pacs.028 vs pacs.002

| Dimension | pacs.028.001.05 | Message de comparaison |
|---|---|---|
| Objectif principal | Request status | Report status |
| Qui initie l'interaction | L'établissement qui demande le statut | L'établissement qui envoie le statut |
| Posture opérationnelle | Demande pilotée par exception | Reporting déclenché par événement |
| Hypothèse erronée à éviter | Qu'il devrait être envoyé de façon routinière pour chaque paiement | Qu'il supprime le besoin d'une gestion proactive des cas |

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | Rapport de statut de paiement FI à FI | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | Virement client FI à FI | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Virement entre institutions financières | Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité. |

