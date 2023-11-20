import { render } from "@testing-library/react";
import CounterComponent from "./CounterComponent";
import { describe, it, expect } from "vitest";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("CounterComponent", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      renderWithTheme(
        <CounterComponent
          increaseFunction={() => {}}
          decreaseFunction={() => {}}
          counter={0}
        />
      )
    );

    expect(getByText("0")).toBeInTheDocument();
  });
});
