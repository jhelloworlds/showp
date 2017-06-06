import { SET_LIST } from '../actions/types'
import { SET_PATIENT } from '../actions/types'

const initialState = {
  list: {
    query: '',
    array: []
  },
  patient: {
    first_name: null,
    middle_name: null,
    last_name: null,
    dob: null,
    address_street: null,
    address_apt: null,
    address_city: null,
    address_state: null,
    address_zip: null,
    address_country: null,
    gender: null,
    phone: null,
    email: null
  }
}

export function patient(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LIST:
      const list = Object.assign({}, state.list, { query: action.query,  array: action.array })
      return Object.assign({}, state, { list: list })
    case SET_PATIENT:
      const st = Object.assign({}, state, action.patient)
      return st
    default: return state
  }
}
