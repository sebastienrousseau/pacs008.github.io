---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation...
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

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 27 February 2025 ; les liens vers les sources figurent ci-dessous.

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

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création | Initié lorsque l'expéditeur d'origine identifie une erreur avant ou après le règlement |
| **TxInf** — Informations de transaction avec montant d'annulation et parties | Utilisé dans les scénarios de fraude nécessitant une annulation rapide |
| **OrgnlGrpInf** — Informations du groupe d'origine référençant le message source | Prend en charge l'annulation totale et partielle des montants de paiement d'origine |
| **RvslRsnInf** — Informations sur le motif d'annulation avec codes de raison structurés | Porte des codes de raison d'annulation structurés pour le traitement en aval |
| **OrgnlTxRef** — Référence de la transaction d'origine pour la traçabilité de bout en bout | L'agent instructeur (expéditeur d'origine) envoie pacs.007 à travers la chaîne de paiement pour annuler un paiement précédemment instruit. Chaque agent traite l'instruction d'annulation et ajuste le règlement en conséquence. |

## Contexte CBPR+ et schémas

- Se distingue du pacs.004 par la direction — l'annulation va de l'expéditeur vers le bénéficiaire, le retour va du bénéficiaire vers l'expéditeur
- CBPR+ exige l'appariement avec les identifiants du message d'origine pour le traitement automatisé
- Les codes de raison structurés remplacent les narratifs en texte libre des messages MT hérités
- De plus en plus utilisé dans les flux de rappel de paiement instantané et de prévention de la fraude

## Flux de message

L'agent instructeur (expéditeur d'origine) envoie pacs.007 à travers la chaîne de paiement pour annuler un paiement précédemment instruit. Chaque agent traite l'instruction d'annulation et ajuste le règlement en conséquence.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.007.001.11 | Implémentation actuelle dans pacs008 | Bonne base pour modéliser les workflows de reversal. |
| pacs.007.001.12-13 | Révisions ultérieures du catalogue | Check later revisions for current market-infrastructure alignment. |

## Exemple XML commenté

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Commentaires sur les champs

- `MsgId`: The reversal itself needs its own audit-safe identifier.
- `OrgnlInstrId`: Preserve the original payment reference to avoid reconciliation breaks.
- `RvslRsnInf`: Use structured reversal reasons so fraud, error, and duplicate-payment cases can be routed differently.

## Comparer pacs.007 vs pacs.004

| Dimension | pacs.007.001.11 | Message de comparaison |
|---|---|---|
| Objectif principal | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| Best fit | Recall, error, or fraud-driven reversal handling | Post-settlement return handling |

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.004.001.11`](/fr/pacs.004.001.11/) | Payment Return | Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine. |
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | FI to FI Payment Status Report | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |

