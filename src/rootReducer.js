import { combineReducers } from 'redux'
import { user } from './reducers/user'
import { menu } from './reducers/menu'
import { patient } from './reducers/patient'
import { wizard } from './reducers/wizard'

export default combineReducers({
  user,
  menu,
  patient,
  wizard
});