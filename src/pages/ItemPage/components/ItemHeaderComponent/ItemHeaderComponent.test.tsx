import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ItemHeaderComponent from "./ItemHeaderComponent";
import * as TicketContextModule from "@contexts/TicketContext/TicketContext";
import * as numberUtils from "@utils/numberUtils";

import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

vi.mock("@contexts/TicketContext/TicketContext");
vi.mock("@utils/numberUtils");
vi.mock("@components/CounterComponent/CounterComponent");
vi.mock("@components/ButtonComponent/ButtonComponent");

describe("ItemHeaderComponent", () => {
  const mockItem = {
    company: { name: "Company Name" },
    item: {
      name: "Item Name",
      initialPrice: 100,
      description: "Item Description",
    },
  };
  const mockTicket = {
    quantity: 2,
    total: 200,
  };

  TicketContextModule.useTicket.mockReturnValue({
    currentItem: mockItem,
    currentTicket: mockTicket,
    increaseTicketQuantity: vi.fn(),
    decreaseTicketQuantity: vi.fn(),
  });

  numberUtils.formatNumberToCurrency.mockImplementation(
    (num: number) => `$${num}`
  );

  it("renders company and item information correctly", () => {
    const { getByText, getByAltText } = render(
      renderWithTheme(<ItemHeaderComponent />)
    );
    expect(getByText("Company Name")).toBeInTheDocument();
    expect(getByText("Item Name")).toBeInTheDocument();
    expect(getByText("Item Description")).toBeInTheDocument();
    expect(getByText("a partir de")).toBeInTheDocument();
    expect(getByText("$100")).toBeInTheDocument();
    expect(getByAltText("Item Name")).toBeInTheDocument();
  });

  it("does not render total container if quantity is 0", () => {
    TicketContextModule.useTicket.mockReturnValue({
      ...TicketContextModule.useTicket(),
      currentTicket: { ...mockTicket, quantity: 0 },
    });

    const { queryByText } = render(renderWithTheme(<ItemHeaderComponent />));
    expect(queryByText("total")).not.toBeInTheDocument();
    expect(queryByText("$200")).not.toBeInTheDocument();
  });

  it("render total container if quantity is greater than 0", () => {
    TicketContextModule.useTicket.mockReturnValue({
      ...TicketContextModule.useTicket(),
      currentTicket: { ...mockTicket, quantity: 1 },
    });

    const { queryByText } = render(renderWithTheme(<ItemHeaderComponent />));
    expect(queryByText("total")).toBeInTheDocument();
    expect(queryByText("$200")).toBeInTheDocument();
  });
});
