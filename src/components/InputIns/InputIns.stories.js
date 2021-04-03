import React from 'react';
import InputIns from './InputIns';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/InpuIns',
  component: InputIns,
  decorators: [withKnobs],
};

const Template = (args) => <div className="ins-row-stories"><InputIns {...args} /></div>;

export const TypeText = Template.bind({});

TypeText.args = {
  htmlFor: 'titleCard',
  label: text('label', 'Title'),
  name: text('label', 'titleCard'),
  onChange: action('cick'),
  type: 'text',
};

export const TypeTextInvalid = Template.bind({});

TypeTextInvalid.args = {
  htmlFor: 'titleCard',
  name: text('label', 'titleCard'),
  value: '123',
  onChange: action('cick'),
  type: 'text',
  error: 'invalid text input'
};

export const TypeNumber = Template.bind({});
TypeNumber.args = {
  htmlFor: 'numberCard',
  label: text('label', 'Number'),
  name: text('label', 'numberCard'),
  onChange: action('cick'),
  type: 'number',
  placeholder: 'Introudce your numeric value'
};

