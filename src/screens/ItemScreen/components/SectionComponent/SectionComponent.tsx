import React from "react";

import TagComponent from "@components/TagComponent/TagComponent";
import OptionComponent from "../OptionComponent/OptionComponent";

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
  const [selections, setSelections] = React.useState({});

  const handleSelectionChange = (
    sectionName: string | number,
    value: any,
    isCheckbox = false
  ) => {
    setSelections((prevSelections: { [key: string]: any }) => {
      if (isCheckbox) {
        const currentSelections = prevSelections[sectionName] || [];
        return {
          ...prevSelections,
          [sectionName]: currentSelections.includes(value)
            ? currentSelections.filter((item: any) => item !== value)
            : [...currentSelections, value],
        };
      } else {
        return { ...prevSelections, [sectionName]: value };
      }
    });
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
            onSelectionChange={handleSelectionChange}
            selections={selections}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default SectionComponent;
