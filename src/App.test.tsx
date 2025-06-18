import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Chip Input App", () => {
  test("render input field", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Type something here...")
    ).toBeInTheDocument();
  });
});
