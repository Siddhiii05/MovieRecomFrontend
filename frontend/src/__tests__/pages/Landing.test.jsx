import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Landing from '../../Pages/Landing';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Landing Page', () => {
  test('renders Landing page without crashing', () => {
    renderWithRouter(<Landing funcNav={() => {}} />);
    expect(screen.getByText(/movie/i)).toBeInTheDocument();
  });

  test('displays welcome message', () => {
    renderWithRouter(<Landing funcNav={() => {}} />);
    const welcomeElements = screen.getAllByText(/welcome/i);
    expect(welcomeElements.length).toBeGreaterThan(0);
  });

  test('renders call to action buttons', () => {
    renderWithRouter(<Landing funcNav={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
