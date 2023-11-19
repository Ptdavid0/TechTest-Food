import styled from "styled-components";

import theme from "src/theme/theme";

const backgroundVariant = {
  dark: theme.colors.Neutrals700,
  light: theme.colors.Neutrals0,
};

const colorVariant = {
  dark: theme.colors.Neutrals0,
  light: theme.colors.Neutrals700,
};

export const Container = styled.div<{
  variant: "dark" | "light";
}>`
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: ${({ variant }) => backgroundVariant[variant]};

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${theme.fonts.styles[12]};
  font-weight: ${theme.fonts.weight.bold};
  line-height: normal;
  color: ${({ variant }) => colorVariant[variant]};
`;
