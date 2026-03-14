import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Skills from "@/components/Skills";

describe("Skills", () => {
  it("renders the Skills heading", () => {
    render(<Skills />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("renders skill categories", () => {
    render(<Skills />);
    expect(screen.getByText("Programming Languages")).toBeInTheDocument();
    expect(screen.getByText("Backend & Cloud")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
    expect(screen.getByText("System Design")).toBeInTheDocument();
  });

  it("renders individual skills", () => {
    render(<Skills />);
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getByText("Golang")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });
});
