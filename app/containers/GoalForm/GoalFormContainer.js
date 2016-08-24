import { bindActionCreators } from 'redux'
import { GoalForm } from 'components'
import { connect } from 'react-redux'
import * as goalActionCreators from 'redux/modules/goals'

// function isSubmitDisabled (firstText, secondText, title) {
//   return firstText.length <= 0
//     || firstText.length > 140
//     || secondText.length <= 0
//     || secondText.length > 140
//     || title.length <= 0
//     || title.length > 140
// }
    // isSubmitDisabled: isSubmitDisabled(modal.firstDecisionText, modal.secondDecisionText, modal.titleText),


function mapStateToProps ({goals, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    currentWeight: goals.get('currentWeight'),
    currentBodyFat: goals.get('currentBodyFat'),
    targetWeight: goals.get('targetWeight'),
    targetBodyFat: goals.get('targetBodyFat'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(goalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalForm)
