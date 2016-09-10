import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  AppsPageContainer, LogoutContainer, BasicInfoContainer,
  BodyWeightContainer, BodyFatContainer, ExerciseInfoContainer,
  DietPreferencesContainer } from 'containers'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer} onEnter={checkAuth}>
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='results' component={AppsPageContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <Route path='signup'>
          <Route path='basic-info' component={BasicInfoContainer} />
          <Route path='body-weight' component={BodyWeightContainer} />
          <Route path='body-fat' component={BodyFatContainer} />
          <Route path='exercise-info' component={ExerciseInfoContainer} />
          <Route path='diet-preferences' component={DietPreferencesContainer} />
          <IndexRoute component={BasicInfoContainer} onEnter={checkAuth} />
        </Route>
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Route>
    </Router>
  )
}
