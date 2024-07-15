import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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


    const imageElement = screen.getByAltText('john');
    expect(imageElement).toBeInTheDocument();


    const recentPostsHeading = screen.getByText(/Recent posts/i);
    expect(recentPostsHeading).toBeInTheDocument();

   
    const firstPostHeading = screen.getByText(/Making a design system from scratch/i);
    expect(firstPostHeading).toBeInTheDocument();

   
    const secondPostHeading = screen.getByText(/Creating pixel perfect icons in Figma/i);
    expect(secondPostHeading).toBeInTheDocument();
  });
});
