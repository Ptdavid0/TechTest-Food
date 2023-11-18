import React from "react";

import mediumMinusActive from "../../assets/icons/mediumMinusActive.svg";
import mediumMinusDisabled from "../../assets/icons/mediumMinusDisabled.svg";
import largeMinusActive from "../../assets/icons/largeMinusActive.svg";

import { ButtonContainer } from "./styles";

interface MinusButtonComponentProps {
  disabled?: boolean;
  decreaseFunction: () => void;
  size?: "MEDIUM" | "LARGE";
}

const MinusButtonComponent: React.FC<MinusButtonComponentProps> = ({
  disabled = false,
  decreaseFunction,
  size = "MEDIUM",
}) => {
  const MediumSVG = (
    <img
      src={disabled ? mediumMinusDisabled : mediumMinusActive}
      alt="medium minus"
    />
  );

  const LargeSVG = <img src={largeMinusActive} alt="large minus" />;

  return (
    <ButtonContainer onClick={decreaseFunction}>
      {size === "MEDIUM" ? MediumSVG : LargeSVG}
    </ButtonContainer>
  );
};

export default MinusButtonComponent;
