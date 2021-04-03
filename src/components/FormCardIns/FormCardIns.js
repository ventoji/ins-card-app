import React, { useState } from 'react';
import InpusIns from '../InputIns';
import ButtonIns from '../ButtonIns';
import './FormCardIns.css';
import { validateCardDetails } from './validators/validators';
import { saveItem } from '../../utils/localStorageService';


const INITIAL_STATE = {
    title: '',
    description: '',
    imageUrl: 'https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg'
} 

/** Form Card component  */
const FormCardIns = () => {
    const [cardDetails, setCardDetails] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});

    const handleSubmitCard = (event) => {
        event.preventDefault();
        const errors = validateCardDetails(cardDetails);
        setErrors(errors);
        const isValidForm = Object.getOwnPropertyNames(errors).length === 0;
        if(isValidForm){
            setCardDetails(INITIAL_STATE);
            console.log('submitted data', cardDetails);
            saveItem(cardDetails);
          //  document.getElementById("ins-form").reset(); 
        }
    }
    const handleCardDetails = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        if(errors){
            setErrors({
                ...errors,
                [field]: ''
            });
        }
    
        setCardDetails({
          ...cardDetails,
          [field]: value,
        });
      };

    return (
        <div className="ins-card-form">
        <h1 className="ins-heading-primary"> New Card</h1>
        <form id="ins-form" className="ins-form" onSubmit={handleSubmitCard}>
            <InpusIns
                htmlId="title" 
                label="Title" 
                placeholder="Title"
                name="title"
                onChange={handleCardDetails}
                error={errors.title}
                />

            <InpusIns
                htmlId="description" 
                label="Description" 
                placeholder="Description"
                name="description"
                onChange={handleCardDetails}
                error={errors.description}
                />

            <InpusIns
                htmlId="imageUrl" 
                label="Image" 
                placeholder="Image (Url)"
                name="imageUrl"
                onChange={handleCardDetails}
                />
            <ButtonIns label="Add"/>
            
        </form>
        </div>
    );
};

export default FormCardIns;