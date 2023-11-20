import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HeaderComponent from "./HeaderComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

// Mock the TicketContext
vi.mock("@contexts/TicketContext/TicketContext", () => ({
  useTicket: () => ({
    currentTicket: {
      id: 1,
      name: "Test",
      total: 10,
      quantity: 0,
      selections: {},
      observation: "",
    },
  }),
}));

describe("HeaderComponent", () => {
  it("renders logo and location information", () => {
    const { getByAltText } = render(renderWithTheme(<HeaderComponent />));
    expect(getByAltText("Aiqfome Logo")).toBeInTheDocument();
    expect(getByAltText("Location")).toBeInTheDocument();
  });

  it('always renders the search input and "entrar" button', () => {
    const { getByPlaceholderText, getByText } = render(
      renderWithTheme(<HeaderComponent />)
    );
    expect(
      getByPlaceholderText("busque pela loja ou culinária")
    ).toBeInTheDocument();
    expect(getByText("entrar")).toBeInTheDocument();
  });
});
