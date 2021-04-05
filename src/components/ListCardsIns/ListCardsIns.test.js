import React from "react";
import { render } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {ListCardsIns} from "./ListCardsIns";
import TestRenderer from "react-test-renderer";

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
const mockStore = configureStore([]);

describe("ListCardIns component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      state: {
        countries: false,
        cardListStore:cardsList
      },
    });

  });

  it("should be defined", () => {
    const { container } = render(
    <Provider store={store}>
      <ListCardsIns />
    </Provider>);
    expect(container).toBeInTheDocument();
  //  expect(container.querySelectorAll(".ins-card")).toHaveLength(3);
  });

  it('should render properly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
      <ListCardsIns />
    </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  })

  it("should render a message when no cards to display", () => {
    const { getByText } = render(<ListCardsIns />);
    let element = getByText("Not cards to display");
    expect(element.nodeName).toBe("SPAN");
  });
});
