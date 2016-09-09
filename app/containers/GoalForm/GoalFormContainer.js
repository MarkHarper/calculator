import { bindActionCreators } from 'redux'
import { GoalForm } from 'components'
import { connect } from 'react-redux'
import * as goalActionCreators from 'redux/modules/goals'

function mapStateToProps ({goals, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    currentWeight: goals.get('currentWeight'),
    currentBodyFat: goals.get('currentBodyFat'),
    targetWeight: goals.get('targetWeight'),
    targetBodyFat: goals.get('targetBodyFat'),
    editing: goals.get('editing'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(goalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalForm)
