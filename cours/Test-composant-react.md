# Test des composants React

Pour faire des tests, on va utiliser un test runner qui s'appelle [Vitest](https://vitest.dev/).

Il permet d'exécuter les tests de notre application.

Il exécutera tous les fichiers contenant `.test` ou `.spec` dans le nom du fichier ayant pour extension `.js`, `.ts`, `.jsx` ou `.tsx`.

## Écriture d'un test

Les tests unitaires se font en exécutant une fonction et en vérifiant que le résultat est celui attendu.

```ts
const addition = (a: number, b: number) => a + b;
```

```ts
import { describe, it, expect } from 'vitest';
// On récupère la fonction addition
import { addition } from './addition';

// On regroupe les tests dans une suite (describe)
describe('addition', () => {
  // On définis ce qu'est censé faire le test
  it('should return 3 when adding 1 and 2', () => {
    // On exécute la fonction addition
    const result = addition(1, 2);
    // On vérifie que le résultat est celui attendu
    expect(result).toBe(3);
  });

  it('should return -1 when adding -2 and 1', () => {
    const result = addition(-2, 1);
    expect(result).toBe(-1);
  });
});
```

## Le soucis avec les librairies front

Les librairies front comme React, Vue ou Angular sont des librairies qui manipulent le DOM.
Le DOM n'existe pas dans un environnement Node.js.

Il faut donc simuler le DOM pour pouvoir exécuter les tests.

On utilisera ici `happy-dom` qui est une librairie qui simule le DOM dans un environnement Node.js.

```bash
pnpm add -D happy-dom
```

## Configuration de Vitest

On va configurer Vitest pour qu'il utilise `happy-dom` comme simulateur de DOM.

Dans le fichier `vite.config.ts`, on va ajouter la configuration suivante :

```ts
// On ajoute le type de vitest dans la config de vite
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';


export default defineConfig({
  test: {
    environment: 'happy-dom',
  },
});
```

## Pour tester un composant React

On va installer la librairie `@testing-library/react` qui permet de tester les composants React.

```bash
pnpm install --save-dev @testing-library/react @testing-library/dom

# On vérifie qu'il y a bien les types de React et React-dom d'installés sinon
pnpm add -D @types/react @types/react-dom
```

### Configuration

Les composants qui vont être tester vont être ajouter dans un DOM. Il faut à la fin de chaque test remettre le DOM dans son état initial.

On ajoute un fichier de config qui automatisera ça.
```ts
// src/tests/setup.ts
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Après chaque test, je nettoie le DOM => je retire tout ce qui a été ajouté
afterEach(() => {
  cleanup();
});
```

On va dire à vitest d'utiliser ce fichier de config avant d'exécuter les tests.

```ts
// vite.config.ts
// ...
export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.ts'],
  },
})
```

### Exemple de test

On va vérifier si le titre dans mon composant s'affiche bien.

```tsx
// src/components/HelloName.tsx
export default function HelloName({name}: {name: string}) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
```

```tsx
// src/components/tests/HelloName.test.tsx
import { render, screen } from '@testing-library/react';

describe('HelloName', () => {
  it('should render the name', () => {
    // On crée un élément dans le DOM
    render(<HelloName name="John" />);

    // On récupère l'élément dans le DOM
    const title = screen.getByRole('heading');
    // On vérifie que le texte est bien présent dans le DOM
    expect(title).toBeTruthy();

    const title = screen.getByText('Hello John');
    // On vérifie que le texte est bien présent dans le DOM
    expect(title).toBeTruthy();
  });
});
```

## Exécuter les tests

Ajouter dans les scripts du package.json

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

Les exécuter avec la commande suivante :

```bash
pnpm test
```
