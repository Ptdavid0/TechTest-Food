import React, { useEffect, useState } from "react";

import mockData from "../../mock/data.json";
export interface TicketInterface {
  id: number;
  name: string;
  total: number;
  quantity: number;
  selections?: Record<string, any>;
  observation?: string;
}

export interface TicketContextInterface {
  currentItem: FoodItem | null;
  currentTicket: TicketInterface | null;
  setCurrentTicket: React.Dispatch<
    React.SetStateAction<TicketInterface | null>
  >;
  increaseTicketQuantity: () => void;
  decreaseTicketQuantity: () => void;
  updateSelection: (
    type: "COUNTER" | "RADIO" | "CHECKBOX",
    sectionName: string | number,
    optionName: string | number,
    value: number,
    price: number
  ) => void;
  handleObservation: (observation: string) => void;
  setCurrentItem: React.Dispatch<React.SetStateAction<FoodItem | null>>;
}

export const TicketContext = React.createContext<TicketContextInterface>({
  currentItem: null,
  currentTicket: null,
  setCurrentItem: () => {},
  updateSelection: () => {},
  setCurrentTicket: () => {},
  handleObservation: () => {},
  increaseTicketQuantity: () => {},
  decreaseTicketQuantity: () => {},
});

export const useTicket = () => React.useContext(TicketContext);

export const TicketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentItem, setCurrentItem] = useState<FoodItem | null>(null);
  const [currentTicket, setCurrentTicket] = useState<TicketInterface | null>(
    null
  );

  // Increase ticket quantity
  const increaseTicketQuantity = () => {
    if (currentTicket) {
      setCurrentTicket({
        ...currentTicket,
        quantity: currentTicket.quantity + 1,
      });
    }
  };

  // Decrease ticket quantity
  const decreaseTicketQuantity = () => {
    if (currentTicket && currentTicket?.quantity > 0) {
      setCurrentTicket({
        ...currentTicket,
        quantity: currentTicket.quantity - 1,
      });
    }
  };

  // Update the ticket selection
  const updateSelection = (
    type: "COUNTER" | "RADIO" | "CHECKBOX",
    sectionName: string | number,
    optionName: string | number,
    value: number,
    price: number
  ) => {
    if (!currentTicket) return;

    let newSelections = { ...currentTicket.selections };

    newSelections[sectionName] = newSelections[sectionName] || {};

    switch (type) {
      case "COUNTER":
        const currentQuantity =
          newSelections[sectionName][optionName]?.quantity || 0;
        const newQuantity = currentQuantity + value;
        if (newQuantity > 0) {
          newSelections[sectionName][optionName] = {
            price,
            quantity: newQuantity,
          };
        } else {
          delete newSelections[sectionName][optionName];
        }
        break;

      case "RADIO":
        newSelections[sectionName] = { [optionName]: price };
        break;

      case "CHECKBOX":
        if (value) {
          newSelections[sectionName][optionName] = { price, quantity: 1 };
        } else {
          delete newSelections[sectionName][optionName];
        }
        break;

      default:
        break;
    }

    setCurrentTicket({
      ...currentTicket,
      selections: newSelections,
    });
  };

  // Handle ticket observation
  const handleObservation = (observation: string) => {
    if (currentTicket) {
      setCurrentTicket({
        ...currentTicket,
        observation: observation,
      });
    }
  };

  // Calculate the total price of the ticket
  const calculateTotal = () => {
    if (!currentTicket || !currentTicket.selections) return 0;

    let total = 0;

    for (const [sectionName, options] of Object.entries(
      currentTicket.selections
    )) {
      for (const optionDetails of Object.values(
        options as Record<string, any>
      )) {
        if (sectionName === "qual o tamanho?") {
          total += (optionDetails as number) * currentTicket.quantity;
        } else if (typeof optionDetails === "number") {
          total += optionDetails;
        } else if (optionDetails.price && optionDetails.quantity) {
          total += optionDetails.price * optionDetails.quantity;
        }
      }
    }

    return total;
  };

  // Update the total price of the ticket
  useEffect(() => {
    if (currentTicket) {
      const newTotal = calculateTotal();
      setCurrentTicket((prevTicket) => {
        if (prevTicket) {
          return {
            ...prevTicket,
            total: newTotal,
          };
        }
        return null;
      });
    }
  }, [currentTicket?.selections, currentTicket?.quantity]);

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
        currentItem,
        currentTicket,
        setCurrentItem,
        updateSelection,
        setCurrentTicket,
        handleObservation,
        increaseTicketQuantity,
        decreaseTicketQuantity,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
