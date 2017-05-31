import { INCREMENT_STEP } from '../actions/types'
import { DECREMENT_STEP } from '../actions/types'

export function incrementStep() {
  return {
    type: INCREMENT_STEP,
  }
}
export function decrementStep() {
  return {
    type: DECREMENT_STEP,
  }
}
