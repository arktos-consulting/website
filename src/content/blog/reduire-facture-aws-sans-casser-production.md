---
title: "Réduire une facture AWS sans casser la prod"
metaTitle: "Réduire une facture AWS : méthode FinOps"
description: "La méthode FinOps que j'applique en audit : où se trouve réellement l'argent gaspillé sur une plateforme AWS, et pourquoi couper au hasard coûte plus cher."
updatedAt: 2026-10-09
publishedAt: 2026-09-08
tags: ["FinOps", "AWS", "Audit"]
summary: "Le poste de dépense le plus visible n'est presque jamais le plus gros. Voici l'ordre dans lequel je regarde une facture, et les trois pièges qui font échouer la plupart des plans d'économie."
---

On me demande souvent un audit FinOps avec l'idée qu'il suffit de résilier des ressources inutilisées. Dans la pratique, le gaspillage évident représente rarement la part principale de la facture, et le couper sans comprendre l'usage produit des incidents qui coûtent plus cher que l'économie obtenue.

## Où se trouve réellement l'argent

Le désordre le plus fréquent sur une plateforme qui a grandi vite se situe dans trois zones, par ordre d'impact.

**Les environnements non productifs allumés en permanence.** Les clusters de développement, de recette et de démonstration tournent souvent 24 heures sur 24 alors qu'ils sont utilisés aux heures ouvrées. La mesure est simple à faire et l'économie est réelle, mais elle se heurte à une objection légitime : une équipe qui perd trente minutes chaque matin à rallumer son environnement finira par contourner la règle.

**Le surdimensionnement par précaution.** Des instances choisies pour absorber la charge de pointe d'un jour de lancement, conservées deux ans après. Les métriques montrent presque toujours un écart large entre la consommation réelle et la capacité réservée. Le levier est le redimensionnement, pas la résiliation.

**Les données qui s'accumulent sans politique de rétention.** Journaux applicatifs, snapshots oubliés, versions d'objets dans des buckets sans cycle de vie. C'est le poste le plus discret et souvent le plus lourd sur une plateforme ancienne.

## Les cinq postes que je vois revenir

Au-delà de ces trois zones, certains services produisent une dépense continue que personne ne relie à une décision. Les tarifs ci-dessous sont les tarifs publics d'AWS, hors remises, et ils servent surtout à donner un ordre de grandeur.

**Les journaux.** CloudWatch facture l'ingestion, l'archivage et les requêtes au gigaoctet, avec un palier gratuit mensuel de 5 Go. Un flux applicatif laissé en niveau debug se paie au gigaoctet, tous les mois, sans que personne ne le regarde. Le premier geste n'est pas de couper la journalisation, mais de choisir un niveau par environnement et une durée de conservation par flux.

**Les passerelles NAT.** Une passerelle NAT coûte 0,045 dollar par heure, soit environ 33 dollars par mois, plus 0,045 dollar par gigaoctet traité. Le trafic vers S3 passe par défaut par cette passerelle, et il se paie deux fois : au gigaoctet traité, puis en transfert entre zones. Un point de terminaison de passerelle pour S3 supprime les frais de traitement, sans coût horaire et sans changement dans le code.

**Le plan de contrôle Kubernetes.** Un cluster EKS facture 0,10 dollar par heure en support standard, soit environ 73 dollars par mois, quel que soit le nombre de nœuds. Une version Kubernetes reste en support standard quatorze mois après sa sortie dans EKS, puis passe en support étendu à 0,60 dollar par heure : six fois le tarif, pour le même service. Rester sur une version ancienne est un choix de coût autant qu'un choix technique.

**Les volumes et leurs copies.** Un volume gp3 facture 0,08 dollar par gigaoctet et par mois, avec 3 000 IOPS et 125 Mo/s inclus dans ce prix. Le poste devient visible quand une partie des volumes n'est plus attachée à quoi que ce soit : environnement éteint depuis six mois, disques d'un cluster supprimé, copies de sauvegarde dont plus personne ne connaît la source.

**Les ressources réservées à l'inactivité.** Adresses IP publiques non associées, équilibreurs sans cible enregistrée, files d'attente vidées depuis un an mais conservées au cas où. Elles ne coûtent pas cher à l'unité ; elles sont le signe qu'aucun inventaire n'existe.

## Comment je mesure

La facture et l'usage ne racontent pas la même histoire. Cost Explorer répond à « combien », par service et par compte. Le rapport d'usage et de coût, livré dans un bucket S3 et interrogeable avec Athena, répond à « qui, quoi, quand » : c'est la seule source qui permette de descendre jusqu'à une ressource nommée.

