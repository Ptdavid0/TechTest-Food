import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border: 0.0625rem solid ${({ theme }) => theme.colors.Neutrals200};
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
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: ${pxToRem(19)};

  opacity: 0.7;
`;
