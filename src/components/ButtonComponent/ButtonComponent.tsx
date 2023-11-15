import React from "react";

import { Container } from "./styles";

interface ButtonComponentProps {
  icon?: string;
  text: string;
  variant: "success" | "neutral" | "clear";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  icon,
  text,
  variant,
}) => {
  return (
    <Container variant={variant}>
      {icon && <img src={icon} alt="Button Icon" />}
      {text}
    </Container>
  );
};

export default ButtonComponent;
