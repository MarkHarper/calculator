import { bindActionCreators } from 'redux'
import { GoalForm } from 'components'
import { connect } from 'react-redux'
import * as goalActionCreators from 'redux/modules/goals'

function mapStateToProps ({goals, users}) {
  let id = users.get('authedId')
  return {
    user: users.get('authedId') ? users.getIn([id, 'info']) : {},
    currentWeight: users.getIn([id, 'goal', 'currentWeight']),
    currentBodyFat: users.getIn([id, 'goal', 'currentBodyFat']),
    targetWeight: users.getIn([id, 'goal', 'targetWeight']),
    targetBodyFat: users.getIn([id, 'goal', 'targetBodyFat']),
    exerciseTime: users.getIn([id, 'goal', 'exerciseTime']),
    exerciseIntensity: users.getIn([id, 'goal', 'exerciseIntensity']),
    fatPreference: users.getIn([id, 'goal', 'fatPreference']),
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
