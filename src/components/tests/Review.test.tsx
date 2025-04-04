import { describe, it, expect } from 'vitest';
import Review from '../Review';
import { render, screen } from '@testing-library/react';
import type { IComment } from '@/@types/property';

describe('Review Component', () => {
  it('should render the review component with correct props', () => {
    const reviewComment: IComment = {
      id: 1,
      comment: 'Great property!',
      rating: 5,
      createdAt: new Date('2023-10-01').toISOString(),
      updatedAt: new Date('2023-10-01').toISOString(),
      propertyId: 1,
      userId: 1,
      status: 'approved',
    };

    // Je vais générer mon composant dans le DOM
    render(<Review comment={reviewComment} />);

    // Je vais chercher mon élément dans le DOM
    const elm = screen.getByText(reviewComment.comment);

    // Est-ce que mon élément existe ?
    expect(elm).toBeTruthy();
    // Est-ce que mon élément à bien la balise p ?
    expect(elm.tagName).toBe('P');
  });
});
