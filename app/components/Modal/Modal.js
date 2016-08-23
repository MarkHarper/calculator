import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {
  newDecisionInputContainer, newDecisionInput,
  submitDecisionBtn, darkBtn,
} from './styles.css'
import { formatCheckin } from 'helpers/utils'

const modalStyles = {
  content: {
    width: 400,
    margin: '0px auto',
    height: 437,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0,
  },
}

const { object, string, func, bool } = PropTypes
Modal.propTypes = {
  protein: string.isRequired,
  fats: string.isRequired,
  carbs: string.isRequired,
  currentWeight: string.isRequired,
  currentBodyFat: string.isRequired,
  isOpen: bool.isRequired,
  user: object.isRequired,
  // isSubmitDisabled: bool.isRequired,
  openModal: func.isRequired,
  closeModal: func.isRequired,
  saveAndCloseModal: func.isRequired,
  updateCheckinText: func.isRequired,
}

export default function Modal (props) {
  function submitDecision () {
    props.saveAndCloseModal(formatCheckin(props.user, props.protein, props.fats, props.carbs, props.currentWeight, props.currentBodyFat))
  }
  return (
    <span className={darkBtn} onClick={props.openModal}>
      {'New Checkin'}
      <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <div className={newDecisionInputContainer}>
          <input
            onChange={(e) => props.updateCheckinText('protein', e.target.value)}
            value={props.protein}
            maxLength={5}
            type='text'
            className={newDecisionInput}
            placeholder='Protein' />
        </div>
        <div className={newDecisionInputContainer}>
          <input
            onChange={(e) => props.updateCheckinText('fats', e.target.value)}
            value={props.fats}
            maxLength={5}
            type='text'
            className={newDecisionInput}
            placeholder='Fat' />
        </div>
        <div className={newDecisionInputContainer}>
          <input
            onChange={(e) => props.updateCheckinText('carbs', e.target.value)}
            value={props.carbs}
            maxLength={5}
            type='text'
            className={newDecisionInput}
            placeholder='Carbohydrates' />
        </div>
        <div className={newDecisionInputContainer}>
          <input
            onChange={(e) => props.updateCheckinText('currentBodyFat', e.target.value)}
            value={props.currentBodyFat}
            maxLength={5}
            type='text'
            className={newDecisionInput}
            placeholder='Current Body Fat' />
        </div>
        <div className={newDecisionInputContainer}>
          <input
            onChange={(e) => props.updateCheckinText('currentWeight', e.target.value)}
            value={props.currentWeight}
            maxLength={5}
            type='text'
            className={newDecisionInput}
            placeholder='Current Weight' />
        </div>
        <button
          className={submitDecisionBtn}
          onClick={submitDecision}>
            {'Submit'}
        </button>
      </ReactModal>
    </span>
  )
}
