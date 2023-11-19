import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(16)};

  width: ${pxToRem(342)};
  padding: 0.25rem 0;

  @media screen and (${devices.tablet}) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
