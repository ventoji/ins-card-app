import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import InpusIns from "../InputIns";
import ButtonIns from "../ButtonIns";
import "./FormCardIns.css";
import { 
    validateCardDetails,
    counterCaracthers,
    MAX_LENGTH 
  } from "./validators/validators";
import {
  getItemById,
  updateItem,
} from "../../utils/localStorageService";
import { 
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
  addListCard,
  updateListCard 
}) => {
  const [cardDetails, setCardDetails] = useState(
      typeof(id)==='string'? getItemById(id):INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [sucessfull, setSuccessfull] = useState("");
  const [descCount, setDescCount ] = useState(MAX_LENGTH)

  // useEffect(() => {

  //   if(typeof(id)==='string'){
  //     setCardDetails(getItemById(id));
  //   }
  //   return () => {
  //     setCardDetails(INITIAL_STATE);
  //   }
  // },[id])

  const handleSubmitCard = (event) => {
    event.preventDefault();

    const errors = validateCardDetails(cardDetails);
    setErrors(errors);
    const isValidForm = Object.getOwnPropertyNames(errors).length === 0;


    if (isValidForm) {
   //  console.log("submitted data", cardDetails);

      if (!cardDetails.id) {
        
        addListCard(cardDetails);
        setSuccessfull("card created");
      } else {
        updateItem(cardDetails);
        updateListCard(cardDetails);
        setSuccessfull("card updated");
       
      }
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

    if(field === 'description'){
      const len = counterCaracthers(value);
      setDescCount(len);
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
        {typeof(id)!=='string'? "NEW CARD" : "EDIT CARD"}{" "}
      </h1>
      <form id="ins-form" className="ins-form" onSubmit={handleSubmitCard}>
        <InpusIns
          classnew="ins-form-new-group"
          htmlId="title"
          label="Title"
          placeholder="Title*"
          name="title"
          onChange={handleCardDetails}
          error={errors.title}
          value={cardDetails ? cardDetails.title : ""}
     
        />

        <InpusIns
         classnew="ins-form-new-group"
          htmlId="description"
          label="Description"
          placeholder="Description*"
          name="description"
          onChange={handleCardDetails}
          value={cardDetails ? cardDetails.description : ""}
          error={errors.description}

        />
        <span className="ins-form__advise-msg"> Max: {descCount} </span>
        <InpusIns
         classnew="ins-form-new-group"
          htmlId="image"
          label="Image"
          placeholder="Image (Url)"
          name="image"
          onChange={handleCardDetails}
          value={cardDetails ? cardDetails.image : ""}
          error={errors.image}

        />
        <ButtonIns label={typeof(id)!=='string' ? "Add" : "Save"} />
      </form>
      {sucessfull && <span style={{ color: "#7ed56f" }}> {sucessfull}</span>}
    </div>
  );
};

FormCardIns.defaultProps = {
  id: "",
  addListCard: () => {},
  updateListCard: () => {} 
};

FormCardIns.propTypes = {
  /**
   *  Id for a card, by default is empty
   */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * Dispatch an action when creating a new card
   */
  addListCard: PropTypes.func,
  /**
   * Dispatch a action event when editing a existing card
   */
  updateListCard: PropTypes.func 
};

const mapDispatchToProps = (dispatch) => ({
  updateListCard: (cardDetails) => dispatch(updateListCard(cardDetails)),
  addListCard: (cardDetails) => dispatch(addListCard(cardDetails))
});

export default connect(undefined,mapDispatchToProps)(FormCardIns);
