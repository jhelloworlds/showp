import { combineReducers } from 'redux'
import { user } from './reducers/user'
import { menu } from './reducers/menu'
import { patient } from './reducers/patient'
import { wizard } from './reducers/wizard'
import { loading } from './reducers/loading'

export default combineReducers({
  user,
  menu,
  patient,
  wizard,
  loading
});