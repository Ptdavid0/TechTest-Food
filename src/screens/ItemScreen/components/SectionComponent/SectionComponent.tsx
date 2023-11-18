import React from "react";

import TagComponent from "../../../../components/TagComponent/TagComponent";

import {
  Container,
  TopContainer,
  InfoContainer,
  SectionName,
  SectionDescription,
} from "./styles";

interface SectionInterface {
  option: Section;
}

const SectionComponent: React.FC<SectionInterface> = ({ option }) => {
  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <SectionName>{option.name}</SectionName>
          <SectionDescription>{option.description}</SectionDescription>
        </InfoContainer>
        {option.required && <TagComponent text="obrigatório" variant="dark" />}
      </TopContainer>

      {/* bottom */}
      <div style={{}}></div>
    </Container>
  );
};

export default SectionComponent;
