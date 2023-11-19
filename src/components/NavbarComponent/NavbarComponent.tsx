import React from "react";

import CompanyLogo from "@assets/icons/aiq_branding.svg";
import TicketIcon from "@assets/icons/ticket.svg";
import UserIcon from "@assets/icons/user.svg";

import LocationComponent from "./components/LocationComponent/LocationComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import ButtonComponent from "@components/ButtonComponent/ButtonComponent";

import { Container, ButtonsContainer } from "./styles";

import { useTicket } from "@contexts/TicketContext/TicketContext";

const NavbarComponent: React.FC = () => {
  const { currentTicket } = useTicket();

  const isTicketEmpty =
    !currentTicket ||
    Object.keys(currentTicket).length === 0 ||
    currentTicket?.quantity === 0;

  return (
    <Container id="navbar">
      <img src={CompanyLogo} alt="Aiqfome Logo" />
      <LocationComponent />
      <SearchComponent />
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

export default NavbarComponent;
