import {combineReducers} from 'redux';

import {model as todos} from './todos';
import {model as counter} from './counter';

export default combineReducers({counter, todos});
