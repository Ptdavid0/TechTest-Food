import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MinusButtonComponent from "./MinusButtonComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("MinusButtonComponent", () => {
  it("renders medium minus icon for MEDIUM size", () => {
    const { getByAltText } = render(
      renderWithTheme(
        <MinusButtonComponent decreaseFunction={() => {}} size="MEDIUM" />
      )
    );
    expect(getByAltText("medium minus")).toBeInTheDocument();
  });

  it("renders large minus icon for LARGE size", () => {
    const { getByAltText } = render(
      renderWithTheme(
        <MinusButtonComponent decreaseFunction={() => {}} size="LARGE" />
      )
    );
    expect(getByAltText("large minus")).toBeInTheDocument();
  });

  it("calls decreaseFunction on click when not disabled", () => {
    const decreaseFunctionMock = vi.fn();
    const { getByTestId } = render(
      renderWithTheme(
        <MinusButtonComponent decreaseFunction={decreaseFunctionMock} />
      )
    );
    fireEvent.click(getByTestId("minus-button"));
    expect(decreaseFunctionMock).toHaveBeenCalled();
  });

  it("does not call decreaseFunction on click when disabled", () => {
    const decreaseFunctionMock = vi.fn();
    const { getByRole } = render(
      renderWithTheme(
        <MinusButtonComponent
          decreaseFunction={decreaseFunctionMock}
          disabled
        />
      )
    );
    fireEvent.click(getByRole("button"));
    expect(decreaseFunctionMock).not.toHaveBeenCalled();
  });
});
