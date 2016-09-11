import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'

BodyFat.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  currentWeight: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string.isRequired,
  targetBodyFat: PropTypes.string.isRequired,
  editableCurrentBodyFat: PropTypes.string.isRequired,
  editableTargetBodyFat: PropTypes.string.isRequired,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
}

export default function BodyFat (props) {
  function submitInfo () {
    let goal = {
      currentWeight: props.currentWeight,
      targetWeight: props.targetWeight,
      currentBodyFat: props.editableCurrentBodyFat,
      targetBodyFat: props.editableTargetBodyFat,
      exerciseTime: props.exerciseTime,
      exerciseIntensity: props.exerciseIntensity,
      fatPreference: props.fatPreference,
    }
    props.updateGoalForSignup(props.user.get('uid'), goal)
    props.saveGoalForSignup(props.user, formatGoal(goal))
    props.navNext()
  }
  return (
    <div>
      <div>
        <label>{'Current Body Fat'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableCurrentBodyFat', e.target.value)}
          value={props.editableCurrentBodyFat}
          type='text'
          placeholder={props.currentBodyFat}/>
      </div>
      <div>
        <label>{'Target Body Fat'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableTargetBodyFat', e.target.value)}
          value={props.editableTargetBodyFat}
          type='text'
          placeholder={props.targetBodyFat}/>
      </div>
      <span onClick={submitInfo}> {'Submit and Continue'} </span>
    </div>
  )
}


