import { INCREMENT_STEP } from '../actions/types'
import { DECREMENT_STEP } from '../actions/types'

const initialState = {
  step: 0
}

export function wizard(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_STEP:
      return { step: state.step + 1 }
    case DECREMENT_STEP:
      return { step: state.step - 1 }
    default: return state
  }
}