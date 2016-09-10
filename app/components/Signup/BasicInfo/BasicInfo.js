import React from 'react'

export default function BasicInfo (props) {
  return (
    <div>
      <div>
        <label>{'Name'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <div>
        <label>{'Birthday'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <div>
        <label>{'Email'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <button> {'Submit and Continue'} </button>
    </div>
  )
}

