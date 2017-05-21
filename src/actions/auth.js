import {SET_CURRENT_USER} from './types'
//import axios from 'axios'

export function userLoginRequest (userData) {
  return dispatch => {
    localStorage.setItem('token', 'received token')
    return Promise.resolve(true)
    // return axios.post('/auth/doctor', userData)
    // TODO: add axios request 
    // TODO: dispatch SET_CURRENT_USER with token decrypted data?
  }
}

export function userLogOut (){
  return dispatch => {
    localStorage.removeItem('token')
    return true
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}