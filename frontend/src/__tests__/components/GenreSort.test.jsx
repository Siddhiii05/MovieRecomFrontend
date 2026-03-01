import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GenreSort from '../../Component/GenreSort';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('GenreSort Component', () => {
  test('renders GenreSort component without crashing', () => {
    renderWithRouter(<GenreSort />);
    expect(screen.getByText(/genre/i)).toBeInTheDocument();
  });

  test('displays genre buttons', () => {
    renderWithRouter(<GenreSort />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders multiple genre options', () => {
    renderWithRouter(<GenreSort />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
