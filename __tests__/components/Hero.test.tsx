import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero />);
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Hero />);
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
  });

  it("renders Download CV button", () => {
    render(<Hero />);
    expect(screen.getByText("Download CV")).toBeInTheDocument();
  });

  it("renders Contact Me button", () => {
    render(<Hero />);
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });
});
