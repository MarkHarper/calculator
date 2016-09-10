import React, { PropTypes } from 'react'

BasicInfo.propTypes = {
  navNext: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
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
      preferredName: props.name,
      dateOfBirth: props.dateOfBirth,
      email: props.email,
    }
    props.updateUser(props.user.get('uid'), user, Date.now())
    props.navNext()
  }
  return (
    <div>
      <div>
        <label>{'Preferred Name'}</label>
        <input
          value={props.editableName}
          maxLength={5}
          type='text'
          placeholder={props.name}/>
      </div>
      <div>
        <label>{'Birthday'}</label>
        <input
          value={props.editableDateOfBirth}
          maxLength={5}
          type='text'
          placeholder={props.dateOfBirth}/>
      </div>
      <div>
        <label>{'Email'}</label>
        <input
          value={props.editableEmail}
          maxLength={5}
          type='text'
          placeholder={props.email}/>
      </div>
      <button onClick={submitInfo}> {'Submit and Continue'} </button>
    </div>
  )
}

