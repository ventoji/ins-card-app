import React from "react";
import { render } from "@testing-library/react";
import ListCardsIns from "./ListCardsIns";

const CARD_DETAILS = {
  id: "sdhai123",
  title: "Moto GP",
  description: "Some description for the card, very nice",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

const CARD_DETAILS1 = {
  id: "sdhai323",
  title: "Moto GP",
  description: "Some description for the card, very nice",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

const CARD_DETAILS2 = {
  id: "sdhai193",
  title: "Moto GP",
  description: "Some description for the card, very nice",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

const cardsList = [CARD_DETAILS, CARD_DETAILS1, CARD_DETAILS2];

describe("ListCardIns component", () => {
  it("should be defined", () => {
    const { container } = render(<ListCardsIns cardsList={cardsList} />);
    expect(container).toBeInTheDocument();
    expect(container.querySelectorAll(".ins-card")).toHaveLength(3);
  });

  it("should render a message when no cards to display", () => {
    const { getByText } = render(<ListCardsIns />);
    let element = getByText("Not cards to display");
    expect(element.nodeName).toBe("SPAN");
  });
});
