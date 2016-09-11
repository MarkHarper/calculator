import React, { PropTypes } from 'react'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import {formatUserInfo} from 'helpers/utils'
import {ProgressBar} from 'components'
import {signupContainer, submitSignup, progressContainer} from 'sharedStyles/styles.css'

BasicInfo.propTypes = {
  navNext: PropTypes.func.isRequired,
  signupUserInfo: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // dateOfBirth: PropTypes.string.isRequired,
  editableEmail: PropTypes.string.isRequired,
  editableHeight: PropTypes.string.isRequired,
  editableName: PropTypes.string.isRequired,
  // editableDateOfBirth: PropTypes.string.isRequired,
}

export default function BasicInfo (props) {
  function submitInfo (e) {
    e.preventDefault()
    const user = {
      name: props.user.get('name'),
      uid: props.user.get('uid'),
      avatar: props.user.get('avatar'),
      preferredName: props.editableName,
      email: props.editableEmail,
      height: props.editableHeight,
    }
    if (props.validateInputs(user) === false) {
      return
    }
    props.signupUserInfo(props.user.get('uid'), user, Date.now())
    props.saveBasicInfo(props.user, formatUserInfo(user.name, user.avatar, user.uid,
      user.preferredName, user.email, user.height))
    props.navNext()
  }
  const style = {float: 'right'}
  return (
    <Form className={signupContainer}>
      <ProgressBar container={progressContainer} progress={10} />
      <Input
        label={'Preferred Name'}
        onChange={(e) => props.updateSignupText('editableName', e.target.value)}
        floatingLabel={true}
        value={props.editableName}
        maxLength={25}
        type='text'
        required={true}/>
      <Input
        label={'Email'}
        onChange={(e) => props.updateSignupText('editableEmail', e.target.value)}
        floatingLabel={true}
        value={props.editableEmail}
        type='email'
        required={true}/>
      <Input
        label={'Height (Inches)'}
        onChange={(e) => props.updateSignupText('editableHeight', e.target.value)}
        floatingLabel={true}
        value={props.editableHeight}
        maxLength={3}
        type='text'
        required={true}/>
      <Button style={style} onClick={submitInfo} variant='raised'>{'Continue'}</Button>
    </Form>
  )
}

