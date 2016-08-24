import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  AppsPageContainer, LogoutContainer } from 'containers'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer} onEnter={checkAuth}>
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='results' component={AppsPageContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Route>
    </Router>
  )
}
