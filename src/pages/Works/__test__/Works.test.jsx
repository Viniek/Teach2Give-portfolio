import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Works from "../Works";
import '@testing-library/jest-dom'; 

describe("Works", () => 
{
  it("renders an image element", () => {
    render(
      <MemoryRouter>
        <Works />
      </MemoryRouter>
    );

    const image= screen.getByAltText(/vibrantimg/i)
    expect(image).toBeInTheDocument();

  });

it("renders an image with the alt text designimg ",()=>
{
    render(<Works/>) 
    const image= screen.getByAltText(/designingimg/i)
    expect(image).toBeInTheDocument();
    
})
it ("renders an image with alt text malayamimg",()=>{
    render(<Works />)
    const image= screen.getByAltText(/malayamimg/i)
    expect(image).toBeInTheDocument();
})

it ("renders a header with the text works",()=>{
  render(<Works />)
  const header= screen.getByText(/Work/i)
  expect(header).toBeInTheDocument();
})

it ("renders a heading with the text Vibrant Potraits of 2020",()=>{
  render(<Works />)
  const heading= screen.getByText(/Vibrant Potraits of 2020/i)
  expect(heading).toBeInTheDocument();
})
});