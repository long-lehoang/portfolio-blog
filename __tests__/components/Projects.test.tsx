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
    expect(screen.getByText("Event Processing Fairness System")).toBeInTheDocument();
    expect(screen.getByText("Flodesk Remote MCP Server")).toBeInTheDocument();
    expect(screen.getByText("High-Speed Banking Data Migration Tool")).toBeInTheDocument();
    expect(screen.getByText("Healthcare Serverless Microservices")).toBeInTheDocument();
  });

  it("renders Code and Live Demo links", () => {
    render(<Projects />);
    const codeLinks = screen.getAllByText("Code");
    const demoLinks = screen.getAllByText("Live Demo");
    expect(codeLinks).toHaveLength(4);
    expect(demoLinks).toHaveLength(4);
  });
});
