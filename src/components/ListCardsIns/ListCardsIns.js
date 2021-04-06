import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import CardIns from "../CardIns";
import "./ListCardsIns.css";
import SortCardOptions from "../SortCardOptions";
import { sortByCards } from "./selectors/selector";

const INTIIAL_FILTER = {
  titleUser: "",
  title: false,
  createdAt: false,
  updatedAt: false,
};
/** List of cards Component */
export const ListCardsIns = ({ 
    handleModal,
    cardListStore 
  }) => {
  const [filteredOptions, setFilteredOptions] = useState(INTIIAL_FILTER);


  const handleEditItem = (id) => {
    //  console.log('PARENT', id);
    handleModal(id);
  };

  useEffect(() => {
    setFilteredOptions(filteredOptions);
  }, [filteredOptions,cardListStore]);

  const handleFilter = (e) => {
    //  console.log('DATA',e)
    setFilteredOptions(e);
  };

  return (
    <>
      <SortCardOptions onSubmit={handleFilter} />
      
      <div className="ins-cards-list">
        {cardListStore && cardListStore.length > 0 ? (
          sortByCards(cardListStore, filteredOptions).map((card) => 
             <CardIns key={card.id} {...card} handleModal={handleEditItem} />
          )
        ) : (
          <span>Not cards to display</span>
        )}
      </div>
    </>
  );
};

ListCardsIns.defaultProps = {
  cardsListStore: [],
  handleModal: () => {},
};

ListCardsIns.propTypes = {
  /**
   *  Arrays of cards.
   */
  cardsListStore: PropTypes.array,

  /**
   *  Handle modal window in children
   */
  handleModal: PropTypes.func,
};

const mapStatetoProps = (state) => ({
    modalOpen: state.modalOpen,
    cardListStore: state.cardList
});

export default connect(mapStatetoProps)(ListCardsIns);

