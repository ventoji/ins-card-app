import React from "react";
import PropTypes from "prop-types";
//import './ButtonIns.module.scss';
import "./ButtonIns.css";

/**
 * ButtonIns types for the card App
 */
const ButtonIns = ({ label, size, mode, ...props }) => {
  return (
    <div className="ins-form__group">
      <button
        className={[
          "ins-button",
          `ins-button--${size}`,
          `ins-button--${mode}`,
        ].join(" ")}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

ButtonIns.defaultProps = {
  size: "small",
  mode: "danger",
  label: "Add",
  type: "submit",
  onClick: () => {},
};

ButtonIns.propTypes = {
  /**
   * Button Contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Button Mode
   */
  mode: PropTypes.oneOf(["primary", "secondary", "danger"]),

  /**
   * Optiona click handler
   */
  onClick: PropTypes.func,

  /**
   * Button type
   */
  type: PropTypes.oneOf(["button", "submit"]),

  /**
   * Button size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ButtonIns;
