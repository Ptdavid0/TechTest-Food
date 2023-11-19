import styled from "styled-components";

import { devices, pxToRem } from "../../utils/styles";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #7b1fa2;
  padding: ${pxToRem(12)} ${pxToRem(84)};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media screen and (${devices.laptop}) {
    padding: ${pxToRem(12)} ${pxToRem(42)};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${pxToRem(24)};

  @media screen and (${devices.laptop}) {
    gap: ${pxToRem(12)};
  }

  @media screen and (${devices.mobileM}) {
    display: none;
  }
`;
