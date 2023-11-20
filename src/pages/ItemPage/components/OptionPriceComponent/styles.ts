import styled from "styled-components";

import { pxToRem } from "@utils/styles";

export const OptionValueText = styled.span`
  color: ${({ theme }) => theme.colors.Purple500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${pxToRem(14)};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${pxToRem(19)};
`;

export const SaleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const InitialSaleText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[12]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
`;

export const SaleValueText = styled.span`
  color: ${({ theme }) => theme.colors.Green500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${pxToRem(19)};
`;
