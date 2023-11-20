import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import theme from "src/theme/theme";
import DividerComponent from "./DividerComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("DividerComponent", () => {
  it("renders correctly with default color", () => {
    const { container } = render(renderWithTheme(<DividerComponent />));
    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.Neutrals100}`
    );
  });

  it("renders correctly with custom color", () => {
    const customColor = "#FFFFFF";
    const { container } = render(
      renderWithTheme(<DividerComponent color={customColor} />)
    );
    expect(container.firstChild).toHaveStyle(
      `background-color: ${customColor}`
    );
  });
});
