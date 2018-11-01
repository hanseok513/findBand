import * as types from '../actionTypes';

const testReducer2 = (state={data2: null}, action) => {
  console.log("in reducer... action : " + action);
  switch(action.type) {
    case types.TEST_ACTION2:
      return {...state, data2: action.type};
    default:
      return state;
  }
}

export default testReducer2;