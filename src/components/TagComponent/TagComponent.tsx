import React from "react";

import { Container } from "./styles";
interface TagComponentProps {
  text: string;
  variant: "dark" | "light";
}

const TagComponent: React.FC<TagComponentProps> = ({ text, variant }) => {
  return <Container variant={variant}>{text}</Container>;
};

export default TagComponent;
