import React, { useEffect, useState } from "react";

import mockData from "../../mock/data.json";

export interface TicketInterface {
  id: number;
  name: string;
  total: number;
  quantity: number;
  selections?: any;
}

export interface TicketContextInterface {
  currentTicket: TicketInterface | null;
  setCurrentTicket: React.Dispatch<
    React.SetStateAction<TicketInterface | null>
  >;
  currentItem: FoodItem | null;
  setCurrentItem: React.Dispatch<React.SetStateAction<FoodItem | null>>;
  increaseTicketQuantity: () => void;
  decreaseTicketQuantity: () => void;
  updateSelection: (
    type: any,
    sectionName: string | number,
    optionName: string | number,
    value: number,
    price: any
  ) => void;
}

export const TicketContext = React.createContext<TicketContextInterface>({
  currentTicket: null,
  setCurrentTicket: () => {},
  currentItem: null,
  setCurrentItem: () => {},
  increaseTicketQuantity: () => {},
  decreaseTicketQuantity: () => {},
  updateSelection: () => {},
});

export const useTicket = () => React.useContext(TicketContext);

export const TicketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentTicket, setCurrentTicket] = useState<TicketInterface | null>(
    null
  );

  const [currentItem, setCurrentItem] = useState<FoodItem | null>(null);

  // inscrease ticket quantity
  const increaseTicketQuantity = () => {
    if (currentTicket) {
      setCurrentTicket({
        ...currentTicket,
        quantity: currentTicket.quantity + 1,
      });
    }
  };

  // decrease ticket quantity
  const decreaseTicketQuantity = () => {
    if (currentTicket && currentTicket?.quantity > 0) {
      setCurrentTicket({
        ...currentTicket,
        quantity: currentTicket.quantity - 1,
      });
    }
  };

  const updateSelection = (
    type: "COUNTER" | "RADIO" | "CHECKBOX",
    sectionName: string | number,
    optionName: string | number,
    value: number,
    price: any
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

  const calculateTotal = () => {
    if (!currentTicket || !currentTicket.selections) return 0;

    let total = 0;
    const { selections, quantity } = currentTicket;

    // Calculate the base price from "qual o tamanho?"
    const sizeSection = selections["qual o tamanho?"];
    if (sizeSection) {
      const sizeOption = Object.keys(sizeSection)[0];
      const sizePrice = sizeSection[sizeOption];
      total += sizePrice * quantity; // base price multiplied by quantity
    }

    // Add prices of other selections
    Object.entries(selections).forEach(([sectionName, options]) => {
      if (sectionName !== "qual o tamanho?" && options) {
        Object.values(options).forEach((option) => {
          if (option.price && option.quantity) {
            total += option.price * option.quantity;
          }
        });
      }
    });

    return total;
  };

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
        increaseTicketQuantity,
        decreaseTicketQuantity,
        updateSelection,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
