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
  const { title, description, image } = cardDetails;

  if((typeof(title) === 'string' && title.length === 0) || !title){
    errors.title = "Title can not be empty";
  }

  
  if((typeof(description) === 'string' && description.length === 0) || !description){
    errors.description = "Description can not be empty"
  }else if(validateCaracthers(description)){
    errors.description = "Description is too long"
  }

  if(image){
    if(!isValidHttpUrl(image)){
      errors.image = " introduce a valid url (http(s)://www.domain.(es|com|...)/pathname/image.jpg)"
    }
  }

  return errors;
};

export const MAX_LENGTH = 155;

/**
 * 
 * @param {string} text description 
 * @returns true or false wethear it is too long.
 */
export const validateCaracthers = (text) => {

  let tooLong;
  if(text.length >= MAX_LENGTH){
    tooLong = true;
  }else{
    tooLong = false;
  }

  return tooLong;
}

/**
 * 
 * @param {string} text 
 * @returns the number of caracthers the user can still type
 */
export const counterCaracthers = (text) => {
  let diff = MAX_LENGTH - text.length;
    if(diff <= 0){
      diff = 0;
    }
   return diff;
 
}

/**
 * 
 * @param {imgUrl} imgUrl 
 * @returns if it is a valid url with a valid image extension at the end.
 */
export const isValidHttpUrl = (imgUrl) => {
  let url;
  
  try {
    url = new URL(imgUrl);
  
  } catch (error) {
    //console.log('error',error);
    return false;  
  }
  // console.log(url.protocol);
  // console.log(url.host);
  // console.log(url.hostname);
  // console.log('href',url.href);
  // console.log('port',url.port);
  // console.log('pathname',url.pathname);
  // console.log('search',url.search);
  const protocol = url.protocol === "http:" || url.protocol === "https:";
  const hostname = url.hostname.length>=7;

  const checkImage = url.pathname.split('.').filter(item=> item==='jpg' || item==='png' )[0];
  const pathname = ['jpg','png'].includes(checkImage);

  return protocol && hostname && pathname;
}
