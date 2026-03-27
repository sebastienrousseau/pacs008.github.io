---
title: "Politique éditoriale | pacs008"
description: Comment le contenu de pacs008.com est créé, vérifié et maintenu. Sources, processus de révision et calendrier de mise à jour.
lang: fr-FR
lastUpdated: true
image: /logo.webp
---

# Politique éditoriale

Cette page explique comment le contenu de pacs008.com est créé, vérifié et maintenu.

## Sources

Toute la documentation des messages repose sur des sources primaires :

- [Catalogue de définitions de messages ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) pour les spécifications de messages et l'historique des versions.
- [Directives d'utilisation SWIFT CBPR+](https://www.swift.com/standards/iso-20022) pour le contexte des paiements transfrontaliers.
- [Règlement SEPA de virements du EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) pour les règles de virement en euros.
- [Règlement SEPA de virements instantanés du EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) pour les règles de paiement instantané.

## Processus de révision du contenu

Chaque page de pacs008.com fait l'objet d'une révision structurée avant publication. Le contenu nouveau débute par un brouillon fondé sur les sources primaires. Le brouillon est vérifié sur le plan technique par rapport au catalogue de messages ISO 20022 et à la documentation de schéma applicable. Les numéros de version, les identifiants d'enregistrement et les définitions de champs sont confrontés aux entrées du catalogue officiel.

Après cette première révision, le contenu passe par un contrôle de structure visant à garantir sa cohérence avec les pages existantes. La navigation, les renvois et la terminologie sont uniformisés sur l'ensemble du site. La date de révision affichée sur chaque page de message correspond à la dernière vérification par rapport aux sources primaires.

## Processus de révision

Chaque page de message affiche une date de révision. Les révisions vérifient que les numéros de version, le statut d'enregistrement et le contexte de schéma correspondent toujours aux sources primaires citées.

## Exactitude technique

Le contenu technique est conforme aux définitions de messages ISO 20022 telles que publiées dans le catalogue officiel. Les noms de champs, les types de données et les règles de cardinalité correspondent aux schémas XSD de chaque version de message. Lorsque l'utilisation propre à un schéma diverge du standard de base, la documentation du schéma concerné est citée directement.

Les exemples de code de la documentation de l'API sont testés par rapport à la version courante du toolkit pacs008. Les commandes CLI, les points de terminaison de l'API et les méthodes de la bibliothèque Python reflètent le paquet publié sur PyPI. Les exemples sont mis à jour à chaque nouvelle version afin de rester synchronisés avec le toolkit.

## Méthodologie de traduction

pacs008.com est disponible en 22 langues. L'ensemble du contenu est rédigé en anglais. Les pages traduites sont générées à partir du matériel source anglais révisé au moyen d'un script de construction qui préserve la structure des pages, la hiérarchie des titres et les cibles de liens dans toutes les versions linguistiques.

Les termes techniques, les identifiants ISO et les codes normalisés ne sont pas traduits afin d'éviter toute ambiguïté. Des termes tels que pacs.008.001.13, BIC, IBAN et CBPR+ apparaissent sous leur forme standard dans toutes les langues. Le contenu non technique est traduit de manière à être lu naturellement dans chaque langue cible. Les traductions font l'objet d'un contrôle de cohérence structurelle et sont régénérées lorsque le matériel source anglais évolue.

## Fréquence de mise à jour

Le contenu est mis à jour en réponse à trois déclencheurs. Premièrement, lorsque ISO 20022 publie une nouvelle version du catalogue de messages affectant les définitions de messages pacs. Deuxièmement, lorsque SWIFT publie des directives CBPR+ mises à jour ou de nouvelles échéances de migration. Troisièmement, lorsque le EPC met à jour les règlements de virements ou de virements instantanés SEPA.

Le toolkit pacs008 suit le versionnage sémantique. Chaque nouvelle version se reflète dans la documentation de l'API et le journal des modifications. Le site est reconstruit et redéployé à chaque mise à jour du contenu ou du toolkit.

## Génération du contenu

La structure des pages et le contenu traduit sont générés à partir de matériel source anglais vérifié à l'aide d'un script de construction. Cela garantit la cohérence structurelle dans les 22 langues tout en conservant les termes techniques et les identifiants ISO dans leur forme standard.

## Précision et limites

pacs008.com vise à être précis et à jour, mais ne remplace pas les règlements des systèmes de paiement, les accords de contrepartie ou les conseils juridiques. Confirmez toujours les détails de mise en œuvre avec les sources primaires et les règles spécifiques du marché ou du système dans lequel vous opérez.

## Contact

Si vous trouvez une erreur ou avez une correction, veuillez ouvrir un ticket dans le [dépôt pacs008](https://github.com/sebastienrousseau/pacs008/issues).
