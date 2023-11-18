import React from "react";

import TagComponent from "../../../../components/TagComponent/TagComponent";

import {
  Container,
  TopContainer,
  InfoContainer,
  SectionName,
  SectionDescription,
  BottomContainer,
} from "./styles";
import OptionComponent from "../OptionComponent/OptionComponent";

interface SectionInterface {
  option: Section;
}

const SectionComponent: React.FC<SectionInterface> = ({ option }) => {
  console.log(option);
  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <SectionName>{option.name}</SectionName>
          <SectionDescription>{option.description}</SectionDescription>
        </InfoContainer>
        {option.required && <TagComponent text="obrigatório" variant="dark" />}
      </TopContainer>

      <BottomContainer>
        {option.options?.map((currentOption) => (
          <OptionComponent key={currentOption.name} option={currentOption} />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default SectionComponent;
