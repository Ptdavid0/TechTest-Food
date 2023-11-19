import React from "react";
import {
  RadioInput,
  RadioWrapper,
  StyledRadioSVGClicked,
  StyledRadioSVGNotClicked,
} from "./styles";

interface RadioButtonComponentInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RadioButtonComponent: React.FC<RadioButtonComponentInterface> = ({
  value,
  onChange,
  checked,
}) => {
  return (
    <RadioWrapper>
      <RadioInput
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {checked ? <StyledRadioSVGClicked /> : <StyledRadioSVGNotClicked />}
    </RadioWrapper>
  );
};

export default RadioButtonComponent;
