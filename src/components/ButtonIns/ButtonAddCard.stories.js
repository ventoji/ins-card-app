import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonAddCard from './ButtonAddCard';

export default {
    title: "Components/ButtonIns/ButtonAddCard",
    component:  ButtonAddCard,
    // decorators: [withTests({ results })]
    // argTypes: {
    //   backgroundColor: { control: "color" },
    // },
  };

const Template = (args) => <div className="ins-panel-custom-btn-stories">
    <ButtonAddCard {...args} />
</div>;

export const CustomButton = Template.bind({});
CustomButton.args = {
  onClick: action("cicked"),
  position: "relative"
};

