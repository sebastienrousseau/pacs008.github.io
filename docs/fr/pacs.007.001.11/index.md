---
title: pacs.007.001.11 | Annulation de paiement FI à FI | pacs008
description: Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Annulation de paiement FI à FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nom ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Statut d&#39;enregistrement</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Année</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Présentation

Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation d'un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l'agent instructeur d'origine.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

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
          <td class="operational-matrix-table__right">Initié lorsque l&#39;expéditeur d&#39;origine identifie une erreur avant ou après le règlement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informations de transaction avec montant d&#39;annulation et parties</td>
          <td class="operational-matrix-table__right">Utilisé dans les scénarios de fraude nécessitant une annulation rapide</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informations du groupe d&#39;origine référençant le message source</td>
          <td class="operational-matrix-table__right">Prend en charge l&#39;annulation totale et partielle des montants de paiement d&#39;origine</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informations sur le motif d&#39;annulation avec codes de raison structurés</td>
          <td class="operational-matrix-table__right">Porte des codes de raison d&#39;annulation structurés pour le traitement en aval</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Référence de la transaction d&#39;origine pour la traçabilité de bout en bout</td>
          <td class="operational-matrix-table__right">L&#39;agent instructeur (expéditeur d&#39;origine) envoie pacs.007 à travers la chaîne de paiement pour annuler un paiement précédemment instruit. Chaque agent traite l&#39;instruction d&#39;annulation et ajuste le règlement en conséquence.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Se distingue du pacs.004 par la direction — l'annulation va de l'expéditeur vers le bénéficiaire, le retour va du bénéficiaire vers l'expéditeur
- CBPR+ exige l'appariement avec les identifiants du message d'origine pour le traitement automatisé
- Les codes de raison structurés remplacent les narratifs en texte libre des messages MT hérités
- De plus en plus utilisé dans les flux de rappel de paiement instantané et de prévention de la fraude

## Flux de message

L'agent instructeur (expéditeur d'origine) envoie pacs.007 à travers la chaîne de paiement pour annuler un paiement précédemment instruit. Chaque agent traite l'instruction d'annulation et ajuste le règlement en conséquence.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">Bonne base pour modéliser les processus d&#39;annulation.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Révisions ultérieures du catalogue</td>
          <td class="version-diff-table__takeaway">Check later revisions for current market-infrastructure alignment.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Conservez la référence de paiement d'origine pour éviter les ruptures de rapprochement.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Comparer pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Comparer pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.007.001.11</th>
        <th>Message de comparaison</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objectif principal</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Le plus adapté à</td>
          <td class="message-comparison-table__current">Gestion des annulations liées à un recall, à une erreur ou à une fraude</td>
          <td class="message-comparison-table__other">Gestion des retours après règlement</td>
        </tr>
    </tbody>
  </table>
</div>

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/fr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retour de paiement</td>
          <td class="related-messages-table__overview">Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu&#39;un paiement ne peut être appliqué, a été envoyé par erreur ou fait l&#39;objet d&#39;un rappel par l&#39;institution d&#39;origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
    </tbody>
  </table>
</div>

