import React from "react";

import ListCardsIns from './ListCardsIns';

export default {
    title: "Components/ListCardsIns",
    component: ListCardsIns
  };

const CARD_DETAILS = {
    title: 'Moto GP',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e',
    imageUrl: 'https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg'
};

const cardsList = [
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS
];

const Template = (args) => 
<div className="ins-row-stories-list-cards">
    <ListCardsIns {...args} />
</div>
;
  
export const CardsList = Template.bind({});
CardsList.args = {
    cardsList: cardsList
  };