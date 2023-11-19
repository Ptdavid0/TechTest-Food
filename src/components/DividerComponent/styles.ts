import styled from "styled-components";

export const Container = styled.div<{
  color: string;
}>`
  width: 100%;
  height: 4px;
  background-color: ${({ color }) => color};
`;
