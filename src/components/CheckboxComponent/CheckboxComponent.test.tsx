import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CheckboxComponent from "./CheckboxComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("CheckboxComponent", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      renderWithTheme(
        <CheckboxComponent value="test" onChange={() => {}} checked={false} />
      )
    );
    expect(getByRole("checkbox")).toBeDefined();
  });

  it("renders StyledCheckboxSVGClicked when checked is true", () => {
    const { container } = render(
      renderWithTheme(
        <CheckboxComponent value="test" onChange={() => {}} checked={true} />
      )
    );
    expect(container.querySelector("StyledCheckboxSVGClicked")).toBeDefined();
  });

  it("renders StyledCheckboxSVGNotClicked when checked is false", () => {
    const { container } = render(
      renderWithTheme(
        <CheckboxComponent value="test" onChange={() => {}} checked={false} />
      )
    );
    expect(
      container.querySelector("StyledCheckboxSVGNotClicked")
    ).toBeDefined();
  });

  it("calls onChange when clicked", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      renderWithTheme(
        <CheckboxComponent
          value="test"
          onChange={onChangeMock}
          checked={false}
        />
      )
    );
    fireEvent.click(getByRole("checkbox"));
    expect(onChangeMock).toHaveBeenCalled();
  });
});
