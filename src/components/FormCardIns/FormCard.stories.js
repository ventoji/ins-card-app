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

export const FormCard = Template.bind({});
