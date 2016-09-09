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
    editableCurrentWeight: goals.get('currentWeight').length === 0
      ? users.getIn([id, 'goal', 'currentWeight'])
      : goals.get('currentWeight'),
    editableCurrentBodyFat: goals.get('currentBodyFat').length === 0
      ? users.getIn([id, 'goal', 'currentBodyFat'])
      : goals.get('currentBodyFat'),
    editableTargetWeight: goals.get('targetWeight').length === 0
      ? users.getIn([id, 'goal', 'targetWeight'])
      : goals.get('targetWeight'),
    editableTargetBodyFat: goals.get('targetBodyFat').length === 0
      ? users.getIn([id, 'goal', 'targetBodyFat'])
      : goals.get('targetBodyFat'),
    editableExerciseTime: goals.get('exerciseTime').length === 0
      ? users.getIn([id, 'goal', 'exerciseTime'])
      : goals.get('exerciseTime'),
    editableExerciseIntensity: goals.get('exerciseIntensity').length === 0
      ? users.getIn([id, 'goal', 'exerciseIntensity'])
      : goals.get('exerciseIntensity'),
    editableFatPreference: goals.get('fatPreference').length === 0
      ? users.getIn([id, 'goal', 'fatPreference'])
      : goals.get('fatPreference'),
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
