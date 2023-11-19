import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  padding: ${pxToRem(24)} ${pxToRem(84)};

  @media screen and (${devices.laptop}) {
    padding: ${pxToRem(24)} ${pxToRem(42)};
  }
`;

export const CompanyNameText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals900};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[24]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${pxToRem(24)};
  padding: 0 ${pxToRem(132)} ${pxToRem(24)} ${pxToRem(132)};

  > img {
    object-fit: contain;
    border-radius: 0.5rem;

    @media screen and (${devices.tablet}) {
      width: 100%;
    }
  }

  @media screen and (${devices.laptop}) {
    padding: 0 ${pxToRem(66)} ${pxToRem(24)} ${pxToRem(66)};
  }

  @media screen and (${devices.tablet}) {
    flex-wrap: wrap-reverse;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.375rem;

  @media screen and (${devices.tablet}) {
    width: 100%;
  }
`;

export const TopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const ItemNameText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals700};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[24]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
`;

export const ItemDescriptionText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[16]};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: normal;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const ItemPriceDescriptionText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[16]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
`;

export const ItemPriceText = styled.span`
  color: ${({ theme }) => theme.colors.Purple500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[16]};
  font-weight: 800;
  line-height: normal;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.5rem 0;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LeftQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const QuantityTitle = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals700};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[16]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const TotalDescriptionText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: ${pxToRem(19)};
`;

export const TotalPriceText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals700};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${pxToRem(19)};
`;
