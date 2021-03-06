import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import {ProgressBar} from 'components'
import {signupContainer, progressContainer, requiredHelper} from 'sharedStyles/styles.css'

BodyWeight.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  editableCurrentWeight: PropTypes.string.isRequired,
  editableTargetWeight: PropTypes.string.isRequired,
  currentWeight: PropTypes.string.isRequired,
  targetWeight: PropTypes.string.isRequired,
  currentBodyFat: PropTypes.string,
  targetBodyFat: PropTypes.string,
  exerciseTime: PropTypes.string.isRequired,
  exerciseIntensity: PropTypes.string.isRequired,
  fatPreference: PropTypes.string.isRequired,
}

export default function BodyWeight (props) {
  function submit (e) {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      return false
    }
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
  const style = {float: 'right'}
  return (
    <Form onSubmit={submit} className={signupContainer}>
      <ProgressBar container={progressContainer} progress={40} />
      <Input
        label={'Current Weight (lbs)*'}
        onChange={(e) => props.updateSignupText('editableCurrentWeight', e.target.value)}
        value={props.editableCurrentWeight}
        floatingLabel={true}
        maxLength={3}
        type='text'
        placeholder={props.currentWeight}
        required={true}/>
      <Input
        label={'Target Weight (lbs)*'}
        onChange={(e) => props.updateSignupText('editableTargetWeight', e.target.value)}
        value={props.editableTargetWeight}
        floatingLabel={true}
        maxLength={3}
        type='text'
        placeholder={props.targetWeight}
        required={true}/>
      <Button style={style} variant='raised'> {'Continue'} </Button>
      <span className={requiredHelper}>{'* indicates required field'}</span>
    </Form>
  )
}



