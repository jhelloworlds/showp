import { SET_PATIENT } from '../actions/types'
import { SET_LIST } from '../actions/types'
import { browserHistory } from 'react-router'
import service from '../utils/service'

export function searchPatient(query) {
  return (dispatch, getState) => {
    const token = getState().user.token
    service.get('/office/patient/search?query=' + query + '&token=' + token).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          dispatch(setList({
            query: query,
            array: response.data.result
          }))
          browserHistory.push('/list')
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
