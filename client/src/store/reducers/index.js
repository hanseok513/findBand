import { combineReducers } from "redux";
import testReducer from './testReducer';
import testReducer2 from './testReducer2';

const combinedReducer = combineReducers({firstAction:testReducer, secondAction:testReducer2});

export default combinedReducer;