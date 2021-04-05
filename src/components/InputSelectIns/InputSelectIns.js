import React, { useState } from "react";
import PropTypes from "prop-types";
import LabelIns from "../LabelIns";
import "./InputSelectIns.css";

const SORT_OPTIONS = [
  {
    value: "asc",
    text: "ascendent",
  },
  {
    value: "desc",
    text: "descendent",
  },
];

/**
 *  InputSelectIns component
 */
const InputSelectIns = ({
  htmlId,
  name,
  label,
  required,
  sortOptions,
  onChange,
}) => {
  const [option, setOption] = useState(sortOptions[0].value);

  const onSortChange = (e) => {
    let value = e.target.value;
    setOption(value);
    onChange(e);
  };
  return (
    <div className="ins-form__group">
      <LabelIns htmlFor={htmlId} label={label} required={required} />
      <select
        className="ins-select"
        id={htmlId}
        name={name}
        value={option}
        onChange={onSortChange}
      >
        <option disabled value>
          {" "}
          -- select an option --{" "}
        </option>
        {sortOptions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelectIns.defaultProps = {
  htmlId: "1shdy4",
  name: "inssortby",
  label: "Sort by",
  required: false,
  sortOptions: SORT_OPTIONS,
};

InputSelectIns.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Options to be set in the select field */
  sortOptions: PropTypes.array,
};

export default InputSelectIns;
