import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ObservationComponent from "./ObservationComponent";
import * as TicketContextModule from "@contexts/TicketContext/TicketContext";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

vi.mock("@contexts/TicketContext/TicketContext", () => ({
  useTicket: vi.fn(),
}));

describe("ObservationComponent", () => {
  it("renders text area with correct placeholder", () => {
    TicketContextModule.useTicket.mockReturnValue({
      currentTicket: { observation: "" },
      handleObservation: vi.fn(),
    });

    const { getByPlaceholderText } = render(
      renderWithTheme(<ObservationComponent />)
    );

    expect(
      getByPlaceholderText(/alguma observação do item?/i)
    ).toBeInTheDocument();
  });

  it("displays current observation from context", () => {
    const mockObservation = "Extra cheese";
    TicketContextModule.useTicket.mockReturnValue({
      currentTicket: { observation: mockObservation },
      handleObservation: vi.fn(),
    });

    const { getByDisplayValue } = render(
      renderWithTheme(<ObservationComponent />)
    );

    expect(getByDisplayValue(mockObservation)).toBeInTheDocument();
  });

  it("calls handleObservation on text change", () => {
    const handleObservationMock = vi.fn();
    TicketContextModule.useTicket.mockReturnValue({
      currentTicket: { observation: "" },
      handleObservation: handleObservationMock,
    });

    const { getByPlaceholderText } = render(
      renderWithTheme(<ObservationComponent />)
    );

    const textArea = getByPlaceholderText(/alguma observação do item?/i);
    fireEvent.change(textArea, { target: { value: "No onions" } });

    expect(handleObservationMock).toHaveBeenCalledWith("No onions");
  });
});
