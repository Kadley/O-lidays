# CI / CD

- CI : Continuous Integration => Integration continue
- CD : Continuous Deployment => Déploiement continu

Le principe est d'automatiser le plus possible les tests et le déploiement de l'application.

CI = On déploiement sur un environnement de test
CD = On déploiement sur un environnement de production

Le déploiement s'effectue lorsqu'un commit est effectué sur la branche principale (main ou master dans le cas d'un CD, ou sur dev dans le cas d'un CI).

## Outils

- Jenkins
- Gitlab CI
- Github Actions
- Travis CI

On va utiliser aujourd'hui Github Actions pour faire du CI/CD.

## Info pratique

Lorsque l'on fait du CI/CD on met presque systématiquement en place des tests unitaires et d'intégration.
Lorsqu'on utilise typescript, on met également en place une validation des types.
