import React from "react";
import { action } from '@storybook/addon-actions';
// import { withTests } from '@storybook/addon-jest';
import ButtonIns from './ButtonIns';
// import results from '../../../.jest-test-results.json';



export default {
    title: "Components/ButtonIns",
    component: ButtonIns,
   // decorators: [withTests({ results })]
    // argTypes: {
    //   backgroundColor: { control: "color" },
    // },
  };

const Template = (args) => <ButtonIns {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  mode: 'primary',
  label: "Button",
  size: "small",
  onClick: action('cicked')
};

PrimarySmall.parameters = {
  jest: ['ButtonIns.test.js']
}

/**
 *  Secondary button with medium size
 */
export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  mode: 'secondary',
  label: "Button",
  size: "medium",
  onClick: action('cicked')
};

SecondaryMedium.parameters = {
  jest: ['ButtonIns.test.js']
}

export const DangerLarge = Template.bind({});
DangerLarge.args = {
  mode: 'danger',
  label: "Button",
  size: "large",
  onClick: action('cicked')
};

DangerLarge.parameters = {
  jest: ['ButtonIns.test.js']
}

export const Dissabled = Template.bind({});
Dissabled.args = {
  mode: 'danger',
  label: "Button",
  onClick: action('cicked'),
  disabled: true
};
