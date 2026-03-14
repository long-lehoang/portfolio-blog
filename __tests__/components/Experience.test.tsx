import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "@/components/Experience";

describe("Experience", () => {
  it("renders the Experience heading", () => {
    render(<Experience />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders all experience entries", () => {
    render(<Experience />);
    expect(screen.getByText("Senior Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Junior Developer")).toBeInTheDocument();
  });

  it("renders company names", () => {
    render(<Experience />);
    expect(screen.getByText("Company ABC")).toBeInTheDocument();
    expect(screen.getByText("Company XYZ")).toBeInTheDocument();
    expect(screen.getByText("Startup Inc")).toBeInTheDocument();
  });
});
