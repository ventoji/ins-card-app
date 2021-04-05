import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import InputSelectIns from "./InputSelectIns";

export default {
  title: "Components/InputSelectIns",
  component: InputSelectIns,
  decorators: [withKnobs],
};

const Template = (args) => (
  <div className="ins-row-stories">
    <InputSelectIns {...args} />
  </div>
);

export const InputSelect = Template.bind({});

InputSelect.args = {
  htmlFor: "sortby123",
  label: text("label", "Sort By"),
  name: text("label", "inssortby"),
  onChange: action("cick"),
};
