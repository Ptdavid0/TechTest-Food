import { devices } from "@utils/styles";
import styled from "styled-components";

export const Container = styled.footer`
  background-color: #eef0f5;
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
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #580f78;

  @media screen and (${devices.mobileL}) {
    font-size: 0.875rem;
  }

  @media screen and (${devices.mobileM}) {
    font-size: 0.75rem;
  }
`;

export const MessageFromCompanyText = styled.span`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.188rem;
  color: #580f78;

  @media screen and (${devices.mobileL}) {
    font-size: 0.75rem;
  }

  @media screen and (${devices.mobileM}) {
    font-size: 0.625rem;
  }
`;
