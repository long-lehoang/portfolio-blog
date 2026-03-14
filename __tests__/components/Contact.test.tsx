import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "@/components/Contact";

describe("Contact", () => {
  it("renders the Get In Touch heading", () => {
    render(<Contact />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("renders social link labels", () => {
    render(<Contact />);
    expect(screen.getByText("github")).toBeInTheDocument();
    expect(screen.getByText("linkedin")).toBeInTheDocument();
    expect(screen.getByText("twitter")).toBeInTheDocument();
    expect(screen.getByText("email")).toBeInTheDocument();
  });
});
