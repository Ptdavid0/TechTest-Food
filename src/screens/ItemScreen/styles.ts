import styled from "styled-components";

export const Container = styled.div<{
  marginTop?: number | null;
}>`
  background-color: #fff;
  width: 100%;
  height: 100%;

  margin-top: ${({ marginTop = 0 }) => marginTop}px;
`;
