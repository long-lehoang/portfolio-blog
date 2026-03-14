import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "@/components/Projects";

describe("Projects", () => {
  it("renders the Projects heading", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    render(<Projects />);
    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("Task Management App")).toBeInTheDocument();
    expect(screen.getByText("AI Content Generator")).toBeInTheDocument();
    expect(screen.getByText("Real-time Chat App")).toBeInTheDocument();
  });

  it("renders Code and Live Demo links", () => {
    render(<Projects />);
    const codeLinks = screen.getAllByText("Code");
    const demoLinks = screen.getAllByText("Live Demo");
    expect(codeLinks).toHaveLength(4);
    expect(demoLinks).toHaveLength(4);
  });
});
