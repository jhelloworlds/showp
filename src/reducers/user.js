import { SET_CURRENT_USER } from '../actions/types'

const initialState = {
  user: {}
}

export function user (state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        user: action.user
      }
    default: return state
  }
}