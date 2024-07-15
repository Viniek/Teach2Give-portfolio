import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders Footer component with correct content", () => {
    render(<Footer />);

   
    const facebookIcon = screen.getByLabelText(/Facebook/i);
    expect(facebookIcon).toBeInTheDocument();

    const instagramIcon = screen.getByLabelText(/Instagram/i);
    expect(instagramIcon).toBeInTheDocument();

    const twitterIcon = screen.getByLabelText(/Twitter/i);
    expect(twitterIcon).toBeInTheDocument();

    const githubIcon = screen.getByLabelText(/Github/i);
    expect(githubIcon).toBeInTheDocument();

    const copyrightText = screen.getByText(/© 2023 All rights reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
