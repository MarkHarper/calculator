import { bindActionCreators } from 'redux'
import { Modal } from 'components'
import { connect } from 'react-redux'
import * as modalActionCreators from 'redux/modules/modal'

// function isSubmitDisabled (firstText, secondText, title) {
//   return firstText.length <= 0
//     || firstText.length > 140
//     || secondText.length <= 0
//     || secondText.length > 140
//     || title.length <= 0
//     || title.length > 140
// }
    // isSubmitDisabled: isSubmitDisabled(modal.firstDecisionText, modal.secondDecisionText, modal.titleText),


function mapStateToProps ({modal, users}) {
  return {
    user: users.get('authedId') ? users.get(users.get('authedId')).info : {},
    protein: modal.get('checkin protein'),
    fats: modal.get('checkin fats'),
    carbs: modal.get('checkin carbs'),
    currentWeight: modal.get('checkin currentWeight'),
    currentBodyFat: modal.get('checkin currentBodyFat'),
    isOpen: modal.get('isOpen'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)
