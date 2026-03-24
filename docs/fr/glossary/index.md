---
title: "ISO 20022 glossary | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# ISO 20022 glossary

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Chambre de compensation automatisée. Un réseau qui traite des paiements électroniques par lots entre institutions financières.

**AdrLine** — Ligne d'adresse. Un champ d'adresse en texte libre dans les structures d'adresse postale ISO 20022. Jusqu'à 7 lignes de 70 caractères chacune. En cours de remplacement par des éléments d'adresse structurés pour CBPR+ d'ici novembre 2026.

**ACCP** — Profil client accepté. Un code de statut pacs.002 indiquant que les vérifications précédentes (syntaxe, profil client) ont été validées.

**ACSC** — Règlement accepté terminé. Un code de statut pacs.002 confirmant que le règlement sur le compte du débiteur a été effectué.

**ACSP** — Règlement accepté en cours. Un code de statut pacs.002 indiquant que toutes les vérifications ont été validées et que le règlement est en cours.

## B

**BAH** — En-tête d'application métier (head.001). Une enveloppe standardisée qui encapsule les messages métier ISO 20022 pour le transport via SWIFT. Contient les informations de routage, l'identifiant de définition du message et les BIC de l'émetteur/récepteur.

**BIC** — Code d'identification d'entreprise (ISO 9362). Un code de 8 ou 11 caractères qui identifie de manière unique une institution financière. Format : BBBBCCLL (code banque + pays + localisation) avec un code de branche BBB optionnel.

## C

**CBPR+** — Paiements et reporting transfrontaliers Plus. Le programme de SWIFT pour la migration de la messagerie de paiement transfrontalière de MT vers ISO 20022. Mis en service en mars 2023.

**CdtTrfTxInf** — Informations sur la transaction de virement. Le principal bloc de construction au niveau de la transaction dans pacs.008, contenant les détails du paiement, les parties, les montants et les informations de remise.

**ChrgBr** — Porteur de frais. Spécifie qui paie les frais de transaction. Valeurs : DEBT (débiteur), CRED (créditeur), SHAR (partagé), SLEV (niveau de service, SEPA uniquement).

**CLRG** — Règlement par système de compensation. Une méthode de règlement où les fonds transitent par un système de compensation tel que TARGET2, EURO1 ou CHIPS.

**COVE** — Règlement par méthode de couverture. Une méthode de règlement où un paiement de couverture pacs.009 séparé gère le financement entre correspondants tandis que pacs.008 transporte les données client directement.

**CSM** — Mécanisme de compensation et de règlement. Une infrastructure qui traite et règle les instructions de paiement entre les institutions participantes.

## D

**Dbtr** — Débiteur. La partie qui doit des fonds et initie le paiement. Dans pacs.008, l'élément Dbtr contient le nom du débiteur, l'adresse postale, l'identification et le pays de résidence.

**DbtrAgt** — Agent du débiteur. L'institution financière qui gère le compte du débiteur et envoie l'instruction pacs.008.

## E

**E2E ID** — Identification de bout en bout (EndToEndId). Une référence attribuée par l'initiateur qui doit rester inchangée à travers tous les agents de la chaîne de paiement. Utilisée pour la traçabilité au niveau client.

**EPC** — Conseil européen des paiements. L'organisme qui gère les règles des schémas de paiement SEPA pour les virements et les prélèvements.

## F

**FI** — Institution financière. Une banque ou autre institution qui participe à la compensation et au règlement des paiements.

**FIToFI** — Institution financière à institution financière. Décrit le domaine interbancaire dans lequel opèrent les messages pacs.

## G

**gpi** — Innovation mondiale des paiements. L'initiative de SWIFT pour des paiements transfrontaliers plus rapides et transparents. Utilise l'UETR pour le suivi de bout en bout via un Tracker basé dans le cloud.

**GrpHdr** — En-tête de groupe. Le bloc de métadonnées au niveau du message dans les messages pacs. Contient MsgId, CreDtTm, NbOfTxs, les informations de règlement et les informations de type de paiement.

## H

**Hybrid address** — Un format d'adresse postale qui combine des éléments structurés (StrtNm, TwnNm, Ctry) avec des éléments non structurés AdrLine. Autorisé pendant la période de transition avant la date limite d'adresse structurée de novembre 2026.

## I

**IBAN** — Numéro de compte bancaire international (ISO 13616). Un format de numéro de compte standardisé utilisé pour les paiements transfrontaliers et domestiques. Validé à l'aide de la somme de contrôle ISO 7064 Mod 97-10.

**INDA** — Règlement par l'agent instruit. Une méthode de règlement où les fonds se règlent dans les livres de l'agent instruit, où l'agent du débiteur détient un compte nostro.

**INGA** — Règlement par l'agent instructeur. Une méthode de règlement où les fonds se règlent dans les livres de l'agent instructeur, où l'agent instruit détient un compte nostro.

**InstrId** — Identification d'instruction. Une référence point à point entre agents adjacents dans la chaîne de paiement. Peut changer à chaque saut.

**IntrBkSttlmAmt** — Montant du règlement interbancaire. Le montant qui se règle entre l'agent instructeur et l'agent instruit, dans la devise de règlement.

