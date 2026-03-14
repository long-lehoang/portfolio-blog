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
    expect(screen.getByText("Backend Engineer")).toBeInTheDocument();
    expect(screen.getByText("Technical Lead")).toBeInTheDocument();
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
  });

  it("renders company names", () => {
    render(<Experience />);
    expect(screen.getByText("Flodesk")).toBeInTheDocument();
    expect(screen.getAllByText("FPT Software").length).toBeGreaterThan(0);
    expect(screen.getByText("KMS Technology")).toBeInTheDocument();
  });
});
