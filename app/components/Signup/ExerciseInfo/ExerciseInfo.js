import React from 'react'

export default function ExerciseInfo (props) {
  return (
    <div>
      <div>
        <label>{'Weekly Exercise Time'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <div>
        <label>{'Exercise Intensity'}</label>
        <input
          maxLength={5}
          type='text'/>
      </div>
      <button> {'Submit and Continue'} </button>
    </div>
  )
}

