import React from 'react'

export default function BasicInfo (props) {
  return (
    <div>
      <div>
        <label>{'Fat Preference'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <button> {'Submit and Continue'} </button>
    </div>
  )
}

