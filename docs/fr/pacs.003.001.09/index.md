---
title: "pacs.003.001.09 | Prélèvement client FI à FI | pacs008"
description: Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de...
lang: fr-FR
lastUpdated: true
image: /logo.svg
faq:
  - question: "Est-ce que pacs.003 est le miroir débit direct de pacs.008 ?"
    answer: "Non. Il gère les flux de débit direct client, qui ont des règles de mandat, de calendrier et d'exception différentes."
  - question: "Qu'est-ce qui compte le plus opérationnellement ?"
    answer: "La qualité du mandat, les règles de compte débiteur et le traitement des retours comptent plus que la génération XML."
---

# pacs.003.001.09 — Prélèvement client FI à FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Champ</th>
        <th scope="col">Valeur</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nom ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Présentation

Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement
- **DrctDbtTxInf** — Informations de transaction de prélèvement avec montant et parties
- **Cdtr** — Identification et coordonnées du compte du créancier
- **CdtrAgt** — Identification de l'agent du créancier (institution collectrice)
- **DbtrAgt** — Identification de l'agent du débiteur (institution payeuse)

## Contexte métier

- Prend en charge les schémas SEPA Core et B2B de prélèvement
- Utilisé pour la collecte de paiements récurrents tels que les abonnements, factures et remboursements de prêts
- Nécessite une référence de mandat valide entre débiteur et créancier
- Permet la collecte en masse de plusieurs instructions de prélèvement dans un seul message

<div class="operational-matrix-table" tabindex="0" aria-label="Éléments de données clés Contexte métier">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — En-tête de groupe avec identification du message et informations de règlement</td>
          <td class="operational-matrix-table__right">Prend en charge les schémas SEPA Core et B2B de prélèvement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informations de transaction de prélèvement avec montant et parties</td>
          <td class="operational-matrix-table__right">Utilisé pour la collecte de paiements récurrents tels que les abonnements, factures et remboursements de prêts</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identification et coordonnées du compte du créancier</td>
          <td class="operational-matrix-table__right">Nécessite une référence de mandat valide entre débiteur et créancier</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identification de l&#39;agent du créancier (institution collectrice)</td>
          <td class="operational-matrix-table__right">Permet la collecte en masse de plusieurs instructions de prélèvement dans un seul message</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identification de l&#39;agent du débiteur (institution payeuse)</td>
          <td class="operational-matrix-table__right">L&#39;agent du créancier initie pacs.003 vers l&#39;agent du débiteur pour collecter des fonds. L&#39;agent du débiteur valide le mandat, vérifie la couverture du compte et règle ou retourne la transaction.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Les exigences d'adresse structurée et d'identification des parties s'appliquent également aux prélèvements
- Les données relatives au mandat doivent être entièrement structurées à partir de novembre 2026
- Remplace les formats de prélèvement de type MT104 dans les flux transfrontaliers
- La validation de l'identification du schéma créancier est de plus en plus appliquée

## Flux de message

L'agent du créancier initie pacs.003 vers l'agent du débiteur pour collecter des fonds. L'agent du débiteur valide le mandat, vérifie la couverture du compte et règle ou retourne la transaction.

## Tableau des écarts de version

<div class="version-diff-table" tabindex="0" aria-label="Tableau des écarts de version">
  <table>
    <caption>Tableau des écarts de version</caption>
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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">Utile pour la modélisation de références de prélèvement dans le projet actuel.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Révisions ultérieures du catalogue</td>
          <td class="version-diff-table__takeaway">Examinez les révisions ultérieures pour les évolutions de mandat, de statut et d&#39;interopérabilité avant toute nouvelle mise en oeuvre.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemple XML commenté

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Commentaires sur les champs

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: La réussite d'un prélèvement dépend souvent davantage de la qualité du compte et du mandat que de la structure XML.

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/fr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retour de paiement</td>
          <td class="related-messages-table__overview">Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu&#39;un paiement ne peut être appliqué, a été envoyé par erreur ou fait l&#39;objet d&#39;un rappel par l&#39;institution d&#39;origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Annulation de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n&#39;a pas encore été réglée ou pour demander l&#39;annulation d&#39;un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l&#39;agent instructeur d&#39;origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
    </tbody>
  </table>
</div>

