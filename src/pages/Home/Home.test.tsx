
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from ".";

describe("Render Home", () => {
  it("should be render", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Feed")).toBeInTheDocument();
  });

  it("should be render", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Feed")).toBeVisible();
  });
});
