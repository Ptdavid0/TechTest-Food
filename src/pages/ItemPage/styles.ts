import styled from "styled-components";

export const Container = styled.div<{
  margintop?: number | null;
}>`
  background-color: ${({ theme }) => theme.colors.Neutrals0};
  width: 100%;
  height: 100%;

  margin-top: ${({ margintop = 0 }) => margintop}px;
`;
