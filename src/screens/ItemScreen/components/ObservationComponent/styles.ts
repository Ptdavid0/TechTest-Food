import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${pxToRem(24)};
  border-top: 1px solid #eef0f5;
`;

export const TextArea = styled.textarea`
  width: 40%;
  border: 1px solid #cdd1d9;
  border-radius: 4px;
  padding: ${pxToRem(12)};

  font-family: Nunito;
  font-size: ${pxToRem(14)};
  font-style: normal;
  font-weight: 600;
  line-height: ${pxToRem(19)};

  @media screen and (${devices.laptop}) {
    width: 60%;
  }

  @media screen and (${devices.tablet}) {
    width: 80%;
  }
`;
