import configureStore from 'redux-mock-store';
import * as cardActions from './actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

let initialState;
let store;


const CARD_DETAILS = {
    title: "Moto GP",
    description: "Some description for the card, very nice",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
  };

  
describe('redux actions', () => {
    beforeEach(() => {
        initialState = [{}];
        store = mockStore(initialState);
      });

      it('should dispatch create card when add button is clicked', () => {

        store.dispatch(cardActions.addListCard(CARD_DETAILS));
        const actions = store.getActions();
        const expectedPayload = {
            type: cardActions.ADD_CARD,
            payload: CARD_DETAILS,
          };
          expect(actions).toEqual([expectedPayload]);

      });

      it('should dispatch update card when save button is clicked', () => {
   

        store.dispatch(cardActions.updateListCard (CARD_DETAILS));
        const actions = store.getActions();
        const expectedPayload = {
            type: cardActions.UPDATE_CARD_LIST,
            payload: CARD_DETAILS,
          };
          expect(actions).toEqual([expectedPayload]);

      });

      it('should dispatch delete card when delete button is clicked', () => {
   
        const id = 'dgfjgll';
        store.dispatch(cardActions.removeListCard(id));
        const actions = store.getActions(id);
        const expectedPayload = {
            type: cardActions.REMOVE_CARD,
            payload: id,
          };
          expect(actions).toEqual([expectedPayload]);

      });
})