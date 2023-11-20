import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import OptionComponent from "./OptionComponent";
import CounterComponent from "@components/CounterComponent/CounterComponent";
import RadioButtonComponent from "@components/RadioButtonComponent/RadioButtonComponent";
import CheckboxComponent from "@components/CheckboxComponent/CheckboxComponent";
import OptionNameComponent from "../OptionNameComponent/OptionNameComponent";
import OptionPriceComponent from "../OptionPriceComponent/OptionPriceComponent";

vi.mock("@components/CounterComponent/CounterComponent");
vi.mock("@components/RadioButtonComponent/RadioButtonComponent");
vi.mock("@components/CheckboxComponent/CheckboxComponent");
vi.mock("../OptionNameComponent/OptionNameComponent");
vi.mock("../OptionPriceComponent/OptionPriceComponent");

describe("OptionComponent", () => {
  const mockOption = { name: "Test Option", price: 100, discountPrice: 80 };

  it("renders CounterComponent for COUNTER type", () => {
    render(
      <OptionComponent
        uiType="COUNTER"
        option={mockOption}
        sectionName="Section1"
        displayPrice={false}
        onSelectionChange={() => {}}
        selections={{}}
      />
    );
    expect(CounterComponent).toHaveBeenCalled();
  });

  it("renders RadioButtonComponent for RADIO type", () => {
    render(
      <OptionComponent
        uiType="RADIO"
        option={mockOption}
        sectionName="Section1"
        displayPrice={false}
        onSelectionChange={() => {}}
        selections={{}}
      />
    );
    expect(RadioButtonComponent).toHaveBeenCalled();
  });

  it("renders CheckboxComponent for CHECKBOX type", () => {
    render(
      <OptionComponent
        uiType="CHECKBOX"
        option={mockOption}
        sectionName="Section1"
        displayPrice={false}
        onSelectionChange={() => {}}
        selections={{}}
      />
    );
    expect(CheckboxComponent).toHaveBeenCalled();
  });

  it("renders OptionNameComponent and OptionPriceComponent", () => {
    render(
      <OptionComponent
        uiType="RADIO"
        option={mockOption}
        sectionName="Section1"
        displayPrice={true}
        onSelectionChange={() => {}}
        selections={{}}
      />
    );

    expect(OptionNameComponent).toHaveBeenCalledWith(
      expect.objectContaining({ name: mockOption.name }),
      expect.anything()
    );

    expect(OptionPriceComponent).toHaveBeenCalledWith(
      expect.objectContaining({ option: mockOption }),
      expect.anything()
    );
  });
});
