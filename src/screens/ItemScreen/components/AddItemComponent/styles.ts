import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const QuantityText = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  padding: 0 8px;
`;

export const TrashButton = styled.button`
  display: flex;

  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
`;
