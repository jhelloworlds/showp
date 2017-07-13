import { SET_PATIENT } from '../actions/types'
import { SET_LIST } from '../actions/types'
import { browserHistory } from 'react-router'
import { incrementStep } from './wizard'
import { setLoading, finishedLoading } from './loading'
import moment from 'moment'
import service from '../utils/service'

export function searchPatient(query) {
  return (dispatch, getState) => {
    const token = getState().user.token
    dispatch(setLoading())
    service.get('/office/patient/search?query=' + query + '&token=' + token).then(
      (response) => {
        dispatch(finishedLoading())
        if (response.status === 200 && response.data.result) {
          dispatch(setList({
            query: query,
            array: response.data.result
          }))
          response.data.result[0] ? browserHistory.push('/list') : browserHistory.push('/form')
        }
      })
  }
}
export function createPatient(patient) {
  return (dispatch, getState) => {
    const token = getState().user.token
    const gender = patient.gender === 'MALE' ? 'm' : 'f'
    const payload = Object.assign({}, patient, { token: token }, { dob: moment(patient.dob).format('MM-DD-YYYY'), gender })
    dispatch(setLoading())
    service.post('/office/patient', payload).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          const patient = Object.assign({}, getState().patient, { patient: response.data.result })
          dispatch(setPatient(patient))
          dispatch(finishedLoading())
          dispatch(incrementStep())
        }
      })
  }
}

export function setList(list) {
  return {
    type: SET_LIST,
    list
  };
}

export function setPatient(patient) {
  return {
    type: SET_PATIENT,
    patient
  };
}
