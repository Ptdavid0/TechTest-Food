import { devices } from "@utils/styles";
import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.Neutrals100};
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
`;

export const CopyrigthText = styled.span`
  font-size: ${({ theme }) => theme.fonts.styles[18]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: normal;
  color: ${({ theme }) => theme.colors.Purple700};

  @media screen and (${devices.mobileL}) {
    font-size: ${({ theme }) => theme.fonts.styles[14]};
  }

  @media screen and (${devices.mobileM}) {
    font-size: ${({ theme }) => theme.fonts.styles[12]};
  }
`;

export const MessageFromCompanyText = styled.span`
  font-size: 0.875rem;

  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: 1.188rem;
  color: ${({ theme }) => theme.colors.Purple700};

  @media screen and (${devices.mobileL}) {
    font-size: 0.75rem;
  }

  @media screen and (${devices.mobileM}) {
    font-size: 0.625rem;
  }
`;
