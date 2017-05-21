import { TOGGLE_MENU_ACTIVE } from '../actions/types'

const initialState = {
  active: false
}

export function menu (state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU_ACTIVE:
      return {
        active: !state.active,
      }
    default: return state
  }
}