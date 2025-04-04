import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import PropertyDetail from '@/pages/PropertyDetail';
import { describe, expect, test, vi } from 'vitest';

// ✅ MOCK de useProperty avec champ `comment`
vi.mock('@/hooks/query/property', () => ({
  useProperty: () => ({
    status: 'success',
    data: {
      id: 1,
      title: 'Villa test',
      location: 'Nice',
      description: 'Superbe maison de test',
      files: [
        { id: 1, url: 'photo1.jpg' },
        { id: 2, url: 'photo2.jpg' },
      ],
      comments: [
        {
          id: 1,
          comment: 'Top !',
          rating: 4,
          propertyId: 1,
          userId: 1,
          status: 'published',
          createdAt: '2024-04-01',
          updatedAt: '2024-04-01',
        },
        {
          id: 2,
          comment: 'Très agréable',
          rating: 5,
          propertyId: 1,
          userId: 2,
          status: 'published',
          createdAt: '2024-04-02',
          updatedAt: '2024-04-02',
        },
      ],
    },
  }),
}));

describe('PropertyDetail', () => {
  test('affiche les informations de la propriété et les commentaires', () => {
    render(
      <MemoryRouter initialEntries={['/property/1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Villa test/i)).toBeTruthy();
    expect(screen.getByText(/Superbe maison de test/i)).toBeTruthy();
    expect(screen.getByText('Top !')).toBeTruthy();
    expect(screen.getByText('Très agréable')).toBeTruthy();
    expect(screen.getByText(/Commentaires/i)).toBeTruthy();
  });
});
