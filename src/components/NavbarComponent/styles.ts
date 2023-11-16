import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #7b1fa2;
  padding: 12px 84px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;
