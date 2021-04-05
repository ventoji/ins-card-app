import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonIns from "./ButtonIns";

describe("ButtonIns component", () => {
  it("should be defined and be small with danger mode by default", () => {
    const { container, getByText, getByRole } = render(
      <ButtonIns label="Add" />
    );
    expect(container).toBeDefined();
    expect(getByText("Add")).toBeInTheDocument();
    expect(getByRole("button")).toHaveClass("ins-button--small");
    expect(getByRole("button")).toHaveClass("ins-button--danger");
    expect(getByRole("button")).not.toHaveAttribute("disabled");
  });

  it("should be type submit by default", () => {
    const { getByRole } = render(<ButtonIns label="Add" mode="danger" />);

    expect(getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("should render correctly large size with primary mode", () => {
    const { getByRole } = render(
      <ButtonIns label="Add" mode="primary" size="large" />
    );

    expect(getByRole("button")).toHaveClass("ins-button--large");
    expect(getByRole("button")).toHaveClass("ins-button--primary");
  });

  it("should submit content when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <ButtonIns label="Add" onClick={mockOnClick} />
    );

    fireEvent.click(getByText("Add"));
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
