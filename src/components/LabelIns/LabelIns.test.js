import React from "react";
import { render } from "@testing-library/react";
import LabelIns from "./LabelIns";

describe("LabelIns component", () => {
  it("should be defined", () => {
    const { container, getByText } = render(<LabelIns label="Title" />);
    expect(container).toBeDefined();
    const element = getByText("Title");
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("LABEL");
    expect(element.className).toBe("ins-form__label");
    expect(element.htmlFor).toBe("labelID");
  });

  it("should be rendered with an * for required fields", () => {
    const { getByText } = render(<LabelIns label="Title" required />);
    const element = getByText("*");
    expect(element.nodeName).toBe("SPAN");
  });
});
