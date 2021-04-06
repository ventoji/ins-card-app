import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loggerMiddleware from './logger';
// import modalReducer from './modalReducer';
import cardReducer from './cardReducer';

//    modalOpen: modalReducer,
const rootReducer = combineReducers({
    cardList: cardReducer
});

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];

if (process.env.NODE_ENV === 'development') {
    enhancers.push(devTools);
  }


const composeEnhancers = compose(...enhancers);

/**
 * store for the card list app
 */
export default () => {
    const store = createStore(
        rootReducer,
        undefined,
        composeEnhancers
    );

      return store;
}