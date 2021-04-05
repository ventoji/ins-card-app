/**
 *
 * @param {Object} card containing title, description and image url
 */
export const validateCardDetails = (cardDetails) => {
  const errors = {};

  if(cardDetails === undefined){
    errors.title = "Title can not be empty";
    errors.description = "Description can not be empty"

    return errors;
  }
  const { title, description } = cardDetails;

  if((typeof(title) === 'string' && title.length === 0) || !title){
    errors.title = "Title can not be empty";
  }

  
  if((typeof(description) === 'string' && description.length === 0) || !description){
    errors.description = "Description can not be empty"
  }

  return errors;
};
