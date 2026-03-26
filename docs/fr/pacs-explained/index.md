---
title: "Les messages PACS expliqués | pacs008"
description: "Référence technique détaillée pour les messages pacs ISO 20022 : cycle de vie, structure XML, méthodes de règlement, codes motif, types d'adresse..."
lang: fr-FR
lastUpdated: true
image: /logo.webp
---

# Les messages PACS expliqués

Cette page fournit une référence technique détaillée pour la famille de messages pacs ISO 20022. Elle couvre le fonctionnement des messages dans le cycle de vie complet d'un paiement, la structure XML, les méthodes de règlement, les codes motif, l'identification des parties, les informations de remise et le suivi de bout en bout.

## Cycle de vie du paiement

Le cycle de vie complet d'un paiement pacs comprend six étapes et plusieurs types de messages qui fonctionnent ensemble.

**Étape 1 — Initiation.** Le paiement prend sa source dans le domaine client-banque (pain.001). La banque du débiteur reçoit l'instruction et la transpose dans le domaine interbancaire.

**Étape 2 — Instruction interbancaire.** L'agent du débiteur crée un pacs.008 et l'envoie à l'agent suivant dans la chaîne. Dans un flux en série, le pacs.008 transite de proche en proche à travers les intermédiaires. Dans un flux de couverture, le pacs.008 va directement de l'agent du débiteur à l'agent du créancier, tandis qu'un pacs.009 distinct assure le volet financement à travers la chaîne de correspondants.

**Étape 3 — Rapports de statut.** À chaque étape, l'agent récepteur peut renvoyer un pacs.002 confirmant l'acceptation (ACCP/ACSP/ACSC), le rejet (RJCT) ou un statut en attente (PDNG). En CBPR+, le pacs.002 est obligatoire pour toute communication de statut de paiement.

**Étape 4 — Règlement.** Le règlement s'effectue via un système de compensation (CLRG), sur des comptes de correspondants (INDA/INGA) ou par un paiement de couverture (COVE). La date et le montant du règlement interbancaire déterminent quand et combien est réglé.

**Étape 5 — Crédit au bénéficiaire.** L'agent du créancier crédite le bénéficiaire et peut envoyer une notification au client.

**Étape 6 — Gestion des exceptions.** Si le bénéficiaire ne peut être crédité après le règlement, le pacs.004 retourne les fonds à travers la chaîne. Si l'émetteur découvre une erreur ou une fraude, le pacs.007 progresse dans la chaîne. Si le statut est inconnu, le pacs.028 interroge l'agent suivant et la réponse revient via pacs.002.

### Flux en série

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Flux de couverture

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Structure XML de pacs.008

pacs.008 comprend deux blocs principaux : l'en-tête de groupe (GrpHdr) et les informations sur l'opération de virement (CdtTrfTxInf).

### En-tête de groupe (GrpHdr)

L'en-tête de groupe apparaît exactement une fois par message et contient :

- **MsgId** — Identifiant unique du message attribué par l'agent émetteur. 35 caractères maximum, doit être unique par émetteur.
- **CreDtTm** — Horodatage de création au format ISO 8601.
- **NbOfTxs** — Nombre de transactions individuelles dans le message.
- **SttlmInf** — Informations de règlement comprenant la méthode de règlement (SttlmMtd) et éventuellement le système de compensation et le compte de règlement.
- **IntrBkSttlmDt** — Date à laquelle le règlement interbancaire a lieu.
- **PmtTpInf** — Informations sur le type de paiement comprenant la priorité, le niveau de service, l'instrument local et l'objet de la catégorie.

### Informations sur l'opération de virement (CdtTrfTxInf)

Chaque transaction contient :

