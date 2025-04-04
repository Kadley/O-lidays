import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PropertyCard from '@/components/PropertyCard';
import { describe, expect, test } from 'vitest';

const mockProperty = {
  id: 1,
  title: 'Appartement cosy',
  location: 'Lille, France',
  description: 'Proche du centre-ville et très lumineux.',
  image: 'photo.jpg',
  priceByNight: 100,
  maxPersons: 2,
  commentsCount: 5,
  avgRating: 4.2,
};

describe('PropertyCard', () => {
  test('affiche le titre et la localisation', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={mockProperty} />
      </MemoryRouter>
    );

    const titleLocationText = screen.getByText(/Appartement cosy - Lille, France/i);
    expect(titleLocationText.textContent).toBe('Appartement cosy - Lille, France');
  });

  test('affiche la description', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={mockProperty} />
      </MemoryRouter>
    );

    const description = screen.getByText(/Proche du centre-ville et très lumineux./i);
    expect(description.textContent).toBe('Proche du centre-ville et très lumineux.');
  });

  test('affiche le bouton de détails', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={mockProperty} />
      </MemoryRouter>
    );

    const button = screen.getByRole('link');
    expect(button.textContent?.toLowerCase()).toContain('voir le détail');
  });
});
