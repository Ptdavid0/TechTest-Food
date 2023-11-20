import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RadioButtonComponent from "./RadioButtonComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("RadioButtonComponent", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      renderWithTheme(
        <RadioButtonComponent
          value="test"
          onChange={() => {}}
          checked={false}
        />
      )
    );
    expect(getByRole("radio")).toBeDefined();
  });

  it("renders StyledRadioSVGClicked when checked is true", () => {
    const { container } = render(
      renderWithTheme(
        <RadioButtonComponent value="test" onChange={() => {}} checked={true} />
      )
    );
    expect(container.querySelector("StyledRadioSVGClicked")).toBeDefined();
  });

  it("renders StyledRadioSVGNotClicked when checked is false", () => {
    const { container } = render(
      renderWithTheme(
        <RadioButtonComponent
          value="test"
          onChange={() => {}}
          checked={false}
        />
      )
    );
    expect(container.querySelector("StyledRadioSVGNotClicked")).toBeDefined();
  });

  it("calls onChange when clicked", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      renderWithTheme(
        <RadioButtonComponent
          value="test"
          onChange={onChangeMock}
          checked={false}
        />
      )
    );
    fireEvent.click(getByRole("radio"));
    expect(onChangeMock).toHaveBeenCalled();
  });
});
