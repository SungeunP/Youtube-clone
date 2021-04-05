import { SET_GLOBAL_VIDEO } from '../types'

export default (value) => {
  return {
    type: SET_GLOBAL_VIDEO,
    payload: value
  }
}