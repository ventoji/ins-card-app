import React from "react";
import LabelIns from "./LabelIns";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Components/LabelIns",
  component: LabelIns,
  decorators: [withKnobs],
};

const Template = (args) => <LabelIns {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: text("label", "Image (Url)"),
};

Default.parameters = {
  jest: ["LabelIns.test.js"],
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  required: true,
  htmlFor: "labelID2",
};

RequiredLabel.parameters = {
  jest: ["LabelIns.test.js"],
};
