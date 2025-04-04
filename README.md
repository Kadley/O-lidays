# Challenge O'lidays

## Jour 6

### Étape 1 : Tester le composant `PropertyCard`

- Créer un fichier `PropertyCard.test.tsx` dans le dossier `src/components/tests`.
- Tester le composant `PropertyCard` en vérifiant que les informations de la propriété sont bien affichées.
  - Le titre + location est affiché
  - La description est affichée
  - Le bouton pour afficher les détails de la propriété est affiché

## Jour 5

### Étape 1 : Validation du formulaire de connexion

- En s'inspirant du formulaire de création de comptes, ajouter la validation sur le formulaire de connexion.
- Utiliser @tanstack/form avec zod pour gérer les erreurs du formulaire ainsi que l'état du bouton de validation.
- [Compte utilisateur de démonstration](./docs/compte-utilisateur-demo.md)

### Étape 2 : Liste de mes propriétés

- Créer un composant `MyProperties` qui va afficher la liste de mes propriétés.
- Récupérer les données depuis l'[API](https://api-olidays.quentinlogie.fr/docs#tag/property/GET/api/v1/account/properties).
- Utiliser `@tanstack/react-query` pour récupérer les données.
- (Bonus) Ajouter un skeleton de chargement pendant le chargement des données.

### Étape 3 (Bonus) : Création de propriétés

- Créer un composant `CreateProperty` qui va afficher le formulaire de création de propriétés.
- Ajouter une route sur l'url `/account/property/create` pour afficher le composant `CreateProperty`.
- Ajouter le service pour l'appel API de création de propriété.
- Créer un hook custom `useCreateProperty` qui utilise la fonction de création de propriété avec `@tanstack/react-query`.
- Ne pas hésiter à regarder la documentation de l'[API](https://api-olidays.quentinlogie.fr/docs#tag/property/POST/api/v1/properties) pour savoir quels sont les champs nécessaires.
- Dans un 1er temps, mettre le type de propriété en dur (ex: 'HOUSE').
- Faite attention au type de `priceByNight` et `maxPersons`. (Créer un composant `FormFieldNumber` pour gérer les champs de type number).


## Jour 4

### Étape 1 : Page de création de comptes

- Créer un composant `CreateAccount`.
- Ajouter une route sur l'url `/signup` pour afficher le composant `CreateAccount`.

### Étape 2 : Formulaire de création de comptes

- Créer un formulaire de création de comptes (en s'inspirant du formulaire de connexion) avec les champs suivants :
- Nom
- Email
- Mot de passe
- A la soumission du formulaire, récupérer les données du formulaire.

### Étape 3 : Appel de l'API

- Ajouter la fonction dans le service `auth` pour créer un compte utilisateur.
- Créer un hook custom `useCreateAccount` qui utilise la fonction de création de comptes avec `@tanstack/react-query`.
- Utiliser le hook `useCreateAccount` pour créer un compte utilisateur dans le composant `CreateAccount` lorsque le formulaire est soumis.
- (Bonus) Gérer la désactivation du bouton de soumission lorsque le formulaire est soumis

### Étape 4 (Méga Bonus) : Gestion avancée des formulaires

- Utiliser @tanstack/form avec zod pour gérer les erreurs du formulaire ainsi que l'état du bouton de validation.
  - S'inspirer de la correction du kanbanv2 pour son utilisation.
  - Ou de l'exemple de la [documentation](https://tanstack.com/form/latest/docs/framework/react/examples/query-integration)

## Jour 3

### Étape 1 : Installation du Router

- Installer React Router en mode Déclarative [voir la doc](https://reactrouter.com/home)
- Utiliser le composant MainLayout comme composant parent de toutes les pages.
- Ajouter une route sur l'url `/` pour afficher le composant `Home`.

### Étape 2 : Création de la page de détail d'une propriété

- Créer un composant `PropertyDetail` qui affiche les détails d'une propriété.
- Ajouter une route sur l'url `/property/:id` pour afficher le composant `PropertyDetail`.
- Ajouter des liens depuis la page d'accueil vers la page de détail d'une propriété. (Utiliser le composant `Link` de React Router pour créer des liens vers la page de détail d'une propriété).

### Étape 3 : Affichage des détails d'une propriété

- Récupérer l'id de la propriété dans l'url. (Utiliser le hook `useParams` de React Router pour récupérer l'id de la propriété dans l'url).
- Créer la fonction appelant l'API pour récupérer les détails d'une propriété depuis le service `property`.
  - [Documentation de l'API](https://api-olidays.quentinlogie.fr/docs#tag/property/GET/api/v1/properties/{id})
- Créer un hook custom `useProperty` qui utilise la fonction de récupération des détails d'une propriété avec `@tanstack/react-query`.
- Utiliser le hook `useProperty` pour récupérer les détails d'une propriété dans le composant `PropertyDetail`.

### Étape 4 (Bonus) : Affichage des photos d'une propriété

- Créer un composant `PropertyImage` qui affichera les photos.
- Utiliser le composant `Carousel` de shadcn pour afficher les photos d'une propriété. [https://ui.shadcn.com/docs/components/carousel](https://ui.shadcn.com/docs/components/carousel)
  - Afficher 2 photos à la fois.

### Étape 5 (Bonus) : Affichage des avis d'une propriété

- Afficher en bas de la page les avis d'une propriété.
  - Créer un composant `Review` qui affiche un avis.

## Jour 2

- Initialiser un nouveau projet React / TypeScript avec biomejs comme linter (ne pas oublier le script `lint`)
- Mettre en place la CI avec Github Actions
- Déploiement sur un Github Pages
- D'abord on déploie en privée puis on passe en public lorsque ça fonctionne

> IMPORTANT !
>
> Faite attention à bien activer le Github Pages sur les Github Actions
>
> Settings > Pages > Build and deployment > Source > Github Actions

## Jour 1

Conception d'un site de réservation de logement entre particulier.

[Cahier des charges](./docs/cahier-des-charges.md)

En suivant le cahier des charges faires les diagrammes suivant :

- MCD
- Diagramme de cas d'utilisation
- Diagramme de séquence
  - La prise de réservation
- Diagramme d'activité
  - La prise de réservation
- Diagramme de déploiement
