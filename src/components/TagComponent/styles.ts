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

  font-family: Nunito;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ variant }) => colorVariant[variant]};
`;
