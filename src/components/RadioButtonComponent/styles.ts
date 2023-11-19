import styled from "styled-components";

import RadioSVGClicked from "../../assets/icons/radioActive.svg?react";
import RadioSVGNotClicked from "../../assets/icons/radioDisabled.svg?react";

export const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
`;

export const StyledRadioSVGClicked = styled(RadioSVGClicked)`
  width: 20px;
  height: 20px;
`;

export const StyledRadioSVGNotClicked = styled(RadioSVGNotClicked)`
  width: 20px;
  height: 20px;
`;
