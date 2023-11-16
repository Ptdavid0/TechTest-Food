import React, { useLayoutEffect, useState } from "react";

import { Container } from "./styles";
import ObservationComponent from "./components/ObservationComponent/ObservationComponent";

const ItemScreen: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const navbarElement = document.getElementById("navbar");

    if (navbarElement) setNavbarHeight(navbarElement.offsetHeight);
  }, []);

  return (
    <Container marginTop={navbarHeight}>
      <ObservationComponent />
    </Container>
  );
};

export default ItemScreen;
