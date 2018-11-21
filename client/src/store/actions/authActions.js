import {
  axiosCall,
  setTokenHeader,
  removeTokenHeader
} from "../../services/api";
import { addError, removeError } from "./errorActions";
import * as types from "../actionTypes";

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    removeTokenHeader();
    return dispatch(setCurrentUser(null));
  };
}

export function handleAuth(userData, type) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return axiosCall("post", `/api/auth/${type}`, userData)
        .then(({ token, user }) => {
          localStorage.setItem("jwtToken", token);
          localStorage.setItem("authorizedUser", user);
          setTokenHeader(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject();
        });
    });
  };
}
