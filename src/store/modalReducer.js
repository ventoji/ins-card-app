import * as cardActions from './actions';

const initialModalState = false;

/**
 * 
 * @param {boolean} state of the modal window
 * @param {bolean} action change the state value
 * @returns 
 */
const modalReducer = (state=initialModalState, action) => {


    switch (action.type){
        case cardActions.CLOSE_MODAL:
            return action.payload

        case cardActions.UPDATE_CARD_LIST:
            return !state;
        
                default:
            return state;
    }
}

export default modalReducer;