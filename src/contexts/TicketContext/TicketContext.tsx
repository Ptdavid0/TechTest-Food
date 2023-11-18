import React, { useEffect, useState } from "react";

import mockData from "../../mock/data.json";

export interface TicketInterface {
  id: number;
  name: string;
  total: number;
  quantity: number;
}

export interface TicketContextInterface {
  currentTicket: TicketInterface | null;
  setCurrentTicket: React.Dispatch<
    React.SetStateAction<TicketInterface | null>
  >;
  currentItem: FoodItem | null;
  setCurrentItem: React.Dispatch<React.SetStateAction<FoodItem | null>>;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

export const TicketContext = React.createContext<TicketContextInterface>({
  currentTicket: null,
  setCurrentTicket: () => {},
  currentItem: null,
  setCurrentItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const useTicket = () => React.useContext(TicketContext);

export const TicketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentTicket, setCurrentTicket] = useState<TicketInterface | null>(
    null
  );
  const [currentItem, setCurrentItem] = useState<FoodItem | null>(null);

  // inscrease quantity
  const increaseQuantity = () => {
    if (currentTicket) {
      setCurrentTicket({
        ...currentTicket,
        quantity: currentTicket.quantity + 1,
      });
    }
  };

  // decrease quantity
  const decreaseQuantity = () => {
    if (currentTicket && currentTicket?.quantity > 0) {
      setCurrentTicket({
        ...currentTicket,
        quantity: currentTicket.quantity - 1,
      });
    }
  };

  // update total price
  useEffect(() => {
    if (currentTicket && currentItem) {
      setCurrentTicket({
        ...currentTicket,
        total: (currentItem?.item?.initialPrice || 0) * currentTicket.quantity,
      });
    }
  }, [currentTicket?.quantity, currentItem]);

  // Set the current ticket to the context - This is for mocked porpuses
  useEffect(() => {
    setCurrentTicket({
      id: 0,
      name: mockData.item.name,
      total: 0,
      quantity: 0,
    });
    setCurrentItem(Object(mockData));
  }, []);

  return (
    <TicketContext.Provider
      value={{
        currentTicket,
        setCurrentTicket,
        currentItem,
        setCurrentItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
