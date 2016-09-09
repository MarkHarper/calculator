import React, {PropTypes} from 'react'
import { button } from './styles.css'

FacebookAuthButton.propTypes = {
  isFetchingUser: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function FacebookAuthButton ({isFetchingUser, onAuth}) {
  return (
    <button onClick={onAuth} className={button}>
      {isFetchingUser === true
        ? 'Loading'
        : 'Login with facebook'}
    </button>
  )
}
