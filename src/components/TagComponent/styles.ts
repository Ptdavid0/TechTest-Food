import styled from "styled-components";

const backgroundVariant = {
  dark: "#393A3C",
  light: "#FFFFFF",
};

const colorVariant = {
  dark: "#FFFFFF",
  light: "#393A3C",
};

export const Container = styled.div<{
  variant: "dark" | "light";
}>`
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${({ variant }) => backgroundVariant[variant]};

  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ variant }) => colorVariant[variant]};
`;
