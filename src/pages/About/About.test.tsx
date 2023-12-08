/*  @vitest-environment jsdom
 */
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from ".";
import { BrowserRouter } from "react-router-dom";

it("the title is visible", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  const text = screen.queryByText(/Video explicativo:/i);
  expect(text).toBeVisible();
});

it("search test", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText("Video explicativo:")).toBeInTheDocument();
});

it("render name developer", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(
    screen.getByText("Criado pelo Desenvolvedor Alec Lima.")
  ).toBeInTheDocument();
});

it("render name developer", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(
    screen.getByText("Criar post")
  ).toBeInTheDocument();
});

