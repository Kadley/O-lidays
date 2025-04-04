# MCD

Modélisation Conceptuelle des Données

- Entité
- Attribut
  - ON NE PARLE PAS D'ID / d'identifiant !!!!!
  - On aura une donnée discriminante que l'on souligne
- Relation
  - Cardinalité minimal (0 ou 1) et maximal (1 ou n)

## Exemple

[Un site ecommerce](https://www.mocodo.net/?mcd=eNpljksKgzAURedZRRYQSp06CxokoDHEOJZQbQlUY9MEuiXX4caa-muhs_t43HMuF2VaUxlDO0_XExytab12CA6mR-HSL4A5x0JSwiSCZwb5WlhygiXJSkEJONIOuig3TzdjdbewAMhpxkiTkiYpiwKzlPzTtkcMH14NTgfANgHUkua0Co5a7ALv9F0_leu8PdbO00fFcVWt9J8aglF0GMBXta01fa-GNmxtAxG8ATqQVzA=)

```mocodo
PRODUIT: réf. produit, nom, prix
APPARTIENT, 0N PRODUIT, 0N CATEGORIE
CATEGORIE: réf. catégorie, nom

LIGNE_DE_COMMANDE, 0N PRODUIT, 0N COMMANDE: quantité, prix

UTILISATEUR: réf. utilisateur, nom, prénom
PASSE, 0N UTILISATEUR, 11 COMMANDE
COMMANDE: réf. commande, date
```
