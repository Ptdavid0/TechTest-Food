import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OptionNameComponent from "./OptionNameComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("OptionNameComponent", () => {
  it("renders the name correctly", () => {
    const testName = "Option Name";
    const { getByText } = render(
      renderWithTheme(<OptionNameComponent name={testName} />)
    );
    expect(getByText(testName)).toBeInTheDocument();
  });

  it("renders CifraIcon when discountPrice is provided", () => {
    const { getByAltText } = render(
      renderWithTheme(<OptionNameComponent name="Option" discountPrice={100} />)
    );
    expect(getByAltText("Cifra")).toBeInTheDocument();
  });

  it("does not render CifraIcon when discountPrice is not provided", () => {
    const { queryByAltText } = render(
      renderWithTheme(<OptionNameComponent name="Option" />)
    );
    expect(queryByAltText("Cifra")).toBeNull();
  });
});
