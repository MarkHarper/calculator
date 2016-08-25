import auth, { logout } from 'helpers/auth'
import { saveUser } from 'helpers/api'
import { formatUserInfo } from 'helpers/utils'
import { Map } from 'immutable'
import { UPDATE_GOAL } from './goals'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'

export function authUser (uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

function unauthUser () {
  return {
    type: UNAUTH_USER,
  }
}

function fetchingUser () {
  return {
    type: FETCHING_USER,
  }
}

function fetchingUserFailure (error) {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.',
  }
}

export function fetchingUserSuccess (uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

export function removeFetchingUser () {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

export function fetchAndHandleAuthedUser () {
  return function (dispatch) {
    dispatch(fetchingUser())
    return auth().then(({user, credential}) => {
      const userData = user.providerData[0]
      const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
      return dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()))
    })
    .then(({user}) => saveUser(user))
    .then((user) => dispatch(authUser(user.uid)))
    .catch((error) => dispatch(fetchingUserFailure(error)))
  }
}

export function logoutAndUnauth () {
  return function (dispatch) {
    logout()
    dispatch(unauthUser())
  }
}

const initialUserState = Map({
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
  goal: Map({
    currentWeight: '',
    currentBodyFat: '',
    targetWeight: '',
    targetBodyFat: '',
  }),
})

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return state.merge({
        info: action.user,
        lastUpdated: action.timestamp,
      })
    case UPDATE_GOAL :
      return state.merge({
        goal: action.goal,
      })
    default :
      return state
  }
}

const initialState = Map({
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
})

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER :
      return state.merge({
        isAuthed: true,
        authedId: action.uid,
      })
    case UNAUTH_USER :
      return state.merge({
        isAuthed: false,
        authedId: '',
      })
    case FETCHING_USER :
      return state.merge({
        isFetching: true,
      })
    case FETCHING_USER_FAILURE :
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? state.merge({
          error: '',
          isFetching: false,
        })
        : state.merge({
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action),
        })
    case REMOVE_FETCHING_USER :
      return state.merge({
        isFetching: false,
      })
    case UPDATE_GOAL :
      return state.merge({
        [action.uid]: user(state[action.uid], action),
      })
    default :
      return state
  }
}
