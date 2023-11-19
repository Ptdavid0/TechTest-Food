import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.section`
  padding: ${pxToRem(24)} ${pxToRem(132)};

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
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[16]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
`;

export const SectionDescription = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[12]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
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
