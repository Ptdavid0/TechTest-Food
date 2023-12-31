import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.Purple500};
  padding: ${pxToRem(12)} ${pxToRem(84)};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  > img {
    @media screen and (${devices.mobileL}) {
      width: ${pxToRem(50)};
      height: ${pxToRem(50)};
    }
  }

  @media screen and (${devices.laptop}) {
    padding: ${pxToRem(12)} ${pxToRem(42)};
  }

  @media screen and (${devices.laptop}) {
    justify-content: space-between;
  }

  @media screen and (${devices.mobileL}) {
    padding: ${pxToRem(12)} ${pxToRem(42)};
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2.5rem;
  width: 33%;

  @media screen and (${devices.tablet}) {
    width: auto;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${pxToRem(24)};
  width: 33%;

  @media screen and (${devices.tablet}) {
    gap: ${pxToRem(12)};
    width: 100%;
  }

  @media screen and (${devices.mobileL}) {
    display: none;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${pxToRem(8)};

  @media screen and (${devices.laptop}) {
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
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${pxToRem(19)};
`;

export const AddressButton = styled.button`
  color: ${({ theme }) => theme.colors.Neutrals0};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[18]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
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

export const SearchWrapper = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${devices.tablet}) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: ${pxToRem(420)};
  border: 0.0625rem solid ${({ theme }) => theme.colors.Neutrals200};
  border-radius: ${pxToRem(8)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Neutrals0};
  padding: ${pxToRem(8)} 0;
`;

export const Icon = styled.img`
  margin-left: ${pxToRem(12)};
  margin-right: ${pxToRem(8)};
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 90%;

  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: ${pxToRem(19)};

  opacity: 0.7;
`;
