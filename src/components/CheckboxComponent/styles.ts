import styled from "styled-components";

import checkboxSVGClicked from "../../assets/icons/checkboxActive.svg?react";
import checkboxSVGNotClicked from "../../assets/icons/checkboxDisabled.svg?react";

export const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
`;

export const StyledCheckboxSVGClicked = styled(checkboxSVGClicked)`
  width: 20px;
  height: 20px;
`;

export const StyledCheckboxSVGNotClicked = styled(checkboxSVGNotClicked)`
  width: 20px;
  height: 20px;
`;
