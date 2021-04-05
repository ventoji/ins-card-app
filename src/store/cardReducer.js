import * as cardActions from './actions';
import { getItems } from "../utils/localStorageService";

const initialCards = getItems();

/**
 * 
 * @param {boolean} state, list of cards
 * @param {bolean} action, update, delete or remove from the list
 * @returns 
 */
const modalReducer = (state=initialCards, action) => {


    switch (action.type){
        case cardActions.ADD_CARD:
            return [
                ...state,
                action.payload
            ]

        case cardActions.UPDATE_CARD:
            const {id, ...props} = action.payload;
            return state.map(card => {
                if(card.id === id){
                    return {
                        ...card,
                        ...props

                    }
                }else{
                    return card
                }
            });
    
        case cardActions.REMOVE_CARD:
            return state.filter(({ id }) => id !== action.payload);
        
                default:
            return state;
    }
}

export default modalReducer;