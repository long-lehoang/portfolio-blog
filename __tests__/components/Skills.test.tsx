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
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("DevOps & Tools")).toBeInTheDocument();
    expect(screen.getByText("Other")).toBeInTheDocument();
  });

  it("renders individual skills", () => {
    render(<Skills />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });
});
