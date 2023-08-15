import {createStore} from 'redux';
import reducers from './Reducers/index';
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { compose } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;