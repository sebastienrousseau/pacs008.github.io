---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nom ISO** | FIToFIPaymentStatusReportV12 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 12 |

## Présentation

Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 27 February 2025 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **OrgnlGrpInfAndSts** — Informations et statut du groupe d'origine pour le reporting en masse
- **TxInfAndSts** — Informations et statut de la transaction pour les résultats individuels
- **StsRsnInf** — Informations sur le motif du statut avec codes de raison structurés
- **OrgnlTxRef** — Référence de la transaction d'origine reliant à l'instruction source

## Contexte métier

- Utilisé pour confirmer le règlement ou signaler le rejet de virements, prélèvements et retours de paiement
- Permet la réconciliation entre agents instructeurs et instruits
- Requis dans les flux CBPR+ pour accuser réception du traitement des messages pacs.008 et pacs.009
- Prend en charge le reporting de statut au niveau du groupe et au niveau des transactions individuelles

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création | Utilisé pour confirmer le règlement ou signaler le rejet de virements, prélèvements et retours de paiement |
| **OrgnlGrpInfAndSts** — Informations et statut du groupe d'origine pour le reporting en masse | Permet la réconciliation entre agents instructeurs et instruits |
| **TxInfAndSts** — Informations et statut de la transaction pour les résultats individuels | Requis dans les flux CBPR+ pour accuser réception du traitement des messages pacs.008 et pacs.009 |
| **StsRsnInf** — Informations sur le motif du statut avec codes de raison structurés | Prend en charge le reporting de statut au niveau du groupe et au niveau des transactions individuelles |
| **OrgnlTxRef** — Référence de la transaction d'origine reliant à l'instruction source | L'agent instruit (récepteur) envoie pacs.002 à l'agent instructeur (émetteur) pour confirmer l'acceptation, le règlement ou le rejet d'une instruction de paiement reçue telle que pacs.008 ou pacs.009. |

## Contexte CBPR+ et schémas

- Remplace les narratifs de statut MT199 et du champ 79 dans les messages MT
- CBPR+ impose pacs.002 pour toute communication de statut de paiement
- Les codes de raison structurés remplacent les explications de rejet en texte libre
- L'intégration du suivi SWIFT gpi nécessite pacs.002 pour la transparence de bout en bout

## Flux de message

L'agent instruit (récepteur) envoie pacs.002 à l'agent instructeur (émetteur) pour confirmer l'acceptation, le règlement ou le rejet d'une instruction de paiement reçue telle que pacs.008 ou pacs.009.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.002.001.12 | Implémentation actuelle dans pacs008 | À utiliser lorsque vous travaillez avec les modèles et artefacts de validation actuellement pris en charge par le projet. |
| pacs.002.001.13-15 | Révisions ultérieures du catalogue | Review later ISO revisions before starting new interoperability work or onboarding new infrastructures. |

## Exemple XML commenté

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Commentaires sur les champs

- `MsgId`: Use a new identifier for the status report itself, not the original payment instruction.
- `OrgnlInstrId`: Keep the original instruction identifier intact so status can be matched automatically.
- `TxSts`: This is the operational state; map it carefully to internal workflow states rather than assuming a one-to-one match.
- `StsRsnInf`: Structured reason codes are far more useful than free text for repair and analytics.

## Comparer pacs.002 vs pacs.028

| Dimension | pacs.002.001.12 | Message de comparaison |
|---|---|---|
| Objectif principal | Report status | Request status |
| Who starts the interaction | The institution sending the status | The institution asking for status |
| Operational posture | Event-driven reporting | Exception-driven enquiry |
| Hypothèse erronée à éviter | That status reporting replaces investigation workflows | That every payment needs an explicit status request |

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Financial Institution Credit Transfer | Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité. |
| [`pacs.028.001.05`](/fr/pacs.028.001.05/) | FI to FI Payment Status Request | Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité. |

