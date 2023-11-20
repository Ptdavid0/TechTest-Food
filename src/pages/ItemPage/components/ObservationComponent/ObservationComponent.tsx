import React from "react";

import { useTicket } from "@contexts/TicketContext/TicketContext";

import { Container, TextArea } from "./styles";

const ObservationComponent: React.FC = () => {
  const { handleObservation, currentTicket } = useTicket();

  return (
    <Container data-testid="observation-component">
      <TextArea
        placeholder={
          "alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato"
        }
        rows={2}
        onChange={(e) => handleObservation(e.target.value)}
        value={currentTicket?.observation}
      />
    </Container>
  );
};

export default ObservationComponent;
