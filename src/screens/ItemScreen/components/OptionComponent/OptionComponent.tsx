import React from "react";

import { useTicket } from "@contexts/TicketContext/TicketContext";

import CounterComponent from "@components/CounterComponent/CounterComponent";
import OptionNameComponent from "../OptionNameComponent/OptionNameComponent";
import OptionPriceComponent from "../OptionPriceComponent/OptionPriceComponent";
import RadioButtonComponent from "@components/RadioButtonComponent/RadioButtonComponent";

import { Container, LeftContainer } from "./styles";
import CheckboxComponent from "@components/CheckboxComponent/CheckboxComponent";
interface OptionInterface {
  uiType: string;
  option: Options;
  sectionName: string;
  isAddition?: boolean;
  displayPrice?: boolean | undefined;
  onSelectionChange: (
    sectionOptionKey: string,
    value: any,
    isCheckbox?: boolean
  ) => void;
  selections: { [key: string]: any };
}

const OptionComponent: React.FC<OptionInterface> = ({
  uiType,
  option,
  sectionName,
  isAddition = false,
  displayPrice = false,
  onSelectionChange,
  selections,
}) => {
  const { updateSelection, currentTicket } = useTicket();

  const sectionOptionKey = `${sectionName}-${option.name}`;

  const isSelected = () => {
    if (uiType === "CHECKBOX") {
      const key = `${sectionName}-${option.name}`;
      return selections[key]?.includes(option.name) ?? false;
    } else {
      // For radio buttons, the section name is sufficient to identify the selected option
      return selections[sectionName] === option.name;
    }
  };

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

    if (optionType === "RADIO") {
      // Use 'sectionName' for radio buttons
      onSelectionChange(sectionName, option.name);
    } else if (optionType === "CHECKBOX") {
      // Use 'sectionOptionKey' for checkboxes
      onSelectionChange(sectionOptionKey, option.name, true);
    }

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
        checked={isSelected()}
      />
    ),
    CHECKBOX: (
      <CheckboxComponent
        value={option.name}
        onChange={handleRadioCheckboxChange}
        checked={isSelected()}
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
        sectionName={sectionName}
        isCounter={uiType === "COUNTER"}
      />
    </Container>
  );
};

export default OptionComponent;
