import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border: 0.063rem solid ${({ theme }) => theme.colors.Neutrals200};
  border-radius: ${pxToRem(8)};
  width: ${pxToRem(340)};
  background-color: ${({ theme }) => theme.colors.Neutrals0};
  padding: ${pxToRem(8)} 0;

  @media screen and (${devices.tablet}) {
    display: none;
  }
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
  font-family: Nunito;
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 600;
  line-height: ${pxToRem(19)};

  opacity: 0.7;
`;
