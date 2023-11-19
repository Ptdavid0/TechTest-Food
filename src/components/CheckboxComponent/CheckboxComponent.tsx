import React from "react";
import {
  CheckboxInput,
  CheckboxWrapper,
  StyledCheckboxSVGClicked,
  StyledCheckboxSVGNotClicked,
} from "./styles";

interface CheckboxComponentInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CheckboxComponent: React.FC<CheckboxComponentInterface> = ({
  value,
  onChange,
  checked,
}) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {checked ? <StyledCheckboxSVGClicked /> : <StyledCheckboxSVGNotClicked />}
    </CheckboxWrapper>
  );
};

export default CheckboxComponent;
