---
title: "Traçabilité Kubernetes pour un audit réglementaire"
description: "Comment répondre à l'exigence « qui a modifié quoi, quand » sur un cluster Kubernetes, sans déployer une usine à gaz."
publishedAt: 2026-07-22
tags: ["Kubernetes", "Conformité", "Audit"]
summary: "Les secteurs régulés demandent une traçabilité des changements de cluster. L'audit log de Kubernetes répond en partie à la question, mais rarement dans la forme attendue par un auditeur."
---

Dans le secteur financier, l'exigence est posée simplement : pouvoir dire qui a modifié quoi et quand, et le prouver à un auditeur. Sur un cluster Kubernetes, la réponse technique existe mais ne produit pas directement le livrable attendu.

## Ce que les journaux fournissent

L'audit log de Kubernetes enregistre chaque appel à l'API server avec l'identité de l'appelant, la ressource touchée et le corps de la requête. C'est la matière première complète.

Le problème est ailleurs. Un audit log est un flux d'événements techniques, pas un registre de changements. Un déploiement applicatif génère des dizaines d'entrées liées entre elles, et le lien avec une demande de changement, une validation ou un ticket n'existe pas dans les journaux.

## Ce que l'auditeur demande

Il veut généralement lire une ligne par changement significatif : la date, l'auteur, la nature de la modification, la référence de l'autorisation. Les champs que les journaux bruts n'ont pas.

Il y a donc un travail de reconstruction : corréler les entrées d'audit avec une source d'identité, regrouper les modifications qui relèvent d'un même déploiement, et produire un format lisible et stable dans le temps.

## Trois choix de conception

**Conserver l'audit log assez longtemps.** Par défaut, la rétention est courte. Sur un audit qui remonte à douze mois, il faut l'avoir prévu dès le départ, avec un coût de stockage à estimer.

**Ne pas fonder la traçabilité sur l'identité humaine seule.** Un déploiement automatisé n'a pas d'utilisateur au bout, mais un pipeline et un commit. C'est cette chaîne qu'il faut pouvoir suivre jusqu'à la personne qui a validé.

**Rendre la preuve vérifiable sans l'équipe.** Un rapport que seul l'auteur sait lire ne sert à rien en audit. Le livrable doit tenir debout tout seul, avec sa méthode expliquée.

## Le résultat attendu

Un rapport qui se consulte, et une chaîne qui se reconstitue à la demande : du changement observé sur le cluster jusqu'à la validation d'origine. Le tout sans exiger de l'équipe d'exploitation qu'elle produise le document à la main chaque trimestre, ce qui est la version qui finit toujours par ne plus être faite.
