import React from "react";

import { useTicket } from "../../contexts/TicketContext/TicketContext";

import { ButtonContainer } from "./styles";

interface MinusButtonComponentProps {
  active: boolean;
}

const MinusButtonComponent: React.FC<MinusButtonComponentProps> = ({
  active,
}) => {
  const { decreaseQuantity } = useTicket();

  const fillColor = active ? "#00A296" : "#C4C4C4";
  const strokeColor = active ? "#00A296" : "#C4C4C4";

  return (
    <ButtonContainer onClick={decreaseQuantity}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <g clipPath="url(#clip0_1201_1855)">
          <path
            d="M21.2574 16.1814C21.3076 16.3028 21.3335 16.4329 21.3334 16.5643C21.3335 16.8293 21.2284 17.0835 21.0412 17.271C20.854 17.4586 20.6 17.5642 20.335 17.5646H11.6668C11.5355 17.5646 11.4054 17.5387 11.284 17.4885C11.1627 17.4382 11.0524 17.3645 10.9595 17.2716C10.8666 17.1787 10.7929 17.0685 10.7426 16.9471C10.6924 16.8257 10.6665 16.6956 10.6665 16.5643C10.6665 16.4329 10.6924 16.3028 10.7426 16.1815C10.7929 16.0601 10.8666 15.9498 10.9595 15.857C11.0524 15.7641 11.1627 15.6904 11.284 15.6401C11.4054 15.5898 11.5355 15.564 11.6668 15.564H20.3331C20.4645 15.5639 20.5946 15.5898 20.716 15.64C20.8374 15.6903 20.9477 15.764 21.0406 15.8569C21.1334 15.9498 21.2071 16.06 21.2574 16.1814Z"
            fill="#00A296"
          />
        </g>
        <rect
          x="0.5"
          y="1"
          width="31"
          height="31"
          rx="15.5"
          stroke={strokeColor}
        />
        <defs>
          <clipPath id="clip0_1201_1855">
            <rect y="0.5" width="32" height="32" rx="16" fill={fillColor} />
          </clipPath>
        </defs>
      </svg>
    </ButtonContainer>
  );
};

export default MinusButtonComponent;
