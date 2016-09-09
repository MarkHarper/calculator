import { Map } from 'immutable'
import { saveGoalToFirebase, fetchUsersGoal } from 'helpers/api'
// import { addListener } from 'redux/modules/listeners'
// import { listenToDecisions, fetchSingleDecision } from 'helpers/api'

const UPDATE_GOAL_TEXT = 'UPDATE_GOAL_TEXT'
export const UPDATE_GOAL = 'UPDATE_GOAL'
const ACTIVATE_FORM = 'ACTIVATE_FORM'
const DEACTIVATE_FORM = 'DEACTIVATE_FORM'
export const FETCHING_USERS_GOALS = 'FETCHING_USERS_GOALS'
export const FETCHING_USERS_GOALS_ERROR = 'FETCHING_USERS_GOALS_ERROR'
export const FETCHING_USERS_GOALS_SUCCESS = 'FETCHING_USERS_GOALS_SUCCESS'

export function activateForm () {
  return {
    type: ACTIVATE_FORM,
  }
}

export function deactivateForm () {
  return {
    type: DEACTIVATE_FORM,
  }
}

function fetchingUsersGoals () {
  return {
    type: FETCHING_USERS_GOALS,
  }
}

function fetchingUsersGoalsError (error) {
  console.warn(error)
  return {
    type: FETCHING_USERS_GOALS_ERROR,
    error: 'Error fetching Users Goals',
  }
}

function fetchingUsersGoalsSuccess () {
  return {
    type: FETCHING_USERS_GOALS_SUCCESS,
  }
}

export function updateGoalText (item, itemContent) {
  return {
    type: UPDATE_GOAL_TEXT,
    item,
    itemContent,
  }
}

export function updateGoal (uid, goal) {
  return {
    type: UPDATE_GOAL,
    uid,
    goal,
  }
}

export function saveGoal (user, goal) {
  return function (dispatch) {
    saveGoalToFirebase(user, goal)
      .catch((error) => console.warn('Error saving checkin', error))
  }
}

export function fetchAndHandleUsersGoals (uid) {
  return function (dispatch) {
    dispatch(fetchingUsersGoals())

    fetchUsersGoal(uid)
      .then(function (goal) {
        dispatch(updateGoal(uid, goal))
      })
      .then(() => dispatch(fetchingUsersGoalsSuccess()))
      .catch((error) => dispatch(fetchingUsersGoalsError(error)))
  }
}

const initialGoalState = Map({
  currentWeight: '',
  currentBodyFat: '',
  targetWeight: '',
  targetBodyFat: '',
  exerciseTime: '',
  exerciseIntensity: '',
  fatPreference: '',
  editing: false,
})

export default function goal (state = initialGoalState, action) {
  switch (action.type) {
    case UPDATE_GOAL_TEXT :
      return state.merge({
        [action.item]: action.itemContent,
      })
    case ACTIVATE_FORM :
      return state.merge({
        'editing': !state.get('editing'),
      })
    case DEACTIVATE_FORM :
      return state.merge({
        'editing': !state.get('editing'),
      })
    default :
      return state
  }
}
