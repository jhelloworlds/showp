import {
  INCREMENT_STEP, DECREMENT_STEP, SET_DIAGNOSIS_OPTIONS, SET_JUSTIFICATIONS, SET_DIAGNOSIS_SELECTED,
  SET_ACTIVE_JUSTIFICATIONS, SET_PRODUCTS, SET_PRODUCTS_SELECTED, SET_SKU, SET_SKU_SELECTED, SET_PRESCRIPTION
} from '../actions/types'

const initialState = {
  step: 0,
  diagnosis: {
    options: { primary: [], secondary: [] },
    selected: { primary: '', secondary: '' }
  },
  prescription: {},
  justifications: {
    read: [],
    active: []
  },
  products: {
    read: [],
    selected: {
      index: 0,
      item: {}
    }
  },
  SKU: {
    read: [],
    selected: {
      index: 0,
      item: {}
    }
  }
}

export function wizard(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_STEP:
      return Object.assign({}, state, { step: state.step + 1 })
    case DECREMENT_STEP:
      return Object.assign({}, state, { step: state.step - 1 })
    case SET_PRESCRIPTION:
      return Object.assign({}, state, { prescription: action.payload })
    case SET_DIAGNOSIS_OPTIONS:
      const diagnosis = Object.assign({}, state.diagnosis, { options: action.payload })
      return Object.assign({}, state, { diagnosis: diagnosis })
    case SET_DIAGNOSIS_SELECTED:
      const diag = Object.assign({}, state.diagnosis, { selected: action.payload })
      return Object.assign({}, state, { diagnosis: diag })
    case SET_JUSTIFICATIONS:
      const justs = Object.assign({}, state.justifications, { read: action.payload })
      return Object.assign({}, state, { justifications: justs })
    case SET_ACTIVE_JUSTIFICATIONS:
      const justif = Object.assign({}, state.justifications, { active: action.payload })
      return Object.assign({}, state, { justifications: justif })
    case SET_PRODUCTS:
      const read = [...action.payload]
      const products = Object.assign({}, state.products, { read: read })
      return Object.assign({}, state, { products: products })
    case SET_PRODUCTS_SELECTED: 
      const selected = Object.assign({}, state.products.selected, { index: action.payload.index, item: action.payload.item })
      const prods = Object.assign({}, state.products, { selected: selected } )
      return Object.assign({}, state, { products: prods } )
    case SET_SKU:
      const readSKU = [...action.payload]
      const SKU = Object.assign({}, state.SKU, { read: readSKU })
      return Object.assign({}, state, { SKU: SKU })
    case SET_SKU_SELECTED:
      const selectedSKU = { index: action.payload.index, item: action.payload.item }
      const sku = Object.assign({}, state.SKU, { selected: selectedSKU })
      return Object.assign({}, state, { SKU: sku })
    default: return state
  }
}
