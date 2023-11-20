import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import OptionPriceComponent from "./OptionPriceComponent";
import * as TicketContextModule from "@contexts/TicketContext/TicketContext";
import * as numberUtils from "@utils/numberUtils";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

// Mock  TicketContext and numberUtils modules
vi.mock("@contexts/TicketContext/TicketContext", () => ({
  useTicket: vi.fn(),
}));

vi.mock("@utils/numberUtils", () => ({
  formatNumberToCurrency: vi.fn(),
}));

describe("OptionPriceComponent", () => {
  TicketContextModule.useTicket.mockReturnValue({ currentTicket: {} });

  numberUtils.formatNumberToCurrency.mockImplementation(
    (num: number) => `$${num}`
  );

  it("renders nothing when displayPrice is false", () => {
    const option = { name: "Test", price: 100 };
    const { container } = render(
      renderWithTheme(
        <OptionPriceComponent option={option} displayPrice={false} />
      )
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("renders formatted price", () => {
    const option = { name: "Test", price: 100 };
    const { getByText } = render(
      renderWithTheme(
        <OptionPriceComponent option={option} displayPrice={true} />
      )
    );
    expect(getByText("$100")).toBeInTheDocument();
  });

  it("renders discounted price and initial price", () => {
    const option = { name: "Test", price: 150, discountPrice: 100 };
    const { getByText } = render(
      renderWithTheme(
        <OptionPriceComponent option={option} displayPrice={true} />
      )
    );
    expect(getByText("de $150 por")).toBeInTheDocument();
    expect(getByText("$100")).toBeInTheDocument();
  });

  it("calculates price correctly for counter options", () => {
    const option = { name: "Test", price: 50 };
    const mockSelections = {
      someSection: {
        Test: { quantity: 2 },
      },
    };

    TicketContextModule.useTicket.mockReturnValue({
      currentTicket: { selections: mockSelections },
    });

    const { getByText } = render(
      renderWithTheme(
        <OptionPriceComponent
          option={option}
          displayPrice={true}
          isCounter={true}
          sectionName="someSection"
        />
      )
    );

    expect(getByText("$100")).toBeInTheDocument();
  });
});
