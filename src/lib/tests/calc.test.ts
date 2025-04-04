import { describe, expect, it } from 'vitest';
import { isMoreThanTen, randomHelloOrGoodbye } from '../calc';

describe('utils calc', () => {
  describe('randomHelloOrGoodbye', () => {
    it('should return a string', () => {
      const result = randomHelloOrGoodbye();
      expect(result).toBeTypeOf('string');
    });
  });

  describe('isMoreThanTen', () => {
    it('should return true if number is more than 10', () => {
      const result = isMoreThanTen(11);
      expect(result).toBe(true);
    });

    it('should return true if number is more than 10', () => {
      const result = isMoreThanTen(5);
      expect(result).toBe(false);
    });
  });
});
