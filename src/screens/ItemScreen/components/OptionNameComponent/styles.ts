import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const NameText = styled.span`
  color: ${({ theme }) => theme.colors.Neutrals500};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: 400;
  line-height: ${pxToRem(19)};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  > img {
    width: 100%;
    object-fit: contain;

    @media screen and (${devices.tablet}) {
      width: 1.25rem;
    }
  }
`;
