import { SET_LOADING, FINISHED_LOADING } from '../actions/types'

const initialState = {
  isloading: false
}

export function loading(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return {
        isloading: true,
      }
    case FINISHED_LOADING:
      return {
        isloading: false,
      }
    default: return state
  }
}