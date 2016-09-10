import React from 'react'

export default function BodyWeight (props) {
  return (
    <div>
      <div>
        <label>{'Current Body Weight'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <div>
        <label>{'Target Body Weight'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <button> {'Submit and Continue'} </button>
    </div>
  )
}

