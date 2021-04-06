import React from "react";
import { Provider } from 'react-redux';
import {CardIns} from "./CardIns";
import { text } from "@storybook/addon-knobs";
import configureStore from '../../store/configureStore';
const store = configureStore();

export default {
  title: "Components/CarIns",
  component: CardIns,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
    //   withReduxDecorator
  ],
};

const Template = (args) => (
  <div className="ins-row-stories">
    {" "}
    <CardIns {...args} />{" "}
  </div>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: text("label", "Moto GP"),
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};
