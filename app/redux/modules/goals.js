import { Map } from 'immutable'
import { saveGoalToFirebase } from 'helpers/api'
// import { addListener } from 'redux/modules/listeners'
// import { listenToDecisions, fetchSingleDecision } from 'helpers/api'

const UPDATE_GOAL_TEXT = 'UPDATE_GOAL_TEXT'
export const UPDATE_GOAL = 'UPDATE_GOAL'
const ACTIVATE_FORM = 'ACTIVATE_FORM'
const DEACTIVATE_FORM = 'DEACTIVATE_FORM'

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

export function updateGoalText (item, itemContent) {
  console.log(item, itemContent)
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

const initialGoalState = Map({
  currentWeight: '',
  currentBodyFat: '',
  targetWeight: '',
  targetBodyFat: '',
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
