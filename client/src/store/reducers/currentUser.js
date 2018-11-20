import * as types from '../actionTypes';

const currentUser = (state=null, action) => {
  switch(action.type) {
    case types.SET_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
}

export default currentUser;