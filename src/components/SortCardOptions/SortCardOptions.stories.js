import React from "react";
// import { action } from '@storybook/addon-actions';
// import { withKnobs, text } from '@storybook/addon-knobs';
import SortCardOptions from "./SortCardOptions";

export default {
  title: "Components/SortCardOptions",
  component: SortCardOptions,
};

const Template = (args) => (
  <div className="ins-panel-stories">
    <SortCardOptions {...args} />
  </div>
);

export const SortCardPanel = Template.bind({});
