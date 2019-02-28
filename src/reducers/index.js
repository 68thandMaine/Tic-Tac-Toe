import { combineReducers } from 'redux';
import historyReducer from './history-reducer'


const rootReducer = combineReducers({
  rememberMove: historyReducer
});

export default rootReducer;
