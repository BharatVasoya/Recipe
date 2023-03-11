import {combineReducers} from 'redux';
import getAnimalReducer from './getAnimalReducer';

// ---------- Root Reducer ---------- //
const rootReducer = combineReducers({
  getAnimalReducer,
});
export default rootReducer;
