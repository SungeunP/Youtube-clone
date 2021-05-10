import { SET_GLOBAL_VIDEO } from "../types";

let initialState = {
  globalVideo: null
}
export default (state = initialState, action) => {
  console.log('state :>> ', state);
  console.log('action :>> ', action);
  console.log('SET_GLOBAL_VIDEO :>> ', SET_GLOBAL_VIDEO);

  switch (action.type) {
    case SET_GLOBAL_VIDEO:
      const { payload } = action
      console.log('payload :>> ', payload);
      console.log('{...state, globalVideo: payload} :>> ', {...state, globalVideo: payload});
      return {...state, globalVideo: payload}
    default:
      return state
  }
}