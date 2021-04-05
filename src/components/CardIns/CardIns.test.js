import React from "react";
import { render } from "@testing-library/react";

import {CardIns} from "./CardIns";

const CARD_DETAILS = {
  title: "Moto GP",
  description: "Some description for the card, very nice",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

describe("Card component", () => {
  it("should be defined", () => {
    const { container } = render(<CardIns />);
    expect(container).toBeInTheDocument();
    //    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll("div")[0]).toHaveClass("ins-card");
    expect(container.querySelectorAll("div")[1]).toHaveClass(
      "ins-card__image-container"
    );
    expect(container.querySelectorAll("div")[3]).toHaveClass(
      "ins-card__description"
    );
  });

  it("should render card with defaults", () => {
    const { getByText } = render(<CardIns />);
    let element;

    element = getByText("Moto GP");
    expect(element).toBeInTheDocument();
    // console.log(element.nodeName);
    expect(element.nodeName).toBe("H5");

    element = getByText("Some description for the card, very nice");
    expect(element).toBeInTheDocument();
  });

  it("should render card with provided details", () => {
    const { getByText } = render(<CardIns {...CARD_DETAILS} />);
    let element = getByText("Moto GP");
    expect(element).toBeInTheDocument();
    //    expect(container.querySelector('img').src).toBe(CARD_DETAILS.imageUrl);
  });
});
