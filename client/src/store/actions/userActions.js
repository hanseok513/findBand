import * as types from "../actionTypes";
import {axiosCall} from "../../services/api"

function loadUsers(users) {
  return {
    type: types.LOAD_USERS,
    users
  };
}

export function handleLoadUsers() {
  return async dispatch => {
    try {
      const users = await axiosCall("get", "/api/users");
      return dispatch(loadUsers(users));
    } catch (err) {
      console.log(err);
    }
  }
}
