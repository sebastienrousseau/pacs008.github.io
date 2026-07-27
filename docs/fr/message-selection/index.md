---
title: "Guide de sélection des messages | pacs008"
description: Choisissez le message pacs ISO 20022 adapté à la génération, aux statuts, aux retours, aux annulations et aux demandes.
lang: fr-FR
lastUpdated: true
image: /logo.webp
---

# Guide de sélection des messages

Choisissez la famille pacs d'abord selon l'événement métier, puis selon le schéma et le modèle d'exploitation.

## Matrice de décision rapide

<div class="decision-matrix-table" tabindex="0" aria-label="Matrice de décision rapide">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="decision-matrix-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Prélèvement client FI à FI</td>
          <td class="decision-matrix-table__overview">Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Retour de paiement</td>
          <td class="decision-matrix-table__overview">Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu&#39;un paiement ne peut être appliqué, a été envoyé par erreur ou fait l&#39;objet d&#39;un rappel par l&#39;institution d&#39;origine.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Annulation de paiement FI à FI</td>
          <td class="decision-matrix-table__overview">Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n&#39;a pas encore été réglée ou pour demander l&#39;annulation d&#39;un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l&#39;agent instructeur d&#39;origine.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Virement client FI à FI</td>
          <td class="decision-matrix-table__overview">Le message pacs.008 est l&#39;instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d&#39;un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Virement entre institutions financières</td>
          <td class="decision-matrix-table__overview">Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l&#39;institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Prélèvement entre institutions financières</td>
          <td class="decision-matrix-table__overview">Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l&#39;institution. Il permet à une institution de collecter des fonds directement depuis le compte d&#39;une autre institution.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/fr/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Demande de statut de paiement FI à FI</td>
          <td class="decision-matrix-table__overview">Le message pacs.028 est envoyé par une institution financière pour demander le statut d&#39;une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.</td>
        </tr>
    </tbody>
  </table>
</div>

## Points de comparaison courants

<div class="comparison-points-table" tabindex="0" aria-label="Points de comparaison courants">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Comparer</th>
        <th>Différence clé</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Paiement client versus mouvement d&#39;institution ou de couverture</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Retour côté bénéficiaire versus annulation côté émetteur</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Rapport de statut versus demande de statut</td>
        </tr>
    </tbody>
  </table>
</div>

## Pages de messages prises en charge

- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — Rapport de statut de paiement FI à FI
- [`pacs.003.001.09`](/fr/pacs.003.001.09/) — Prélèvement client FI à FI
- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Retour de paiement
- [`pacs.007.001.11`](/fr/pacs.007.001.11/) — Annulation de paiement FI à FI
- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — Virement client FI à FI
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Virement entre institutions financières
- [`pacs.010.001.05`](/fr/pacs.010.001.05/) — Prélèvement entre institutions financières
- [`pacs.028.001.05`](/fr/pacs.028.001.05/) — Demande de statut de paiement FI à FI

