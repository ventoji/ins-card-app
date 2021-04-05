import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import InpusIns from "../InputIns";
import ButtonIns from "../ButtonIns";
import "./FormCardIns.css";
import { validateCardDetails } from "./validators/validators";
import {
  saveItem,
  getItemById,
  updateItem,
} from "../../utils/localStorageService";
import { 
  closeModal,
  addListCard,
  updateListCard  
} from '../../store/actions';

const INITIAL_STATE = {
  title: "",
  description: "",
  image: "",
};

/** Form Card component  */
export const FormCardIns = ({ 
  id,
  closeModal,
  addListCard,
  updateListCard 
}) => {
  const [cardDetails, setCardDetails] = useState(
    id ? getItemById(id) : INITIAL_STATE
  );
  const [errors, setErrors] = useState({});
  const [sucessfull, setSuccessfull] = useState("");

  const handleSubmitCard = (event) => {
    event.preventDefault();
    const errors = validateCardDetails(cardDetails);
    setErrors(errors);
    const isValidForm = Object.getOwnPropertyNames(errors).length === 0;

    //  console.log(cardDetails.title, cardDetails.description,cardDetails.image);
    if (isValidForm) {
      console.log("submitted data", cardDetails);

      if (!cardDetails.id) {
        saveItem(cardDetails);
        addListCard(cardDetails);
        setSuccessfull("card created");
      } else {
        updateItem(cardDetails);
        updateListCard(cardDetails);
        setSuccessfull("card updated");
       
      }
      closeModal(true);
      setCardDetails(INITIAL_STATE);
      document.getElementById("ins-form").reset();
    }
  };
  const handleCardDetails = (event) => {
    const value = event.target.value;
    const field = event.target.name;

    if (sucessfull) {
      setSuccessfull("");
    }

    if (errors) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }

    setCardDetails({
      ...cardDetails,
      [field]: value,
    });
  };

  return (
    <div className="ins-card-form">
      <h1 className="ins-heading-primary">
        {" "}
        {id.length === undefined ? "NEW CARD" : "EDIT CARD"}{" "}
      </h1>
      <form id="ins-form" className="ins-form" onSubmit={handleSubmitCard}>
        <InpusIns
          classnew="ins-form-new-group"
          htmlId="title"
          label="Title"
          placeholder="Title"
          name="title"
          onChange={handleCardDetails}
          error={errors.title}
          value={cardDetails ? cardDetails.title : ""}
     
        />

        <InpusIns
         classnew="ins-form-new-group"
          htmlId="description"
          label="Description"
          placeholder="Description"
          name="description"
          onChange={handleCardDetails}
          value={cardDetails ? cardDetails.description : ""}
          error={errors.description}

        />

        <InpusIns
         classnew="ins-form-new-group"
          htmlId="image"
          label="Image"
          placeholder="Image (Url)"
          name="image"
          onChange={handleCardDetails}
          value={cardDetails ? cardDetails.image : ""}

        />
        <ButtonIns label={id.length === undefined ? "Add" : "Save"} />
      </form>
      {sucessfull && <span style={{ color: "#7ed56f" }}> {sucessfull}</span>}
    </div>
  );
};

FormCardIns.defaultProps = {
  id: "",
};

FormCardIns.propTypes = {
  /**
   *  Id for a card, by default is empty
   */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: (closeMod) => dispatch(closeModal(closeMod)),
  updateListCard: (cardDetails) => dispatch(updateListCard(cardDetails)),
  addListCard: (cardDetails) => dispatch(addListCard(cardDetails))
});

export default connect(undefined,mapDispatchToProps)(FormCardIns);
