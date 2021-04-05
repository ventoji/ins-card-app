import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputIns from "./InputIns";

describe("InputIns component", () => {
  it("should be defined", () => {
    const { container } = render(
      <InputIns
        label="title"
        htmlId="insTitle"
        name="insTitle"
        onChange={() => {}}
      />
    );

    expect(container).toBeDefined();
  });

  it("should render properly", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputIns
        label="title"
        htmlId="insTitle"
        name="insTitle"
        placeholder="title"
        onChange={() => {}}
      />
    );
    let element = getByText("title");

    expect(element.nodeName).toBe("LABEL");

    element = getByPlaceholderText("title");
    expect(element.nodeName).toBe("INPUT");
    expect(element.className).toBe("ins-form__input");
    expect(element.type).toBe("text");
  });

  it("should display error message when invalid input", () => {
    const { getByText } = render(
      <InputIns
        label="title"
        htmlId="insTitle"
        name="insTitle"
        value="123"
        onChange={() => {}}
        error="Invalid input"
      />
    );

    let element = getByText("Invalid input");
    expect(element.nodeName).toBe("DIV");
    expect(element.className).toBe("ins-form__error");
  });

  it("should call mocked function when input changes", () => {
    const mockHandleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <InputIns
        label="title"
        htmlId="insTitle"
        name="insTitle"
        placeholder="title"
        onChange={mockHandleChange}
      />
    );
    const element = getByPlaceholderText("title");
    fireEvent.change(element, { target: { value: "Moto GP" } });
    expect(mockHandleChange).toHaveBeenCalled();
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(element.value).toBe("Moto GP");
  });
});
