import { combineReducers } from 'redux'
import { user } from './reducers/user'
import { menu } from './reducers/menu'
import { patient } from './reducers/patient'

export default combineReducers({
  user,
  menu,
  patient
});