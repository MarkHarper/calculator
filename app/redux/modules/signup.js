import { Map } from 'immutable'

const UPDATE_SIGNUP_TEXT = 'UPDATE_SIGNUP_TEXT'
export const SIGNUP_USER_INFO = 'SIGNUP_USER_INFO'
export const SIGNUP_COMPLETE = 'SIGNUP_COMPLETE'

export function updateSignupText (item, itemContent) {
  return {
    type: UPDATE_SIGNUP_TEXT,
    item,
    itemContent,
  }
}

export function signupUserInfo (uid, user, timestamp) {
  return {
    type: SIGNUP_USER_INFO,
    uid,
    user,
    timestamp,
  }
}

export function completeSignup () {
  return {
    type: SIGNUP_COMPLETE,
  }
}

export function saveBasicInfo (user, info) {
  return function (dispatch) {
    saveBasicInfoToFirebase(user, info)
      .catch((error) => console.warn('Error saving info', error))
  }
}

const initialSignupState = Map({
  editableName: '',
  editableEmail: '',
  editableDateOfBirth: '',
  editableCurrentWeight: '',
  editableTargetWeight: '',
  editableCurrentBodyFate: '',
  editableTargetBodyFat: '',
  editableExerciseIntensity: '',
  editableExerciseTime: '',
  editableFatPreference: '',
})

export default function signup (state = initialSignupState, action) {
  switch (action.type) {
    case UPDATE_SIGNUP_TEXT :
      return state.merge({
        [action.item]: action.itemContent,
      })
    default :
      return state
  }
}
