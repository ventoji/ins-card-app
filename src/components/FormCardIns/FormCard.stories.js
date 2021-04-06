import React from "react";
import { Provider } from 'react-redux';
// import { action } from '@storybook/addon-actions';
// import { withKnobs } from '@storybook/addon-knobs';
import FormCardIns from "./FormCardIns";
import configureStore from '../../store/configureStore';
const store = configureStore();

export default {
  title: "Components/FormCarIns",
  component: FormCardIns,
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
    <FormCardIns {...args} />{" "}
  </div>
);

export const FormNewCard = Template.bind({});

export const FormEditCard = Template.bind({});

FormEditCard.args = {
  id:"a02cab80-96d3-11eb-87b9-ada0d5f3bbe9",
  title: "My card title",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e",
  imageUrl:
    "http://www.ventoji.es/ventojidev/wp-content/uploads/2019/06/IMG_20180922_170206-1568x1176.jpg",
};

