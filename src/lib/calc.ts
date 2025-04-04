export function randomHelloOrGoodbye(): string {
  if (Math.random() > 0.5) {
    return 'Hello';
  }
  return 'Goodbye';
}

export function isMoreThanTen(num: number): boolean {
  if (num > 10) {
    return true;
  }

  return false;
}
