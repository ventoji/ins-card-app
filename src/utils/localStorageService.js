
/**
 * 
 * @param {object} card detailed information
 */

export const saveItem = (card) => {

    let cardsList = getItems();

    if(cardsList){
        cardsList = [ ...cardsList, card];
    }else{
        cardsList = [card];
    }

    if (typeof(Storage) !== "undefined") {
        try {
            window.localStorage.setItem('cardsList', JSON.stringify(cardsList));
            console.log('saved in LocalStoraged');
        }
        catch(error){
            console.log(error);
        }
    }
}

/**
 * 
 * @returns list of cards stored in localStorage
 */

export const getItems = () => {
    let cardsList 
    if (typeof(Storage) !== "undefined") {
        try{
            cardsList = JSON.parse(window.localStorage.getItem('cardsList'));
            console.log('got it from LocalStoraged');
        }catch(error){
            console.log(error);
        }
      
    }else{
        cardsList = []
    }

    return cardsList;

}

/**
 * Remove cardsList from localStorage
 */
export const removeItems = () => {
    if (typeof(Storage) !== "undefined") {
        window.localStorage.removeItem('cardsList');
    }
}


// window.localStorage.removeItem('name');
/**
 * clear local storage
 */
export const clearAll = () => {
    if (typeof(Storage) !== "undefined") {
        window.localStorage.clear();
    }
}