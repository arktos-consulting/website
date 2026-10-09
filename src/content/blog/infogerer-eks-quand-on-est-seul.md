---
title: "Infogérer un cluster EKS quand on est seul"
metaTitle: "Infogérer un cluster EKS en solo"
description: "Ce qu'un indépendant peut réellement garantir en exploitation Kubernetes, et les trois engagements qu'il ne faut pas promettre sans équipe derrière."
updatedAt: 2026-10-09
publishedAt: 2026-08-18
tags: ["Kubernetes", "Infogérance", "SRE"]
summary: "Reprendre l'exploitation d'un cluster EKS en solo impose de choisir ce qu'on contractualise. Voici les engagements tenables, et ceux qui ne le sont pas."
---

L'infogérance Kubernetes est un métier d'équipe. Un prestataire seul peut le pratiquer, à condition d'être précis sur ce qu'il garantit. La difficulté n'est pas technique : elle est dans le périmètre contractuel.

## Ce qui est tenable sans astreinte

Une exploitation diurne couvre des besoins réels. Les mises à jour de version, la gestion des certificats, la revue des alertes, le dimensionnement et le suivi de la facture se traitent en heures ouvrées sans dégrader le service.

Ce périmètre convient aux plateformes dont l'indisponibilité est gênante mais pas critique : un outil interne, un environnement de recette, une application dont la fenêtre d'indisponibilité est négociable.

## La cadence d'une exploitation en solo

Diurne ne veut pas dire épisodique. L'exploitation se tient sur un rythme fixe, et c'est ce rythme qui remplace l'astreinte : ce qui est fait à date fixe ne devient pas un incident.

Le calendrier amont donne le tempo. La communauté Kubernetes publie une version mineure tous les quatre mois environ, et EKS suit ce cycle. Une plateforme qui monte une version par an reste dans la fenêtre de support ; une plateforme qui ne monte pas du tout finit par payer un tarif majoré pour un service identique.

Ce qui se traite en heures ouvrées : la revue des alertes, le renouvellement des certificats, les mises à jour d'add-ons, le dimensionnement, la revue de facture. Ce qui demande une fenêtre annoncée à l'avance : les montées de version du plan de contrôle et des nœuds, les changements d'image de base, les opérations sur les points d'entrée. La fenêtre se choisit avec le client, pas contre lui.

## La reprise d'une plateforme existante

Reprendre une exploitation se fait en deux temps, et dans cet ordre.

**L'inventaire.** Ce qui tourne, ce qui alerte, qui détient les accès, ce qui est documenté et ce qui ne l'est pas. Cette étape prend une à deux semaines sur une plateforme de taille moyenne, et elle conditionne tout le reste : on ne s'engage pas sur ce qu'on n'a pas vu.

**La remise à niveau.** Les écarts de version, les certificats qui expirent dans trois semaines, les sauvegardes jamais restaurées, les alertes qui ne partent nulle part. C'est le travail visible des premières semaines.

Ce qu'on ne touche pas tout de suite : l'architecture. Une plateforme qui tourne porte des décisions que personne n'a écrites, et les changer avant d'avoir compris l'usage produit exactement les incidents qu'on cherche à éviter.

## La version Kubernetes est un budget autant qu'un risque

Un cluster EKS facture son plan de contrôle 0,10 dollar par heure, soit environ 73 dollars par mois, indépendamment du nombre de nœuds. Ce tarif correspond au support standard d'une version.

Une version Kubernetes reste en support standard quatorze mois après sa sortie dans EKS, puis passe en support étendu pendant douze mois, à 0,60 dollar par heure : six fois le tarif, pour le même service rendu. Le support étendu est activé par défaut, et la facturation démarre le jour où la version sort du support standard.

Ce tarif n'est pas une simple pénalité. Le support étendu maintient les correctifs de sécurité du plan de contrôle et des add-ons principaux — VPC CNI, kube-proxy, CoreDNS —, ce qui explique en partie le prix. Au-delà, la communauté arrête de publier des correctifs pour les versions non supportées, et une vulnérabilité propre à une version ancienne peut simplement ne plus être signalée.

