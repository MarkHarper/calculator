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
  user: object.isRequired,
  // isSubmitDisabled: bool.isRequired,
  saveGoal: func.isRequired,
  updateGoalText: func.isRequired,
  updateGoal: func.isRequired,
}

export default function GoalForm (props) {
  function submitGoal () {
    let goal = {
      currentWeight: props.currentWeight,
      currentBodyFat: props.currentBodyFat,
      targetWeight: props.targetWeight,
      targetBodyFat: props.targetBodyFat,
    }
    console.log(props)
    props.updateGoal(props.user.get('uid'), goal)
    props.saveGoal(props.user, formatGoal(props.currentWeight, props.currentBodyFat, props.targetWeight, props.targetBodyFat))
    props.deactivateForm()
  }
  return (
    <div>
      <div className={newDecisionInputContainer}>
        <label htmlFor='currentBodyFat'>{'Current Body Fat'}</label>
        <input
          onChange={(e) => props.updateGoalText('currentBodyFat', e.target.value)}
          value={props.currentBodyFat}
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
          value={props.currentWeight}
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
          value={props.targetBodyFat}
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
          value={props.targetWeight}
          maxLength={5}
          type='text'
          id='targetWeight'
          className={newDecisionInput}
          placeholder={props.targetWeight} />
      </div>
      {props.editing === true
          ? <button className={submitDecisionBtn} onClick={submitGoal}> {'Submit'} </button>
          : <button className={submitDecisionBtn} onClick={props.activateForm}> {'Edit'} </button>
      }
    </div>
  )
}
