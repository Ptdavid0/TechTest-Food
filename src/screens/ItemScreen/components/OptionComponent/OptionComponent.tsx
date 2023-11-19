import React from "react";

import CounterComponent from "../../../../components/CounterComponent/CounterComponent";
import { FieldValues, UseFormRegister } from "react-hook-form";
import OptionNameComponent from "../OptionNameComponent/OptionNameComponent";
import OptionPriceComponent from "../OptionPriceComponent/OptionPriceComponent";
import { useTicket } from "../../../../contexts/TicketContext/TicketContext";

import { Container, LeftContainer } from "./styles";

interface OptionInterface {
  option: Options;
  type: string;
  sectionName: string;
  register: UseFormRegister<FieldValues>;
}

const OptionComponent: React.FC<OptionInterface> = ({
  option,
  type,
  sectionName,
  register,
}) => {
  const registrationKey = `${type.toLowerCase()} - ${sectionName}`;
  const { updateSelection, currentTicket } = useTicket();

  const handleCounterChange = (newQuantity: number) => {
    updateSelection(
      "COUNTER",
      sectionName,
      option.name,
      newQuantity,
      option.discountPrice ?? option.price
    );
  };

  const handleRadioCheckboxChange = (event: {
    target: { checked: any; type: string };
  }) => {
    const isChecked = event.target.checked;
    const optionType = event.target.type.toUpperCase();
    updateSelection(
      optionType,
      sectionName,
      option.name,
      isChecked,
      option.discountPrice ?? option.price
    );
  };

  const optionType: any = {
    COUNTER: (
      <CounterComponent
        counter={
          currentTicket?.selections?.[sectionName]?.[option.name]?.quantity ?? 0
        }
        increaseFunction={() => handleCounterChange(1)}
        decreaseFunction={() => handleCounterChange(-1)}
      />
    ),
    RADIO: (
      <input
        type="radio"
        {...register(registrationKey)}
        value={option.name}
        onChange={handleRadioCheckboxChange}
      />
    ),
    CHECKBOX: (
      <input
        type="checkbox"
        {...register(registrationKey)}
        value={option.name}
        onChange={handleRadioCheckboxChange}
      />
    ),
  };

  return (
    <Container>
      <LeftContainer>
        {optionType[type]}
        <OptionNameComponent
          name={option.name}
          discountPrice={option.discountPrice}
        />
      </LeftContainer>
      <OptionPriceComponent option={option} />
    </Container>
  );
};

export default OptionComponent;
