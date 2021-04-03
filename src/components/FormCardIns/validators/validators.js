/**
 * 
 * @param {Object} card containing title, description and image url
 */
export const validateCardDetails = ({title,description}) => {

    const errors = {};

    if(!title) errors.title = 'Title can not be empty';

    if(!description) errors.description ='Description can not be empty';

    return errors;
    
}