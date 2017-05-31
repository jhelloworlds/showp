import { SET_CURRENT_USER } from '../actions/types'

const initialState = {
  email: '',
  token: '',
  first_name: '',
  last_name: ''
}

export function user(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    default: return state
  }
}