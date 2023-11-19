import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${pxToRem(8)};

  @media screen and (${devices.mobileL}) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`;

export const DeliveryText = styled.span`
  color: ${({ theme }) => theme.colors.Purple50};
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 700;
  line-height: ${pxToRem(19)};
`;

export const AddressButton = styled.button`
  color: ${({ theme }) => theme.colors.Neutrals0};
  font-family: Nunito;
  font-size: ${pxToRem(18)};
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
  gap: 0.25rem;
`;
