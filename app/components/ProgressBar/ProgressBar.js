import React, {PropTypes} from 'react'
import {front, back} from './styles.css'

const ProgressBar = props => {
  const style = {
    width: props.progress + '%',
  }
  return (
    <div className={props.container}>
      <span className={front} style={style}></span>
      <span className={back}></span>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  container: PropTypes.string.isRequired,
}

export default ProgressBar
