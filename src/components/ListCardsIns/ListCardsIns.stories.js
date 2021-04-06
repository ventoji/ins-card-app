import React from "react";
import { Provider } from 'react-redux';
import ListCardsIns from "./ListCardsIns";
import configureStore from '../../store/configureStore';
const store = configureStore();

export default {
  title: "Components/ListCardsIns",
  component: ListCardsIns,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
    //   withReduxDecorator
  ],
};

const CARD_DETAILS = {
  title: "Moto GP",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

const cardsList = [
  {...CARD_DETAILS, id: '123'},
  {...CARD_DETAILS, id: '423'},
  {...CARD_DETAILS, id: '723'},
  {...CARD_DETAILS, id: '723'},
  {...CARD_DETAILS, id: '173'},
  {...CARD_DETAILS, id: '183'},
  {...CARD_DETAILS, id: '193'},
  {...CARD_DETAILS, id: '129'},
  {...CARD_DETAILS, id: '122'},
];

const Template = (args) => (
  <div className="ins-row-stories-list-cards">
    <ListCardsIns {...args} />
  </div>
);
export const CardsList = Template.bind({});
CardsList.args = {
  cardsListStore: [...cardsList],
};
