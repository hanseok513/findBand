import * as types from "../actionTypes";

const errors = (state = null, action) => {
  switch (action.type) {
    case types.ADD_ERROR:
      return action.message;
    case types.REMOVE_ERROR:
      return null;
    default:
      return state;
  }
};

export default errors;
