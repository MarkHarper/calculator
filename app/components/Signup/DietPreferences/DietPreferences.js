import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'

DietPreferences.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  completeSignup: PropTypes.func.isRequired,
  currentWeight: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string.isRequired,
  targetBodyFat: PropTypes.string.isRequired,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
  editableFatPreference: PropTypes.string.isRequired,
}

export default function DietPreferences (props) {
  function submitInfo () {
    let goal = {
      currentWeight: props.currentWeight,
      targetWeight: props.targetWeight,
      currentBodyFat: props.currentBodyFat,
      targetBodyFat: props.targetBodyFat,
      exerciseTime: props.exerciseTime,
      exerciseIntensity: props.exerciseIntensity,
      fatPreference: props.editableFatPreference,
    }
    props.updateGoalForSignup(props.user.get('uid'), goal)
    props.saveGoalForSignup(props.user, formatGoal(goal))
    props.completeSignup()
    props.navNext()
  }
  return (
    <div>
      <div>
        <label>{'Dietary Fat Preference'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableFatPreference', e.target.value)}
          value={props.editableFatPreference}
          type='text'
          placeholder={props.fatPreference}/>
      </div>
      <button onClick={submitInfo}> {'Submit'} </button>
    </div>
  )
}


