import {createStore, combineReducers} from 'redux';

import counter from './counter';
import todos from './todos';

let store = createStore(combineReducers({counter, todos}));

export default store;
