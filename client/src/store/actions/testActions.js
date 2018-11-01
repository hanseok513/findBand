import * as types from "../actionTypes";

export function sendTestAction() {
  return dispatch => {
    dispatch({ type: types.TEST_ACTION });
  };
}

export function sendTestAction2() {
  return dispatch => {
    dispatch({ type: types.TEST_ACTION2 });
  };
}
