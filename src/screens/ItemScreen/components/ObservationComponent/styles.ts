import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${pxToRem(24)};
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.Neutrals100};
`;

export const TextArea = styled.textarea`
  width: 40%;
  border: 0.0625rem solid ${({ theme }) => theme.colors.Neutrals200};
  border-radius: 0.25rem;
  padding: ${pxToRem(12)};

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: ${pxToRem(19)};

  @media screen and (${devices.laptop}) {
    width: 60%;
  }

  @media screen and (${devices.tablet}) {
    width: 80%;
  }
`;