Trois points de mécanique décident de la difficulté réelle d'une montée.

**Les nœuds ne montent pas avec le plan de contrôle.** Un groupe de nœuds géré crée des instances EC2 dans votre compte et ne suit pas automatiquement la version du plan de contrôle : la mise à jour se fait en deux temps, et un groupe de nœuds ancien ne signale rien de lui-même.

**L'écart entre plan de contrôle et nœuds est toléré jusqu'à trois versions mineures.** Au-delà, la configuration n'est plus recommandée. Un cluster qui prend du retard sur ses nœuds finit par devoir monter deux fois.

**Un retour arrière est possible dans les sept jours suivant une montée en place.** Passé ce délai, ou lorsque la montée a été déclenchée automatiquement, il n'y a plus de marche arrière.

À la fin du support étendu, AWS met le plan de contrôle à jour automatiquement, sans préavis, vers la plus ancienne version supportée. Une plateforme qui attend découvre donc sa montée un matin, sans fenêtre choisie.

## Les indicateurs que je regarde

Un contrat d'exploitation se juge sur des indicateurs, pas sur une impression. Quatre suffisent.

**L'écart de version.** Combien de temps s'écoule entre la sortie d'une version dans EKS et sa mise en production. Un écart qui se creuse est une dette qui se paiera, en tarif ou en difficulté.

**Le volume d'alertes.** Une plateforme qui alerte trop n'est plus surveillée. Le nombre d'alertes par semaine mesure la qualité de la supervision, pas la vigilance de l'équipe.

**Le délai de prise en charge**, tenu ou non. C'est le seul engagement que je signe, donc le premier à mesurer.

**Le coût par environnement.** La facture totale ne dit rien ; le coût par environnement dit quelle décision l'a produite.

## Ce qui ne l'est pas

**Une astreinte 24/7 en solo.** Un engagement de nuit permanente suppose une rotation. Une personne seule qui promet une intervention à trois heures du matin prend un engagement qu'elle ne pourra pas tenir deux ans, et le client découvre la limite le jour de l'incident.

**Un délai de rétablissement garanti.** Sur un incident dont la cause est applicative, l'exploitant diagnostique et escalade, mais ne corrige pas le code. Promettre un temps de rétablissement revient à s'engager sur du travail qui dépend d'un tiers.

**Un objectif de disponibilité chiffré sans historique.** Annoncer 99,9 % suppose de connaître les points de défaillance et d'avoir mesuré. Un chiffre posé sans mesure est une promesse commerciale, pas un engagement technique.

## La formulation que j'utilise

Ce qui se contractualise proprement : un délai de prise en charge, une fenêtre d'intervention, un canal et un interlocuteur. La distinction est importante : on s'engage sur sa propre réaction, pas sur le résultat final, qui dépend d'éléments hors de son contrôle.

Le reste se traite en transparence avec le client. Une plateforme critique mérite une équipe avec rotation, ou un prestataire qui s'appuie sur un collectif. C'est d'ailleurs l'une des raisons pour lesquelles je travaille au sein de Cloud Partners plutôt que seul dans mon coin.

## Ce qui décide entre solo et collectif

Le critère n'est pas la taille de la plateforme, c'est la sensibilité de son indisponibilité. Un outil interne exploité en journée n'a pas besoin de rotation. Un service qui porte du chiffre d'affaires en a besoin, et il n'est pas honnête de prétendre le contraire.

C'est la question que je pose au cadrage : que se passe-t-il si la plateforme est indisponible une nuit entière ? Si la réponse est « on attend demain matin », le format diurne suffit. Si la réponse est « on perd des clients », il faut une équipe avec rotation — la mienne lorsque le périmètre le permet, ou celle d'un collectif sur lequel je m'appuie.

## Le signal d'alerte

Un prestataire qui accepte tout le périmètre sans discuter est un prestataire qui n'a pas lu le contrat. La conversation sur les limites fait partie de la prestation, et elle coûte moins cher avant la signature qu'après le premier incident.
