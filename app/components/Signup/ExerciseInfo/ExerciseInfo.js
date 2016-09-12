import React, { PropTypes } from 'react'
import {formatGoal} from 'helpers/utils'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import {ProgressBar} from 'components'
import {signupContainer, progressContainer, requiredHelper} from 'sharedStyles/styles.css'

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
      exerciseTime: props.editableExerciseTime,
      exerciseIntensity: props.editableExerciseIntensity,
      fatPreference: props.fatPreference,
    }
    props.updateGoalForSignup(props.user.get('uid'), goal)
    props.saveGoalForSignup(props.user, formatGoal(goal))
    props.navNext()
  }
  const style = {float: 'right'}
  return (
    <Form onSubmit={submit} className={signupContainer}>
      <ProgressBar container={progressContainer} progress={80} />
      <Input
        label={'Weekly Exercise Time (Hours)*'}
        onChange={(e) => props.updateSignupText('editableExerciseTime', e.target.value)}
        value={props.editableExerciseTime}
        floatingLabel={true}
        maxLength={2}
        type='text'
        placeholder={props.exerciseTime}
        required={true}/>
      <Input
        label={'Exercise Intensity (1-3)*'}
        onChange={(e) => props.updateSignupText('editableExerciseIntensity', e.target.value)}
        value={props.editableExerciseIntensity}
        floatingLabel={true}
        maxLength={2}
        type='text'
        placeholder={props.exerciseIntensity}
        required={true}/>
      <Button style={style} variant='raised'>{'Continue'}</Button>
      <span className={requiredHelper}>{'* indicates required field'}</span>
    </Form>
  )
}


