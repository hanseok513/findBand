import * as types from "../actionTypes";

export function addError(message) {
  return {
    type: types.ADD_ERROR,
    message
  };
}

export function removeError() {
  return {
    type: types.REMOVE_ERROR,
  };
}
