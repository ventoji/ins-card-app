import React, { useState } from "react";
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

const INITIAL_STATE = {
  title: "",
  description: "",
  image: "",
};

/** Form Card component  */
const FormCardIns = ({ id }) => {
  const [cardDetails, setCardDetails] = useState(
    id ? getItemById(id) : INITIAL_STATE
  );
  const [errors, setErrors] = useState({});
  const [sucessfull, setSuccessfull] = useState("");

  // const setInitialState = useCallback( (id) => {
  //    console.log('initial state', getItemById(id));
  //   if(id){
  //     setCardDetails(getItemById(id));
  //   }else{
  //     setCardDetails(INITIAL_STATE)
  //   }

  // },[]);

  // useEffect(() => {
  //     console.log('ID',typeof(id));
  //     console.log(id.length);
  //    // setInitialState(id);
  // },[id])

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
        setSuccessfull("card created");
      } else {
        updateItem(cardDetails);
        setSuccessfull("card updated");
      }

      //  !cardDetails.id ? saveItem(cardDetails) : updateItem(cardDetails);
      //   setSuccessfull('submitted properly');
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
          htmlId="title"
          label="Title"
          placeholder="Title"
          name="title"
          onChange={handleCardDetails}
          error={errors.title}
          value={cardDetails ? cardDetails.title : ""}
        />

        <InpusIns
          htmlId="description"
          label="Description"
          placeholder="Description"
          name="description"
          onChange={handleCardDetails}
          value={cardDetails ? cardDetails.description : ""}
          error={errors.description}
        />

        <InpusIns
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
  id: PropTypes.string,
};

export default FormCardIns;
