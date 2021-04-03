
import React from 'react';
import PropTypes from 'prop-types';
import './CardIns.css';

/** Component for a unique card */
const CardIns = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div className="ins-card">

            <div className="ins-card__image-container">
            <h5 className="ins-card__title">{title}</h5>
               <img 
                className="ins-card__image"
                src={imageUrl} 
                alt="card pic"
                />
            </div> 
            
            <div className="ins-card__description">
                <p>{description}</p>
            </div>          
            
        </div>
    );
};


CardIns.defaultProps = {
    title: 'Moto GP',
    description: 'Some description for the card, very nice',
    imageUrl: 'https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg'
};

CardIns.propTypes = {
    /**
     *  Image for the card provided by a url
     */
    imageUrl: PropTypes.string,

    /**
     *  Description for the card
     */
    description: PropTypes.string.isRequired,

    /**
     *  Title for the card 
     */
    title: PropTypes.string.isRequired
}


export default CardIns;