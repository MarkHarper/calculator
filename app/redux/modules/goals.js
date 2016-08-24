import { Map } from 'immutable'
import { saveGoalToFirebase } from 'helpers/api'

const LOG_GOAL = 'LOG_GOAL'

export function updateGoalText (item, itemContent) {
  return {
    type: LOG_GOAL,
    item,
    itemContent,
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
})

export default function goal (state = initialGoalState, action) {
  switch (action.type) {
    case LOG_GOAL :
      return state.merge({
        [action.item]: action.itemContent,
      })
    default :
      return state
  }
}
