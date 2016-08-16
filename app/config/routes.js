import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer } from '../containers'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
