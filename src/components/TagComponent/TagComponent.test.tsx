import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TagComponent from "./TagComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("TagComponent", () => {
  it("renders correctly with text", () => {
    const testText = "Test Tag";
    const { getByText } = render(
      renderWithTheme(<TagComponent text={testText} variant="dark" />)
    );
    expect(getByText(testText)).toBeInTheDocument();
  });
});
