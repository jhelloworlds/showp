import { SET_QUERY } from '../actions/types'

const initialState = {
  query: ''
}

export function patient(state = initialState, action = {}) {
  switch (action.type) {
    case SET_QUERY:
      return { query: action.query }
    default: return state
  }
}