---
title: "Réduire une facture AWS sans casser la prod"
description: "La méthode FinOps que j'applique en audit : où se trouve réellement l'argent gaspillé sur une plateforme AWS, et pourquoi couper au hasard coûte plus cher que de ne rien faire."
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

## Les trois pièges

**Optimiser avant de mesurer.** Un plan d'économie bâti sur une impression produit des coupes arbitraires. Les métriques d'usage sur trente jours sont le préalable, pas une option.

**Couper ce que personne ne surveille.** Une ressource sans alerte associée est une ressource dont personne ne verra la panne. Avant de toucher à un environnement, il faut savoir ce qui va crier.

**Traiter le FinOps comme un projet.** Une campagne ponctuelle ramène la facture à son niveau d'avant en six mois. Ce qui tient dans le temps, c'est un indicateur suivi et un responsable identifié.

## Ce que je livre en sortie d'audit

Un tableau des postes de dépense avec, pour chacun, le potentiel d'économie, l'effort de mise en œuvre et le risque de production associé. Puis un ordre de traitement. Les décisions restent au client : je fournis l'argumentaire et le chiffrage, pas une liste de courses.

C'est aussi pour cela qu'un audit FinOps mené seul se limite à la facture. Le vrai levier se trouve à l'intersection de l'architecture, des pratiques d'exploitation et du coût, ce qui suppose de savoir pourquoi la plateforme est faite ainsi.
