import { render, fireEvent } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";
import { describe, it, expect, vi } from "vitest";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("ButtonComponent", () => {
  it("renders correctly with text", () => {
    const { getByText } = render(
      renderWithTheme(<ButtonComponent text="Click Me" variant="neutral" />)
    );
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  it("renders an icon when provided", () => {
    const iconPath = "path/to/icon.svg";
    const { getByAltText } = render(
      renderWithTheme(
        <ButtonComponent text="Icon Button" icon={iconPath} variant="neutral" />
      )
    );
    expect(getByAltText("Button Icon")).toBeInTheDocument();
    expect(getByAltText("Button Icon").getAttribute("src")).toBe(iconPath);
  });

  it("does not render an icon when not provided", () => {
    const { queryByAltText } = render(
      renderWithTheme(<ButtonComponent text="No Icon" variant="neutral" />)
    );
    expect(queryByAltText("Button Icon")).toBeNull();
  });

  it("calls onClick when clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      renderWithTheme(
        <ButtonComponent
          text="Clickable"
          variant="neutral"
          onClick={onClickMock}
        />
      )
    );
    fireEvent.click(getByText("Clickable"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
