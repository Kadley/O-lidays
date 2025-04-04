# 🔁 Principe général du cycle en V

Le cycle en V est un modèle séquentiel qui se lit comme un "V" :

La branche gauche du V correspond aux phases de conception et de spécification.

La pointe du V correspond à la réalisation (développement / construction).

La branche droite correspond aux phases de tests et de validation, qui font écho aux étapes de conception.

Chaque étape de la branche gauche a une étape miroir sur la branche droite.

## 📊 Les grandes étapes du cycle en V

1. Expression des besoins / Cahier des charges

- Objectif : Comprendre ce que le client/utilisateur attend du système ou produit.
- Livrable : Cahier des charges fonctionnel.

2. Spécifications fonctionnelles

- Description de ce que le système doit faire (sans dire comment).
- Livrable : Spécifications fonctionnelles détaillées.

3. Spécifications techniques

- Traduction fonctionnelle en termes techniques : architecture logicielle, choix technologiques, etc.
- Livrable : Dossier d’architecture, documentation technique.

4. Conception détaillée

- Modélisation fine (ex : schémas UML, base de données, APIs…).
- Livrable : Dossier de conception détaillée.

5. Développement / Réalisation

- Construction du système conformément aux spécifications.

## ✅ Phases de validation (branche droite)

6. Tests unitaires

- Vérifient que chaque composant développé fonctionne individuellement.
- Fait par les développeurs.

7. Tests d’intégration

- Vérifient que les modules interagissent correctement entre eux.

8. Tests de validation (fonctionnelle)

- Vérifient que le produit correspond aux spécifications fonctionnelles.
- Fait par l’équipe QA ou la MOA.

9. Recette utilisateur (Vérification / Homologation)

- Vérifie que le produit répond au besoin exprimé initialement.
- Fait avec ou par le client/utilisateur.

## ⚙️ Caractéristiques du cycle en V

- Séquentiel : chaque phase commence après la fin de la précédente.
- Documentation très présente : chaque phase produit des livrables formels.
- Peu de retours en arrière : une fois une étape validée, on évite de la revisiter.
- Tests planifiés dès la conception : on sait dès le départ comment on va valider le système.

## 📌 Avantages

- Clarté des étapes.
- Bonne traçabilité.
- Très adapté aux environnements réglementés.
- Contrôle fort de la qualité.

## ⚠️ Inconvénients

- Faible flexibilité face aux changements.
- Temps long avant de livrer un premier résultat visible.
- Risque d’effet tunnel : peu de retour client en cours de développement.