**ISO 20022** — Une norme internationale pour l'échange de données électroniques entre institutions financières. Définit un modèle de données commun et des formats de messages basés sur XML pour les paiements, les titres, le financement du commerce et d'autres domaines financiers.

## L

**LEI** — Identifiant d'entité juridique (ISO 17442). Un code alphanumérique de 20 caractères qui identifie de manière unique les entités juridiques participant aux transactions financières. Utilisé dans OrgId/LEI pour les parties et FinInstnId/LEI pour les agents.

## M

**MsgId** — Identification du message. Un identifiant unique pour l'enveloppe du message, attribué par l'agent émetteur. Change à chaque saut dans la chaîne de paiement.

**MT** — Type de message. Le format de message hérité de SWIFT (par ex., MT103 pour les virements clients, MT202 pour les transferts entre institutions financières). En cours de remplacement par les messages MX ISO 20022.

**MX** — Le format de message XML ISO 20022 utilisé par SWIFT. Les messages MX remplacent les messages MT pour les paiements transfrontaliers sous CBPR+.

## N

**NbOfTxs** — Nombre de transactions. Un élément de l'en-tête de groupe indiquant combien de transactions individuelles sont contenues dans le message.

## P

**pacs** — Compensation et règlement des paiements. Le domaine métier ISO 20022 couvrant les messages de paiement interbancaires.

**pacs.002** — Rapport de statut de paiement FI à FI. Rapporte le statut de traitement (accepté, rejeté, en attente, réglé) d'une instruction de paiement antérieure.

**pacs.003** — Prélèvement client FI à FI. Transporte une instruction de prélèvement client entre banques pour la collecte de fonds.

**pacs.004** — Retour de paiement. Retourne les fonds réglés à travers la chaîne de paiement lorsqu'un paiement ne peut pas être appliqué.

**pacs.007** — Annulation de paiement FI à FI. Annule une instruction de paiement de l'émetteur original à travers la chaîne.

**pacs.008** — Virement client FI à FI. Le principal message interbancaire pour les virements clients. Remplace MT103.

**pacs.009** — Virement d'institution financière. Déplace des fonds entre banques pour leur propre compte. Couvre le financement, les paiements de couverture et la gestion de liquidité. Remplace MT202/MT202COV.

**pacs.010** — Prélèvement d'institution financière. Permet à une banque de débiter le propre compte d'une autre banque dans le cadre d'un accord bilatéral.

**pacs.028** — Demande de statut de paiement FI à FI. Demande activement le statut d'un paiement antérieur lorsqu'aucune mise à jour pacs.002 n'est arrivée.

**pain** — Initiation de paiement. Le domaine métier ISO 20022 couvrant les messages client-banque (par ex., pain.001 pour l'initiation de virement).

**PII** — Informations personnelles identifiables. Données pouvant identifier un individu. pacs008 masque les PII dans les journaux structurés.

**PstlAdr** — Adresse postale. La structure d'adresse utilisée pour les parties dans les messages pacs. Prend en charge les formats structurés (StrtNm, TwnNm, Ctry) et non structurés (AdrLine).

## R

**RJCT** — Rejeté. Un code de statut pacs.002 indiquant que le paiement a été rejeté.

**RmtInf** — Informations de remise. Données de référence de paiement transportées dans pacs.008. Prend en charge les formats non structurés (texte libre, max 140 caractères) et structurés (références de documents, montants, références créditeur).

**RTGS** — Règlement brut en temps réel. Un système de paiement où les transactions se règlent individuellement et en temps réel (par ex., TARGET2, Fedwire, CHAPS).

## S

**SCT** — Virement SEPA. Le schéma de virement en euros géré par l'EPC, utilisant pacs.008.

**SCT Inst** — Virement instantané SEPA. La variante de paiement instantané du SCT, réglée en moins de 10 secondes.

**SDD** — Prélèvement SEPA. Le schéma de prélèvement en euros géré par l'EPC, utilisant pacs.003.

**SEPA** — Espace unique de paiement en euros. Une initiative d'intégration des paiements couvrant les virements, prélèvements et paiements par carte en euros dans 36 pays européens.

**SLEV** — Niveau de service. Un code de porteur de frais obligatoire pour SEPA. Signifie que les frais suivent les règles du schéma sans déduction du montant du virement.

**STP** — Traitement automatisé de bout en bout. Traitement automatisé des paiements de bout en bout sans intervention manuelle.

**SttlmMtd** — Méthode de règlement. Définit comment le règlement interbancaire se produit : CLRG (système de compensation), INDA (agent instruit), INGA (agent instructeur) ou COVE (paiement de couverture).

## T

**TxId** — Identification de transaction. Une référence interbancaire attribuée par le premier agent instructeur. Ne doit pas être modifiée par les agents suivants.

## U

**UETR** — Référence unique de transaction de bout en bout. Un identifiant UUID v4 généré par l'agent du débiteur et transporté inchangé à travers toutes les étapes d'un paiement pour le suivi gpi.

## X

**XSD** — Définition de schéma XML. Le schéma formel qui définit la structure, les éléments et les types de données d'un message XML ISO 20022.

**XXE** — Entité externe XML. Une vulnérabilité de sécurité dans l'analyse XML. pacs008 empêche les attaques XXE en utilisant defusedxml.

## Références

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

