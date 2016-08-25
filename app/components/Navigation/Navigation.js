import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import { container, navContainer, link } from './styles.css'
import { ModalContainer } from 'containers'

Navigation.propTypes = ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  hasGoal: PropTypes.bool.isRequired,
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

function ActionLinks ({isAuthed, hasGoal}) {
  if (isAuthed && hasGoal) {
    return <ul>
        <li><button> {'Update Goal'} </button></li>
        <li><ModalContainer /></li>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
      </ul>
  } else if (isAuthed) {
    return <ul>
        <li><ModalContainer /></li>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
      </ul>
  } else {
    return <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
        <li><Link to='/auth' className={link}>{'Authenticate'}</Link></li>
      </ul>
  }
}

export default function Navigation ({isAuthed, hasGoal}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed}/>
        <ActionLinks hasGoal={hasGoal} isAuthed={isAuthed}/>
      </nav>
    </div>
  )
}
