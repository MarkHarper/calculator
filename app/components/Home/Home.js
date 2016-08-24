import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Macros'}</p>
      <p className={slogan}>{'Simple goals that make you fit.'}</p>
    </div>
  )
}
