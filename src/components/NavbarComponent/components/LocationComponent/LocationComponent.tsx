import React from "react";

import LocationIcon from "../../../../assets/icons/location.svg";
import ArrowRight from "../../../../assets/icons/arrow_right.svg";

import {
  Container,
  InfoContainer,
  DeliveryText,
  AddressButton,
} from "./styles";

interface LocationComponentProps {
  address?: string;
}

const LocationComponent: React.FC<LocationComponentProps> = ({
  address = "Rua Mandaguari, 198",
}) => {
  return (
    <Container>
      <img src={LocationIcon} alt="Location" />
      <InfoContainer>
        <DeliveryText>entregando em</DeliveryText>
        <AddressButton>
          {address} <img src={ArrowRight} alt="Arrow Right" />
        </AddressButton>
      </InfoContainer>
    </Container>
  );
};

export default LocationComponent;
