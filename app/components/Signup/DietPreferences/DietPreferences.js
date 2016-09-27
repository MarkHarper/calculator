import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import {ProgressBar} from 'components'
import {signupContainer, progressContainer, requiredHelper} from 'sharedStyles/styles.css'

DietPreferences.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  completeSignup: PropTypes.func.isRequired,
  currentWeight: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string,
  targetBodyFat: PropTypes.string,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
  editableFatPreference: PropTypes.string.isRequired,
}

export default function DietPreferences (props) {
  function submit (e) {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      return false
    }
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
  const style = {float: 'right'}
  return (
    <Form onSubmit={submit} className={signupContainer}>
      <ProgressBar container={progressContainer} progress={90} />
      <Input
        label={'Dietary Fat Preference (1-3)*'}
        onChange={(e) => props.updateSignupText('editableFatPreference', e.target.value)}
        value={props.editableFatPreference}
        floatingLabel={true}
        maxLength={4}
        type='number'
        max={3}
        min={1}
        placeholder={props.fatPreference}
        required={true}/>
      <Button style={style} variant='raised'>{'Continue'}</Button>
      <span className={requiredHelper}>{'* indicates required field'}</span>
    </Form>
  )
}


