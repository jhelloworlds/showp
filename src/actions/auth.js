import { SET_CURRENT_USER } from './types'
import { toggleMenu } from './menu'
import { setLoading, finishedLoading } from './loading'
import { browserHistory } from 'react-router'
import service from '../utils/service'

export function userLoginRequest(userData) {
  return dispatch => {
    dispatch(setLoading())
    service.post('/auth/doctor', { email: userData.email, password: userData.password }).then(
      (response) => {
        if (response.status === 200 && response.data.result) {
          localStorage.setItem('token', response.data.result)
          dispatch(verifyToken(response.data.result)).then(() => {
            dispatch(finishedLoading())
            dispatch(toggleMenu())
            browserHistory.push('/')
          })
        }
      }, (err) => {
        dispatch(finishedLoading())
        alert('Invalid e-mail and password provided.')
      })
  }
}

export function userLogOut(token) {
  return dispatch => {
    browserHistory.push('/login')
    dispatch(toggleMenu())
    service.delete('/auth/doctor?token=' + token)
    localStorage.removeItem('token')
    dispatch(setCurrentUser({}))
    return false
  }
}

export function verifyToken(token) {
  return dispatch => {
    dispatch(setLoading())
    return service.get('/auth/doctor?token=' + token).then(
      (response) => {
        dispatch(finishedLoading())
        if (response.status === 200 && response.data.result && response.data.result.doctor) {
          dispatch(setCurrentUser({
            email: response.data.result.doctor.email,
            token: token,
            first_name: response.data.result.doctor.first_name,
            last_name: response.data.result.doctor.last_name,
            org: response.data.result.doctor.org
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
