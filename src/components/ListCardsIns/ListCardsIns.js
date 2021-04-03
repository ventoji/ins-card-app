import React from 'react';
import PropTypes from 'prop-types';
import CardIns from '../CardIns';

/** List of cards Component */
const ListCardsIns = ({cardsList}) => {
    
    return (
        cardsList.length > 0 ? 
            cardsList.map((card,index) =>
            <CardIns key={index} {...card}/>)
            : 
            <span>
                Not cards to display
            </span>
    );
};

ListCardsIns.defaultProps = {
    cardsList: []
}

ListCardsIns.propTypes = {
    /**
     *  Arrays of cards.
     */
    cardsList: PropTypes.array
}

export default ListCardsIns;