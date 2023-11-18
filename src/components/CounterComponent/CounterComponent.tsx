import React from "react";

import MinusButtonComponent from "../MinusButtonComponent/MinusButtonComponent";
import PlusButtonComponent from "../PlusButtonComponent/PlusButtonComponent";

import TrashIcon from "../../assets/icons/trash.svg";
import { Container, QuantityText, TrashButton } from "./styles";

interface CounterComponentProps {
  counter: number;
  showTrashIcon?: boolean;
  size?: "MEDIUM" | "LARGE";
  increaseFunction: () => void;
  decreaseFunction: () => void;
}

const CounterComponent: React.FC<CounterComponentProps> = ({
  counter = 0,
  decreaseFunction,
  increaseFunction,
  showTrashIcon = false,
  size = "MEDIUM",
}) => {
  return (
    <Container>
      {showTrashIcon && counter === 1 ? (
        <TrashButton onClick={decreaseFunction}>
          <img src={TrashIcon} alt="trash icon" />
        </TrashButton>
      ) : (
        <MinusButtonComponent
          disabled={counter === 0}
          decreaseFunction={decreaseFunction}
          size={size}
        />
      )}
      <QuantityText size={size}>{counter}</QuantityText>
      <PlusButtonComponent increaseFunction={increaseFunction} size={size} />
    </Container>
  );
};

export default CounterComponent;
