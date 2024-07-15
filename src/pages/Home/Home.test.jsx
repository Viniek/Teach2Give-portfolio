import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Home from './Home';

describe('Home', () => {
  it('renders Home component with correct content', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/Hi, I am John, Creative Technologist/i);
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/Download Resume/i);
    expect(buttonElement).toBeInTheDocument();

  });
});
