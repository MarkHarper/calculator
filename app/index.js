import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import getRoutes from './config/routes.js'
import * as reducers from 'redux/modules'

const store = createStore(combineReducers({...reducers, routing: routerReducer}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

const history = syncHistoryWithStore(hashHistory, store)

function checkAuth (nextState, replace) {
  let state = store.getState()
  
  if (state.users.get('isFetchingUser')) {
    return
  }

  switch (nextState.location.pathname) {
    case '/':
    case '/auth':
      if (state.users.get('isAuthed')) {
        replace('/results')
      }
      break
    default:
      if (!state.users.get('isAuthed')) {
        replace('/auth')
      }
      break
  }
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth, history)}
  </Provider>,
document.getElementById('app'))
