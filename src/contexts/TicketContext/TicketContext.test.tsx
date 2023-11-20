import { render, fireEvent, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TicketProvider, useTicket } from "./TicketContext";
import mockData from "../../mock/data.json";

describe("TicketProvider", () => {
  it("sets initial state based on mock data", () => {
    const TestComponent = () => {
      const { currentTicket } = useTicket();
      return <div>{currentTicket?.name}</div>;
    };

    const { getByText } = render(
      <TicketProvider>
        <TestComponent />
      </TicketProvider>
    );

    expect(getByText(mockData.item.name)).toBeInTheDocument();
  });

  it("correctly updates ticket quantity", () => {
    const TestComponent = () => {
      const { currentTicket, increaseTicketQuantity, decreaseTicketQuantity } =
        useTicket();
      return (
        <div>
          <button onClick={increaseTicketQuantity}>Increase</button>
          <button onClick={decreaseTicketQuantity}>Decrease</button>
          <span>{currentTicket?.quantity}</span>
        </div>
      );
    };

    const { getByText } = render(
      <TicketProvider>
        <TestComponent />
      </TicketProvider>
    );

    act(() => {
      fireEvent.click(getByText("Increase"));
      fireEvent.click(getByText("Increase"));
    });

    expect(getByText("1")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("Decrease"));
    });

    expect(getByText("0")).toBeInTheDocument();
  });

  it("updates ticket selections correctly", () => {
    const TestComponent = () => {
      const { currentTicket, updateSelection } = useTicket();
      return (
        <div>
          <button
            onClick={() =>
              updateSelection("COUNTER", "section1", "option1", 1, 10)
            }
          >
            Update Counter
          </button>
          <span>{currentTicket?.selections?.section1?.option1?.quantity}</span>
        </div>
      );
    };

    const { getByText } = render(
      <TicketProvider>
        <TestComponent />
      </TicketProvider>
    );

    act(() => {
      fireEvent.click(getByText("Update Counter"));
    });

    expect(getByText("1")).toBeInTheDocument();
  });

  it("updates ticket observation correctly", () => {
    const newObservation = "Extra cheese";
    const TestComponent = () => {
      const { currentTicket, handleObservation } = useTicket();
      return (
        <div>
          <button onClick={() => handleObservation(newObservation)}>
            Add Observation
          </button>
          <span>{currentTicket?.observation}</span>
        </div>
      );
    };

    const { getByText } = render(
      <TicketProvider>
        <TestComponent />
      </TicketProvider>
    );

    act(() => {
      fireEvent.click(getByText("Add Observation"));
    });

    expect(getByText(newObservation)).toBeInTheDocument();
  });

  it("calculates and updates total price correctly", () => {
    const TestComponent = () => {
      const { currentTicket, updateSelection, increaseTicketQuantity } =
        useTicket();
      return (
        <div>
          <button
            onClick={() =>
              updateSelection("COUNTER", "section1", "option1", 1, 10)
            }
          >
            Add Selection
          </button>
          <button onClick={increaseTicketQuantity}>Increase Quantity</button>
          <span>{currentTicket?.total}</span>
        </div>
      );
    };

    const { getByText } = render(
      <TicketProvider>
        <TestComponent />
      </TicketProvider>
    );

    act(() => {
      fireEvent.click(getByText("Add Selection"));
    });

    expect(getByText("10")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("Add Selection"));
    });

    expect(getByText("20")).toBeInTheDocument();
  });

  it("provides context values to children", () => {
    const ChildComponent = () => {
      const { currentTicket } = useTicket();
      return <div>{currentTicket ? "Ticket exists" : "No ticket"}</div>;
    };

    const { getByText } = render(
      <TicketProvider>
        <ChildComponent />
      </TicketProvider>
    );

    expect(getByText("Ticket exists")).toBeInTheDocument();
  });
});
