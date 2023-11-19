interface PriceInterface {
  option: Options;
}

import { formatNumberToCurrency } from "../../../../utils/numberUtils";

import {
  OptionValueText,
  InitialSaleText,
  SaleContainer,
  SaleValueText,
} from "./styles";

const OptionPriceComponent: React.FC<PriceInterface> = ({ option }) => {
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

export default OptionPriceComponent;
