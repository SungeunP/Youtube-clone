import { SET_TEST_VALUE } from '../types'

export default (value) => {
  return {
    type: SET_TEST_VALUE,
    payload: value
  }
}