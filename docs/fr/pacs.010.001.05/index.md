---
title: pacs.010.001.05 | Prélèvement entre institutions financières | pacs008
description: Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Prélèvement entre institutions financières

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Présentation

Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une institution de collecter des fonds directement depuis le compte d'une autre institution.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement
- **DrctDbtTxInf** — Informations de transaction de prélèvement avec montant de collecte
- **Cdtr / CdtrAgt** — Institution créancière et identification de son agent
- **Dbtr / DbtrAgt** — Institution débitrice et identification de son agent
- **IntrBkSttlmAmt** — Montant de règlement interbancaire dans la devise de règlement

## Contexte métier

- Prend en charge la collecte de prélèvement interbancaire entre institutions financières
- Utilisé pour la collecte de frais, les appels de marge et les obligations de règlement institutionnel
- Nécessite des arrangements bilatéraux préétablis entre institutions participantes
- Essentiel pour la gestion de trésorerie institutionnelle et les cycles de règlement interbancaire

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — En-tête de groupe avec identification du message et informations de règlement</td>
          <td class="operational-matrix-table__right">Prend en charge la collecte de prélèvement interbancaire entre institutions financières</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informations de transaction de prélèvement avec montant de collecte</td>
          <td class="operational-matrix-table__right">Utilisé pour la collecte de frais, les appels de marge et les obligations de règlement institutionnel</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Institution créancière et identification de son agent</td>
          <td class="operational-matrix-table__right">Nécessite des arrangements bilatéraux préétablis entre institutions participantes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Institution débitrice et identification de son agent</td>
          <td class="operational-matrix-table__right">Essentiel pour la gestion de trésorerie institutionnelle et les cycles de règlement interbancaire</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Montant de règlement interbancaire dans la devise de règlement</td>
          <td class="operational-matrix-table__right">L&#39;institution créancière envoie pacs.010 à l&#39;institution débitrice pour collecter des fonds selon un accord préétabli. L&#39;institution débitrice valide la demande et règle ou rejette le prélèvement.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Remplace des éléments du MT204 pour le traitement des prélèvements interbancaires
- L'identification structurée des parties suit les mêmes exigences que les autres messages pacs
- La validation des identifiants institutionnels (BIC, LEI) est obligatoire
- Inclus dans les feuilles de route d'adoption complète ISO 20022 à travers les infrastructures de marché

## Flux de message

L'institution créancière envoie pacs.010 à l'institution débitrice pour collecter des fonds selon un accord préétabli. L'institution débitrice valide la demande et règle ou rejette le prélèvement.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">Point de référence pour la prise en charge des prélèvements d&#39;institution dans le projet actuel.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Révision ultérieure du catalogue</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemple XML commenté

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Commentaires sur les champs

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Les montants de prélèvement interbancaire nécessitent souvent des contrôles bilatéraux explicites de tolérance.
- `Cdtr` / `Dbtr`: Définissez clairement les rôles des établissements ; il ne s'agit pas d'un modèle de débit pour clientèle de détail.

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/fr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Virement entre institutions financières</td>
          <td class="related-messages-table__overview">Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l&#39;institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Prélèvement client FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.</td>
        </tr>
    </tbody>
  </table>
</div>

