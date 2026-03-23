---
title: pacs.004.001.11 | Payment Return | pacs008
description: Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nom ISO** | PaymentReturnV11 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 11 |

## Présentation

Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 27 February 2025 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **TxInf** — Informations de transaction avec montant de retour et parties
- **OrgnlGrpInf** — Informations du groupe d'origine reliant au message source
- **RtrRsnInf** — Informations sur le motif de retour avec codes de raison structurés
- **OrgnlTxRef** — Référence de la transaction d'origine pour appariement et réconciliation

## Contexte métier

- Gère les retours post-règlement lorsque le compte du bénéficiaire ne peut être crédité
- Prend en charge les scénarios de rappel lorsque l'expéditeur demande le retour des fonds
- Porte des codes de raison de retour structurés pour la transparence réglementaire et opérationnelle
- S'applique aux retours de virements (pacs.008) et aux retours de prélèvements (pacs.003)

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création | Gère les retours post-règlement lorsque le compte du bénéficiaire ne peut être crédité |
| **TxInf** — Informations de transaction avec montant de retour et parties | Prend en charge les scénarios de rappel lorsque l'expéditeur demande le retour des fonds |
| **OrgnlGrpInf** — Informations du groupe d'origine reliant au message source | Porte des codes de raison de retour structurés pour la transparence réglementaire et opérationnelle |
| **RtrRsnInf** — Informations sur le motif de retour avec codes de raison structurés | S'applique aux retours de virements (pacs.008) et aux retours de prélèvements (pacs.003) |
| **OrgnlTxRef** — Référence de la transaction d'origine pour appariement et réconciliation | L'agent instruit envoie pacs.004 en retour à travers la chaîne de paiement pour restituer les fonds précédemment réglés. Chaque agent de la chaîne traite le retour et recrédite les comptes concernés. |

## Contexte CBPR+ et schémas

- Remplace le MT103 RETURN et la messagerie de retour par couverture
- Les codes de raison de retour sont normalisés et lisibles par machine selon ISO 20022
- CBPR+ exige les données complètes de référence de la transaction d'origine pour l'appariement
- Le suivi SWIFT gpi s'étend aux transactions de retour pour une visibilité de bout en bout

## Flux de message

L'agent instruit envoie pacs.004 en retour à travers la chaîne de paiement pour restituer les fonds précédemment réglés. Chaque agent de la chaîne traite le retour et recrédite les comptes concernés.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.004.001.11 | Implémentation actuelle dans pacs008 | S'aligne sur les modèles actuels pour les retours de paiement. |
| pacs.004.001.12-14 | Révisions ultérieures du catalogue | Review later return-message revisions when scheme upgrades or new counterparties are in scope. |

## Exemple XML commenté

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Commentaires sur les champs

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Reason-code quality is critical for downstream customer communication and operational routing.

## Comparer pacs.004 vs pacs.007

| Dimension | pacs.004.001.11 | Message de comparaison |
|---|---|---|
| Objectif principal | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Best fit | Post-settlement return handling | Recall, error, or fraud-driven reversal handling |

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.003.001.09`](/fr/pacs.003.001.09/) | FI to FI Customer Direct Debit | Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier. |
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | FI to FI Payment Status Report | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |

