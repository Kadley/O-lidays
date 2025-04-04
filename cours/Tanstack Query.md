# Tanstack Query

## But

Le but n'est pas de faire les requêtes à notre place, mais c'est de facilité la gestion des états de nos requêtes.
Il va nous permettre également de gérer le cache de nos requêtes, de les annuler, de les mettre à jour, etc.

## Architecture

- Nos services
  - Des fonctions asynchrone qui s'occupent de faire les appels à nos API. (ici on utilise axios)
- Nos composants
  - Ils utiliseront Tanstack Query avec les fonctions de services pour récupérer les données et les stocker dans des variables d'état.
- Par la suite, on va créer nos propres hooks pour encapsuler la logique de Tanstack Query et de nos services.

## Installation / Configuration

```bash
pnpm install @tanstack/react-query
```

```tsx
// main.tsx
// On encapsule notre application dans le composant QueryClientProvider
// Cela va nous permettre de partager le cache entre tous nos composants
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
```

## Utilisation

```tsx
// App.tsx
import { useQuery } from '@tanstack/react-query'
import { propertyService } from './services/property.ts'

function App() {
  const { data, error, status } = useQuery({
    // On lui donne une clé unique pour identifier la requête
    queryKey: ['properties'],
    queryFn: propertyService.getAllProperties,
  });

  // Les données retournées par notre fonction passée dans queryFn
  // sont stockées dans data
  // `status` va nous permettre de savoir où nous en sommes dans notre requête (`pending` / `error` / `success`)
  // `error` va contenir l'erreur si la requête échoue
}
```
