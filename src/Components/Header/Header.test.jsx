import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Header", () => {
  it("renders navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    // Check if links are present in the document
    
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const worksLink = screen.getByText(/Works/i);
    expect(worksLink).toBeInTheDocument();

    const blogLink = screen.getByText(/Blog/i);
    expect(blogLink).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
  });
});
