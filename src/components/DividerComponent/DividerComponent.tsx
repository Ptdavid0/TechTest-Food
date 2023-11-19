import React from "react";

import theme from "src/theme/theme";

import { Container } from "./styles";

interface DividerComponentProps {
  color: string;
}

const DividerComponent: React.FC<DividerComponentProps> = ({
  color = theme.colors.Neutrals100,
}) => {
  return <Container color={color} />;
};

export default DividerComponent;
