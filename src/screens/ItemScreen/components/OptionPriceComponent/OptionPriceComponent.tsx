import { formatNumberToCurrency } from "@utils/numberUtils";

import {
  OptionValueText,
  InitialSaleText,
  SaleContainer,
  SaleValueText,
} from "./styles";

interface PriceInterface {
  option: Options;
  displayPrice?: boolean;
  isAddition?: boolean;
}

const OptionPriceComponent: React.FC<PriceInterface> = ({
  option,
  displayPrice,
  isAddition,
}) => {
  if (!displayPrice) return null;

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
            {isAddition ? "+" : ""}
            {formatNumberToCurrency(option.price ?? 0)}
          </OptionValueText>
        </>
      )}
    </>
  );
};

export default OptionPriceComponent;
