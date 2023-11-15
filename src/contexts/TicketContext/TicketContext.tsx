import React, { useState } from "react";

export interface TicketContextInterface {
  currentTicket: object;
  setCurrentTicket: React.Dispatch<React.SetStateAction<object>>;
}

export const TicketContext = React.createContext<TicketContextInterface>({
  currentTicket: {},
  setCurrentTicket: () => {},
});

export const useTicket = () => React.useContext(TicketContext);

export const TicketProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentTicket, setCurrentTicket] = useState<object>({});

  return (
    <TicketContext.Provider
      value={{
        currentTicket,
        setCurrentTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
