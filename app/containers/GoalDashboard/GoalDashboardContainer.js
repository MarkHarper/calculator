import React from 'react'
import { bindActionCreators } from 'redux'
import { GoalDashboard } from 'components'
import { connect } from 'react-redux'
import * as goalActionCreators from 'redux/modules/goals'

const GoalDashboardContainer = React.createClass({
  componentDidMount: function () {
    this.props.fetchAndHandleUsersGoals(this.props.user.get('uid'))
  },
  render: function () {
    return (
      <GoalDashboard currentWeight={this.props.currentWeight}
        currentBodyFat={this.props.currentBodyFat}
        targetWeight={this.props.targetWeight}
        targetBodyFat={this.props.targetBodyFat}
        exerciseTime={this.props.exerciseTime}
        exerciseIntensity={this.props.exerciseIntensity}
        fatPreference={this.props.fatPreference}
        isFetchingGoal={this.props.isFetchingGoal} />
    )
  },
})

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
    isFetchingGoal: users.get('isFetchingGoal'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(goalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDashboardContainer)
