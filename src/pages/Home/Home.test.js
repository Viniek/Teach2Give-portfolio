import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('renders Home component with correct content', () => {
  render(<Home />);

  // Check if the heading is rendered
  const headingElement = screen.getByText(/Hi, I am John, Creative Technologist/i);
  expect(headingElement).toBeInTheDocument();

  // Check if the paragraph is rendered
  const paragraphElement = screen.getByText(/Amet minim mollit non deserunt/i);
  expect(paragraphElement).toBeInTheDocument();

  // Check if the button is rendered
  const buttonElement = screen.getByText(/Download Resume/i);
  expect(buttonElement).toBeInTheDocument();

  // Check if the image is rendered
  const imageElement = screen.getByAltText('john');
  expect(imageElement).toBeInTheDocument();

  // Check if the "Recent posts" section is rendered
  const recentPostsHeading = screen.getByText(/Recent posts/i);
  expect(recentPostsHeading).toBeInTheDocument();

  // Check if the first post is rendered
  const firstPostHeading = screen.getByText(/Making a design system from scratch/i);
  expect(firstPostHeading).toBeInTheDocument();

  // Check if the second post is rendered
  const secondPostHeading = screen.getByText(/Creating pixel perfect icons in Figma/i);
  expect(secondPostHeading).toBeInTheDocument();
});
