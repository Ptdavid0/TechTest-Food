import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PlusButtonComponent from "./PlusButtonComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("PlusButtonComponent", () => {
  it("renders medium plus icon for MEDIUM size", () => {
    const { getByAltText } = render(
      renderWithTheme(
        <PlusButtonComponent increaseFunction={() => {}} size="MEDIUM" />
      )
    );
    expect(getByAltText("medium plus")).toBeInTheDocument();
  });

  it("renders large plus icon for LARGE size", () => {
    const { getByAltText } = render(
      renderWithTheme(
        <PlusButtonComponent increaseFunction={() => {}} size="LARGE" />
      )
    );
    expect(getByAltText("large plus")).toBeInTheDocument();
  });

  it("calls increaseFunction on click", () => {
    const increaseFunctionMock = vi.fn();
    const { getByTestId } = render(
      renderWithTheme(
        <PlusButtonComponent increaseFunction={increaseFunctionMock} />
      )
    );
    fireEvent.click(getByTestId("plus-button"));
    expect(increaseFunctionMock).toHaveBeenCalled();
  });

  it("does not call increaseFunction on click when disabled", () => {
    const increaseFunctionMock = vi.fn();
    const { getByTestId } = render(
      renderWithTheme(
        <PlusButtonComponent increaseFunction={increaseFunctionMock} disabled />
      )
    );
    fireEvent.click(getByTestId("plus-button"));
    expect(increaseFunctionMock).not.toHaveBeenCalled();
  });
});
