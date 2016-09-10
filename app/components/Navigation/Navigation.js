import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import { container, navContainer, link } from './styles.css'
import { ModalContainer } from 'containers'

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  hasGoal: PropTypes.bool.isRequired,
  auth: PropTypes.func.isRequired,
}

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
      </ul>
    : <noscript />
}

function ActionLinks ({isAuthed, hasGoal, auth, isSignUp}) {
  if (isAuthed && hasGoal) {
    return <ul>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
      </ul>
  } else if (isAuthed) {
    return <ul>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
      </ul>
  } else if (isSignUp) {
    return <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
      </ul>
  } else {
    return <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
        <li><span onClick={auth} className={link}>{'Log In'}</span></li>
      </ul>
  }
}

export default function Navigation ({isAuthed, hasGoal, auth, isSignUp}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed}/>
        <ActionLinks hasGoal={hasGoal} isAuthed={isAuthed}
          auth={auth} isSignUp={isSignUp}/>
      </nav>
    </div>
  )
}
