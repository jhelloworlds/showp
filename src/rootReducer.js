import { combineReducers } from 'redux'
import { user } from './reducers/user'
import { menu } from './reducers/menu'

export default combineReducers({
  user,
  menu
});