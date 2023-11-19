import React from "react";

import { useTicket } from "@contexts/TicketContext/TicketContext";

import CounterComponent from "@components/CounterComponent/CounterComponent";
import OptionNameComponent from "../OptionNameComponent/OptionNameComponent";
import OptionPriceComponent from "../OptionPriceComponent/OptionPriceComponent";
import RadioButtonComponent from "@components/RadioButtonComponent/RadioButtonComponent";

import { Container, LeftContainer } from "./styles";
interface OptionInterface {
  uiType: string;
  option: Options;
  sectionName: string;
  isAddition?: boolean;
  displayPrice?: boolean | undefined;
  selectedOption?: any;
  onRadioChange: (value: any) => void;
}

const OptionComponent: React.FC<OptionInterface> = ({
  uiType,
  option,
  sectionName,
  isAddition = false,
  displayPrice = false,
  onRadioChange,
  selectedOption,
}) => {
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
    if (optionType === "RADIO") onRadioChange(option.name);

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
      <RadioButtonComponent
        value={option.name}
        onChange={handleRadioCheckboxChange}
        checked={selectedOption === option.name}
      />
    ),
    CHECKBOX: (
      <input
        type="checkbox"
        value={option.name}
        onChange={handleRadioCheckboxChange}
      />
    ),
  };

  return (
    <Container>
      <LeftContainer>
        {optionType[uiType]}
        <OptionNameComponent
          name={option.name}
          discountPrice={option.discountPrice}
        />
      </LeftContainer>
      <OptionPriceComponent
        option={option}
        displayPrice={displayPrice}
        isAddition={isAddition}
      />
    </Container>
  );
};

export default OptionComponent;
