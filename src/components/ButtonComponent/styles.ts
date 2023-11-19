import styled from "styled-components";

import theme from "src/theme/theme";
import { pxToRem } from "@utils/styles";

const backgroundVariant = {
  success: theme.colors.Teal400,
  neutral: theme.colors.Neutrals500,
  clear: theme.colors.Purple50,
};

const colorVariant = {
  success: theme.colors.Neutrals0,
  neutral: theme.colors.Neutrals0,
  clear: theme.colors.Purple500,
};

export const Container = styled.button<{
  variant: "success" | "neutral" | "clear";
  icon?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(10)};

  border-radius: 0.5rem;
  padding: ${({ icon }) =>
    icon ? "0.5rem 1.5rem 0.5rem 1rem;" : "0.5rem 1.5rem"};
  background-color: ${({ variant }) => backgroundVariant[variant]};
  border: none;
  outline: none;
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${theme.fonts.styles[16]};
  font-weight: ${theme.fonts.weight.bold};
  line-height: normal;
  color: ${({ variant }) => colorVariant[variant]};
`;
