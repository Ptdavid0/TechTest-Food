import React from "react";

import { Container } from "./styles";

const ItemScreen: React.FC = () => {
  // Calculate the navbar height to place the content below it. What is the best way of doing this ?
  const navbarHeight = document.getElementById("navbar")?.offsetHeight;

  return <Container marginTop={navbarHeight}>Helloo</Container>;
};

export default ItemScreen;
