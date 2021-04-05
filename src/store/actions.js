export const ADD_CARD = 'ADD_CARD_INS';
export const UPDATE_CARD = 'UPDATE_CARD_WHEN_CLOSE_WINDOW';
export const REMOVE_CARD = 'REMOVE_CARD_INS ';
export const CLOSE_MODAL = 'CLOSE_MODAL_INS ';
export const UPDATE_CARD_LIST = 'UPDATE_CARD_LIST';

/**
 * 
 * @param {boolean} close modal window after submitting a form
 * @returns the new state for the simple reducer
 */
export const closeModal = (close) => ({
    type: CLOSE_MODAL,
    payload: close
});

export const updateCardList = () => ({
    type: UPDATE_CARD_LIST
});

export const updateListCard = (cardUpdated) => ({
    type: UPDATE_CARD,
    payload: cardUpdated
});

export const addListCard = (cardUpdated) => ({
    type: ADD_CARD,
    payload: cardUpdated
});

export const removeListCard = (id) => ({
    type: REMOVE_CARD,
    payload: id
});