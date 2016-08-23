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
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    protein: modal.get('protein'),
    fats: modal.get('fats'),
    carbs: modal.get('carbs'),
    currentWeight: modal.get('currentWeight'),
    currentBodyFat: modal.get('currentBodyFat'),
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
