import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'

ExerciseInfo.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  currentWeight: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string.isRequired,
  targetBodyFat: PropTypes.string.isRequired,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  editableExerciseTime: PropTypes.string.isRequired,
  editableExerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
}

export default function ExerciseInfo (props) {
  function submitInfo () {
    let goal = {
      currentWeight: props.currentWeight,
      targetWeight: props.targetWeight,
      currentBodyFat: props.currentBodyFat,
      targetBodyFat: props.targetBodyFat,
      exerciseTime: props.editableExerciseTime,
      exerciseIntensity: props.editableExerciseIntensity,
      fatPreference: props.fatPreference,
    }
    props.updateGoalForSignup(props.user.get('uid'), goal)
    props.saveGoalForSignup(props.user, formatGoal(goal))
    props.navNext()
  }
  return (
    <div>
      <div>
        <label>{'Weekly Exercise Time'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableExerciseTime', e.target.value)}
          value={props.editableExerciseTime}
          type='text'
          placeholder={props.exerciseTime}/>
      </div>
      <div>
        <label>{'Exercise Intensity'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableExerciseIntensity', e.target.value)}
          value={props.editableExerciseIntensity}
          type='text'
          placeholder={props.exerciseIntensity}/>
      </div>
      <button onClick={submitInfo}> {'Submit and Continue'} </button>
    </div>
  )
}


