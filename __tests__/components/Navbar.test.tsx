import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the Portfolio brand", () => {
    render(<Navbar />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders theme toggle buttons", () => {
    render(<Navbar />);
    const toggles = screen.getAllByLabelText("Toggle theme");
    expect(toggles.length).toBeGreaterThanOrEqual(1);
  });

  it("renders mobile menu toggle", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });
});
