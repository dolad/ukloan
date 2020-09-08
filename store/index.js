import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer/index';

const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
