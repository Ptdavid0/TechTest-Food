import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, test } from "vitest";
import ItemPage from "./ItemPage";
import * as TicketContextModule from "@contexts/TicketContext/TicketContext";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";
import mockData from "../../mock/data.json";

vi.mock("@contexts/TicketContext/TicketContext");
vi.mock("./components/ItemHeaderComponent/ItemHeaderComponent");
vi.mock("./components/SectionComponent/SectionComponent");
vi.mock("./components/ObservationComponent/ObservationComponent");
vi.mock("@components/DividerComponent/DividerComponent");

describe("ItemPage", () => {
  TicketContextModule.useTicket.mockReturnValue({
    currentItem: mockData,
  });

  test.skip("renders child components when currentItem is provided", () => {
    const { getAllByTestId, getByTestId } = render(
      renderWithTheme(<ItemPage />)
    );

    screen.debug();
    expect(getAllByTestId("section-component")).toHaveLength(2);
    expect(getByTestId("item-header-component")).toBeInTheDocument();
    expect(getByTestId("observation-component")).toBeInTheDocument();
  });

  it("returns null when there is no currentItem", () => {
    TicketContextModule.useTicket.mockReturnValue({
      currentItem: null,
    });
    const { container } = render(renderWithTheme(<ItemPage />));
    expect(container).toBeEmptyDOMElement();
  });
});
