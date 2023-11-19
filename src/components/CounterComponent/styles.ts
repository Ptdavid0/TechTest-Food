import { devices } from "@utils/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const QuantityText = styled.span<{
  size: "MEDIUM" | "LARGE";
}>`
  color: ${({ theme }) => theme.colors.Neutrals900};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ size, theme }) =>
    size === "MEDIUM" ? theme.fonts.styles[14] : theme.fonts.styles[16]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${({ size }) => (size === "MEDIUM" ? "1.188rem" : "normal")};

  padding: 0 0.5rem;
`;

export const TrashButton = styled.button`
  display: flex;

  background-color: ${({ theme }) => theme.colors.Transparent};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;

  > img {
    width: 100%;
    object-fit: contain;
    @media screen and (${devices.laptop}) {
      width: 80%;
    }
  }
`;
