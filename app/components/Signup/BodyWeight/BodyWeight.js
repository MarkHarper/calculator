import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'

BodyWeight.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  editableCurrentWeight: PropTypes.string.isRequired,
  editableTargetWeight: PropTypes.string.isRequired,
  currentWeight: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string.isRequired,
  targetBodyFat: PropTypes.string.isRequired,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
}

export default function BodyWeight (props) {
  function submitInfo () {
    let goal = {
      currentWeight: props.editableCurrentWeight,
      targetWeight: props.editableTargetWeight,
      currentBodyFat: props.currentBodyFat,
      targetBodyFat: props.targetBodyFat,
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
        <label>{'Current Weight'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableCurrentWeight', e.target.value)}
          value={props.editableCurrentWeight}
          type='text'
          placeholder={props.currentWeight}/>
      </div>
      <div>
        <label>{'Target Weight'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableTargetWeight', e.target.value)}
          value={props.editableTargetWeight}
          type='text'
          placeholder={props.targetWeight}/>
      </div>
      <button onClick={submitInfo}> {'Submit and Continue'} </button>
    </div>
  )
}



