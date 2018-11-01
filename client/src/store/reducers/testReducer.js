import * as types from '../actionTypes';

const testReducer = (state={data: null}, action) => {
  console.log("in reducer... action : " + action);
  switch(action.type) {
    case types.TEST_ACTION:
      return {...state, data: action.type};
    default:
      return state;
  }
}

export default testReducer;