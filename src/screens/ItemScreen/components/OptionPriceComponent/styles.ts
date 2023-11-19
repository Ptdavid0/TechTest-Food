import styled from "styled-components";

import { pxToRem } from "@utils/styles";

export const OptionValueText = styled.span`
  color: #7b1fa2;
  font-family: Nunito;
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 700;
  line-height: ${pxToRem(19)};
`;

export const SaleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InitialSaleText = styled.span`
  color: #6d6f73;
  font-family: Nunito;
  font-size: ${pxToRem(12)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SaleValueText = styled.span`
  color: #02a117;
  font-family: Nunito;
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 700;
  line-height: ${pxToRem(19)};
`;
