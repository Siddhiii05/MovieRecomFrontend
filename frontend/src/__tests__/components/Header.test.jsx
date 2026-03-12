import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../Component/Header';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header Component', () => {
  test('renders Header component without crashing', () => {
    renderWithRouter(<Header user={null} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('displays login button when user is null', () => {
    renderWithRouter(<Header user={null} />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('displays user profile when user is provided', () => {
    const mockUser = { name: 'Test User', profilePic: 'http://example.com/pic.jpg' };
    renderWithRouter(<Header user={mockUser} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  test('renders search input field', () => {
    renderWithRouter(<Header user={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header user={null} />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
