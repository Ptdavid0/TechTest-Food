import React from "react";

import MinusButtonComponent from "../../../../components/MinusButtonComponen/MinusButtonComponen";
import PlusButtonComponent from "../../../../components/PlusButtonComponent/PlusButtonComponent";

import { useTicket } from "../../../../contexts/TicketContext/TicketContext";

import TrashIcon from "../../../../assets/icons/trash.svg";
import { Container, QuantityText, TrashButton } from "./styles";

interface AddItemComponentProps {
  showTrashIcon?: boolean;
  size?: "MEDIUM" | "LARGE";
}

const AddItemComponent: React.FC<AddItemComponentProps> = ({
  showTrashIcon = false,
}) => {
  const { currentTicket, decreaseQuantity } = useTicket();

  const itemsQuantity = currentTicket?.quantity || 0;

  return (
    <Container>
      {showTrashIcon && itemsQuantity === 1 ? (
        <TrashButton onClick={decreaseQuantity}>
          <img src={TrashIcon} alt="trash" />
        </TrashButton>
      ) : (
        <MinusButtonComponent active={true} />
      )}
      <QuantityText>{itemsQuantity}</QuantityText>
      <PlusButtonComponent active={true} />
    </Container>
  );
};

export default AddItemComponent;
