import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  padding: ${pxToRem(24)} ${pxToRem(132)};
  border: 0.063rem solid ${({ theme }) => theme.colors.Neutrals100};

  @media screen and (${devices.laptop}) {
    padding: ${pxToRem(24)} ${pxToRem(66)};
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const SectionName = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals900};
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SectionDescription = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: Nunito;
  font-size: ${pxToRem(12)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: ${pxToRem(60)};
  flex-wrap: wrap;
  margin-top: 1rem;

  @media screen and (${devices.laptop}) {
    gap: ${pxToRem(30)};
  }

  @media screen and (${devices.tablet}) {
    gap: 0;
    justify-content: space-between;
  }
`;
