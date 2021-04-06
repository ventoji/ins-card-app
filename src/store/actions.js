export const ADD_CARD = 'ADD_CARD_INS';
export const REMOVE_CARD = 'REMOVE_CARD_INS ';
export const UPDATE_CARD_LIST = 'UPDATE_CARD_LIST';


/**
 * 
 * @param {object} cardUpdated with the updated fields
 * @returns plain JS object representing the action.
 */
export const updateListCard = (cardUpdated) => ({
    type: UPDATE_CARD_LIST,
    payload: cardUpdated
});

/**
 * 
 * @param {object} cardNew with the fields
 * @returns plain JS object representing the action.
 */

export const addListCard = (cardNew) => ({
    type: ADD_CARD,
    payload: cardNew
});

/**
 * 
 * @param {string} id of the existing card
 * @returns plain JS object representing the action.
 */

export const removeListCard = (id) => ({
    type: REMOVE_CARD,
    payload: id
});