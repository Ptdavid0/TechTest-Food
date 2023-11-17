import React from "react";

import { Container } from "./styles";

interface ButtonComponentProps {
  icon?: string;
  text: string;
  variant: "success" | "neutral" | "clear";
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  icon,
  text,
  variant,
  onClick,
}) => {
  return (
    <Container variant={variant} icon={!!icon} onClick={onClick}>
      {icon && <img src={icon} alt="Button Icon" />}
      {text}
    </Container>
  );
};

export default ButtonComponent;
