import React from 'react'

export default function BodyFat (props) {
  return (
    <div>
      <div>
        <label>{'Current Body Fat'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <div>
        <label>{'Target Body Fat'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <button> {'Submit and Continue'} </button>
    </div>
  )
}

