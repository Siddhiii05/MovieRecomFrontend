import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../Pages/NotFound';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NotFound Page', () => {
  test('renders 404 page without crashing', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  test('displays page not found message', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  test('displays back to home button', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
