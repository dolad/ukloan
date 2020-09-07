import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

const initialState = {};

// const middleWares = [logger, thunk];

// const logger = ({getState}) => {
//   return next => action => {
//     console.log('will dispatch', action);
//     return returnValue;
//   };
// };

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
