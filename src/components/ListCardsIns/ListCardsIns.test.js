import React from 'react';
import { render} from '@testing-library/react';
import ListCardsIns from './ListCardsIns';

const CARD_DETAILS = {
    title: 'Moto GP',
    description: 'Some description for the card, very nice',
    imageUrl: 'https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg'
};

const cardsList = [
    CARD_DETAILS,
    CARD_DETAILS,
    CARD_DETAILS
];

describe('ListCardIns component', () => {

    it('should be defined', ()=> {

        const { container } = render(<ListCardsIns cardsList={cardsList} />);
        expect(container).toBeInTheDocument();
        expect(container.querySelectorAll('.ins-card')).toHaveLength(3);

    });

   it('should render a message when no cards to display', () => {
    const { getByText } = render(<ListCardsIns />);
    let element = getByText('Not cards to display');
    expect(element.nodeName).toBe('SPAN');
   });

});