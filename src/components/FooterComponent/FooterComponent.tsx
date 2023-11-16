import React from "react";

import { Container, CopyrigthText, MessageFromCompanyText } from "./styles";

const FooterComponent: React.FC = () => {
  return (
    <Container>
      <MessageFromCompanyText>
        feito com 💜 em maringá-PR
      </MessageFromCompanyText>
      <CopyrigthText>
        aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
      </CopyrigthText>
    </Container>
  );
};

export default FooterComponent;
