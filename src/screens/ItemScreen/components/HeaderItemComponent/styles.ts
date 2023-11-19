import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #eef0f5;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: ${pxToRem(24)} ${pxToRem(84)};

  @media screen and (${devices.laptop}) {
    padding: ${pxToRem(24)} ${pxToRem(42)};
  }
`;

export const CompanyNameText = styled.span`
  color: #202326;
  font-family: Nunito;
  font-size: ${pxToRem(24)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${pxToRem(24)};
  padding: 0 ${pxToRem(132)} ${pxToRem(24)} ${pxToRem(132)};

  > img {
    object-fit: contain;
    border-radius: 8px;

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
  gap: 6px;

  @media screen and (${devices.tablet}) {
    width: 100%;
  }
`;

export const TopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemNameText = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: ${pxToRem(24)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemDescriptionText = styled.span`
  color: #6d6f73;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ItemPriceDescriptionText = styled.span`
  color: #6d6f73;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemPriceText = styled.span`
  color: #7b1fa2;
  font-family: Nunito;
  font-size: ${pxToRem(16)};
  font-style: normal;
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
  gap: 6px;
`;

export const QuantityTitle = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const TotalDescriptionText = styled.span`
  color: #6d6f73;
  font-family: Nunito;
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 600;
  line-height: ${pxToRem(19)};
`;

export const TotalPriceText = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 700;
  line-height: ${pxToRem(19)};
`;
