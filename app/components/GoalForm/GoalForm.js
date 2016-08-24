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
}

export default function GoalForm (props) {
  function submitGoal () {
    props.saveGoal(props.user, formatGoal(props.currentWeight, props.currentBodyFat, props.targetWeight, props.targetBodyFat))
  }
  return (
    <div>
      {'New Plan'}
      <div className={newDecisionInputContainer}>
        <input
          onChange={(e) => props.updateGoalText('currentBodyFat', e.target.value)}
          value={props.currentBodyFat}
          maxLength={5}
          type='text'
          className={newDecisionInput}
          placeholder='Current Body Fat' />
      </div>
      <div className={newDecisionInputContainer}>
        <input
          onChange={(e) => props.updateGoalText('currentWeight', e.target.value)}
          value={props.currentWeight}
          maxLength={5}
          type='text'
          className={newDecisionInput}
          placeholder='Current Weight' />
      </div>
      <div className={newDecisionInputContainer}>
        <input
          onChange={(e) => props.updateGoalText('targetBodyFat', e.target.value)}
          value={props.targetBodyFat}
          maxLength={5}
          type='text'
          className={newDecisionInput}
          placeholder='Target Body Fat' />
      </div>
      <div className={newDecisionInputContainer}>
        <input
          onChange={(e) => props.updateGoalText('targetWeight', e.target.value)}
          value={props.targetWeight}
          maxLength={5}
          type='text'
          className={newDecisionInput}
          placeholder='Target Weight' />
      </div>
      <button
        className={submitDecisionBtn}
        onClick={submitGoal}>
          {'Submit'}
      </button>
    </div>
  )
}
