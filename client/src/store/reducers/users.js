import * as types from "../actionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_USERS:
      return [...action.users];
    default:
      return state;
  }
};

export default users;
