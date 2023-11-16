import styled from "styled-components";

export const Container = styled.div<{
  marginTop?: number;
}>`
  background-color: #fff;
  width: 100%;
  height: 100%;

  margin-top: ${({ marginTop }) => marginTop || 0}px;
`;
