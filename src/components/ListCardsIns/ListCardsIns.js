import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
const ListCardsIns = ({ cardsList, handleModal }) => {
  const [filteredOptions, setFilteredOptions] = useState(INTIIAL_FILTER);

  const handleEditItem = (id) => {
    //  console.log('PARENT', id);
    handleModal(id);
  };

  useEffect(() => {
    //   console.log('useEffect', filteredOptions);
    setFilteredOptions(filteredOptions);
  }, [filteredOptions,cardsList]);

  const handleFilter = (e) => {
    //  console.log('DATA',e)
    setFilteredOptions(e);
  };

  return (
    <>
      <SortCardOptions onSubmit={handleFilter} />
      <div className="ins-cards-list">
        {cardsList.length > 0 ? (
          sortByCards(cardsList, filteredOptions).map((card) => (
            <CardIns key={card.id} {...card} handleModal={handleEditItem} />
          ))
        ) : (
          <span>Not cards to display</span>
        )}
      </div>
    </>
  );
};

ListCardsIns.defaultProps = {
  cardsList: [],
  handleModal: () => {},
};

ListCardsIns.propTypes = {
  /**
   *  Arrays of cards.
   */
  cardsList: PropTypes.array,

  /**
   *  Handle modal window in children
   */
  handleModal: PropTypes.func,
};

export default ListCardsIns;
