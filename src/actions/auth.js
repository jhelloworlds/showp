import {SET_CURRENT_USER} from './types'
import service from '../utils/service'

export function userLoginRequest (userData) {
  return dispatch => {
    localStorage.setItem('token', 'received token')
    service.post('/auth/doctor', {email: userData.email, password: userData.password}).then(
      (response) => {
        // if(response.status === 200 && response.data.result) 
        dispatch(setCurrentUser({email: 'some@mail.com', token: response.data.result}))
      })
  }
}

export function userLogOut (token){
  return dispatch => {
    service.delete('/auth/doctor?token=' + token)
    localStorage.removeItem('token')
    document.location = '/login'
    return false
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}