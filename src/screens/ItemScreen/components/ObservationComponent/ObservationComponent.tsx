import React from "react";

import { Container, TextArea } from "./styles";

const ObservationComponent: React.FC = () => {
  return (
    <Container>
      <TextArea
        placeholder={
          "alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato"
        }
        rows={2}
      />
    </Container>
  );
};

export default ObservationComponent;
