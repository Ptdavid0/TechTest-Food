import React from "react";

import { formatNumberToCurrency } from "@utils/numberUtils";
import { useTicket } from "@contexts/TicketContext/TicketContext";

import ButtonComponent from "@components/ButtonComponent/ButtonComponent";
import CounterComponent from "@components/CounterComponent/CounterComponent";

// Images are mocked for the sake of the test
import Logo from "@assets/images/matsuri_logo.png";
import CevicheImage from "@assets/images/ceviche.png";

import {
  Container,
  TitleContainer,
  CompanyNameText,
  ItemContainer,
  InfoContainer,
  ItemNameText,
  ItemDescriptionText,
  ItemPriceDescriptionText,
  ItemPriceText,
  PriceContainer,
  QuantityContainer,
  QuantityTitle,
  TotalContainer,
  TotalDescriptionText,
  TotalPriceText,
  TopInfoContainer,
  LeftQuantityContainer,
} from "./styles";

const ItemHeaderComponent: React.FC = () => {
  const {
    currentTicket,
    increaseTicketQuantity,
    decreaseTicketQuantity,
    currentItem,
  } = useTicket();

  return (
    <Container>
      <TitleContainer>
        <img src={Logo} alt={currentItem?.company?.name} />
        <CompanyNameText>{currentItem?.company?.name}</CompanyNameText>
      </TitleContainer>

      <ItemContainer>
        <InfoContainer>
          <TopInfoContainer>
            <ItemNameText>{currentItem?.item?.name}</ItemNameText>
            <PriceContainer>
              <ItemPriceDescriptionText>
                a partir de{" "}
                <ItemPriceText>
                  {formatNumberToCurrency(currentItem?.item?.initialPrice)}
                </ItemPriceText>
              </ItemPriceDescriptionText>
            </PriceContainer>
            <ItemDescriptionText>
              {currentItem?.item?.description}
            </ItemDescriptionText>
          </TopInfoContainer>

          <QuantityContainer>
            <LeftQuantityContainer>
              <QuantityTitle>quantos?</QuantityTitle>
              {currentTicket?.total && currentTicket?.quantity ? (
                <TotalContainer>
                  <TotalDescriptionText>total</TotalDescriptionText>
                  <TotalPriceText>
                    {formatNumberToCurrency(currentTicket?.total)}
                  </TotalPriceText>
                </TotalContainer>
              ) : null}
            </LeftQuantityContainer>
            {currentTicket?.quantity ? (
              <CounterComponent
                showTrashIcon
                size="LARGE"
                increaseFunction={increaseTicketQuantity}
                decreaseFunction={decreaseTicketQuantity}
                counter={currentTicket?.quantity}
              />
            ) : (
              <ButtonComponent
                variant="neutral"
                text="adicionar"
                onClick={increaseTicketQuantity}
              />
            )}
          </QuantityContainer>
        </InfoContainer>

        <img src={CevicheImage} alt={currentItem?.item?.name} />
      </ItemContainer>
    </Container>
  );
};

export default ItemHeaderComponent;
