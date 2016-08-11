import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Life Metrics'}</p>
      <p className={slogan}>{'Simple apps that get things done.'}</p>
    </div>
  )
}
