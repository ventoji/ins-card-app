import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
} from "react";
import { createPortal } from "react-dom";
// import PropTypes from 'prop-types';
import "./ModalIns.css";

const modalInsElement = document.getElementById("ins-modal-win");

/** ModalIns window */
const ModalIns = ({ children, fade = false, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={`ins-modal ${fade ? "ins-modal-fade" : ""}`}>
        <div className="ins-modal-overlay" onClick={close} />
        <span
          className="ins-modal-close"
          aria-label="close"
          role="button"
          onClick={close}
        >
          {" "}
          X{" "}
        </span>
        <div className="ins-modal-body">{children}</div>
      </div>
    ) : null,
    modalInsElement
  );
};

// ModalIns.defaultProps = {
//     fade: false,
//     defaultOpened: false
// };

// ModalIns.propTypes = {
//     /**
//      * Render children for modal
//      */
//     children: PropTypes.any,

//     /**
//      *  fade effect
//      */
//     fade: PropTypes.bool,

//     /**
//      *  default opened
//      */
//     defaultOpened: PropTypes.bool,

//     /**
//      *  ref to Modal component
//      */
//     ref: PropTypes.any

// };

export default forwardRef(ModalIns);
