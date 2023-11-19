import React, { useLayoutEffect, useState } from "react";

import { useTicket } from "@contexts/TicketContext/TicketContext";

import ObservationComponent from "./components/ObservationComponent/ObservationComponent";
import HeaderItemComponent from "./components/HeaderItemComponent/HeaderItemComponent";
import SectionComponent from "./components/SectionComponent/SectionComponent";

import { Container } from "./styles";

const ItemScreen: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState<number | null>(null);

  const { currentItem } = useTicket();

  // Get the navbar height and set it to the container
  useLayoutEffect(() => {
    const navbarElement = document.getElementById("navbar");

    if (navbarElement) setNavbarHeight(navbarElement.offsetHeight);
  }, []);

  if (!currentItem) return null;

  return (
    <Container margintop={navbarHeight}>
      <HeaderItemComponent />
      {currentItem?.item?.sections?.map((option) => (
        <SectionComponent key={option.name} option={option} />
      ))}
      <ObservationComponent />
    </Container>
  );
};

export default ItemScreen;
