import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Après chaque test, je nettoie le DOM => je retire tout ce qui a été ajouté
afterEach(() => {
  cleanup();
});
