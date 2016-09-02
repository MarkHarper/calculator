import { bindActionCreators } from 'redux'
import { GoalDashboard } from 'components'
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
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(goalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDashboard)
