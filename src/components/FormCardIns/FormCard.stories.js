import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { withKnobs } from '@storybook/addon-knobs';
import FormCardIns from './FormCardIns';

export default {
    title: 'Components/FormCarIns',
    component: FormCardIns
};

const Template = (args) => <div className="ins-row-stories"> <FormCardIns {...args} /> </div>;

export const FormCard = Template.bind({});