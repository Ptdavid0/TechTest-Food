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
  section: Section;
}

const SectionComponent: React.FC<SectionInterface> = ({ section }) => {
  const [selections, setSelections] = React.useState({});

  const handleSelectionChange = (
    sectionName: string,
    value: string,
    isCheckbox = false
  ) => {
    setSelections((prevSelections: { [key: string]: String[] }) => {
      if (isCheckbox) {
        const currentSelections = prevSelections[sectionName] || [];
        return {
          ...prevSelections,
          [sectionName]: currentSelections.includes(value)
            ? currentSelections.filter((item) => item !== value)
            : [...currentSelections, value],
        };
      } else {
        return { ...prevSelections, [sectionName]: value };
      }
    });
  };

  const displayPrice = (index: number) =>
    !section.singlePriced ||
    !(section.options?.length !== index + 1 && section.singlePriced);

  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <SectionName>{section.name}</SectionName>
          <SectionDescription>{section.description}</SectionDescription>
        </InfoContainer>
        {section.required && <TagComponent text="obrigatório" variant="dark" />}
      </TopContainer>

      <BottomContainer>
        {section.options?.map((currentOption, index) => (
          <OptionComponent
            uiType={section.type}
            option={currentOption}
            selections={selections}
            key={currentOption.name}
            sectionName={section.name}
            isAddition={section.isAddition}
            displayPrice={displayPrice(index)}
            onSelectionChange={handleSelectionChange}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default SectionComponent;
