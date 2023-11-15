import React from "react";

import SearchIcon from "../../../../assets/icons/search.svg";

import { Container, StyledInput, Icon } from "./styles";

const SearchComponent: React.FC = () => {
  return (
    <Container>
      <Icon src={SearchIcon} alt="Search Icon" />
      <StyledInput type="text" placeholder="busque pela loja ou culinária" />
    </Container>
  );
};

export default SearchComponent;
