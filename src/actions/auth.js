import { SET_CURRENT_USER } from './types'
import { toggleMenu } from './menu'
import { browserHistory } from 'react-router'
import service from '../utils/service'

export function userLoginRequest(userData) {
  return dispatch => {
    service.post('/auth/doctor', { email: userData.email, password: userData.password }).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          dispatch(setCurrentUser({ email: userData.email, token: response.data.result }))
          localStorage.setItem('token', response.data.result)
          dispatch(toggleMenu())
          browserHistory.push('/')
        }
      }, (err) => {
        alert('Invalid e-mail and password provided.')
      })
  }
}

export function userLogOut(token) {
  return dispatch => {
    service.delete('/auth/doctor?token=' + token)
    localStorage.removeItem('token')
    dispatch(setCurrentUser({}))
    dispatch(toggleMenu())
    browserHistory.push('/login')
    return false
  }
}

export function verifyToken(token) {
  return dispatch => {
    console.log('verifyToken')
    service.get('/auth/doctor?token=' + token).then(
      (response) => {
        if (response.status === 200 && response.data.result && response.data.result.doctor) {
          dispatch(setCurrentUser({
            email: response.data.result.doctor.email,
            token: token,
            first_name: response.data.result.doctor.first_name,
            last_name: response.data.result.doctor.last_name
          }))
        }
      }
    )
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user: user
  };
}
