import React from "react";

import { formatNumberToCurrency } from "../../../../utils/numberUtils";
import CounterComponent from "../../../../components/CounterComponent/CounterComponent";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useTicket } from "../../../../contexts/TicketContext/TicketContext";

import CifraIcon from "../../../../assets/icons/cifra.svg";

import {
  Container,
  LeftContainer,
  NameText,
  OptionValueText,
  NameContainer,
  InitialSaleText,
  SaleContainer,
  SaleValueText,
} from "./styles";

interface OptionInterface {
  option: Options;
  type: string;
  sectionName: string;
  register: UseFormRegister<FieldValues>;
}

interface PriceInterface {
  option: Options;
}

interface OptionNameInterface {
  name: string;
  discountPrice?: number | null;
}

const PriceComponent: React.FC<PriceInterface> = ({ option }) => {
  return (
    <>
      {option.discountPrice ? (
        <SaleContainer>
          <InitialSaleText>
            de {formatNumberToCurrency(option.price ?? 0)} por{" "}
          </InitialSaleText>
          <SaleValueText>
            {formatNumberToCurrency(option.discountPrice ?? 0)}
          </SaleValueText>
        </SaleContainer>
      ) : (
        <>
          <OptionValueText>
            {formatNumberToCurrency(option.price ?? 0)}
          </OptionValueText>
        </>
      )}
    </>
  );
};

const OptionNameComponent: React.FC<OptionNameInterface> = ({
  name,
  discountPrice,
}) => {
  return (
    <NameContainer>
      {discountPrice ? <img src={CifraIcon} alt="Cifra" /> : null}
      <NameText>{name}</NameText>
    </NameContainer>
  );
};

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
      <PriceComponent option={option} />
    </Container>
  );
};

export default OptionComponent;
