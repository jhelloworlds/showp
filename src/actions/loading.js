import { SET_LOADING, FINISHED_LOADING } from '../actions/types'

export function setLoading() {
  return {
    type: SET_LOADING
  }
}
export function finishedLoading() {
  return {
    type: FINISHED_LOADING
  }
}