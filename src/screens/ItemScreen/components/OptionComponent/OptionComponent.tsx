import React from "react";

import {
  Container,
  NameText,
  OptionValueText,
  NameContainer,
  InitialSaleText,
  SaleContainer,
  SaleValueText,
} from "./styles";

import { formatNumberToCurrency } from "../../../../utils/numberUtils";

import CifraIcon from "../../../../assets/icons/cifra.svg";

interface OptionInterface {
  option: Options;
}

interface OptionNameInterface {
  name: string;
  discountPrice?: number | null;
}

const PriceComponent: React.FC<OptionInterface> = ({ option }) => {
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

const OptionComponent: React.FC<OptionInterface> = ({ option }) => {
  return (
    <Container>
      <OptionNameComponent
        name={option.name}
        discountPrice={option.discountPrice}
      />
      <PriceComponent option={option} />
    </Container>
  );
};

export default OptionComponent;
