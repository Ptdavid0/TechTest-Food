import { formatNumberToCurrency } from "@utils/numberUtils";

import { useTicket } from "@contexts/TicketContext/TicketContext";

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
  sectionName?: string;
  isCounter?: boolean;
}

const OptionPriceComponent: React.FC<PriceInterface> = ({
  option,
  displayPrice,
  isAddition,
  sectionName,
  isCounter,
}) => {
  const { currentTicket } = useTicket();

  if (!displayPrice) return null;

  // If the option is a counter, the price must be the option.price * quantity of the option on the ticket item selections
  const price = isCounter
    ? (currentTicket?.selections?.[sectionName ?? ""]?.[option.name]
        ?.quantity ?? 1) * option.price
    : option.price;

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
            {formatNumberToCurrency(price ?? 0)}
          </OptionValueText>
        </>
      )}
    </>
  );
};

export default OptionPriceComponent;
