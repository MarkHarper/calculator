import React, { PropTypes } from 'react'
import {formatUserInfo} from 'helpers/utils'

BasicInfo.propTypes = {
  navNext: PropTypes.func.isRequired,
  signupUserInfo: PropTypes.func.isRequired,
  updateSignupText: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  editableEmail: PropTypes.string.isRequired,
  editableName: PropTypes.string.isRequired,
  editableDateOfBirth: PropTypes.string.isRequired,
}

export default function BasicInfo (props) {
  function submitInfo () {
    const user = {
      name: props.user.get('name'),
      uid: props.user.get('uid'),
      avatar: props.user.get('avatar'),
      preferredName: props.editableName,
      dateOfBirth: props.editableDateOfBirth,
      email: props.editableEmail,
    }
    props.signupUserInfo(props.user.get('uid'), user, Date.now())
    props.saveBasicInfo(props.user, formatUserInfo(user.name, user.avatar, user.uid,
      user.preferredName, user.dateOfBirth, user.email))
    props.navNext()
  }
  return (
    <div>
      <div>
        <label>{'Preferred Name'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableName', e.target.value)}
          value={props.editableName}
          type='text'
          placeholder={props.name}/>
      </div>
      <div>
        <label>{'Birthday'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableDateOfBirth', e.target.value)}
          value={props.editableDateOfBirth}
          type='text'
          placeholder={props.dateOfBirth}/>
      </div>
      <div>
        <label>{'Email'}</label>
        <input
          onChange={(e) => props.updateSignupText('editableEmail', e.target.value)}
          value={props.editableEmail}
          type='text'
          placeholder={props.email}/>
      </div>
      <button onClick={submitInfo}> {'Submit and Continue'} </button>
    </div>
  )
}

