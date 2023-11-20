import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SectionComponent from "./SectionComponent";
import TagComponent from "@components/TagComponent/TagComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

// Mock TagComponent
vi.mock("@components/TagComponent/TagComponent");

describe("SectionComponent", () => {
  const mockSection = {
    name: "Section Name",
    description: "Section Description",
    required: true,
    options: [
      { name: "Option1", price: 1 },
      { name: "Option2", price: 3 },
    ],
    type: "RADIO",
    isAddition: false,
    singlePriced: false,
  };

  it("renders section name and description", () => {
    const { getByText } = render(
      renderWithTheme(<SectionComponent section={mockSection} />)
    );
    expect(getByText("Section Name")).toBeInTheDocument();
    expect(getByText("Section Description")).toBeInTheDocument();
  });

  it('renders "obrigatório" tag when section is required', () => {
    render(renderWithTheme(<SectionComponent section={mockSection} />));
    expect(TagComponent).toHaveBeenCalledWith(
      expect.objectContaining({ text: "obrigatório" }),
      expect.anything()
    );
  });
});
