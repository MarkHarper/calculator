import React, { PropTypes } from 'react'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import {formatGoal} from 'helpers/utils'
import {ProgressBar} from 'components'
import {signupContainer, progressContainer} from 'sharedStyles/styles.css'

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
  function submit (e) {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      return false
    }
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
  const style = {float: 'right'}
  return (
    <Form onSubmit={submit} className={signupContainer}>
      <ProgressBar container={progressContainer} progress={60} />
      <Input
        label={'Current Body Fat (%)'}
        onChange={(e) => props.updateSignupText('editableCurrentBodyFat', e.target.value)}
        floatingLabel={true}
        value={props.editableCurrentBodyFat}
        maxLength={2}
        type='text'
        placeholder={props.currentBodyFat}/>
      <Input
        label={'Target Body Fat (%)'}
        onChange={(e) => props.updateSignupText('editableTargetBodyFat', e.target.value)}
        floatingLabel={true}
        value={props.editableTargetBodyFat}
        maxLength={2}
        type='text'
        placeholder={props.targetBodyFat}/>
      <Button style={style} variant='raised'> {'Continue'} </Button>
    </Form>
  )
}


