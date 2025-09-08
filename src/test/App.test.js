import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders Near Me App link", () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Near Me App/i);
  expect(linkElement).toBeInTheDocument();
});
