import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 132px;
  border: 1px solid #eef0f5;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SectionName = styled.span`
  color: #202326;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SectionDescription = styled.span`
  color: #6d6f73;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 60px;

  margin-top: 16px;
`;
