import React from "react";
import PropTypes from "prop-types";
import './LabelIns.css';

const INLINE_STYLE = {
  asterisk: {
    color: "#B11107",
  },
  nvisible: {
    visibility: "hidden",
  },
  visible: {
    visibility: "visible",
  },
};

/**
 * LabelIns for card App
 */
const LabelIns = ({ htmlFor, label, required, visible }) => {
  return (
    <label
      className="ins-form__label"
      htmlFor={htmlFor}
      style={visible ? INLINE_STYLE.visible : INLINE_STYLE.nvisible}
    >
      {label} {required && <span style={INLINE_STYLE.asterisk}> *</span>}
    </label>
  );
};

LabelIns.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool,

  /** Display label if visible is set to false */
  visible: PropTypes.bool,
};

LabelIns.defaultProps = {
  htmlFor: "labelID",
  label: "field name",
  visible: true,
};

export default LabelIns;