Trois règles s'appliquent avant de proposer quoi que ce soit.

**Trente jours de métriques, pas une impression.** Un pic de charge, un jour de lancement ou une fin de trimestre ne décrivent pas la consommation réelle. La fenêtre de mesure est le mois, et elle se compare à ce qui est réservé.

**Ce qui n'est pas rattaché ne se décide pas.** Sur un compte non segmenté, une part de la facture reste non attribuée. Aucun arbitrage n'est possible sur un poste dont on ne sait pas dire à quelle équipe ou à quel produit il appartient. Étiqueter une partie du parc est souvent le premier livrable réel d'un audit.

**La mesure avant la coupe.** Chaque ressource qu'on envisage d'éteindre doit avoir une alerte associée. Si personne ne verra la panne, la coupure n'est pas une économie, c'est une dette technique.

Les outils natifs font le travail : Cost Explorer pour la lecture, le rapport d'usage et de coût pour l'analyse fine, Budgets et la détection d'anomalies pour le suivi, Compute Optimizer pour le redimensionnement. Aucun d'entre eux ne remplace le fait de savoir pourquoi l'architecture est faite ainsi.

## Les trois pièges

**Optimiser avant de mesurer.** Un plan d'économie bâti sur une impression produit des coupes arbitraires. Les métriques d'usage sur trente jours sont le préalable, pas une option.

**Couper ce que personne ne surveille.** Une ressource sans alerte associée est une ressource dont personne ne verra la panne. Avant de toucher à un environnement, il faut savoir ce qui va crier.

**Traiter le FinOps comme un projet.** Une campagne ponctuelle ramène la facture à son niveau d'avant en six mois. Ce qui tient dans le temps, c'est un indicateur suivi et un responsable identifié.

## Les leviers, dans l'ordre

L'ordre compte autant que le contenu. Couper dans le désordre produit des régressions qui coûtent la confiance nécessaire à la suite du plan.

**Ce qu'on éteint sans risque.** Adresses IP non associées, volumes non attachés, snapshots dont la source n'existe plus. Ces gestes ne demandent aucune décision d'architecture, seulement un inventaire.

**La rétention.** Politiques de cycle de vie sur les buckets, versions d'objets, durée de conservation des journaux. C'est le levier qui se dégrade le plus vite sans surveillance : une politique posée aujourd'hui et oubliée laisse les données revenir.

**Le trafic.** Points de terminaison de passerelle pour S3, puis revue des flux sortants entre zones de disponibilité. Le gain est immédiat et sans effet sur la production.

**Le dimensionnement.** Redimensionnement sur la base des métriques, autoscaling, choix du type d'instance. C'est ici que se trouve l'écart le plus large entre la capacité réservée et la consommation observée.

**L'engagement.** Les Savings Plans Compute réduisent la facture jusqu'à 66 %, les Savings Plans d'instance EC2 jusqu'à 72 %, sur un engagement d'un ou trois ans. Ce levier se prend en dernier, sur un périmètre mesuré et stable. S'engager avant d'avoir redimensionné revient à figer le surdimensionnement pour trois ans.

## Combien de temps ça prend

La mesure demande trente jours : une campagne plus courte ne voit ni les pics ni les creux. Un audit FinOps se déroule ensuite sur deux à quatre semaines selon la taille du parc, ce qui inclut la lecture, les entretiens avec les équipes et le chiffrage des options.

L'effet d'une campagne se lit sur le trimestre suivant, pas sur la facture du mois où la coupure a eu lieu. Un engagement porte sur un ou trois ans, et c'est précisément pour cela qu'il vient après la mesure.

## Ce que je livre en sortie d'audit

Un tableau des postes de dépense avec, pour chacun, le potentiel d'économie, l'effort de mise en œuvre et le risque de production associé. Puis un ordre de traitement. Les décisions restent au client : je fournis l'argumentaire et le chiffrage, pas une liste de courses.

C'est aussi pour cela qu'un audit FinOps mené seul se limite à la facture. Le vrai levier se trouve à l'intersection de l'architecture, des pratiques d'exploitation et du coût, ce qui suppose de savoir pourquoi la plateforme est faite ainsi.

## Ce qui tient dans le temps

Ce qui survit à la campagne tient en trois éléments : un indicateur suivi, un responsable identifié et une revue courte à intervalle régulier. Le coût par environnement, ou par client, est un meilleur indicateur que le total de la facture, parce qu'il se rattache à une décision plutôt qu'à un chiffre.

Le tableau de bord n'a pas besoin d'être beau. Il doit être lu, et il doit tenir après le départ de la personne qui l'a mis en place. C'est la différence entre une économie et une baisse.
