import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./CardIns.css";
import ButtonIns from "../ButtonIns";
import { removeItem } from "../../utils/localStorageService";

const CardPictureStyled = styled.div`
  background-size: cover;
  height: 15rem;
  background-blend-mode: screen;
  background-image: url(${(props) => props.imgUrl});
`;

/** Component for a unique card */
const CardIns = ({ title, description, image, id, handleModal }) => {
  const [showControls, setShowControls] = useState(false);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleDelete = () => {
    removeItem(id);
  };

  const handleEdit = () => {
    console.log(id);
    handleModal(id);
  };
  return (
    <div
      className="ins-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ins-card__image-container">
        <CardPictureStyled imgUrl={image}>
          <h5 className="ins-card__title">{title}</h5>
        </CardPictureStyled>
      </div>

      <div className="ins-card__description">
        <div
          className={`ins-card__controls ${
            showControls ? "ins-card__controls-show" : ""
          }`}
        >
          <ButtonIns
            label="edit"
            mode="primary"
            type="button"
            onClick={handleEdit}
          />
          <ButtonIns label="delete" type="submit" onClick={handleDelete} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

CardIns.defaultProps = {
  title: "Moto GP",
  description: "Some description for the card, very nice",
  image:
    "http://www.ventoji.es/ventojidev/wp-content/uploads/2019/06/IMG_20180922_170206-1568x1176.jpg",
};

CardIns.propTypes = {
  /**
   *  Image for the card provided by a url
   */
  image: PropTypes.string,

  /**
   *  Description for the card
   */
  description: PropTypes.string.isRequired,

  /**
   *  Title for the card
   */
  title: PropTypes.string.isRequired,

  /**
   *  Handle modal window for edit the content card
   */
  handleModal: PropTypes.func,
};

export default CardIns;
