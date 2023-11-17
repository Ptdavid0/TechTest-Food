import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
  padding: 24px 84px;
`;

export const CompanyNameText = styled.span`
  color: #202326;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 24px;
  padding: 0 132px 24px 132px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
`;

export const TopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemNameText = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemDescriptionText = styled.span`
  color: #6d6f73;
  font-family: Nunito;
  font-size: 16px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemPriceText = styled.span`
  color: #7b1fa2;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px 0;
`;

export const LeftQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const QuantityTitle = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: 16px;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
`;

export const TotalPriceText = styled.span`
  color: #393a3c;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
`;
