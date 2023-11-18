import React from "react";

import mediumPlusActive from "../../assets/icons/mediumPlusActive.svg";
import largePlusActive from "../../assets/icons/largePlusActive.svg";

import { ButtonContainer } from "./styles";
interface PlusButtonComponentProps {
  disabled?: boolean;
  increaseFunction: () => void;
  size?: "MEDIUM" | "LARGE";
}

const PlusButtonComponent: React.FC<PlusButtonComponentProps> = ({
  disabled = false,
  increaseFunction,
  size = "MEDIUM",
}) => {
  const MediumSVG = (
    <img
      src={disabled ? mediumPlusActive : mediumPlusActive}
      alt="medium plus"
    />
  );

  const LargeSVG = <img src={largePlusActive} alt="large plus" />;

  return (
    <ButtonContainer onClick={increaseFunction}>
      {size === "MEDIUM" ? MediumSVG : LargeSVG}
    </ButtonContainer>
  );
};

export default PlusButtonComponent;
