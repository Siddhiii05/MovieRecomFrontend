import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../Component/Footer';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer Component', () => {
  test('renders Footer component without crashing', () => {
    renderWithRouter(<Footer user={null} />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('displays social media links', () => {
    renderWithRouter(<Footer user={null} />);
    expect(screen.getByText(/instagram/i)).toBeInTheDocument();
  });

  test('renders search input', () => {
    renderWithRouter(<Footer user={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('displays copyright text', () => {
    renderWithRouter(<Footer user={null} />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
