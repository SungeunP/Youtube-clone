import { createStore } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

export default (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload}
    default:
      return state
  }
}