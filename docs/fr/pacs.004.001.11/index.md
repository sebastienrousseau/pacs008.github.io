---
title: pacs.004.001.11 | Retour de paiement | pacs008
description: Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Retour de paiement

| | |
|---|---|
| **Nom ISO** | PaymentReturnV11 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 11 |

## Présentation

Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

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

<div class="operational-matrix-table" tabindex="0" aria-label="Éléments de données clés Contexte métier">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Éléments de données clés</th>
        <th>Contexte métier</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — En-tête de groupe avec identification du message et horodatage de création</td>
          <td class="operational-matrix-table__right">Gère les retours post-règlement lorsque le compte du bénéficiaire ne peut être crédité</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informations de transaction avec montant de retour et parties</td>
          <td class="operational-matrix-table__right">Prend en charge les scénarios de rappel lorsque l&#39;expéditeur demande le retour des fonds</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informations du groupe d&#39;origine reliant au message source</td>
          <td class="operational-matrix-table__right">Porte des codes de raison de retour structurés pour la transparence réglementaire et opérationnelle</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informations sur le motif de retour avec codes de raison structurés</td>
          <td class="operational-matrix-table__right">S&#39;applique aux retours de virements (pacs.008) et aux retours de prélèvements (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Référence de la transaction d&#39;origine pour appariement et réconciliation</td>
          <td class="operational-matrix-table__right">L&#39;agent instruit envoie pacs.004 en retour à travers la chaîne de paiement pour restituer les fonds précédemment réglés. Chaque agent de la chaîne traite le retour et recrédite les comptes concernés.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Remplace le MT103 RETURN et la messagerie de retour par couverture
- Les codes de raison de retour sont normalisés et lisibles par machine selon ISO 20022
- CBPR+ exige les données complètes de référence de la transaction d'origine pour l'appariement
- Le suivi SWIFT gpi s'étend aux transactions de retour pour une visibilité de bout en bout

## Flux de message

L'agent instruit envoie pacs.004 en retour à travers la chaîne de paiement pour restituer les fonds précédemment réglés. Chaque agent de la chaîne traite le retour et recrédite les comptes concernés.

## Tableau des écarts de version

<div class="version-diff-table" tabindex="0" aria-label="Tableau des écarts de version">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Plage de versions</th>
        <th>Pourquoi c&#39;est important</th>
        <th>Conséquence pratique</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">S&#39;aligne sur les modèles actuels pour les retours de paiement.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Révisions ultérieures du catalogue</td>
          <td class="version-diff-table__takeaway">Examinez les révisions ultérieures des messages de retour lorsque des mises à jour de schéma ou de nouvelles contreparties entrent dans le périmètre.</td>
        </tr>
    </tbody>
  </table>
</div>

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
- `RtrRsnInf`: La qualité des codes motif est essentielle pour la communication client en aval et l'aiguillage opérationnel.

## Comparer pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Comparer pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.004.001.11</th>
        <th>Message de comparaison</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objectif principal</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Le plus adapté à</td>
          <td class="message-comparison-table__current">Gestion des retours après règlement</td>
          <td class="message-comparison-table__other">Gestion des annulations liées à un recall, à une erreur ou à une fraude</td>
        </tr>
    </tbody>
  </table>
</div>

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Messages associés
<div class="related-messages-table" tabindex="0" aria-label="Messages associés">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Type de message</th>
        <th>Description</th>
        <th>Présentation</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Virement client FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.008 est l&#39;instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d&#39;un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Prélèvement client FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
    </tbody>
  </table>
</div>

