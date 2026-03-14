import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "@/components/About";

describe("About", () => {
  it("renders the About Me heading", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the bio text", () => {
    render(<About />);
    expect(screen.getByText(/Passionate about system design/)).toBeInTheDocument();
  });
});
