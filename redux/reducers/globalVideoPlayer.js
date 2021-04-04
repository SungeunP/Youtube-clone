import { SET_TEST_VALUE } from "../types";

export default (state = false, action) => {
  switch (action.type) {
    case SET_TEST_VALUE:
      const { payload } = action
      return {...state, testValue: payload}
    default:
      return state
  }  
}