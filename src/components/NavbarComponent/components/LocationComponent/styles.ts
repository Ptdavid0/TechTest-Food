import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const DeliveryText = styled.span`
  color: #eecffc;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
`;

export const AddressButton = styled.button`
  color: #ffffff;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
