import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FooterComponent from "./FooterComponent";
import { renderWithTheme } from "src/tests/helpers/renderWithTheme";

describe("FooterComponent", () => {
  it("renders without crashing", () => {
    const { container } = render(renderWithTheme(<FooterComponent />));
    expect(container).toBeDefined();
  });

  it("includes the message from the company", () => {
    const { getByText } = render(renderWithTheme(<FooterComponent />));
    expect(getByText(/feito com 💜 em maringá-PR/i)).toBeInTheDocument();
  });

  it("includes the correct copyright text", () => {
    const { getByText } = render(renderWithTheme(<FooterComponent />));
    expect(
      getByText(
        /aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786\/0001-58/i
      )
    ).toBeInTheDocument();
  });
});
