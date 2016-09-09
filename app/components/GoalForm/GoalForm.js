import React, { PropTypes } from 'react'
import {
  newDecisionInputContainer, newDecisionInput,
  submitDecisionBtn,
} from './styles.css'
import { formatGoal } from 'helpers/utils'

const { object, string, func } = PropTypes
GoalForm.propTypes = {
  currentWeight: string.isRequired,
  currentBodyFat: string.isRequired,
  targetWeight: string.isRequired,
  targetBodyFat: string.isRequired,
  exerciseTime: string.isRequired,
  exerciseIntensity: string.isRequired,
  fatPreference: string.isRequired,
  editableCurrentWeight: string.isRequired,
  editableCurrentBodyFat: string.isRequired,
  editableTargetWeight: string.isRequired,
  editableTargetBodyFat: string.isRequired,
  editableExerciseTime: string.isRequired,
  editableExerciseIntensity: string.isRequired,
  editableFatPreference: string.isRequired,
  user: object.isRequired,
  // isSubmitDisabled: bool.isRequired,
  activateForm: func.isRequired,
  deactivateForm: func.isRequired,
  saveGoal: func.isRequired,
  updateGoalText: func.isRequired,
  updateGoal: func.isRequired,
}

export default function GoalForm (props) {
  console.log(props)
  function submitGoal () {
    let goal = {
      currentWeight: props.editableCurrentWeight,
      currentBodyFat: props.editableCurrentBodyFat,
      targetWeight: props.editableTargetWeight,
      targetBodyFat: props.editableTargetBodyFat,
      exerciseTime: props.editableExerciseTime,
      exerciseIntensity: props.editableExerciseIntensity,
      fatPreference: props.editableFatPreference,
    }
    props.updateGoal(props.user.get('uid'), goal)
    props.saveGoal(props.user, formatGoal(goal))
    props.deactivateForm()
  }
  return (
    <div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='currentBodyFat'>{'Current Body Fat'}</label>
        <input
          onChange={(e) => props.updateGoalText('currentBodyFat', e.target.value)}
          value={props.editableCurrentBodyFat}
          maxLength={5}
          type='text'
          id='currentBodyFat'
          className={newDecisionInput}
          placeholder={props.currentBodyFat} />
      </div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='currentWeight'>{'Current Weight'}</label>
        <input
          onChange={(e) => props.updateGoalText('currentWeight', e.target.value)}
          value={props.editableCurrentWeight}
          maxLength={5}
          type='text'
          id='currentWeight'
          className={newDecisionInput}
          placeholder={props.currentWeight} />
      </div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='targetBodyFat'>{'Target Body Fat'}</label>
        <input
          onChange={(e) => props.updateGoalText('targetBodyFat', e.target.value)}
          value={props.editableTargetBodyFat}
          maxLength={5}
          type='text'
          id='targetBodyFat'
          className={newDecisionInput}
          placeholder={props.targetBodyFat} />
      </div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='targetWeight'>{'Target Weight'}</label>
        <input
          onChange={(e) => props.updateGoalText('targetWeight', e.target.value)}
          value={props.editableTargetWeight}
          maxLength={5}
          type='text'
          id='targetWeight'
          className={newDecisionInput}
          placeholder={props.targetWeight} />
      </div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='exerciseTime'>{'Exercise Time'}</label>
        <input
          onChange={(e) => props.updateGoalText('exerciseTime', e.target.value)}
          value={props.editableExerciseTime}
          maxLength={5}
          type='text'
          id='exerciseTime'
          className={newDecisionInput}
          placeholder={props.exerciseTime} />
      </div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='exerciseIntensity'>{'Exercise Intensity'}</label>
        <input
          onChange={(e) => props.updateGoalText('exerciseIntensity', e.target.value)}
          value={props.editableExerciseIntensity}
          maxLength={5}
          type='text'
          id='exerciseIntensity'
          className={newDecisionInput}
          placeholder={props.exerciseIntensity} />
      </div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='fatPreference'>{'Fat Preference'}</label>
        <input
          onChange={(e) => props.updateGoalText('fatPreference', e.target.value)}
          value={props.editableFatPreference}
          maxLength={5}
          type='text'
          id='fatPreference'
          className={newDecisionInput}
          placeholder={props.fatPreference} />
      </div>
      {props.editing === true
          ? <button className={submitDecisionBtn} onClick={submitGoal}> {'Submit'} </button>
          : <button className={submitDecisionBtn} onClick={props.activateForm}> {'Edit'} </button>
      }
    </div>
  )
}
