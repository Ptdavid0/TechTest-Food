import React from "react";

import TagComponent from "../../../../components/TagComponent/TagComponent";
import OptionComponent from "../OptionComponent/OptionComponent";

import { useForm } from "react-hook-form";

import {
  Container,
  TopContainer,
  InfoContainer,
  SectionName,
  SectionDescription,
  BottomContainer,
} from "./styles";

interface SectionInterface {
  option: Section;
}

const SectionComponent: React.FC<SectionInterface> = ({ option }) => {
  const { register } = useForm();

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
          <OptionComponent
            key={currentOption.name}
            option={currentOption}
            type={option.type}
            sectionName={option.name}
            register={register}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default SectionComponent;
