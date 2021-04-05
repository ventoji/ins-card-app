import React, { useState } from "react";

import InputIns from "../InputIns";
import InputSelectIns from "../InputSelectIns";
import ButtonIns from "../ButtonIns";

import "./SortCardOptions.css";

const INITIAL_CONFIG_FILTER = {
  titleUser: "",
  sortBy: "desc",
  title: false,
  createdAt: false,
};
const customStyles = {
  marginTop: "2.4rem",
  marginLeft: "1rem",
};
/**
 *  SortCardOptions panel to filter cards by title or creation date
 */
const SortCardOptions = ({ onSubmit }) => {
  const [filterCard, setFilterCard] = useState(INITIAL_CONFIG_FILTER);

  const handleChange = (event) => {
    const type = event.target.type;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    const field = event.target.name;

    setFilterCard({
      ...filterCard,
      [field]: value,
    });
  };

  const findCard = (event) => {
    event.preventDefault();
    // console.log('filter',filterCard);
    onSubmit(filterCard);
  };

  return (
    <div className="ins-sort-card-options">
      <form id="ins-form-sort" className="ins-form-sort" onSubmit={findCard}>
        <InputIns
          label="Filter by title"
          htmlId="titleUser"
          type="text"
          name="titleUser"
          placeholder="Filter by title card here"
          required={false}
          onChange={handleChange}
        />

        <InputIns
          label="Sort by title"
          htmlId="title"
          type="checkbox"
          name="title"
          visible={true}
          required={false}
          onChange={handleChange}
        />

        <InputIns
          label="Filter by date"
          htmlId="createdAt"
          type="checkbox"
          name="createdAt"
          visible={true}
          required={false}
          onChange={handleChange}
        />

        <InputSelectIns
          label="sort by"
          htmlId="sortBy"
          name="sortBy"
          onChange={handleChange}
        />

        <ButtonIns label="find" mode="primary" style={customStyles} />
      </form>
    </div>
  );
};

export default SortCardOptions;
