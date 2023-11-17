import React, { useEffect, useLayoutEffect, useState } from "react";

import ObservationComponent from "./components/ObservationComponent/ObservationComponent";
import HeaderItemComponent from "./components/HeaderItemComponent/HeaderItemComponent";
import mockData from "../../mock/data.json";
import { useTicket } from "../../contexts/TicketContext/TicketContext";

import { Container } from "./styles";

const ItemScreen: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState<number | null>(null);

  const { setCurrentTicket, setCurrentItem } = useTicket();

  // Get the navbar height and set it to the container
  useLayoutEffect(() => {
    const navbarElement = document.getElementById("navbar");

    if (navbarElement) setNavbarHeight(navbarElement.offsetHeight);
  }, []);

  // Set the current ticket to the context - This is for mocked porpuses
  useEffect(() => {
    setCurrentTicket({
      id: 0,
      name: mockData.item.name,
      total: 0,
      quantity: 0,
    });
    setCurrentItem(Object(mockData));
  }, []);

  return (
    <Container margintop={navbarHeight}>
      <HeaderItemComponent />
      <ObservationComponent />
    </Container>
  );
};

export default ItemScreen;
