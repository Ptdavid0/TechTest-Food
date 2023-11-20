import React, { useLayoutEffect, useState } from "react";

import { useTicket } from "@contexts/TicketContext/TicketContext";

import ObservationComponent from "./components/ObservationComponent/ObservationComponent";
import ItemHeaderComponent from "./components/ItemHeaderComponent/ItemHeaderComponent";
import SectionComponent from "./components/SectionComponent/SectionComponent";
import DividerComponent from "@components/DividerComponent/DividerComponent";

import theme from "src/theme/theme";

import { Container } from "./styles";

const ItemPage: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  const { currentItem } = useTicket();

  // Get the header height and set it to the container
  useLayoutEffect(() => {
    const headerElement = document.getElementById("header");

    if (headerElement) setHeaderHeight(headerElement.offsetHeight);
  }, []);

  if (!currentItem) return null;

  const Divider = () => <DividerComponent color={theme.colors.Neutrals100} />;

  return (
    <Container margintop={headerHeight}>
      <ItemHeaderComponent />
      <Divider />
      {currentItem?.item?.sections?.map((section) => (
        <React.Fragment key={`${section.name}-Container`}>
          <SectionComponent
            key={section.name}
            section={section}
            data-testid="section-component"
          />
          <Divider key={`${section.name}-Divider`} />
        </React.Fragment>
      ))}
      <ObservationComponent />
    </Container>
  );
};

export default ItemPage;
