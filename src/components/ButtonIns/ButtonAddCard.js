import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";


const ButtonStyled = styled.button`
    position: ${(props) => props.position};
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    background: #b11107;
    color: #fff;
    font-size: 3rem;
    right: 10rem;
    bottom: 10rem;
    z-index: 999999;
`;

/**
 * Custom Styled Button to add cards in the app
 */
const ButtonAddCard = ({
    onClick,
    position
}) => {
    return (
        <ButtonStyled 
            onClick={onClick}
            position={position}
        >+</ButtonStyled>
    );
};

ButtonAddCard.defaultProps = {
    position: "fixed"
  };

ButtonAddCard.propTypes = {
    /**
     *  Handle onClick 
     */
     onClick: PropTypes.func,
    /**
   * Button Position
   */
  position: PropTypes.oneOf(["fixed", "relative"]),
}



export default ButtonAddCard;