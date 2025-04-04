import { describe, expect, it } from 'vitest';
import { cn } from '../utils';

// Describe permet de regrouper les tests
// Par exemple, je peux regrouper les tests d'une fonction
describe('utils cn', () => {
  // it permet de définir / de décrire ce que je vais tester
  // Ici, je vérifie que la fonction cn renvoie une chaîne de caractères
  it('should return a string', () => {
    const result = cn('text-red-500', 'bg-blue-500');

    expect(result).toBeTypeOf('string');
  });

  // Je vais tester la fonction cn avec plusieurs classes
  it('should return a string with classes', () => {
    const result = cn('text-red-500', 'bg-blue-500', 'p-4');

    expect(result).toBe('text-red-500 bg-blue-500 p-4');
  });

  it('should return correct class when they change the same style', () => {
    const result = cn('text-red-500', 'text-blue-500');

    expect(result).toBe('text-blue-500');
  });
});
