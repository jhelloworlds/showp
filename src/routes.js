import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Login from './components/Login'
import Main from './components/Main'
import List from './components/List'
import isLoggedIn from './utils/auth/isLoggedIn'

const isLogged = (nextState, replace) => {
  !isLoggedIn() && replace({ pathname: '/login' })
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} onEnter={isLogged} />
    <Route path='/login' component={Login} />
    <Route path='/list' component={List} onEnter={isLogged} />
  </Route>
) 