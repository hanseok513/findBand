import { combineReducers } from "redux";
import currentUser from './currentUser';
import users from './users';
import errors from './errors';

const combinedReducer = combineReducers({users, currentUser, errors});

export default combinedReducer;