import {
  INCREMENT_STEP, DECREMENT_STEP, SET_DIAGNOSIS_OPTIONS, SET_DIAGNOSIS_SELECTED, SET_JUSTIFICATIONS,
  SET_ACTIVE_JUSTIFICATIONS, SET_PRODUCTS, SET_PRODUCTS_SELECTED
} from '../actions/types'
import { setPatient } from './patient'
import service from '../utils/service'

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
export function setDiagnosisOptions(diag) {
  return {
    type: SET_DIAGNOSIS_OPTIONS,
    payload: diag
  }
}
export function setDiagnosisSelected(diag) {
  return {
    type: SET_DIAGNOSIS_SELECTED,
    payload: diag
  }
}
export function setJustifications(justs) {
  return {
    type: SET_JUSTIFICATIONS,
    payload: justs
  }
}
export function setActiveJustifications(justs) {
  return {
    type: SET_ACTIVE_JUSTIFICATIONS,
    payload: justs
  }
}
export function setProducts(prods) {
  return {
    type: SET_PRODUCTS,
    payload: prods
  }
}
export function setProductsSelected(prods) {
  return {
    type: SET_PRODUCTS_SELECTED,
    payload: prods
  }
}
export function getDiagnosisOptions() {
  return (dispatch, getState) => {
    const token = getState().user.token
    service.get('/office/diagnosis?service=cath&token=' + token).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          dispatch(setDiagnosisOptions(response.data.result))
        }
      })
  }
}
export function getPrescription(selected) {
  return (dispatch, getState) => {
    const token = getState().user.token
    const patient_id = getState().patient.patient.id
    const payload = { token: token, patient_id: patient_id }
    service.post('/office/prescription', payload).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          const patient = Object.assign({}, getState().patient, { prescription: response.data.result })
          dispatch(setPatient(patient))
          const payload = {}
          payload.prescription_id = response.data.result.id
          payload.diagnosis = [selected.primary, selected.secondary]
          payload.token = token
          service.put('/office/prescription/diagnosis', payload).then(
            (response) => {
              if (response.status === 200 && response.data.result) {
                dispatch(setDiagnosisSelected(selected))
                dispatch(incrementStep())
              }
            })
        }
      })
  }
}
export function getJustifications() {
  return (dispatch, getState) => {
    const token = getState().user.token
    service.get('/office/justification?service=cath&token=' + token).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          dispatch(setJustifications(response.data.result))
        }
      })
  }
}
export function submitJustifications(justifications) {
  return (dispatch, getState) => {
    // const token = getState().user.token
    // const just = justifications
    // const payload = { token: token, justification: just }
    // service.put('/office/prescription', payload).then(
    //   (response) => {
    //     if (response.status === 200 && response.data.result) {
    //       dispatch(setActiveJustifications(justifications))
    //       dispatch(incrementStep())
    //     }
    //   })
    dispatch(setActiveJustifications(justifications))
    dispatch(incrementStep())
  }
}
export function getProducts() {
  return (dispatch, getState) => {
    const token = getState().user.token
    let justs = getState().wizard.justifications.active
    justs = justs.join('&justification[]=')
    service.get('/office/product?service=cath&token=' + token + '&justification[]=' + justs).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          dispatch(setProducts(response.data.result))
        }
      })
  }
}
export function submitProducts(prods) {
  return (dispatch) => {
    dispatch(setProductsSelected(prods))
    dispatch(incrementStep())
  }
}