- **PmtId** — Identifiants de paiement : InstrId, EndToEndId, TxId et UETR.
- **IntrBkSttlmAmt** — Montant du règlement interbancaire avec le code devise.
- **InstdAmt** — Montant initial demandé (peut différer du montant de règlement en raison du change).
- **ChrgBr** — Code de support des frais (DEBT, CRED, SHAR ou SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Nom, adresse, identification, compte et agent du débiteur.
- **Cdtr / CdtrAcct / CdtrAgt** — Nom, adresse, identification, compte et agent du créancier.
- **IntrmyAgt1 / 2 / 3** — Jusqu'à trois agents intermédiaires dans la chaîne.
- **RmtInf** — Informations de remise, soit non structurées (texte libre) soit structurées (références de documents, montants, dates).
- **Purp** — Code d'objet structuré.
- **RgltryRptg** — Détails des déclarations réglementaires.

## Identifiants de paiement

Les messages pacs utilisent plusieurs identifiants qui remplissent différents rôles dans la chaîne de paiement.

<div class="api-fields-table" tabindex="0" aria-label="Identifiants de paiement">
  <table>
    <caption>Identifiants de paiement et leurs rôles</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identifiant</th>
        <th scope="col">Défini par</th>
        <th scope="col">Change dans la chaîne ?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Chaque agent émetteur</td>
          <td class="api-fields-table__constraint">Oui — nouveau par message</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Chaque agent donneur d'ordre</td>
          <td class="api-fields-table__constraint">Oui — peut changer à chaque étape</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Émetteur (débiteur)</td>
          <td class="api-fields-table__constraint">Non — ne doit pas être modifié</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Premier agent donneur d'ordre</td>
          <td class="api-fields-table__constraint">Non — ne doit pas être modifié</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Agent du débiteur</td>
          <td class="api-fields-table__constraint">Non — suivi universel</td>
        </tr>
    </tbody>
  </table>
</div>

## Méthodes de règlement

L'élément SttlmMtd définit comment le règlement interbancaire s'effectue.

- **CLRG** — Règlement via un système de compensation tel que TARGET2, EURO1 ou CHIPS. Le plus courant pour la compensation nationale et régionale.
- **INDA** — Règlement dans les livres de l'agent destinataire de l'instruction. L'agent du débiteur détient un compte nostro auprès de l'agent suivant. Typique de la banque correspondante bilatérale.
- **INGA** — Règlement dans les livres de l'agent donneur d'ordre. L'agent destinataire détient un compte nostro auprès de l'agent émetteur. Moins courant que INDA.
- **COVE** — Règlement via un paiement de couverture séparé. Un pacs.009 assure le volet financement tandis que le pacs.008 transmet directement les données client. Utilisé dans la banque correspondante transfrontalière.

## Codes de support des frais

L'élément ChrgBr précise qui supporte les frais de paiement.

- **DEBT** — Le débiteur supporte tous les frais (équivalent MT103 : OUR). Le créancier reçoit la totalité du montant.
- **CRED** — Le créancier supporte tous les frais (équivalent MT103 : BEN). Les frais sont déduits du virement.
- **SHAR** — Les frais sont partagés (équivalent MT103 : SHA). Chaque partie paie les frais de son propre agent. Le plus courant pour les paiements transfrontaliers.
- **SLEV** — Les frais suivent le niveau de service. Obligatoire pour SEPA. Aucune déduction sur le montant du virement.

## Correspondance des champs MT103 vers pacs.008

<div class="api-fields-table" tabindex="0" aria-label="Correspondance des champs MT103 vers pacs.008">
  <table>
    <caption>Principales correspondances de champs entre MT103 et pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Champ MT103</th>
        <th scope="col">Nom MT103</th>
        <th scope="col">Chemin XML pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Référence de l'émetteur</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Code d'opération bancaire</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Date de valeur / Montant</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Montant demandé</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Client donneur d'ordre</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Institution donneuse d'ordre</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Institution du compte</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Client bénéficiaire</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Informations de remise</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Détail des frais</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Info. émetteur au récepteur</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Codes de statut et de motif

### Codes de statut pacs.002

<div class="api-fields-table" tabindex="0" aria-label="Codes de statut pacs.002">
  <table>
    <caption>Codes de statut de transaction dans pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Signification</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Accepté — contrôles préalables réussis</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Accepté — règlement en cours</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Accepté — règlement finalisé</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Reçu — pas encore traité</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">En attente — traitement complémentaire nécessaire</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Rejeté — avec code de motif</td></tr>
    </tbody>
  </table>
</div>

### Codes de motif courants de rejet et de retour

<div class="api-fields-table" tabindex="0" aria-label="Codes de motif courants">
  <table>
    <caption>Codes de motif de rejet et de retour fréquemment utilisés</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Nom</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Numéro de compte incorrect</td><td class="api-fields-table__constraint">Le numéro de compte est invalide ou n'existe pas</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Compte clôturé</td><td class="api-fields-table__constraint">Le compte est clôturé</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Compte bloqué</td><td class="api-fields-table__constraint">Le compte est bloqué pour les transactions</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Provision insuffisante</td><td class="api-fields-table__constraint">Provision insuffisante sur le compte du débiteur</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Doublon</td><td class="api-fields-table__constraint">Paiement en double détecté</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Adresse du créancier manquante</td><td class="api-fields-table__constraint">L'adresse du créancier est manquante ou incomplète</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Demandé par le client</td><td class="api-fields-table__constraint">Retour ou rejet demandé par le client</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Paiement en double</td><td class="api-fields-table__constraint">Paiement en double identifié</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">Suite à annulation</td><td class="api-fields-table__constraint">Suite à une demande d'annulation</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Fraude</td><td class="api-fields-table__constraint">Suspicion de fraude</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC incorrect</td><td class="api-fields-table__constraint">Le BIC est incorrect ou inconnu</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Nom/adresse du créancier manquant</td><td class="api-fields-table__constraint">Le nom ou l'adresse du créancier est manquant</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Heure limite dépassée</td><td class="api-fields-table__constraint">L'heure limite de traitement est dépassée</td></tr>
    </tbody>
  </table>
</div>

## Format d'adresse postale

### Adresse structurée

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Adresse non structurée (obsolète pour CBPR+ après novembre 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Contraintes principales : StrtNm max 70 caractères (CBPR+), TwnNm max 35 caractères (CBPR+), Ctry au format ISO 3166-1 alpha-2, AdrLine max 70 caractères par ligne et max 7 lignes.

## Identification des parties

Les parties dans pacs.008 prennent en charge plusieurs méthodes d'identification :

- **BIC** — Code d'identification d'entreprise selon ISO 9362. 8 ou 11 caractères (BBBBCCLL ou BBBBCCLLBBB). Utilisé dans FinInstnId/BICFI pour les agents et OrgId/AnyBIC pour les parties.
- **LEI** — Identifiant d'entité juridique selon ISO 17442. 20 caractères alphanumériques. Apparaît dans OrgId/LEI pour les parties et FinInstnId/LEI pour les agents. Améliore la désambiguïsation des entités pour les déclarations réglementaires.
- **IBAN** — Numéro de compte bancaire international selon ISO 13616. Utilisé dans DbtrAcct/Id/IBAN et CdtrAcct/Id/IBAN.
- **Identifiants d'organisation** — Autres identifiants basés sur un schéma (numéro fiscal, DUNS, numéro client) via OrgId/Othr avec un code de nom de schéma.
- **Identifiants privés** — Pour les personnes physiques : date et lieu de naissance, passeport (CCPT), carte d'identité nationale (NIDN) ou permis de conduire (DRLC) via PrvtId.

## Informations de remise

Les données de remise dans pacs.008 utilisent l'élément RmtInf avec deux formes :

**Non structurées** — Texte libre jusqu'à 140 caractères par occurrence. Simple mais limite le rapprochement automatisé.

**Structurées** — Références de documents avec codes de type, numéros, dates et montants. Types de documents courants : CINV (facture commerciale), CREN (avoir), SOAC (relevé de compte). Prend en charge les références créancier ISO 11649 (RF + chiffres de contrôle + référence) via CdtrRefInf. Permet le rapprochement automatique des factures et les paiements multi-factures.

## UETR et suivi gpi

UETR (Unique End-to-End Transaction Reference) est un UUID v4 généré par l'agent du débiteur. Il apparaît dans PmtId/UETR à travers pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 et pacs.028. Il ne doit pas être modifié tout au long de la chaîne de paiement.

SWIFT gpi utilise le UETR pour suivre les paiements via une base de données Tracker hébergée dans le cloud. Chaque agent confirme la réception et le traitement, permettant une visibilité de bout en bout. L'accord de niveau de service gpi pour les paiements transfrontaliers vise un crédit le jour même sur le compte du créancier.

## Références

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

