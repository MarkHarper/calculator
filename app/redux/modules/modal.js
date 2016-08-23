import { Map } from 'immutable'
import { saveCheckin } from 'helpers/api'

const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const LOG_CHECKIN = 'LOG_CHECKIN'

export function openModal () {
  return {
    type: OPEN_MODAL,
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

export function logCheckin (checkin) {
  return {
    type: LOG_CHECKIN,
    checkin,
  }
}

export function saveAndCloseModal (checkin) {
  return function (dispatch) {
    saveCheckin(checkin)
      .then(() => dispatch(closeModal()))
      .catch((error) => console.warn('Error saving checkin', error))
  }
}

const initialModalState = Map({
  isOpen: false,
  checkin: {
    protein: '',
    fats: '',
    carbs: '',
    calories: '',
    currentWeight: '',
    currentBodyFat: '',
  },
})

export default function modal (state = initialModalState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return state.merge({
        isOpen: true,
      })
    case CLOSE_MODAL :
      return state.merge({
        isOpen: false,
      })
    case LOG_CHECKIN :
      return state.merge({
        checkin: action.checkin,
      })
    default :
      return state
  }
}
