import React from 'react'
import {Link} from 'react-router'
import { container, title, slogan } from './styles.css'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Macros'}</p>
      <p className={slogan}>{'Simple goals that make you fit.'}</p>
      <Link to={'/auth'}>{'Sign Up'}</Link>
    </div>
  )
}
