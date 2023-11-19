import React from "react";

import TagComponent from "@components/TagComponent/TagComponent";
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
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleRadioChange = (value: any) => {
    setSelectedOption(value);
  };

  const displayPrice = (index: number) =>
    !option.singlePriced ||
    !(option.options?.length !== index + 1 && option.singlePriced);

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
        {option.options?.map((currentOption, index) => (
          <OptionComponent
            uiType={option.type}
            option={currentOption}
            key={currentOption.name}
            sectionName={option.name}
            isAddition={option.isAddition}
            displayPrice={displayPrice(index)}
            selectedOption={selectedOption}
            onRadioChange={handleRadioChange}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default SectionComponent;
