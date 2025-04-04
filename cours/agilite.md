# Métodes Agiles

## 🔄 Principe général de la gestion de projet Agile

Au lieu de tout planifier et concevoir au début, on avance par petites étapes (itérations), en livrant régulièrement des versions fonctionnelles du produit. L'objectif est de réduire les risques, maximiser la valeur métier, et s'adapter rapidement aux changements.

### 📐 Les piliers de l'Agilité (selon le Manifeste Agile)

- Individus et interactions plus que processus et outils
- Logiciel opérationnel plus que documentation exhaustive
- Collaboration avec le client plus que négociation contractuelle
- Réponse au changement plus que suivi d’un plan

### 🧱 Organisation d’un projet Agile (ex : Scrum)

1. Vision produit

- Portée par le Product Owner
- Définition des grands objectifs métier, utilisateurs, ou stratégiques

2. Backlog produit

- Liste priorisée de fonctionnalités ou de besoins utilisateur appelés user stories
- Évolue tout au long du projet

3. Sprints (itérations)

- Durée fixe (souvent 1 à 4 semaines)
- Objectif : livrer un incrément fonctionnel, testé, prêt à être utilisé
- On planifie, conçoit, développe, teste et livre dans le même sprint

4. Cérémonies clés (Scrum)

| Cérémonie            | Objectif                                                    |
| -------------------- | ----------------------------------------------------------- |
| Sprint Planning      | Planifier le contenu du sprint à venir                      |
| Daily Scrum          | Stand-up quotidien de 15 min pour synchroniser l'équipe     |
| Sprint Review        | Démonstration du produit à la fin du sprint (retour client) |
| Sprint Retrospective | Analyse collective pour améliorer les pratiques de l’équipe |

5. Rôles dans une équipe Scrum

| Rôle          | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| Product Owner | Porte la vision produit, priorise le backlog, représente le client   |
| Scrum Master  | Garant de la méthode, facilite les rituels, supprime les obstacles   |
| Développeurs  | L’équipe auto-organisée qui conçoit, code, teste et livre le produit |

### 🧭 Philosophie Agile : Adaptation en continu

- Le plan évolue constamment en fonction des retours utilisateurs.
- On priorise ce qui a le plus de valeur métier.
- On ne cherche pas la perfection d’emblée, mais l’amélioration continue.

### ✅ Avantages de l’Agilité

- Livraison rapide de valeur (early feedback)
- Très bonne réactivité aux changements
- Implication forte du client
- Meilleure qualité produit grâce aux retours fréquents
- Favorise l’auto-organisation et la motivation de l’équipe

### ⚠️ Limites ou risques

- Moins adapté aux projets avec cahier des charges figé (secteurs très réglementés)
- Demande un engagement fort du client
- Risque de dérive si la vision produit n’est pas claire

## Diverses méthodes Agiles

### 🧩 1. Scrum – La plus populaire

🔹 Principe :
Organisation du travail en sprints (itérations de 1 à 4 semaines), avec des rôles, des rituels et un backlog priorisé.

🔹 Rôles :
Product Owner

Scrum Master

Équipe de développement

🔹 Cérémonies clés :
Sprint Planning

Daily Scrum (stand-up)

Sprint Review

Sprint Retrospective

➡️ Adaptée aux équipes produit / développement logiciel.

### 🗂️ 2. Kanban – Flux continu et visualisation

🔹 Principe :
Travail géré en flux continu, avec un tableau de tâches (To Do / Doing / Done), sans itération fixe.

🔹 Concepts :
WIP (Work in Progress) limité

Tirage des tâches (« pull system »)

Amélioration continue

➡️ Adapté aux équipes de support, maintenance, ou projets changeants.

### 🧪 3. Extreme Programming (XP) – Agilité technique

🔹 Principe :
Méthode très centrée sur les bonnes pratiques de développement logiciel.

🔹 Pratiques clés :
Développement itératif

Tests automatisés (TDD)

Intégration continue (CI)

Pair programming

Refactoring continu

➡️ Très utilisée dans les équipes de dev avec des exigences de qualité logicielle élevées.

### 🛠️ 4. Lean Software Development

🔹 Principe :
Inspiré du Lean Manufacturing (Toyota), vise à éliminer les gaspillages, accélérer les flux, maximiser la valeur.

🔹 7 principes clés :
Éliminer les gaspillages

Amplifier l’apprentissage

Décider le plus tard possible

Livrer le plus rapidement possible

Responsabiliser l’équipe

Intégrer la qualité

Voir le tout comme un système global

➡️ Très utile en gestion de portefeuille ou en coaching agile.

### 📊 5. Crystal

🔹 Principe :
Méthode légère et adaptable en fonction de la taille et de la criticité du projet (Crystal Clear, Crystal Yellow, Orange…).

➡️ Approche pragmatique, orientée sur la communication. Peu utilisée mais conceptuellement intéressante.

### 🧱 6. Feature-Driven Development (FDD)

🔹 Principe :
Méthode structurée autour du développement de fonctionnalités métier concrètes. Chaque fonctionnalité suit un cycle de conception et de construction.

➡️ Appropriée pour des projets complexes orientés objet.

### 🧭 7. DSDM (Dynamic Systems Development Method)

🔹 Principe :
Méthode agile « entreprise ready », avec gouvernance complète. Vise à livrer rapidement des systèmes métiers.

➡️ Utilisée pour des projets avec fortes exigences de gouvernance (cadres publics, grandes entreprises).

### 🧱 8. SAFe (Scaled Agile Framework) – Agilité à l’échelle

🔹 Principe :
Framework pour déployer l’Agilité à l’échelle de l’entreprise ou de grands programmes.

🔹 Concepts :
Agile Release Train

PI Planning (Program Increment Planning)

Coordination entre équipes agiles

➡️ Adapté aux grandes organisations avec des dizaines d’équipes.

### 🧠 9. Spotify Model – Culture agile autonome

🔹 Principe :
Pas une méthode formelle mais une organisation en squads, tribes, chapters et guilds, favorisant l’autonomie et l’innovation.

➡️ Très influent pour les structures d’équipes tech modernes.

### 🧮 Résumé des méthodes agiles

| Méthode       | Type                | Itérative | Flux continu | Cible principale            |
| ------------- | ------------------- | --------- | ------------ | --------------------------- |
| Scrum         | Cadre de travail    | ✅        | ❌           | Dév produit logiciel        |
| Kanban        | Système visuel      | ❌        | ✅           | Support, flux, opérationnel |
| XP            | Technique           | ✅        | ❌           | Dév logiciel exigeant       |
| Lean          | Philosophie         | ✅        | ✅           | Amélioration globale        |
| Crystal       | Méthode adaptable   | ✅        | ❌           | Projets de tailles variées  |
| FDD           | Méthode structurée  | ✅        | ❌           | Projets orientés objets     |
| DSDM          | Méthode complète    | ✅        | ❌           | Projets complexes métier    |
| SAFe          | Framework d’échelle | ✅        | ❌           | Grandes organisations       |
| Spotify Model | Organisation        | ✅        | ✅           | Startups / scale-ups        |
