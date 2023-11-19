import React from "react";

import { useForm } from "react-hook-form";

import {
  RadioInput,
  RadioWrapper,
  StyledRadioSVGClicked,
  StyledRadioSVGNotClicked,
} from "./styles";

interface RadioButtonComponentInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
  registrationKey: string;
}

const RadioButtonComponent: React.FC<RadioButtonComponentInterface> = ({
  register,
  registrationKey,
  value,
  onChange,
}) => {
  const { watch } = useForm();
  const watchedValue = watch(registrationKey);
  console.log("watchedValue", watchedValue);
  return (
    <RadioWrapper>
      <RadioInput
        type="radio"
        {...register(registrationKey)}
        value={value}
        onChange={onChange}
      />
      {watchedValue === value ? (
        <StyledRadioSVGClicked />
      ) : (
        <StyledRadioSVGNotClicked />
      )}
    </RadioWrapper>
  );
};

export default RadioButtonComponent;
