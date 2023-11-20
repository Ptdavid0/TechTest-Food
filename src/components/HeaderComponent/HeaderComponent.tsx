import React from "react";

import { useTicket } from "@contexts/TicketContext/TicketContext";

import CompanyLogo from "@assets/icons/aiq_branding.svg";
import TicketIcon from "@assets/icons/ticket.svg";
import UserIcon from "@assets/icons/user.svg";
import SearchIcon from "@assets/icons/search.svg";
import LocationIcon from "@assets/icons/location.svg";
import ArrowRight from "@assets/icons/arrow_right.svg";

import ButtonComponent from "@components/ButtonComponent/ButtonComponent";

import {
  Container,
  ButtonsContainer,
  InfoContainer,
  DeliveryText,
  AddressButton,
  StyledInput,
  Icon,
  SearchContainer,
  LocationContainer,
} from "./styles";

const HeaderComponent: React.FC = () => {
  const { currentTicket } = useTicket();

  const isTicketEmpty =
    !currentTicket ||
    Object.keys(currentTicket).length === 0 ||
    currentTicket?.quantity === 0;

  // THIS IS A MOCKED ADDRESS
  const address = "Rua Mandaguari, 198";

  return (
    <Container id="header">
      <img src={CompanyLogo} alt="Aiqfome Logo" />

      <LocationContainer>
        <img src={LocationIcon} alt="Location" />
        <InfoContainer>
          <DeliveryText>entregando em</DeliveryText>
          <AddressButton>
            {address} <img src={ArrowRight} alt="Arrow Right" />
          </AddressButton>
        </InfoContainer>
      </LocationContainer>

      <SearchContainer>
        <Icon src={SearchIcon} alt="Search Icon" />
        <StyledInput type="text" placeholder="busque pela loja ou culinária" />
      </SearchContainer>

      <ButtonsContainer>
        {!isTicketEmpty && (
          <ButtonComponent
            text="ver ticket"
            variant="clear"
            icon={TicketIcon}
          />
        )}
        <ButtonComponent text="entrar" variant="success" icon={UserIcon} />
      </ButtonsContainer>
    </Container>
  );
};

export default HeaderComponent;
