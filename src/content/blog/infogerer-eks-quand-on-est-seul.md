---
title: "Infogérer un cluster EKS quand on est seul"
description: "Ce qu'un indépendant peut réellement garantir en exploitation Kubernetes, et les trois engagements qu'il ne faut pas promettre sans équipe derrière."
publishedAt: 2026-08-18
tags: ["Kubernetes", "Infogérance", "SRE"]
summary: "Reprendre l'exploitation d'un cluster EKS en solo impose de choisir ce qu'on contractualise. Voici les engagements tenables, et ceux qui ne le sont pas."
---

L'infogérance Kubernetes est un métier d'équipe. Un prestataire seul peut le pratiquer, à condition d'être précis sur ce qu'il garantit. La difficulté n'est pas technique : elle est dans le périmètre contractuel.

## Ce qui est tenable sans astreinte

Une exploitation diurne couvre des besoins réels. Les mises à jour de version, la gestion des certificats, la revue des alertes, le dimensionnement et le suivi de la facture se traitent en heures ouvrées sans dégrader le service.

Ce périmètre convient aux plateformes dont l'indisponibilité est gênante mais pas critique : un outil interne, un environnement de recette, une application dont la fenêtre d'indisponibilité est négociable.

## Ce qui ne l'est pas

**Une astreinte 24/7 en solo.** Un engagement de nuit permanente suppose une rotation. Une personne seule qui promet une intervention à trois heures du matin prend un engagement qu'elle ne pourra pas tenir deux ans, et le client découvre la limite le jour de l'incident.

**Un délai de rétablissement garanti.** Sur un incident dont la cause est applicative, l'exploitant diagnostique et escalade, mais ne corrige pas le code. Promettre un temps de rétablissement revient à s'engager sur du travail qui dépend d'un tiers.

**Un objectif de disponibilité chiffré sans historique.** Annoncer 99,9 % suppose de connaître les points de défaillance et d'avoir mesuré. Un chiffre posé sans mesure est une promesse commerciale, pas un engagement technique.

## La formulation que j'utilise

Ce qui se contractualise proprement : un délai de prise en charge, une fenêtre d'intervention, un canal et un interlocuteur. La distinction est importante : on s'engage sur sa propre réaction, pas sur le résultat final, qui dépend d'éléments hors de son contrôle.

Le reste se traite en transparence avec le client. Une plateforme critique mérite une équipe avec rotation, ou un prestataire qui s'appuie sur un collectif. C'est d'ailleurs l'une des raisons pour lesquelles je travaille au sein de Cloud Partners plutôt que seul dans mon coin.

## Le signal d'alerte

Un prestataire qui accepte tout le périmètre sans discuter est un prestataire qui n'a pas lu le contrat. La conversation sur les limites fait partie de la prestation, et elle coûte moins cher avant la signature qu'après le premier incident.
